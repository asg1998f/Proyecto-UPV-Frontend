import React, { useState } from "react";
import Logo from "../../../assets/iconos/LogoN.png";
import Registro from "../../../assets/iconos/IconoRegistrarR.png";
import Master from "../../../assets/iconos/IconoMasterA.png";
import MasterFlecha from "../../../assets/iconos/IconoFlechaM.png";
import Almacen from "../../../assets/iconos/IconoAlmacenA.png";
import Restaurar from "../../../assets/iconos/IconoRestaurarR.png";
import Digitalizar from "../../../assets/iconos/IconoDigitalizarV.png";
import Entregar from "../../../assets/iconos/IconoEntregarE.png";
import Inicio from "../../../assets/iconos/IconoInicioN.png";
import InicioG from "../../../assets/iconos/IconoInicioG.png";
import Lotes from "../../../assets/iconos/IconoCarpetaN.png";
import LotesG from "../../../assets/iconos/IconoCarpetaG.png";
import Equipo from "../../../assets/iconos/IconoEquipoN.png";
import EquipoG from "../../../assets/iconos/IconoEquipoG.png";
import FlechaNegra from "../../../assets/iconos/IconoFlechaN.png";
import FlechaGris from "../../../assets/iconos/IconoFlechaG.png";
import CerrarSesion from "../../../assets/iconos/IconoCerrarSesionN.png";

const Lotesadmin = () => {
  const [activeButton, setActiveButton] = useState("Inicio");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="fondo2">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sideLogo">
          <img src={Logo} alt="Logo Salvem Les Fotos" id="logo" />
        </div>

        {/* Sección ADMINISTRADOR */}
        <section className="section">
          <div className="divisor-menu">
            <div className="line-1"></div>
            <div className="administrador">ADMINISTRADOR</div>
            <div className="line-2"></div>
          </div>
          <nav className="menu admin-menu">
            {["Inicio", "Lotes", "Equipo"].map((name) => (
              <button
                key={name}
                className={`menu-button ${activeButton === name ? "active" : ""}`}
                onClick={() => handleButtonClick(name)}
              >
                <img
                  src={
                    activeButton === name
                      ? name === "Inicio"
                        ? Inicio
                        : name === "Lotes"
                        ? Lotes
                        : Equipo
                      : name === "Inicio"
                      ? InicioG
                      : name === "Lotes"
                      ? LotesG
                      : EquipoG
                  }
                  alt={name}
                />
                <span>{name}</span>
                <img
                  className="arrow"
                  src={activeButton === name ? FlechaNegra : FlechaGris}
                  alt="Ir"
                />
              </button>
            ))}
          </nav>
        </section>

        {/* Sección TRABAJADOR */}
        <section className="section">
          <div className="divisor-menu">
            <div className="line-1"></div>
            <div className="administrador">TRABAJADOR</div>
            <div className="line-2"></div>
          </div>
          <nav className="menu worker-menu">
            {[
              { name: "Registrar", icon: Registro },
              { name: "Master", icon: Master },
              { name: "Almacén", icon: Almacen },
              { name: "Restaurar", icon: Restaurar },
              { name: "Digitalizar", icon: Digitalizar },
              { name: "Entregar", icon: Entregar },
            ].map(({ name, icon }) => (
              <button key={name} className="menu-button centered">
                <img src={icon} alt={name} />
                <span>{name}</span>
                <img
                  className="imagenTransparente"
                  src={MasterFlecha}
                  alt="Ir"
                />
              </button>
            ))}
          </nav>
        </section>

        {/* Botón de Cerrar sesión */}
        <button className="logout">
          <img src={CerrarSesion} alt="Cerrar sesión" />
          <span>Cerrar Sesión</span>
          <img className="imagenTransparente" src={MasterFlecha} alt="Ir" />
        </button>
      </aside>




   

      {/* Contenido principal */}
      <div className="fondo2">
    
    
      
        
          </div>

          {/* Tabla de Lotes */}
          <table>
            <thead>
              <tr>
                <th>Lotes</th>
                <th>Tracking</th>
                <th>Fecha</th>
                <th>Responsable</th>
                <th>Información del Lote</th>
              </tr>
            </thead>
            <tbody>
              {/* Ejemplo de una fila (reemplazar con datos reales) */}
              <tr>
                <td>0012-FT
                  0012-FT
                </td>
               
                
            <td>
  <input type="checkbox" id="registrar"/>
  <label for="registrar">Registrar</label>

<div class="tracking-item">
  <input type="checkbox" id="master"/>
  <label for="master">Máster</label>
</div>
<div class="tracking-item">
  <input type="checkbox" id="almacen"/>
  <label for="almacen">Almacén</label>
</div>
<div class="tracking-item">
  <input type="checkbox" id="restaurar"/>
  <label for="restaurar">Restaurar</label>
</div>
<div class="tracking-item">
  <input type="checkbox" id="digitalizar"/>
  <label for="digitalizar">Digitalizar</label>
</div>
<div class="tracking-item">
  <input type="checkbox" id="montaje"/>
  <label for="montaje">Montaje</label>
</div>
<div class="tracking-item">
  <input type="checkbox" id="entrega"/>
  <label for="entrega">Entrega</label>
</div></td>

                <td>xx/xx/xxxx</td>
                <td>xxxxxxxx-T</td>
                <td>
                  <div>
                    <span>Fecha de entrada:</span> xx/xx/xxxx
                  </div>
                  <div>
                    <span>Propietario:</span> Si/No
                  </div>
                  {/* ... otros campos ... */}
                </td>
              </tr>
              {/* Agregar más filas aquí */}
            </tbody>
          </table>
        </div>
  
        
  );
};

export default Lotesadmin;

