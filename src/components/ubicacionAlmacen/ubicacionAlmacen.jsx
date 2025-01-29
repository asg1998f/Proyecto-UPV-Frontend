import React from "react";
import "./UbicacionAlmacen.scss";
import IconoAlmacenA from "../../assets/iconos/IconoAlmacenA.png";
import { useNavigate } from "react-router-dom";
import FlechaNavigate from "../FlechaNavigate/FlechaNavigate";

const UbicacionAlmacen = () => {
  return (
    <div class="homeUbicacionAlmacen">
    <div class="logo">
      <img class="vector" src={Vector} alt="Vector" />
      <div class="frame-427319580">
        <div class="frame-427319550">
          <div class="icono">
            <img class="IconoAlmacenA" src={IconoAlmacenA} alt="IconoAlmacenA"/>
          </div>
          <div class="almac-n">Almacén</div>
        </div>
        <div class="frame-427319552">
          <div class="_0012-ft">0012-FT</div>
          <div class="_3-lbumes-40-fotos-y-1-marco">
            3 álbumes, 40 fotos y 1 marco
          </div>
        </div>
      </div>
    </div>
    <div class="frame-427319553Almacen">
      <div class="frame-427319592">
        <div class="frame-427319548">
          <div class="est-ubicado">Está ubicado</div>
          <div class="frame-427319538">
            <div class="frame-427319539">
              <div class="dropdown">
                <div class="boton">
                  <div class="wrapper">
                    <div class="text">
                      <div class="placeholder">Congelador 3</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="frame-427319535-datos">
                <div class="_01">
                  <div class="wrapper2">
                    <div class="input">
                      <div class="_3">3</div>
                    </div>
                  </div>
                  <div class="text2">Album(es)</div>
                </div>
                <div class="_4">
                  <div class="wrapper2">
                    <div class="input">
                      <div class="_3">0</div>
                    </div>
                  </div>
                  <div class="text2">Conjunto fotográfico</div>
                </div>
                <div class="_5">
                  <div class="wrapper2">
                    <div class="input">
                      <div class="_3">0</div>
                    </div>
                  </div>
                  <div class="text2">Fotos enmarcadas</div>
                </div>
                <div class="_32">
                  <div class="wrapper2">
                    <div class="input">
                      <div class="_3">8</div>
                    </div>
                  </div>
                  <div class="text2">Negativos</div>
                </div>
                <div class="vertical-form-item-inputAlmacen">
                  <div class="label">
                    <div class="title">Otros</div>
                  </div>
                  <div class="fieldAlmacenaje">
                    <div class="queda-un-marco-fuera-del-congelador">
                      Queda un marco fuera del congelador
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="validado-por-cristina-p">Validado por: Cristina P.</div>
      </div>
      <div class="frame-427319584">
        <div class="bot-n">
          <div class="validar">Editar</div>
        </div>
        <div class="bot-n2">
          <div class="validar2">Restaurar</div>
        </div>
      </div>
    </div>
  </div>
   
  );
};

export default UbicacionAlmacen;