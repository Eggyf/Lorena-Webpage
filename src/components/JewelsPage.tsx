import React from 'react'
import { useNavigate } from 'react-router-dom';
function JewelsPage() {
 const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }
    return (
      <>
            <div>JewelsPage</div>
            <button onClick={goBack}>
                Go Back
            </button>
      </>
      
  )

}

export default JewelsPage