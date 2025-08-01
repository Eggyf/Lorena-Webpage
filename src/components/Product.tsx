import React from 'react';
import '../styles/products.css'
import { Producto } from './productos';


const Product: React.FC<Producto> = ({ image, name, description, price, currency = '$' }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-price">{currency}{price}</p>
      </div>
    </div>
  );
};

export default Product;
