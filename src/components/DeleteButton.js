import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Button, Confirm, Icon } from "semantic-ui-react";
import FETCH_POSTS_QUERY from "../utils/graphql";

const DeleteButton = ({ postId, callback }) => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    update(proxy) {
      //User will get a confirm message
      const data = proxy.readQuery({
        query: FETCH_POSTS_QUERY,
      });
      let newData = data.getPosts.filter((p) => p.id !== postId);
      proxy.writeQuery({
        query: FETCH_POSTS_QUERY,
        data: {
          ...data,
          getPosts: { newData },
        },
      });
      if (callback) callback();
    },
    variables: {
      postId,
    },
  });
  return (
    <React.Fragment>
      <Button
        as="div"
        color="red"
        floated="right"
        onClick={(_) => setConfirmOpen(true)}
      >
        <Icon name="trash" style={{ margin: 0 }} />
      </Button>
      <Confirm
        open={confirmOpen}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={deletePost}
      />
    </React.Fragment>
  );
};
const DELETE_POST_MUTATION = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;

export default DeleteButton;
