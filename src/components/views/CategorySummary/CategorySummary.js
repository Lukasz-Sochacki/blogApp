import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';
const CategorySummary = () => {
  const categories = useSelector(getAllCategories);

  return (
    <section>
      <h1 className='mb-5 justify-content-center d-flex'>Categories</h1>
      <Container>
        <Row xs={1} md={1}>
          {categories.map((category) => (
            <Col key={category} className='mt-3'>
              <Link to={`/categories/${category}`}>{category}</Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CategorySummary;
