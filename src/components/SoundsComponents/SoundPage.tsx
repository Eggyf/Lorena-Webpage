import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const products = [
  { id: 1, productName: 'Product 1', productDescription: 'Description for product 1' },
  { id: 2, productName: 'Product 2', productDescription: 'Description for product 2' },
  // Same product data as in Wind component
];

function SoundPage() {
  const { id } = useParams<{ id: string }>();
  const audioRef = useRef<HTMLAudioElement>(null);

  const product = products.find(p => p.id === Number(id));

  if (!product) return <div>Product not found</div>;

  

  const handleBuy = () => {
    alert(`Purchased ${product.productName}!`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>{product.productName}</h2>
      <p>{product.productDescription}</p>
      <audio ref={audioRef} src="/audios/audio1.mp4" controls />
      <div style={{ marginTop: '20px' }}>
        
        <Button variant="success" onClick={handleBuy}>
          Buy Audio
        </Button>
      </div>
    </div>
  );
}

export default SoundPage;
