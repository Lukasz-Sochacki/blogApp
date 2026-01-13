import { Button, Col, Container, Row, Modal } from 'react-bootstrap';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, getPostById } from '../../../redux/postsRedux';

const SinglePost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const postData = useSelector((state) => getPostById(state, id));

  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    dispatch(deletePost(id));
  };

  if (!postData) return <Navigate to='/' />;
  else
    return (
      <Container>
        <Row>
          <Col md='8'>
            <h1>{postData.title}</h1>
            <p className='mb-3'>
              <strong>Author: </strong>
              {postData.author}
              <br />
              <strong>Published: </strong>
              {postData.publishedDate}
            </p>
          </Col>
          <Col md='4'>
            <Link
              to={`/post/edit/${postData.id}`}
              className='btn btn-outline-primary'
            >
              Edit
            </Link>
            <Button
              variant='outline-danger mx-3'
              onClick={() => setShowModal(true)}
            >
              Delete
            </Button>
          </Col>
        </Row>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            This operation will completely remove this post from the app.
            <br />
            Are you sure you want to do that?
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant='danger' onClick={handleDelete}>
              Remove
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
};

export default SinglePost;
