import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import { addPost } from '../../../redux/postsRedux';

const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [shortDescription, setshortDescription] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/');
    dispatch(
      addPost({ title, shortDescription, content, publishedDate, author })
    );
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
            onChange={(event) => setshortDescription(event.target.value)}
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
          Add Post
        </Button>
      </Form>
    </Container>
  );
};

export default AddPostForm;
