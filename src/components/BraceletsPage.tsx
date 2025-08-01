import React from 'react'
import Product from './Product';
// import { Navbar } from 'react-bootstrap';
import Navbar from './Navbar';
function BraceletsPage() {
  const productos = [
  {
    image: "https://via.placeholder.com/300x180.png?text=Pulsera+de+Cuero",
    name: "Pulsera de Cuero",
    description: "Elegante pulsera hecha a mano con auténtico cuero marrón.",
    price: "24.99",
    currency: "$"
  },
  {
    image: "https://via.placeholder.com/300x180.png?text=Collar+de+Plata",
    name: "Collar de Plata",
    description: "Collar de plata 925 con dije en forma de luna.",
    price: "49.90",
    currency: "$"
  },
  {
    image: "https://via.placeholder.com/300x180.png?text=Anillo+de+Oro",
    name: "Anillo de Oro",
    description: "Anillo de oro amarillo 18k clásico y elegante.",
    price: "189.00",
    currency: "$"
  },
  {
    image: "https://via.placeholder.com/300x180.png?text=Pendientes+Perla",
    name: "Pendientes con Perla",
    description: "Pendientes delicados de plata con perlas blancas naturales.",
    price: "29.50",
    currency: "$"
  }
];



  return (
    <>
      <Navbar/>
    
     <div className="container py-4">
      <div className="row g-4">
        {productos.map((producto, idx: number) => (
          <div className="col-12 col-md-4" key={idx}>
            <Product
              image={producto.image}
              name={producto.name}
              description={producto.description}
              price={producto.price}
              currency={producto.currency}
            />
          </div>
        ))}
      </div>
      </div>
     </> 
  )
}

export default BraceletsPage