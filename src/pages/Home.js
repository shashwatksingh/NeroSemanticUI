import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { Grid, Image, Container, GridColumn } from "semantic-ui-react";

import { AuthContext } from "../context/auth";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import FETCH_POSTS_QUERY from "../utils/graphql";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { loading, data: { getPosts: posts } = {}, error } = useQuery(
    FETCH_POSTS_QUERY
  );

  if (posts) {
    console.log(posts);
  }
  if (error) {
    console.log(error);
  }

  return (
    <Container>
      <Grid columns={3}>
        <Grid.Row className="page-title">
          <h1>Recent Posts</h1>
        </Grid.Row>
        <Grid.Row>
          {user && (
            <Grid.Column>
              <PostForm />
            </Grid.Column>
          )}
          {loading ? (
            <h1>Loading posts..</h1>
          ) : (
            posts &&
            posts.map((post) => (
              <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                <PostCard post={post} />
              </Grid.Column>
            ))
          )}
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Home;
