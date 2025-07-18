import React from 'react'
import { useNavigate } from 'react-router-dom'

function SoundsPage() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }
    return (
      <>
            <div>SoundsPage</div>
            <button onClick={goBack}>
                Go Back
            </button>
      </>
      
  )
}

export default SoundsPage