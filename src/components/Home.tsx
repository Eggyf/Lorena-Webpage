import React from 'react'
import '../styles/home.css'
import AboutUs from './AboutUs';
import WelcomePage from './WelcomePage';
import NewLaunchPage from './NewLaunchPage';
function Home() {
  return (
    <>
      <div className='home-body'>
        <WelcomePage />
        <AboutUs/>
        <NewLaunchPage/>
      </div>
     
      </>
  )
}

export default Home