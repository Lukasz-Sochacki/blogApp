import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || '',
  );
  const [content, setContent] = useState(props.content || '');
  const [category, setCategory] = useState(props.category || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleSubmit = () => {
    setContentError(!content);
    setDateError(!publishedDate);
    if (content && publishedDate) {
      action({
        title,
        author,
        publishedDate,
        shortDescription,
        content,
        category,
      });
    }
  };

  return (
    <Container className='row'>
      <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className='mb-3 col-8' controlId='formBasicTitle'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            {...register('title', { required: true, minLength: 3 })}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            type='text'
            placeholder='Enter title'
          />
          {errors.title && (
            <small className='d-block form-text text-danger mt-2'>
              Title is too short (min is 3)
            </small>
          )}
        </Form.Group>

        <Form.Group className='mb-3 col-8' controlId='formBasicAuthor'>
          <Form.Label>Author</Form.Label>
          <Form.Control
            {...register('author', { required: true, minLength: 3 })}
            type='text'
            placeholder='Enter author'
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
          {errors.author && (
            <small className='d-block form-text text-danger mt-2'>
              Author is too short (min is 3)
            </small>
          )}
        </Form.Group>

        <Form.Group className='mb-3 col-8' controlId='formBasicPublishedDate'>
          <Form.Label>Published Date</Form.Label>
          <br />
          <DatePicker
            selected={publishedDate}
            onChange={(date) => setPublishedDate(date)}
          />
          {dateError && (
            <small className='d-block form-text text-danger mt-2'>
              Date can't be empty
            </small>
          )}
        </Form.Group>

        <Form.Group className='mb-3 col-8' controlId='formBasicCategory'>
          <Form.Label>Category</Form.Label>
          <Form.Select
            {...register('category', { required: true })}
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option>Select category...</option>
            <option value='Sport'>Sport</option>
            <option value='News'>News</option>
            <option value='Movies'>Movies</option>
          </Form.Select>
          {errors.category && (
            <small className='d-block form-text text-danger mt-2'>
              You must select at least one category
            </small>
          )}
        </Form.Group>

        <Form.Group
          className='mb-3 col-12'
          controlId='formBasicShortDescription'
        >
          <Form.Label>Short Description</Form.Label>
          <Form.Control
            {...register('shortDescription', { required: true, minLength: 20 })}
            as='textarea'
            rows={3}
            placeholder='Leave a comment here...'
            value={shortDescription}
            onChange={(event) => setShortDescription(event.target.value)}
          />
          {errors.shortDescription && (
            <small className='d-block form-text text-danger mt-2'>
              Description is too short (min is 20)
            </small>
          )}
        </Form.Group>

        <Form.Group className='mb-3 col-12' controlId='formBasicContent'>
          <Form.Label>Main Content</Form.Label>
          <ReactQuill
            value={content}
            onChange={setContent}
            theme='snow'
            placeholder='Leave a comment here...'
          />
          {contentError && (
            <small className='d-block form-text text-danger mt-2'>
              Content can't be empty
            </small>
          )}
        </Form.Group>

        <Button variant='primary' type='submit'>
          {actionText}
        </Button>
      </Form>
    </Container>
  );
};

export default PostForm;
