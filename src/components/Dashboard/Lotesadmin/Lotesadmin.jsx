import React, { useState } from "react";
import "./Lotesadmin.scss";
import Logo from "../../assets/iconos/LogoN.png";
import LogoUsuario from "../../assets/iconos/LogoUsuario.png";
import Registro from "../../assets/iconos/IconoRegistrarR.png";
import Master from "../../assets/iconos/IconoMasterA.png";
import MasterFlecha from "../../assets/iconos/IconoFlechaM.png";
import Almacen from "../../assets/iconos/IconoAlmacenA.png";
import Restaurar from "../../assets/iconos/IconoRestaurarR.png";
import Digitalizar from "../../assets/iconos/IconoDigitalizarV.png";
import DigitalizarFlecha from "../../assets/iconos/IconoFlechaV.png";
import Entregar from "../../assets/iconos/IconoEntregarE.png";
import InicioG from "../../assets/iconos/IconoInicioG.png";
import Inicio from "../../assets/iconos/IconoInicioN.png";
import Lotes from "../../assets/iconos/IconoCarpetaN.png";
import LotesG from "../../assets/iconos/IconoCarpetaG.png";
import Equipo from "../../assets/iconos/IconoEquipoN.png";
import EquipoG from "../../assets/iconos/IconoEquipoG.png";
import FlechaNegra from "../../assets/iconos/IconoFlechaN.png";
import FlechaGris from "../../assets/iconos/IconoFlechaG.png";
import CerrarSesion from "../../assets/iconos/IconoCerrarSesionN.png";
import Buscar from "../../assets/iconos/IconoBuscarG.png";

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
      <div class="lotes-admin">
  <div class="administracion-menu">
    <div class="secci-n-salir-default">
      <div class="frame-427319459">
        <img class="icono" src="icono0.svg" />
        <div class="cerrar-sesi-n">Cerrar Sesión</div>
      </div>
    </div>
    <div class="frame-427319589">
      <div class="frame-427319591">
        <div class="divisor-menu">
          <div class="line-1"></div>
          <div class="administrador">ADMINISTRADOR</div>
          <div class="line-2"></div>
        </div>
        <div class="frame-427319467">
          <div class="component-64">
            <div class="frame-427319616">
              <div class="frame-4273194592">
                <div class="icono2">
                  <img class="group" src="group0.svg" />
                </div>
                <div class="inicio">Inicio</div>
              </div>
              <img class="icono3" src="icono2.svg" />
            </div>
          </div>
          <div class="component-66">
            <div class="frame-427319616">
              <div class="frame-4273194592">
                <div class="icono2">
                  <img
                    class="folder-open-outlined"
                    src="folder-open-outlined0.svg"
                  />
                </div>
                <div class="inicio2">Lotes</div>
              </div>
              <img class="icono4" src="icono4.svg" />
            </div>
          </div>
          <div class="component-65">
            <div class="frame-427319616">
              <div class="frame-4273194592">
                <div class="icono2">
                  <img class="group2" src="group1.svg" />
                </div>
                <div class="inicio">Equipo</div>
              </div>
              <img class="icono5" src="icono6.svg" />
            </div>
          </div>
        </div>
      </div>
      <div class="frame-4273195892">
        <div class="frame-427319590">
          <div class="divisor-menu">
            <div class="line-1"></div>
            <div class="administrador">TRABAJADOR</div>
            <div class="line-2"></div>
          </div>
          <div class="component-63">
            <div class="frame-4273196162">
              <div class="frame-4273194592">
                <img class="icono6" src="icono7.svg" />
                <div class="inicio2">Registrar</div>
              </div>
            </div>
          </div>
          <div class="inicio-button">
            <div class="frame-427319616">
              <div class="frame-4273194592">
                <div class="icono2">
                  <img class="fi-sr-picture" src="fi-sr-picture0.svg" />
                </div>
                <div class="inicio2">Master</div>
              </div>
              <img class="icono7" src="icono9.svg" />
            </div>
          </div>
          <div class="component-652">
            <div class="frame-4273196162">
              <div class="frame-4273194592">
                <div class="icono2">
                  <img class="fi-sr-box" src="fi-sr-box0.svg" />
                </div>
                <div class="inicio3">Almacén</div>
              </div>
            </div>
          </div>
          <div class="component-662">
            <div class="frame-4273196162">
              <div class="frame-4273194592">
                <div class="icono2">
                  <img class="fi-sr-broom" src="fi-sr-broom0.svg" />
                </div>
                <div class="inicio2">Restaurar</div>
              </div>
            </div>
          </div>
          <div class="inicio-button">
            <div class="frame-427319616">
              <div class="frame-4273194592">
                <div class="icono2">
                  <img
                    class="fi-sr-mode-landscape"
                    src="fi-sr-mode-landscape0.svg"
                  />
                </div>
                <div class="inicio2">Digitalizar</div>
              </div>
              <img class="icono8" src="icono13.svg" />
            </div>
          </div>
          <div class="component-68">
            <div class="frame-4273196162">
              <div class="frame-4273194592">
                <div class="icono2">
                  <div class="fi-sr-paper-plane">
                    <img class="group3" src="group2.svg" />
                  </div>
                </div>
                <div class="inicio2">Entregar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="logos">
      <div class="salvem-les-fotos">
        <span>
          <span class="salvem-les-fotos-span">
            SALVEM
            <br />
          </span>
          <span class="salvem-les-fotos-span2">LES FOTOS</span>
        </span>
      </div>
    </div>
  </div>
  <div class="frame-427319628">
    <div class="header">
      <div class="auto-layout-horizontal">
        <div class="component-53">
          <div class="placeholder">
            <div class="placeholder2">Ingresa el ID del lote</div>
          </div>
          <div class="icono2">
            <img class="search-outlined" src="search-outlined0.svg" />
          </div>
        </div>
      </div>
      <div class="auto-layout-horizontal2">
        <div class="auto-layout-horizontal3">
          <div class="component-70">
            <div class="frame-427319640">
              <img class="oc-on-the-laptop" src="oc-on-the-laptop0.svg" />
            </div>
          </div>
          <div class="dario-rodriguez">Dario Rodriguez</div>
        </div>
        <div class="icono2">
          <img class="fi-rr-exclamation" src="fi-rr-exclamation0.svg" />
        </div>
      </div>
    </div>
    <div class="frame-427319627">
      <div class="secci-n-lotes">
        <div class="header-columna-digitalizacion">
          <div class="frame-427319602">
            <div class="lbumes">Lotes</div>
            <img class="icono9" src="icono17.svg" />
          </div>
        </div>
        <div class="columna-auto">
          <div class="auto">
            <div class="component-55">
              <div class="alarm-details">
                <div class="left">
                  <div class="icono10">
                    <img
                      class="folder-open-outlined2"
                      src="folder-open-outlined1.svg"
                    />
                  </div>
                  <div class="frame-39955">
                    <div class="_0012-ft">0012-FT</div>
                    <div class="_2-lbumes">2 álbumes</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="component-552">
              <div class="alarm-details2">
                <div class="left2">
                  <div class="icono10">
                    <img
                      class="folder-open-outlined3"
                      src="folder-open-outlined2.svg"
                    />
                  </div>
                  <div class="frame-399552">
                    <div class="_0012-ft2">0012-FT</div>
                    <div class="_2-lbumes2">2 álbumes</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="component-55">
              <div class="alarm-details">
                <div class="left">
                  <div class="icono10">
                    <img
                      class="folder-open-outlined4"
                      src="folder-open-outlined3.svg"
                    />
                  </div>
                  <div class="frame-39955">
                    <div class="_0012-ft">0012-FT</div>
                    <div class="_2-lbumes">2 álbumes</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="component-55">
              <div class="alarm-details">
                <div class="left">
                  <div class="icono10">
                    <img
                      class="folder-open-outlined5"
                      src="folder-open-outlined4.svg"
                    />
                  </div>
                  <div class="frame-39955">
                    <div class="_0012-ft">0012-FT</div>
                    <div class="_2-lbumes">2 álbumes</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="component-56">
              <div class="alarm-details">
                <div class="left">
                  <div class="icono10">
                    <img
                      class="folder-open-outlined6"
                      src="folder-open-outlined5.svg"
                    />
                  </div>
                  <div class="frame-39955">
                    <div class="_0012-ft">0012-FT</div>
                    <div class="_2-lbumes">2 álbumes</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="component-57">
              <div class="alarm-details">
                <div class="left">
                  <div class="icono10">
                    <img
                      class="folder-open-outlined7"
                      src="folder-open-outlined6.svg"
                    />
                  </div>
                  <div class="frame-39955">
                    <div class="_0012-ft">0012-FT</div>
                    <div class="_2-lbumes">2 álbumes</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="component-58">
              <div class="alarm-details">
                <div class="left">
                  <div class="icono10">
                    <img
                      class="folder-open-outlined8"
                      src="folder-open-outlined7.svg"
                    />
                  </div>
                  <div class="frame-39955">
                    <div class="_0012-ft">0012-FT</div>
                    <div class="_2-lbumes">2 álbumes</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="component-59">
              <div class="alarm-details">
                <div class="left">
                  <div class="icono10">
                    <img
                      class="folder-open-outlined9"
                      src="folder-open-outlined8.svg"
                    />
                  </div>
                  <div class="frame-39955">
                    <div class="_0012-ft">0012-FT</div>
                    <div class="_2-lbumes">2 álbumes</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="component-60">
              <div class="alarm-details">
                <div class="left">
                  <div class="icono10">
                    <img
                      class="folder-open-outlined10"
                      src="folder-open-outlined9.svg"
                    />
                  </div>
                  <div class="frame-39955">
                    <div class="_0012-ft">0012-FT</div>
                    <div class="_2-lbumes">2 álbumes</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="component-61">
              <div class="alarm-details">
                <div class="left">
                  <div class="icono10">
                    <img
                      class="folder-open-outlined11"
                      src="folder-open-outlined10.svg"
                    />
                  </div>
                  <div class="frame-39955">
                    <div class="_0012-ft">0012-FT</div>
                    <div class="_2-lbumes">2 álbumes</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="component-62">
              <div class="alarm-details">
                <div class="left">
                  <div class="icono10">
                    <img
                      class="folder-open-outlined12"
                      src="folder-open-outlined11.svg"
                    />
                  </div>
                  <div class="frame-39955">
                    <div class="_0012-ft">0012-FT</div>
                    <div class="_2-lbumes">2 álbumes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="scroll">
            <div class="rectangle"></div>
            <div class="rectangle2"></div>
          </div>
        </div>
      </div>
      <div class="secci-n">
        <div class="header-columna-digitalizacion2">
          <div class="frame-427319602">
            <div class="lbumes">Tracking</div>
          </div>
        </div>
        <div class="columna-auto-digitalizacion">
          <div class="folder-principales">
            <div class="alarm-details3">
              <div class="left3">
                <div class="frame-399553">
                  <div class="m-ster">Registrar</div>
                </div>
                <img class="icono11" src="icono29.svg" />
              </div>
            </div>
          </div>
          <div class="folder-principales">
            <div class="alarm-details3">
              <div class="left3">
                <div class="frame-399553">
                  <div class="m-ster">Máster</div>
                </div>
                <img class="icono12" src="icono30.svg" />
              </div>
            </div>
          </div>
          <div class="folder-principales">
            <div class="alarm-details3">
              <div class="left3">
                <div class="frame-399553">
                  <div class="m-ster">Almacén</div>
                </div>
                <img class="icono13" src="icono31.svg" />
              </div>
            </div>
          </div>
          <div class="folder-principales">
            <div class="alarm-details3">
              <div class="left3">
                <div class="frame-399553">
                  <div class="m-ster">Restaurar</div>
                </div>
                <img class="icono14" src="icono32.svg" />
              </div>
            </div>
          </div>
          <div class="folder-principales2">
            <div class="alarm-details3">
              <div class="left3">
                <div class="frame-399553">
                  <div class="m-ster">Digitalizar</div>
                </div>
                <img class="icono15" src="icono33.svg" />
              </div>
            </div>
          </div>
          <div class="folder-principales">
            <div class="alarm-details3">
              <div class="left3">
                <div class="frame-399553">
                  <div class="m-ster">Montaje</div>
                </div>
                <img class="icono16" src="icono34.svg" />
              </div>
            </div>
          </div>
          <div class="folder-principales">
            <div class="alarm-details3">
              <div class="left3">
                <div class="frame-399553">
                  <div class="m-ster">Entrega</div>
                </div>
                <img class="icono17" src="icono35.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="secci-n2">
        <div class="header-columna-digitalizacion2">
          <div class="frame-427319602">
            <div class="lbumes">Fecha</div>
          </div>
        </div>
        <div class="fehcha-auto">
          <div class="folder-principales3">
            <div class="alarm-details3">
              <div class="left4">
                <div class="frame-399553">
                  <div class="m-ster">xx/xx/xx</div>
                </div>
              </div>
            </div>
          </div>
          <div class="folder-principales3">
            <div class="alarm-details3">
              <div class="left4">
                <div class="frame-399553">
                  <div class="m-ster">xx/xx/xxxx</div>
                </div>
              </div>
            </div>
          </div>
          <div class="folder-principales3">
            <div class="alarm-details3">
              <div class="left4">
                <div class="frame-399553">
                  <div class="m-ster">xx/xx/xxx</div>
                </div>
              </div>
            </div>
          </div>
          <div class="folder-principales3">
            <div class="alarm-details3">
              <div class="left4">
                <div class="frame-399553">
                  <div class="m-ster">xx/xx/xxxx</div>
                </div>
              </div>
            </div>
          </div>
          <div class="folder-principales3">
            <div class="alarm-details3">
              <div class="left4">
                <div class="frame-399553">
                  <div class="m-ster">xx/xx/xxxx</div>
                </div>
              </div>
            </div>
          </div>
          <div class="folder-principales3">
            <div class="alarm-details3">
              <div class="left4">
                <div class="frame-399553">
                  <div class="m-ster">--------</div>
                </div>
              </div>
            </div>
          </div>
          <div class="folder-principales3">
            <div class="alarm-details3">
              <div class="left4">
                <div class="frame-399553">
                  <div class="m-ster">--------</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="secci-n2">
        <div class="header-columna-digitalizacion2">
          <div class="frame-427319602">
            <div class="lbumes">Responsable</div>
          </div>
        </div>
        <div class="fechas-columna">
          <div class="folder-principales3">
            <div class="alarm-details3">
              <div class="left4">
                <div class="frame-399553">
                  <div class="m-ster">xxxxxxxxx-T</div>
                </div>
              </div>
            </div>
          </div>
          <div class="folder-principales3">
            <div class="alarm-details3">
              <div class="left4">
                <div class="frame-399553">
                  <div class="m-ster">xxxxxxxxx-T</div>
                </div>
              </div>
            </div>
          </div>
          <div class="folder-principales3">
            <div class="alarm-details3">
              <div class="left4">
                <div class="frame-399553">
                  <div class="m-ster">xxxxxxxxx-T</div>
                </div>
              </div>
            </div>
          </div>
          <div class="folder-principales3">
            <div class="alarm-details4">
              <div class="left5">
                <div class="frame-399553">
                  <div class="m-ster">xxxxxxxxx-T</div>
                </div>
              </div>
            </div>
          </div>
          <div class="folder-principales3">
            <div class="alarm-details3">
              <div class="left4">
                <div class="frame-399553">
                  <div class="m-ster">xxxxxxxxx-T</div>
                </div>
              </div>
            </div>
          </div>
          <div class="folder-principales3">
            <div class="alarm-details3">
              <div class="left4">
                <div class="frame-399553">
                  <div class="m-ster">--------</div>
                </div>
              </div>
            </div>
          </div>
          <div class="folder-principales3">
            <div class="alarm-details3">
              <div class="left4">
                <div class="frame-399553">
                  <div class="m-ster">--------</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="secci-n3">
        <div class="header-columna-digitalizacion3">
          <div class="frame-4273196022">
            <div class="lbumes">Información del lote</div>
          </div>
        </div>
        <div class="auto-info-lote"></div>
      </div>
    </div>
  </div>
</div>



</div>
  );
};

export default Lotesadmin;
