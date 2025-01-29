import React, { useState } from "react";
import InicioAdmin from "./InicioAdmin/InicioAdmin";
import LoteAdmin from "./Lotesadmin/Lotesadmin";
// import EquipoAdmin from "./EquipoAdmin"; // Asegúrate de tener este componente
import "./Dashboard.scss";
import Logo from "../../assets/iconos/LogoN.png";
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

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState("Inicio");

  const renderComponent = () => {
    switch (activeButton) {
      case "Inicio":
        return <InicioAdmin />;
      case "Lotes":
        return <LoteAdmin />;
      // case "Equipo":
      //   return <EquipoAdmin />;
    }
  };

  return (
    <>
      <div className="fondo2">
        <aside className="sidebar">
          {/* Header con logo y nombre */}
          <div className="sideLogo">
            <img src={Logo} alt="Logo Salvem Les Fotos" id="logo" />
          </div>

          {/* Sección ADMINISTRADOR */}
          <section className="section">
            <nav className="menu admin-menu">
              <button
                className={`menu-button ${
                  activeButton === "Inicio" ? "active" : ""
                }`}
                onClick={() => setActiveButton("Inicio")}
              >
                <img
                  src={activeButton === "Inicio" ? Inicio : InicioG}
                  alt="Inicio"
                />
                <span>Inicio</span>
                <img
                  className="arrow"
                  src={activeButton === "Inicio" ? FlechaNegra : FlechaGris}
                  alt="Ir"
                />
              </button>
              <button
                className={`menu-button ${
                  activeButton === "Lotes" ? "active" : ""
                }`}
                onClick={() => setActiveButton("Lotes")}
              >
                <img
                  src={activeButton === "Lotes" ? Lotes : LotesG}
                  alt="Lotes"
                />
                <span>Lotes</span>
                <img
                  className="arrow"
                  src={activeButton === "Lotes" ? FlechaNegra : FlechaGris}
                  alt="Ir"
                />
              </button>
              <button
                className={`menu-button ${
                  activeButton === "Equipo" ? "active" : ""
                }`}
                onClick={() => setActiveButton("Equipo")}
              >
                <img
                  src={activeButton === "Equipo" ? Equipo : EquipoG}
                  alt="Equipo"
                />
                <span>Equipo</span>
                <img
                  className="arrow"
                  src={activeButton === "Equipo" ? FlechaNegra : FlechaGris}
                  alt="Ir"
                />
              </button>
            </nav>
          </section>

          {/* Sección TRABAJADOR */}
          <section className="section">
            <div class="divisor-menu">
              <div class="line-1"></div>
              <div class="administrador">TRABAJADOR</div>
              <div class="line-2"></div>
            </div>
            <nav className="menu worker-menu">
              <button className="menu-button centered">
                <img src={Registro} alt="Registrar" />
                <span>Registrar</span>
                <img
                  className="imagenTransparente"
                  src={MasterFlecha}
                  alt="Ir"
                />
              </button>
              <button className="menu-button centered">
                <img src={Master} alt="Master" />
                <span>Master</span>
                <img className="arrow" src={MasterFlecha} alt="Ir" />
              </button>
              <button className="menu-button centered">
                <img src={Almacen} alt="Almacén" />
                <span>Almacén</span>
                <img
                  className="imagenTransparente"
                  src={MasterFlecha}
                  alt="Ir"
                />
              </button>
              <button className="menu-button centered">
                <img src={Restaurar} alt="Restaurar" />
                <span>Restaurar</span>
                <img
                  className="imagenTransparente"
                  src={MasterFlecha}
                  alt="Ir"
                />
              </button>
              <button className="menu-button centered">
                <img src={Digitalizar} alt="Digitalizar" />
                <span>Digitalizar</span>
                <img className="arrow" src={DigitalizarFlecha} alt="Ir" />
              </button>
              <button className="menu-button centered">
                <img src={Entregar} alt="Entregar" />
                <span>Entregar</span>
                <img
                  className="imagenTransparente"
                  src={MasterFlecha}
                  alt="Ir"
                />
              </button>
            </nav>
          </section>

          {/* Botón de Cerrar sesión */}
          <button className="logout">
            <img src={CerrarSesion} alt="Cerrar sesión" />
            <span>Cerrar Sesión</span>
            <img className="imagenTransparente" src={MasterFlecha} alt="Ir" />
          </button>
        </aside>
        <div className="container">{renderComponent()}</div>
      </div>
    </>
  );
};

export default Dashboard;
