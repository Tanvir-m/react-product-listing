import Navbar from '../Navbar/Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import style from '../css/style.module.scss';
import { useEffect, useState } from 'react';

const Update = (props) => {
  console.log(props.match.params.id);
  const [name, setName] = useState('');
  const [cat, setCat] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [dec, setDec] = useState('');
  const [rating, setRating] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/product/${props.match.params.id}`).then(
      (res) => {
        res.json().then((data) => {
          setName(data.name);
          setCat(data.catagory);
          setPrice(data.price);
          setBrand(data.brand);
          setDec(data.decription);
          setRating(data.rating);
        });
      }
    );
  }, []);

  const updateClickHandler = () => {
    fetch(`http://localhost:3000/product/${props.match.params.id}`, {
      method: 'Put',
      headers: {
        'Content-Type': 'application/json',
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
        alert('You product is update');
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
          <h1 className="text-center py-4">Update Product</h1>
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
            onClick={updateClickHandler}
          >
            Update Product
          </button>
        </Row>
      </Container>
    </>
  );
};

export default Update;
