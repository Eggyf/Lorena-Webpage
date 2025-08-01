import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productos from './productos';
import { Producto } from './productos';
import '../styles/productDetails.css';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const productId = Number(id);
  const product: Producto | undefined = productos[productId];

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  const handleAddToCart = () => {
    alert(`Añadido ${product.name} al carrito!`);
  };

  return (
    <div className="product-detail-container">
      <img
        src={product.image}
        alt={product.name}
        className="product-detail-image"
      />
      <h2 className="product-detail-title">{product.name}</h2>
      <p className="product-detail-description">{product.description}</p>
      <p className="product-detail-price">
        {product.currency ?? '$'}
        {product.price}
      </p>
      <div className="product-detail-actions">
        <button
          onClick={handleAddToCart}
          className="product-detail-btn add-to-cart"
        >
          Añadir al carrito
        </button>
        <button
          onClick={() => navigate(-1)}
          className="product-detail-btn back-button"
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
