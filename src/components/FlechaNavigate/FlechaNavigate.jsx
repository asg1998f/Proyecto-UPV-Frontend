import flechaatras from '../../assets/iconos/FlechaAtras.png'
import { useNavigate } from 'react-router-dom';
import './FlechaNavigate.scss'

const FlechaNavigate = () => {
    const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1)
    
  };
  return (
    <div className='flecha-navigate botonIrAtras'>
       <button onClick={handleGoBack} className="back-button">
        <img
          src={flechaatras}
          alt="Regresar"
          className="icon"
        />
      </button>
    </div>
  )
}

export default FlechaNavigate