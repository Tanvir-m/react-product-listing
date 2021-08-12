import Navbar from '../Navbar/Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import style from '../css/style.module.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [list, setList] = useState('');
  const [searchData, setsearchData] = useState('');
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/product').then((res) => {
      res.json().then((data) => {
        setList(data);
      });
    });
  });

  const deleteClickhandler = (key) => {
    if (window.confirm('Are you sure you want to delete thise item')) {
      fetch(`http://localhost:3000/product/${key}`, {
        method: 'Delete',
      }).then((res) => {
        res.json().then((data) => {});
      });
    }
  };

  const loader = !list && <h1>Loading...</h1>;

  const displayData =
    list &&
    list.map((item) => (
      <>
        <Col md={{ span: 3, offset: 1 }} className="border mt-5" key={item.id}>
          <img
            className="img-fluid p-4"
            src={process.env.PUBLIC_URL + `./img/watch.jpg`}
            alt=""
          />
          <h5 className="mt-3">Product Name : {item.name}</h5>
          <h5 className="mt-3">Price : Rs {item.price}/-</h5>
          <h5 className="mt-3">Catagory : {item.catagory}</h5>
          <h5 className="mt-3">Brand : {item.brand}</h5>
          <p className="mt-3">Description : {item.decription}</p>
          <h5 className="mt-3">Rating : {item.rating}</h5>
          <Link to={`/update/${item.id}`}>
            <button className={`${style.edBtn}`}>Edit</button>
          </Link>

          <button
            className={`${style.edBtn}`}
            onClick={() => deleteClickhandler(item.id)}
          >
            Delete
          </button>
        </Col>
      </>
    ));

  // search function
  const search = (key) => {
    fetch(`http://localhost:3000/product?q=${key}`).then((res) => {
      res.json().then((data) => {
        if (data.length > 0) {
          setsearchData(data);
          setList(null);
          setNoData(false);
        } else {
          setsearchData(null);
          setList(null);
          setNoData(true);
        }
      });
    });
  };

  const displaySearchData =
    searchData &&
    searchData.map((item) => (
      <>
        <Col md={{ span: 3, offset: 1 }} className="border mt-5" key={item.id}>
          <img
            className="img-fluid p-4"
            src={process.env.PUBLIC_URL + `./img/watch.jpg`}
            alt=""
          />
          <h5 className="mt-3">Product Name : {item.name}</h5>
          <h5 className="mt-3">Price : Rs {item.price}/-</h5>
          <h5 className="mt-3">Catagory : {item.catagory}</h5>
          <h5 className="mt-3">Brand : {item.brand}</h5>
          <p className="mt-3">Description : {item.decription}</p>
          <h5 className="mt-3">Rating : {item.rating}</h5>
          <Link to={`/update/${item.id}`}>
            <button className={`${style.edBtn}`}>Edit</button>
          </Link>

          <button
            className={`${style.edBtn}`}
            onClick={() => deleteClickhandler(item.id)}
          >
            Delete
          </button>
        </Col>
      </>
    ));
  return (
    <>
      <Navbar />
      <Container>
        <Row className="py-5">
          {/* <Col md={{ span: 4, offset: 6 }}>
            <input
              type="text"
              className={`${style.searchInput} form-control`}
              placeHolder="Search product"
              onChange={(e) => search(e.target.value)}
            />
          </Col> */}

          {loader}
          {displayData}
          {displaySearchData}
        </Row>
      </Container>
    </>
  );
};

export default ProductList;
