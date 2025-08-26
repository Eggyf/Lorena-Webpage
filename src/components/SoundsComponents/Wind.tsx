import React from 'react';
import ProductCard from './ProductCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const products = [
  { id: 1, productName: 'Product 1', productDescription: 'Description for product 1' },
  { id: 2, productName: 'Product 2', productDescription: 'Description for product 2' },
  { id: 3, productName: 'Product 3', productDescription: 'Description for product 3' },
  { id: 4, productName: 'Product 4', productDescription: 'Description for product 4' },
  { id: 5, productName: 'Product 5', productDescription: 'Description for product 5' },
  { id: 6, productName: 'Product 6', productDescription: 'Description for product 6' },
];

function Wind() {
  return (
    <Container>
      <Row>
        {products.map(({ id, productName, productDescription }) => (
          <Col md={4} key={id} className="mb-4">
            <ProductCard
              productName={productName}
              productDescription={productDescription}
              audioSrc="/audios/audio1.mp4" // Same sound for all
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Wind;
