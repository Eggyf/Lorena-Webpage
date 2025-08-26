import React from 'react';
import ProductCard from './ProductCard';

function Wind() {
  return (
    <>
      <ProductCard
        productName="Sample Product"
        productDescription="This is a cool product."
        audioSrc="/audios/audio1.mp4" // Update this path to your actual mp4 audio file path
      />
    </>
  );
}

export default Wind;
