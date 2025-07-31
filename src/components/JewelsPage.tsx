import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/jewelsPage.css'
import NavbarShop from './NavbarShop';
function JewelsPage() {
 const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }
    const goSound = (goto: string) => {
        navigate(goto)
    }
    const jewels = [{
        src: "Desing pag web-09.jpg",
        name: "wind"
        },
        {
            src: "Desing pag web-10.jpg",
            name: "ocean"
        }
        ,{
            src: "Desing pag web-11.jpg",
            name: "thunder"
        },
        {
            src: "Desing pag web-12.jpg",
            name: "animals"
        },
        {
            src: "Desing pag web-13.jpg",
            name: "music"
        },
        {
        src: "Desing pag web-14.jpg",
            name: "water" 
        }
    ]
    return (
        <>
            <NavbarShop/>
            
            <button onClick={goBack}>
                <img src="/icons/icons8-izquierda-en-círculo-2-20.png" alt="" />
                Go Back
            </button>
            <div className='image-slogan'>
                <img src="Fondo Pagina Web Collage-07.jpg" alt="Iridiscencia" />
            </div>
            <div className='jewels-list'>
                <ul>

                {jewels.map((item, index) => (
                    <li key={index}>
                        <div className='sounds-icons'>
                            <button onClick={()=> goSound(item.name)}>
                                <img src={item.src} alt="hola" />
                            </button>
                            <h1>
                                {item.name}
                            </h1>
                        </div>
                        
                    </li>    
                ))}
                </ul>
            </div>

        
      </>
      
  )

}

export default JewelsPage