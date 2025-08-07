import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartDropdown from './CartDropdown';
import { Producto } from './productos';

interface NavbarProps {
  cartItems: Producto[];
  onRemoveItem: (id: number) => void;
  onComprar: () => void;
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({
  cartItems,
  onRemoveItem,
  onComprar,
  showCart,
  setShowCart,
}) => (
  <nav className="navbar bg-light px-3">
    <div className="d-flex align-items-center w-100">
      <button className="btn btn-outline-secondary me-auto" type="button">
        Sign In
      </button>
      <div className="d-flex gap-2 position-relative">
        <button type="button" className="btn btn-light p-1">
          <img src="/icons/icons8-búsqueda-20.png" alt="Buscar" />
        </button>
        <button type="button" className="btn btn-light p-1">
          <img src="/icons/icons8-me-gusta-20.png" alt="Me gusta" />
        </button>
        <button
          type="button"
          className="btn btn-light p-1 position-relative"
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
        {showCart && (
          <CartDropdown
            cartItems={cartItems}
            removeItem={onRemoveItem}
            onComprar={onComprar}
          />
        )}
      </div>
    </div>
  </nav>
);

export default Navbar;
