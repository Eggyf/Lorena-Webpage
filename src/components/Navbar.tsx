import React from 'react'
import '../styles/navbar.css'
// import { Button, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function Navbar() {
return (
    <>
        <nav className="navbar bg-light px-3">
  <div className="d-flex align-items-center w-100">
    {/* Botón Sign In a la izquierda */}
    <button className="btn btn-outline-secondary me-auto" type="button">
      Sign In
    </button>

    {/* Contenedor de los botones con íconos a la derecha */}
    <div className="d-flex gap-2">
      <button type="button" className="btn btn-light p-1">
        <img src="/icons/icons8-búsqueda-20.png" alt="Buscar" />
      </button>
      <button type="button" className="btn btn-light p-1">
        <img src="/icons/icons8-me-gusta-20.png" alt="Me gusta" />
      </button>
      <button type="button" className="btn btn-light p-1">
        <img src="/icons/icons8-carrito-de-compras-20.png" alt="Carrito" />
      </button>
    </div>
  </div>
</nav>

    
    </>
    
)
}

export default Navbar