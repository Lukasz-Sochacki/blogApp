import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
  return (
    <>
      <Navbar
        bg='primary'
        variant='dark'
        data-bs-theme='dark'
        className='mt-4 mb-4 rounded'
      >
        <Container>
          <Navbar.Brand className='text-light' href='/'>
            Blog.app
          </Navbar.Brand>
          <Nav className='d-inline-flex'>
            <Nav.Link className='text-light px-3' as={NavLink} to='/'>
              Home
            </Nav.Link>
            <Nav.Link className='text-light px-3' as={NavLink} to='/categories'>
              Categories
            </Nav.Link>
            <Nav.Link className='text-light px-3' as={NavLink} to='/about'>
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
