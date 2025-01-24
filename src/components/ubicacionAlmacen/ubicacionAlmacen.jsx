import React from "react";
import { useNavigate } from "react-router-dom";
import "./ubicacionAlmacen.scss";
import fiSrBox from "../../assets/images/fi-sr-box0/fi-sr-box0.svg";
import vector1 from "../../assets/images/vector1/vector1.svg";
import HeaderM from "../HeaderM/HeaderM.jsx";

const UbicacionAlmacen = (props) => {
  const navigate = useNavigate();

  return (
<>
    <HeaderM
    title = {props.title}
    logo = {props.logo}
    />

    <div className="home-ub">
      <div className="logo-ub">
        <img className="vector1" src={vector1} alt="Logo" />
        <div className="frame-427319580">
          <div className="frame-427319550">
            <div className="icono">
              <img className="fi-sr-box" src={fiSrBox} alt="Icono" />
            </div>
            <div className="almac-n">Almacén</div>
          </div>
          <div className="frame-427319552">
            <div className="_0012-ft">0012-FT</div>
            <div className="_3-lbumes-40-fotos-y-1-marco">
              3 álbumes, 40 fotos y 1 marco
            </div>
          </div>
        </div>
      </div>
      <div className="frame-427319553">
        <div className="frame-427319592">
          <div className="frame-427319548">
            <div className="est-ubicado">Está ubicado</div>
            <div className="frame-427319538">
              <div className="frame-427319539">
                <div className="dropdown">
                  <div className="boton">
                    <div className="wrapper">
                      <div className="text">
                        <div className="placeholder">Congelador 3</div>
                        <img className="vector2" src={vector1} alt="Dropdown" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-427319535-datos">
                  <div className="_01">
                    <div className="wrapper2">
                      <div className="input">
                        <div className="_3">3</div>
                      </div>
                    </div>
                    <div className="text2">Album(es)</div>
                  </div>
                  <div className="_2">
                    <div className="wrapper2">
                      <div className="input">
                        <div className="_3">3</div>
                      </div>
                    </div>                    
                  </div>
                  <div className="_4">
                    <div className="wrapper2">
                      <div className="input">
                        <div className="_3">3</div>
                      </div>
                    </div>
                    <div className="text2">Conjunto fotográfico</div>
                  </div>
                  <div className="_5">
                    <div className="wrapper2">
                      <div className="input">
                        <div className="_3">3</div>
                      </div>
                    </div>
                    <div className="text2">Fotos enmarcadas</div>
                  </div>
                  <div className="_32">
                    <div className="wrapper2">
                      <div className="input">
                        <div className="_3">3</div>
                      </div>
                    </div>
                    <div className="text2">Negativos</div>
                  </div>
                  <div className="_6">
                    <div className="wrapper2">
                      <div className="input">
                        <div className="_3">3</div>
                      </div>
                    </div>
                    <div className="text2">Diapositivas</div>
                  </div>
                  <div className="_7">
                    <div className="wrapper2">
                      <div className="input">
                        <div className="_3">3</div>
                      </div>
                    </div>
                    <div className="text2">Orlas</div>
                  </div>
                  <div className="vertical-form-item-input">
                    <div className="label">
                      <div className="title">Otros</div>
                    </div>
                    <div className="field">
                      <div className="queda-un-marco-fuera-del-congelador">
                        Queda un marco fuera del congelador
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="validado-por-cristina-p">
            Validado por: Cristina P.
          </div>
        </div>
      </div>
      <div className="frame-427319584">
        <div className="bot-n">
          <div className="validar">Editar</div>
        </div>
        <div className="bot-n2">
          <div className="validar2">Restaurar</div>
        </div>
      </div>
    </div>
    </>
  );
};

export default UbicacionAlmacen;