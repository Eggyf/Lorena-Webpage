import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../../styles/soundPage.css'
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
    <div className='container d-flex flex-row justify-content-around'>

    
      <div className='card d-flex flex-row mt-5 p-5 w-100'>
        <div className='w-50'>
          <img src="/Desing pag web-09.jpg" alt="Wind" />
        </div>

        <div className='w-50'>
            <h2>{product.productName}</h2>
      <p>{product.productDescription}</p>
      <audio ref={audioRef} src="/audios/audio1.mp4" controls />
      <div className='mt-5'>
        
        <Button variant="success" onClick={handleBuy}>
          Buy Audio
        </Button>
      </div>
        </div>
      
      </div>
      </div>
  );
}

export default SoundPage;
