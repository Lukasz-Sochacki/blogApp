import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };

  return (
    <Container className='row'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3 col-8' controlId='formBasicTitle'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='Enter title'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3 col-8' controlId='formBasicAuthor'>
          <Form.Label>Author</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='Enter author'
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3 col-8' controlId='formBasicPublishedDate'>
          <Form.Label>Published Date</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='Enter date [dd-mm-yyyy]'
            value={publishedDate}
            onChange={(event) => setPublishedDate(event.target.value)}
          />
        </Form.Group>

        <Form.Group
          className='mb-3 col-12'
          controlId='formBasicShortDescription'
        >
          <Form.Label>Short Description</Form.Label>
          <Form.Control
            required
            as='textarea'
            rows={3}
            placeholder='Leave a comment here...'
            value={shortDescription}
            onChange={(event) => setShortDescription(event.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3 col-12' controlId='formBasicContent'>
          <Form.Label>Main Content</Form.Label>
          <Form.Control
            required
            as='textarea'
            rows={6}
            placeholder='Leave a comment here...'
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          {actionText}
        </Button>
      </Form>
    </Container>
  );
};

export default PostForm;
