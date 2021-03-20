import React from 'react';
import { Card, Image, Button, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostCard = ({ post: { body, createdAt, id, username, likeCount, commentCount, likes } }) => {
    const likePost = _ => console.log('Liked posts!!');
    const commentOnPosts = _ => console.log('Comments button preseed!');
    return (
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/molly.png'
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).fromNow()}</Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as='div' labelPosition='right' onClick={likePost}>
      <Button color='teal' basic>
        <Icon name='heart' />
      </Button>
      <Label basic color='red' pointing='left'>
        {likeCount}
      </Label>
    </Button>
    <Button as='div' labelPosition='right' onClick={commentOnPosts}>
      <Button color='teal' basic>
        <Icon name='comments' />
      </Button>
      <Label basic color='blue' pointing='left'>
        {commentCount}
      </Label>
    </Button>
        </Card.Content>
    </Card>     
    )
}

export default PostCard
