import React from "react";
import "./UbicacionAlmacen.scss";
import IconoAlmacenA from "../../assets/iconos/IconoAlmacenA.png";
import { useNavigate } from "react-router-dom";
import FlechaNavigate from "../FlechaNavigate/FlechaNavigate";

const UbicacionAlmacen = () => {
  const navigate = useNavigate();

  return (
    <div class="home">
      <div className="zona-1">
        <div className="caja-flecha">
          <div className="flecha-navigate">
            <FlechaNavigate />
          </div>
        </div>
        <div className="logo-anadir">
          <div className="titulo-anadir-almacen">
            <img src={IconoAlmacenA} />
            <p>Almacén</p>
          </div>
          <div className="lote-contenido">
            <h1 className="lote-anadir">0012-FT</h1>
            <p>Contenido</p>
          </div>
        </div>
      </div>
      <div class="frame-427319553">
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
                        <img class="vector2" src="vector1.svg" />
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
                  <div class="vertical-form-item-input">
                    <div class="label">
                      <div class="title">Otros</div>
                    </div>
                    <div class="field">
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
          <div
            class="bot-n2"
            onClick={() => {
              navigate("/restauracion");
            }}
          >
            <div class="validar2">Restaurar</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UbicacionAlmacen;
