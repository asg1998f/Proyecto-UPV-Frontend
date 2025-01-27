import './HeaderRestauracion.scss'; 
import Vector from "../../assets/images/Vector.png"
import Broom from "../../assets/images/escobita.png"



const HeaderRestauracion =()=>{
    return (
      <div className="logoRestaurar">
      <img className="vectorRestaurar" src={Vector} />
          <div className="icono">
            <img className="fi-sr-broom" src={Broom} />
          </div>
          <div className="almac-n">Restaurar</div>
        <div className="frame-427319552">
          <div className="_0012-ft">0012-FT</div>
            3 álbumes, 40 fotos y 1 marco
        </div>
    </div>
        )
}

export default HeaderRestauracion