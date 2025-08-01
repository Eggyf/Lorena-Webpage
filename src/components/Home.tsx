import React from 'react'
import '../styles/home.css'
import AboutUs from './AboutUs';
import WelcomePage from './WelcomePage';
import NewLaunchPage from './NewLaunchPage';
// import Navbar from './Navbar';
import Footer from './Footer';
import Navbarp from './Navbar';
function Home() {
  return (
    <>
      <div className='home-body'>
        <Navbarp/>
        <WelcomePage />
        <AboutUs/>
        <NewLaunchPage />
        <Footer/>
      </div>
     
      </>
  )
}

export default Home