import React, { useState } from 'react';
import "../styles/navbarshop.css";
import { Producto } from './productos';
import CartDropdown from './CartDropdown';
import { useNavigate } from 'react-router-dom';

interface NavbarShopProps {
  initialCartItems?: Producto[];
}

const NavbarShop: React.FC<NavbarShopProps> = ({ initialCartItems = [] }) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<Producto[]>(initialCartItems);
  const [showCart, setShowCart] = useState(false);

  // Añade función para remover item del carrito
  const onRemoveItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Acción comprar vacía carrito y oculta dropdown
  const onComprar = () => {
    alert('¡Compra realizada!');
    setCartItems([]);
    setShowCart(false);
  };

  const goSignIn = () => {
    navigate('/sign-in');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom px-3">
        <div className="container-fluid">
          <button type="button" className="btn btn-outline-light btn-signin me-3" onClick={goSignIn}>
            Sign In
          </button>

          <div className="collapse navbar-collapse navbar-collapse-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/bracelets">bracelets</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/necklaces">necklaces</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/rings">rings</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/earrings">earrings</a>
              </li>
            </ul>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarIcons"
            aria-controls="navbarIcons"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarIcons">
            <div className="d-flex gap-3 align-items-center position-relative">
              <button type="button" className="btn btn-light p-1 icon-btn" aria-label="Buscar">
                <img src="/icons/icons8-búsqueda-20.png" alt="Buscar" />
              </button>
              <button type="button" className="btn btn-light p-1 icon-btn" aria-label="Me gusta" >
                <img src="/icons/icons8-me-gusta-20.png" alt="Me gusta" />
              </button>

              {/* Botón carrito con toggle y contador */}
              <button
                type="button"
                className="btn btn-light p-1 icon-btn position-relative"
                aria-label="Carrito"
                onClick={() => setShowCart(!showCart)}
              >
                <img src="/icons/icons8-carrito-de-compras-20.png" alt="Carrito" />
                {cartItems.length > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: '0.75rem' }}
                  >
                    {cartItems.length}
                    <span className="visually-hidden">productos en el carrito</span>
                  </span>
                )}
              </button>

              {/* Dropdown carrito */}
              {showCart && (
                <div style={{ position: 'absolute', top: '40px', right: 0, zIndex: 1000 }}>
                  <CartDropdown
                    cartItems={cartItems}
                    removeItem={onRemoveItem}
                    onComprar={onComprar}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarShop;
