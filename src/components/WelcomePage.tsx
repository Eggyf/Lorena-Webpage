import { useNavigate } from "react-router-dom"
import "../styles/welcomePage.css"


function WelcomePage() {
  const navigate = useNavigate();

  const goJewelsPage = () => {
    navigate('/jewels')
  }
  const goSoundsPage = () => {
    navigate('/sounds')
  }
  return (

    <>
      <div className="welcome-body">
         <div className="navbar">
        
        <button className="sign-in-button">Sign In</button>
      </div>
      <div className="main">
        <div className="main-buttons">
          <button onClick={goJewelsPage}>
            <img src="Iridiscencia W T-03.png" alt="hola" />
          </button>
          <button onClick={goSoundsPage}>
            <img src="Iridiscencia W T-03.png" alt="hola" />
          </button>
            </div>
      </div>
      </div>
     
    </>
  )
}

export default WelcomePage