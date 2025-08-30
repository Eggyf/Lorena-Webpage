import React from 'react'
import "../styles/navbarshop.css"
import { useNavigate } from 'react-router-dom';
function NavbarShop() {
  const navigate = useNavigate();

  const goSignIn = () => {
    navigate('/sign-in')
  }
  return (

  <>
      

      <nav className="navbar navbar-expand-lg navbar-custom px-3">
        <div className="container-fluid">
          {/* Botón Sign In a la izquierda */}
          <button type="button" className="btn btn-outline-light btn-signin me-3" onClick={goSignIn}>
            Sign In
          </button>

          {/* Links de navegación centrados */}
          <div className="collapse navbar-collapse navbar-collapse-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/bracelets">
                  bracelets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/necklaces">
                  necklaces
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/rings">
                  rings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/earrings">
                  earrings
                </a>
              </li>
            </ul>
          </div>

          {/* Botón toggle para móvil */}
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

          {/* Iconos a la derecha, colapsables en móvil */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarIcons">
            <div className="d-flex gap-3">
              <button type="button" className="btn btn-light p-1 icon-btn" aria-label="Buscar">
                <img src="/icons/icons8-búsqueda-20.png" alt="Buscar" />
              </button>
              <button type="button" className="btn btn-light p-1 icon-btn" aria-label="Me gusta" >
                <img src="/icons/icons8-me-gusta-20.png" alt="Me gusta" />
              </button>
              <button type="button" className="btn btn-light p-1 icon-btn" aria-label="Carrito" >
                <img src="/icons/icons8-carrito-de-compras-20.png" alt="Carrito" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavbarShop