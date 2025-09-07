import React, { useState } from 'react';
import Navbar from '../Navbar';
import Product from '../Product';
import productos from '../productos';
import "../../styles/braceletsPage.css";
import { Link } from 'react-router-dom';
import { Producto } from '../productos';

const BraceletsPage: React.FC = () => {
  const [cart, setCart] = useState<Producto[]>([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product: Producto) => {
    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(p => p.id === product.id);
      if (existingIndex >= 0) {
        const updatedCart = [...prevCart];
        const existingProduct = updatedCart[existingIndex];
        updatedCart[existingIndex] = { 
          ...existingProduct,
          qty: existingProduct.qty + 1
        };
        return updatedCart;
      } else {
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  };

  const removeItem = (id: number) =>  {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleComprar = () => {
    alert('¡Compra realizada!');
    setCart([]);
    setShowCart(false);
  };

  return (
    <>
      <Navbar 
        cartItems={cart}
        onRemoveItem={removeItem}
        onComprar={handleComprar}
        showCart={showCart}
        setShowCart={setShowCart}
      />
      <div className="container position-relative py-4 d-flex align-items-center">
        <div style={{ position: 'absolute', left: 0, top: 30 }}>
          <Link to={'/'}>
            <img className="logo-img" src="../../Iridiscencia W T-03.png" alt='Logo Iridiscencia' height={90} />
          </Link>
        </div>
        <div className="w-100 text-center">
          <h1 className="display-4 mb-5 fw-bold bracelets-title">Bracelets</h1>
        </div>
      </div>
      <div className="container pb-4">
        <div className="row g-4">
          {productos.map((producto: Producto, idx: number) => (
            <div className="col-12 col-sm-6 col-md-4" key={idx}>
              <div className="card product-card h-100 shadow-sm border-0">
                <Product
                  {...producto}
                  onAddToCart={() => handleAddToCart(producto)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BraceletsPage;
