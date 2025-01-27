import React from 'react'
import './Entrega.scss';
import IconoCarpetaE from'../../assets/iconos/IconoCarpetaE.png'
import Vector from '../../assets/iconos/Vector.png'
import IconoEntregarE from '../../assets/iconos/IconoEntregarE.png'
import IconoCheckSeleccionadoE from '../../assets/iconos/IconoCheckSeleccionadoE.png'
const Entrega = () => {
    return(
    <div className="home">
  <div className="logo">
    <img className="vector" src={Vector} alt="Vector"/>
    <div className="frame-427319580">
      <div className="frame-427319553">
        <div className="icono">
          <div className="IconoEntregarE">
            <img className="IconoEntregarE" src={IconoEntregarE} alt="IconoEntregarE"/>
          </div>
        </div>
        <div className="restauraci-n">Entregar</div>
      </div>
     
    </div>
  </div>
  <div className="frame-427319548">
    <div className="pendiente-de-entregar">Pendiente de entregar</div>
    <div className="cards">
      <div className="component-59">
        <div className="alarm-details">
          <div className="alarm-details2">
            <div className="alarm-details3">
              <div className="left">
                <div className="icono3">
                  <img
                    className="folder-open-outlined"
                    src={IconoCarpetaE} alt="IconoCarpetaE"
                  />
                </div>
                <div className="frame-39955">
                  <div className="_0012-ft">0012-FT</div>
                  <div className="_2-lbumes">2 álbumes</div>
                </div>
              </div>
            </div>
          </div>
          <img className="IconoCheckSeleccionadoE" src={IconoCheckSeleccionadoE} />
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default Entrega;