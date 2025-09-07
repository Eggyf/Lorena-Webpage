import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartDropdown from './CartDropdown';
import { Producto } from './productos';
import { useNavigate } from 'react-router-dom';

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
}) => {
  const navigate = useNavigate();

  const goSignIn = () => {
    navigate('/sign-in');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <div className="container-fluid">
        {/* Botón Sign In a la izquierda */}
        <button
          className="btn btn-outline-secondary me-3"
          type="button"
          onClick={goSignIn}
        >
          Sign In
        </button>

        {/* Toggle para pantallas pequeñas */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenido colapsable */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Aquí puedes agregar nav links o dejarlo vacío si no tienes */}
          <div className="d-flex ms-auto gap-2 align-items-center position-relative">
            {/* Botón Buscar */}
            <button type="button" className="btn btn-light p-1 icon-btn" aria-label="Buscar">
              <img src="/icons/icons8-búsqueda-20.png" alt="Buscar" />
            </button>
            
            {/* Botón Me gusta */}
            <button type="button" className="btn btn-light p-1 icon-btn" aria-label="Me gusta">
              <img src="/icons/icons8-me-gusta-20.png" alt="Me gusta" />
            </button>

            {/* Botón Carrito con contador y toggle */}
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
                  style={{ fontSize: "0.75rem" }}
                >
                  {cartItems.length}
                  <span className="visually-hidden">productos en el carrito</span>
                </span>
              )}
            </button>
            
            {/* Dropdown carrito */}
            {showCart && (
              <div style={{ position: "absolute", top: "40px", right: 0, zIndex: 1000 }}>
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
  );
};

export default Navbar;
