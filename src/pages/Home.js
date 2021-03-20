import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Grid, Image, Container} from "semantic-ui-react";
import PostCard from '../components/PostCard';

const Home = () => {
  const { loading, data: {getPosts: posts}, error } = useQuery(FETCH_POSTS_QUERY);
  
  if(posts){
    console.log(posts);
  }
  if(error){
    console.log(error);
  }

  return (
    <Container>
      <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
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

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export default Home;
