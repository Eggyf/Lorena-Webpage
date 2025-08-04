import React, { useState } from 'react';
import Navbar from './Navbar';
import WelcomePage from './WelcomePage';
import AboutUs from './AboutUs';
import NewLaunchPage from './NewLaunchPage';
import Footer from './Footer';
import { Producto } from './productos';


interface NavbarProps {
  cartItems: Producto[];
  onRemoveItem: (name: string) => void;
  onComprar: () => void;
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}


const Home: React.FC = () => {
  const [cart, setCart] = useState<Producto[]>([]);
  const [showCart, setShowCart] = useState(false);

  const handleRemoveItem = (id: number) => {
     setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleComprar = () => {
    alert('Compra realizada!');
    setCart([]);
    setShowCart(false);
  };

  return (
    <div className="home-body">
      <Navbar
        cartItems={cart}
        onRemoveItem={handleRemoveItem}
        onComprar={handleComprar}
        showCart={showCart}
        setShowCart={setShowCart}
      />
      <WelcomePage />
      <AboutUs />
      <NewLaunchPage />
      <Footer />
    </div>
  );
};

export default Home;
