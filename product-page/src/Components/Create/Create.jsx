import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import style from '../css/style.module.scss';
import { useState } from 'react';

const Create = () => {
  const [name, setName] = useState('');
  const [cat, setCat] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [dec, setDec] = useState('');
  const [rating, setRating] = useState('');

  const addClickHandler = async () => {
    // const res = fetch('http://localhost:3000/product', {
    //   method: 'Post',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     name: name,
    //     catagory: cat,
    //     price: price,
    //     brand: brand,
    //     decription: dec,
    //     rating: rating,
    //   }),
    // });

    // const data = res.json();

    // const updateState = () => {
    //   alert('Your product has been added');
    //   setName('');
    //   setCat('');
    //   setPrice('');
    //   setDec('');
    //   setRating('');
    // };

    // updateState();

    fetch('http://localhost:3000/product', {
      method: 'Post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        catagory: cat,
        price: price,
        brand: brand,
        decription: dec,
        rating: rating,
      }),
    }).then((res) => {
      res.json().then((data) => {
        alert('Your product has been added');
        setName('');
        setCat('');
        setPrice('');
        setDec('');
        setRating('');
      });
    });
  };
  return (
    <>
      <Navbar />
      <Container className="mt-5">
        <Row className={`p-5 ${style.shadow}`}>
          <h1 className="text-center py-4">Create New Product</h1>
          <Col md={6} className="py-4">
            <input
              type="text"
              className={`form-control ${style.input}`}
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
          <Col md={6} className="py-4">
            <input
              type="text"
              className={`form-control ${style.input}`}
              placeholder="Product cat"
              value={cat}
              onChange={(e) => setCat(e.target.value)}
            />
          </Col>
          <Col md={6} className="py-4">
            <input
              type="text"
              className={`form-control ${style.input}`}
              placeholder="Product Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Col>
          <Col md={6} className="py-4">
            <input
              type="text"
              className={`form-control ${style.input}`}
              placeholder="Product rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </Col>
          <Col md={12} className="py-4">
            <input
              type="text"
              className={`form-control ${style.input}`}
              placeholder="Product Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </Col>
          <Col md={12} className="py-4">
            <textarea
              type="text"
              rows="5"
              className={`form-control`}
              placeholder="Description"
              value={dec}
              onChange={(e) => setDec(e.target.value)}
            ></textarea>
          </Col>
          <button
            className={`${style.addButton} my-4`}
            onClick={addClickHandler}
          >
            Add New Product
          </button>
        </Row>
      </Container>
    </>
  );
};

export default Create;
