import { useSelector } from 'react-redux';
import { Row, Col, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getPostByCategories } from '../../../redux/categoriesRedux';
import { dateToStr } from '../../../utils/dateToStr';
import { Link } from 'react-router-dom';

const Categories = () => {
  const { category } = useParams();
  const categories = useSelector((state) =>
    getPostByCategories(state, category)
  );

  return (
    <>
      <h1>
        Category: <span className='d-inline-block'>{category}</span>
      </h1>
      <Row>
        {categories.length > 0 ? (
          categories.map((category) => (
            <Col key={category.id} md='6'>
              <Card key={category.id} className='mt-4'>
                <Card.Body>
                  <Card.Title>{category.title}</Card.Title>
                  <Card.Text>
                    <strong>Author: </strong>
                    {category.author} <br />
                    <strong>Published: </strong>
                    {dateToStr(category.publishedDate)} <br />
                    <strong>Category: </strong>
                    {category.category}
                  </Card.Text>
                  <Card.Text>{category.shortDescription}</Card.Text>
                  <Link to={`/post/${category.id}`} className='btn btn-primary'>
                    Read more
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className='mt-5'>No posts in this category</p>
        )}
      </Row>
    </>
  );
};
export default Categories;
