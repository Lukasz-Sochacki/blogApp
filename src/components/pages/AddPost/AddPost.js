import AddPostForm from '../../features/AddPostForm/AddPostForm';
import { Container } from 'react-bootstrap';

const AddPost = () => {
  return (
    <Container className='w-75'>
      <h1 className='mb-4'>AddPost</h1>
      <AddPostForm />
    </Container>
  );
};

export default AddPost;
