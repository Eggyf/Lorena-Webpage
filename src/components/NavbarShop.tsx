import React from 'react'
import "../styles/navbarshop.css"
function NavbarShop() {
  return (
    <nav>
    <div className='sign-in'>
        <button>Sign In</button>
        
    </div>
    <div className='links'>
        <a href="/bracelets">bracelets</a>
        <a href="/">necklaces</a>
        <a href="/">rings</a>
        <a href="/">earrings</a>
    </div>
    <div className='buttons-icons'>
        <button><img src="/icons/icons8-búsqueda-20.png" alt="hola" /></button>
        <button><img src="/icons/icons8-me-gusta-20.png" alt="hola" /></button>
        <button><img src="/icons/icons8-carrito-de-compras-20.png" alt="hola" /></button>
    </div>
</nav>
  )
}

export default NavbarShop