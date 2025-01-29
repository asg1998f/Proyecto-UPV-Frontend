import React, { useState } from 'react';
import './Entrega.scss';
import FlechaNavigate from '../FlechaNavigate/FlechaNavigate';
import IconoCarpetaE from '../../assets/iconos/IconoCarpetaE.png';
import IconoCheckSeleccionadoE from '../../assets/iconos/IconoCheckSeleccionadoE.png';
import HeaderM from '../HeaderM/HeaderM';

const Entrega = (props) => {
  const [showCard, setShowCard] = useState(true); // Estado para controlar la visibilidad de la tarjeta

  return (
    <div className="home">
      <div className='flecha-navigate-left'>
        <FlechaNavigate />
      </div>
      <HeaderM
        title={props.title}
        logo={props.logo}
      />
      <div className="frame-427319548">
        <div className="pendiente-de-entregar">Pendiente de entregar</div>
        <div className="cards">
          {showCard && (
            <div
              className="component-59"
              onClick={() => setShowCard(false)} // Al hacer clic, desaparece la tarjeta
            >
              <div className="alarm-details">
                <div className="alarm-details2">
                  <div className="alarm-details3">
                    <div className="left">
                      <div className="icono3">
                        <img
                          className="folder-open-outlined"
                          src={IconoCarpetaE}
                          alt="Folder Icon"
                        />
                      </div>
                      <div className="frame-39955">
                        <div className="_0012-ft">0012-FT</div>
                        <div className="_2-lbumes">2 álbumes</div>
                      </div>
                    </div>
                  </div>
                </div>
                <img className="icono4" src={IconoCheckSeleccionadoE} alt="Check Icon" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Entrega;
