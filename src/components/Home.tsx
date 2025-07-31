import React from 'react'
import '../styles/home.css'
import AboutUs from './AboutUs';
import WelcomePage from './WelcomePage';
import NewLaunchPage from './NewLaunchPage';
import Navbar from './Navbar';
import Footer from './Footer';
function Home() {
  return (
    <>
      <div className='home-body'>
        <Navbar/>
        <WelcomePage />
        <AboutUs/>
        <NewLaunchPage />
        <Footer/>
      </div>
     
      </>
  )
}

export default Home