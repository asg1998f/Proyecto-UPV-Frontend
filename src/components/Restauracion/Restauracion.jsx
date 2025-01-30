import { FaArrowRight } from "react-icons/fa";
import HeaderRestauracion from '../HeaderRestauracion/HederRestauracion';
import Folder from "../../assets/iconos/IconoCarpetaRt.png"

import './Restauracion.scss';
import { useNavigate } from "react-router-dom";

const Restauracion = () => {
  const navigate = useNavigate()


  const carpetas = [
    { id: 1, nombre: 'ÁLBUM 1' },
    { id: 2, nombre: 'ÁLBUM 2' },
    { id: 3, nombre: 'ÁLBUM 3' },
    { id: 4, nombre: 'FOTOS' },
    { id: 5, nombre: 'MARCO' },
  ];
console.log("eeee");

  const handleSeleccionarCarpeta = (nombreCarpeta) => {
    navigate("/restauracionImagenes")
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
              <div className="icono3">
                <img className="folder-open-outlined" src={Folder}/>
              </div>
              <div className="parent">
              <p>{carpeta.nombre}</p>
                <div className="icon-circle"> 
                  <FaArrowRight style={{  color: "black", fontSize: "16px", marginTop: "7px" }} /> 
                </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restauracion;
