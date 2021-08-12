import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from '../css/style.module.scss';

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link exact to="/" className={`${style.linkItem}`}>
              Product
            </Link>

            <Link exact to="/create" className={`${style.linkItem}`}>
              Create
            </Link>
            <Link exact to="/search" className={`${style.linkItem}`}>
              Search
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
