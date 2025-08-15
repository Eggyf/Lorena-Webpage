import React from 'react';
import '../styles/products.css'
import { Producto } from './productos';

interface ProductProps extends Producto {
  onAddToCart: (product: Producto) => void;
}

const Product: React.FC<ProductProps> = ({ id,image, name, description, price, currency = '$', onAddToCart,qty }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-price">{currency}{price}</p>
        <button 
          className="btn btn-primary"
          onClick={() => onAddToCart({id, image, name, description, price, currency,qty })}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default Product;
