import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from '../css/style.module.scss';
import { BiPlusMedical } from 'react-icons/bi';
import { ImSearch } from 'react-icons/im';
import { AiOutlineUnorderedList } from 'react-icons/ai';

const NavBar = () => {
  return (
    <>
      <Navbar className={`${style.navbar}`}>
        <Container>
          <Nav className="me-auto">
            <Link exact to="/" className={`${style.linkItem}`}>
              <AiOutlineUnorderedList className={style.icon} />
              Product
            </Link>

            <Link exact to="/create" className={`${style.linkItem}`}>
              <BiPlusMedical className={style.icon} />
              Create
            </Link>
            <Link exact to="/search" className={`${style.linkItem}`}>
              <ImSearch className={style.icon} />
              Search
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
