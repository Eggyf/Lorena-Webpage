import React, { useState } from 'react';
import Navbar from '../Navbar';
import Product from '../Product';
import productos from '../productos';
// import CartDropdown from '../CartDropdown';
import "../../styles/braceletsPage.css";
import { Link } from 'react-router-dom';
import { Producto } from '../productos';

const NecklacesPage: React.FC = () => {
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
        qty: existingProduct.qty + 1 // ya existe, seguro tiene qty number
      };
      return updatedCart;
    } else {
      return [...prevCart, { ...product, qty: 1 }]; // qty inicial 1
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
        cartItems={cart}                      // Pasa el carrito y control de visibilidad
        onRemoveItem={removeItem}
        onComprar={handleComprar}
        showCart={showCart}
        setShowCart={setShowCart}
      />

      <div className='container logo'>
        <Link to={'/'}>
          <img src='../../Iridiscencia W T-03.png' alt='logo' />
        </Link>
      </div>

      <div className="container py-4">
        <div className="row g-4">
          {productos.map((producto: Producto, idx: number) => (
            <div className="col-12 col-md-4" key={idx}>
              <Product
                id={producto.id}
                image={producto.image}
                name={producto.name}
                description={producto.description}
                price={producto.price}
                currency={producto.currency}
                qty={producto.qty}
                onAddToCart={() => handleAddToCart(producto)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NecklacesPage;
