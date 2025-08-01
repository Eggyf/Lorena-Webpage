import React from 'react';

interface ProductProps {
  image: string;
  name: string;
  description: string;
  price: string;
  currency?: string; // Opcional, por defecto '$'
}
const Product: React.FC<ProductProps> = ({ image, name, description, price, currency = '$' }) => {
  return (
    <div className="card" style={{ width: '18rem', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
      <img 
        src={image} 
        alt={name} 
        className="card-img-top" 
        style={{ objectFit: 'cover', height: '180px', width: '100%' }} 
      />
      <div className="card-body" style={{ padding: '1rem' }}>
        <h5 className="card-title" style={{ marginBottom: '0.5rem' }}>{name}</h5>
        <p className="card-text" style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1rem' }}>{description}</p>
        <p className="card-price" style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
          {currency}{price}
        </p>
      </div>
    </div>
  );
}

export default Product;
