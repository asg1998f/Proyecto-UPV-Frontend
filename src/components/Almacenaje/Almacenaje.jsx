import React from 'react'
import './Almacenaje.scss';

import IconoCarpetaM from'../../assets/iconos/IconoCarpetaM.png'
import IconoFlechaM from'../../assets/iconos/IconoFlechaM.png'
import IconoCarpetaA from'../../assets/iconos/IconoCarpetaA.png'
import IconoFlechaA from'../../assets/iconos/IconoFlechaA.png'
import Vector from '../../assets/iconos/Vector.png'
import { useNavigate } from 'react-router-dom';


const Almacenaje = () => {
const navigate = useNavigate()  
  return (
    <div className="home">
      <div className="logo">
        <img className="vector" src={Vector} alt="Vector" />
        <div className="frame-427319580">
          <div className="frame-427319553">
            <div className="icono">
              <img className="fi-sr-box" src={IconoCarpetaA} alt="Carpeta M" />
            </div>
            <div className="restauraci-n">Almacén</div>
          </div>
          <div className="component-54">
            <div className="wrapper">
              <div className="text">
                <div className="placeholder">Buscar por ID...</div>
              </div>
            </div>
            <div className="input-addon-icon">
              <div className="icono2">
                <img className="search-outlined" src={IconoFlechaM} alt="Search" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-427319548">
        <div className="pendientes-de-almacenar">Pendientes de almacenar</div>
        <div className="cards">
          
          <div className="component-69" onClick={()=>{navigate("/")}}>
            <div className="alarm-details">
              <div className="alarm-details2">
                <div className="alarm-details3">
                  <div className="left">
                    <div className="icono3">
                      <img className="folder-open-outlined2" src={IconoCarpetaM} alt="Carpeta M" />
                    </div>
                    <div className="frame-39955">
                      <div className="_0012-ft">0012-FT</div>
                      <div className="_2-lbumes">2 álbumes</div>
                    </div>
                  </div>
                </div>
              </div>
              <img className="icono5" src={IconoFlechaM} alt="Flecha M" />
            </div>
          </div>
          
        </div>
      </div>
      <div className="frame-427319549">
        <div className="ubicados-en-almac-n">Ubicados en almacén</div>
        <div className="cards">
          <div className="component-64" onClick={()=>{navigate("/")}}>
            <div className="alarm-details">
              <div className="alarm-details2">
                <div className="alarm-details3">
                  <div className="left">
                    <div className="icono3">
                      <img className="folder-open-outlined6" src={IconoCarpetaA} alt="Carpeta A" />
                    </div>
                    <div className="frame-39955">
                      <div className="_0012-ft">0012-FT</div>
                      <div className="_2-lbumes">2 álbumes</div>
                    </div>
                  </div>
                </div>
              </div>
              <img className="icono9" src={IconoFlechaA} alt="Flecha A" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Almacenaje;
