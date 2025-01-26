import { FaArrowRight } from "react-icons/fa";
import HeaderRestauracion from '../HeaderRestauracion/HederRestauracion';
import './Restauracion.scss';

const Restauracion = () => {
  const carpetas = [
    { id: 1, nombre: 'ÁLBUM 1' },
    { id: 2, nombre: 'ÁLBUM 2' },
    { id: 3, nombre: 'ÁLBUM 3' },
    { id: 4, nombre: 'FOTOS' },
    { id: 5, nombre: 'MARCO' },
  ];

  const handleSeleccionarCarpeta = (nombreCarpeta) => {
    alert(`Accediendo a la cámara para: ${nombreCarpeta}`);
    // Aquí la lógica para abrir la cámara
  };

  return (
    <div className="restauracion">
      <HeaderRestauracion></HeaderRestauracion>
      <div className="restauracion-carpetas">
        <p>¿Qué quieres fotografiar?</p>
        <div className="carpetas-grid">
          {carpetas.map((carpeta) => (
            <div
              key={carpeta.id}
              className="carpeta"
              onClick={() => handleSeleccionarCarpeta(carpeta.nombre)}
            >
              <div className="carpeta-icono">📁</div>
              <p>{carpeta.nombre}</p>
                <div className="icon-circle"> 
                  <FaArrowRight style={{  color: "black", fontSize: "16px", marginTop: "7px" }} /> 
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restauracion;
