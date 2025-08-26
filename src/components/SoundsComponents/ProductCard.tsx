// ProductCard.tsx
import React, { useRef } from 'react';
import Card from 'react-bootstrap/Card';
import '../../styles/ProductCard.css'

interface ProductCardProps {
  productName: string;
  productDescription: string;
  audioSrc: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ productName, productDescription, audioSrc }) => {
  const audioRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <Card
      className="product-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: '18rem' }}
    >
      <Card.Body>
        <Card.Title>{productName}</Card.Title>
        <Card.Text>{productDescription}</Card.Text>
      </Card.Body>
      <video ref={audioRef} src={audioSrc} style={{ display: 'none' }} />
    </Card>
  );
};

export default ProductCard;
