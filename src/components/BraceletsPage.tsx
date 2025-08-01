import React from 'react'
import Product from './Product';
import "../styles/braceletsPage.css"
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import productos from './productos';
function BraceletsPage() {
  



  return (
    <>
      <Navbar />
      
      <div className='container logo'>
        <Link to={'/'}><img src='../../Iridiscencia W T-03.png' alt='hola'></img></Link>
        
      </div>
    
     <div className="container py-4">
      <div className="row g-4">
        {productos.map((producto, idx: number) => (
          <div className="col-12 col-md-4" key={idx}>
            <Link to={`/product/${idx}`} style={{ textDecoration: 'none' }}>
              <Product
                image={producto.image}
                name={producto.name}
                description={producto.description}
                price={producto.price}
                currency={producto.currency}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
     </> 
  )
}

export default BraceletsPage