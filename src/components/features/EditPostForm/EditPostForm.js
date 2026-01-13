import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PostForm from '../PostForm/PostForm';
import { getPostById } from '../../../redux/postsRedux';
import { useParams, Navigate } from 'react-router-dom';
import { editPost } from '../../../redux/postsRedux';

const EditPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const postData = useSelector((state) => getPostById(state, id));

  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, id }));
    navigate('/');
  };
  if (!postData) return <Navigate to='/' />;
  return (
    <PostForm
      id={postData.id}
      action={handleSubmit}
      actionText='Edit post'
      title={postData.title}
      author={postData.author}
      publishedDate={postData.publishedDate}
      shortDescription={postData.shortDescription}
      content={postData.content}
    />
  );
};

export default EditPostForm;
