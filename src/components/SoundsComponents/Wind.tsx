import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarShop from '../NavbarShop';

const products = [
  { id: 1, productName: 'Product 1', productDescription: 'Description for product 1' },
  { id: 2, productName: 'Product 2', productDescription: 'Description for product 2' },
  // Add more products
];

function Wind() {
  return (
    <>
    <NavbarShop/>
    <Container className='mt-5'>
      <Row>
        {products.map(({ id, productName, productDescription }) => (
          <Col md={4} key={id} className="mb-4">
            <Link to={`/sounds/${id}`} style={{ textDecoration: 'none' }}>
              <ProductCard
                productName={productName}
                productDescription={productDescription}
                audioSrc="/audios/audio1.mp4"
              />
            </Link>
          </Col>
        ))}
      </Row>
      </Container>
      </>
  );
}

export default Wind;
