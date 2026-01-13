import EditPostForm from '../../features/EditPostForm/EditPostForm';
import { Container } from 'react-bootstrap';

const EditPost = () => {
  return (
    <div>
      <h1>EditPost</h1>
      <Container className='w-75'>
        <EditPostForm />
      </Container>
    </div>
  );
};

export default EditPost;
