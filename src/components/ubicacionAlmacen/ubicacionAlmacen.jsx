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

<div class="home">
  <div class="logo">
    <img class="vector" src="vector0.svg" />
    <div class="frame-427319580">
      <div class="frame-427319550">
        <div class="icono">
          <img class="fi-sr-box" src="fi-sr-box0.svg" />
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
  <div class="frame-427319549">
    <div class="a-adir-ubicaci-n">Añadir ubicación</div>
    <div class="frame-427319538">
      <div class="frame-427319539">
        <div class="dropdown">
          <img class="icono2" src="icono1.svg" />
          <div class="boton">
            <div class="wrapper">
              <div class="text">
                <div class="placeholder">Congelador</div>
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
      <div class="dropdown">
        <img class="icono3" src="icono2.svg" />
        <div class="boton">
          <div class="wrapper">
            <div class="text">
              <div class="placeholder">Armario</div>
              <img class="vector3" src="vector2.svg" />
            </div>
          </div>
        </div>
      </div>
      <div class="frame-427319582">
        <img class="icono4" src="icono3.svg" />
        <div class="label2">Pasa directamente a restauración</div>
      </div>
    </div>
  </div>
  <div class="bot-n">
    <div class="validar">Validar</div>
  </div>
</div>

    </>
  );
};

export default UbicacionAlmacen;