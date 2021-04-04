import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Button, Confirm, Icon } from "semantic-ui-react";

const DeleteButton = ({ postId }) => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    update() {
      //User will get a confirm message
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
    mutation deletePost($postId: ID!){
        deletePost(postId: $postId)
    }
`;

export default DeleteButton;
