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
      
      <div className="main">
        <div className="main-buttons">
          <button className="jewels" onClick={goJewelsPage}>
              <img src="Iridiscencia W T-03.png" alt="hola" />
              <h1>Artesian</h1>
          </button>
          <button className="sounds"onClick={goSoundsPage}>
              <img src="Iridiscencia W T-03.png" alt="hola" />
              <h1>Sounds</h1>
          </button>
            </div>
      </div>
      </div>
     
    </>
  )
}

export default WelcomePage