import React, { useState } from "react";
import "./Dashboard.scss";
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

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState("Inicio");
  const [icons, setIcons] = useState({
    Inicio: "",
    Lotes: "",
    Equipo: "",
  });

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);

    // Actualiza los iconos según el botón clickeado (opcional)
    setIcons((prevIcons) => ({
      ...prevIcons,
      [buttonName]: "", // Cambia el icono aquí si es necesario
    }));
  };

  return (
    <>
      <div className="fondo2">
        <aside className="sidebar">
          <div className="sideLogo">
            <img src={Logo} alt="Logo Salvem Les Fotos" id="logo" />
          </div>
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
        </aside>
        <div className="container">{renderComponent()}</div>
      </div>
    </>
  );
};

export default Dashboard;
