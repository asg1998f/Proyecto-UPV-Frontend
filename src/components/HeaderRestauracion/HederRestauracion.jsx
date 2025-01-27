import './HeaderRestauracion.scss'; 
import Vector from "../../assets/images/Vector.png"
import Broom from "../../assets/images/escobita.png"



const HeaderRestauracion =()=>{
    return (
      <div className="logo">
      <img className="vector" src={Vector} />
      <div className="frame-427319580">
        <div className="frame-427319550">
          <div className="icono">
            <img className="fi-sr-broom" src={Broom} />
          </div>
          <div className="almac-n">Restaurar</div>
        </div>
        <div className="frame-427319552">
          <div className="_0012-ft">0012-FT</div>
          <div className="_3-lbumes-40-fotos-y-1-marco">
            3 álbumes, 40 fotos y 1 marco
          </div>
        </div>
      </div>
    </div>
        )
}

export default HeaderRestauracion