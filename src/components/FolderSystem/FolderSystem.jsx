import FolderColumn from "./FolderColumn";
import "./FolderSystem.scss";
import searchIcon from "../../assets/iconos/IconoBuscarG.png";
import orangeFolder from "../../assets/iconos/IconoCarpetaE.png";
import blueFolder from "../../assets/iconos/IconoCarpetaM.png";
import lightGreenFolder from "../../assets/iconos/IconoCarpetaRT.png";
import darkGreenFolder from "../../assets/iconos/IconoCarpetaA.png";
import silverFolder from "../../assets/iconos/IconoCarpetaG.png";
import blackFolder from "../../assets/iconos/IconoCarpetaN.png";
import profile from "../../assets/iconos/IconoEquipoN.png";
import ghost from "../../assets/iconos/ghost.svg";

import Logo from "../../assets/iconos/LogoN.png"; // Logo
import Registro from "../../assets/iconos/IconoRegistrarR.png"; // Registro Icon
import Master from "../../assets/iconos/IconoMasterA.png"; // Master Icon
import MasterFlecha from "../../assets/iconos/IconoFlechaM.png"; // Flecha for Master
import Almacen from "../../assets/iconos/IconoAlmacenA.png"; // Almacén Icon
import Restaurar from "../../assets/iconos/IconoRestaurarR.png"; // Restaurar Icon
import Digitalizar from "../../assets/iconos/IconoDigitalizarV.png"; // Digitalizar Icon
import Entregar from "../../assets/iconos/IconoEntregarE.png"; // Entregar Icon
import InicioG from "../../assets/iconos/IconoInicioG.png"; // Inactive Inicio Icon
import Inicio from "../../assets/iconos/IconoInicioN.png"; // Active Inicio Icon
import Lotes from "../../assets/iconos/IconoCarpetaN.png"; // Active Lotes Icon
import LotesG from "../../assets/iconos/IconoCarpetaG.png"; // Inactive Lotes Icon
import Equipo from "../../assets/iconos/IconoEquipoN.png"; // Active Equipo Icon
import EquipoG from "../../assets/iconos/IconoEquipoG.png"; // Inactive Equipo Icon
import FlechaNegra from "../../assets/iconos/IconoFlechaN.png"; // Active Arrow
import FlechaGris from "../../assets/iconos/IconoFlechaG.png"; // Inactive Arrow
import CerrarSesion from "../../assets/iconos/IconoCerrarSesionN.png"; // Logout Icon
import { useState } from "react";

const lotesArray = [
  {
    icon: blueFolder,
    title: "0012-FT",
    subtitle: "2 albumes",
  },
  {
    icon: blueFolder,
    title: "0013-FT",
    subtitle: "2 albumes",
  },
  {
    icon: blueFolder,
    title: "0014-FT",
    subtitle: "2 albumes",
  },
  {
    icon: blueFolder,
    title: "0015-FT",
    subtitle: "2 albumes",
  },
  {
    icon: blueFolder,
    title: "0016-FT",
    subtitle: "2 albumes",
  },
];

const carpetasArray = [
  { icon: orangeFolder, title: "Formulario" },
  {
    icon: blueFolder,
    title: "Master",
  },
  {
    icon: lightGreenFolder,
    title: "Orden",
  },
  { icon: darkGreenFolder, title: "Digitalizar" },
  { icon: silverFolder, title: "Retoque" },
];

const albunesArray = [
  {
    icon: blackFolder,
    title: "Album 1",
  },
  {
    icon: blackFolder,
    title: "Album 2",
  },
  {
    icon: blackFolder,
    title: "Marco",
  },
  {
    icon: blackFolder,
    title: "Fotos sueltas",
  },
  {
    icon: blackFolder,
    title: "Negativos",
  },
  {
    icon: blackFolder,
    title: "Descartes",
  },
];

const FolderSystem = () => {
  const [activeButton, setActiveButton] = useState("Inicio");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <div className="page">
      <div className="layoutp">
        <div className="sideBarp">
          <aside className="sidebar">
            {/* Header with logo */}
            <div className="sideLogo">
              <img src={Logo} alt="Logo Salvem Les Fotos" id="logo" />
            </div>

            {/* ADMINISTRADOR Section */}
            <section className="section">
              <div className="divisor-menu">
                <div className="line-1"></div>
                <div className="administrador">ADMINISTRADOR</div>
                <div className="line-2"></div>
              </div>
              <nav className="menu admin-menu">
                {["Inicio", "Lotes", "Equipo"].map((button) => (
                  <button
                    key={button}
                    className={`menu-button ${
                      activeButton === button ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick(button)}
                  >
                    <img
                      src={
                        button === "Inicio"
                          ? activeButton === button
                            ? Inicio
                            : InicioG
                          : button === "Lotes"
                          ? activeButton === button
                            ? Lotes
                            : LotesG
                          : activeButton === button
                          ? Equipo
                          : EquipoG
                      }
                      alt={button}
                    />
                    <span>{button}</span>
                    <img
                      className="arrow"
                      src={activeButton === button ? FlechaNegra : FlechaGris}
                      alt="Ir"
                    />
                  </button>
                ))}
              </nav>
            </section>

            {/* TRABAJADOR Section */}
            <section className="section">
              <div className="divisor-menu">
                <div className="line-1"></div>
                <div className="administrador">TRABAJADOR</div>
                <div className="line-2"></div>
              </div>
              <nav className="menu worker-menu">
                {[
                  Registro,
                  Master,
                  Almacen,
                  Restaurar,
                  Digitalizar,
                  Entregar,
                ].map((icon, index) => (
                  <button key={index} className="menu-button centered">
                    <img src={icon} alt={`Option ${index + 1}`} />
                    <span>
                      {
                        [
                          "Registrar",
                          "Master",
                          "Almacén",
                          "Restaurar",
                          "Digitalizar",
                          "Entregar",
                        ][index]
                      }
                    </span>
                    <img className="arrow" src={MasterFlecha} alt="Ir" />
                  </button>
                ))}
              </nav>
            </section>

            {/* Logout Button */}
            <button className="logout">
              <img src={CerrarSesion} alt="Cerrar sesión" />
              <span>Cerrar Sesión</span>
              <img className="arrow" src={MasterFlecha} alt="Ir" />
            </button>
          </aside>
        </div>
        <div className="contentp">
          <div className="headerp">
            <div className="searchBarp">
              <input
                className="noneStyle"
                defaultValue={"Ingresa el Id o la fase"}
              ></input>
              <img className="iconp" src={searchIcon} />
            </div>
            <div className="dropdownp">
              <img src={profile} className="userPicture" />
              <p className="userTitle">Dario Rodriguez</p>
              <div className="bigIconp">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M6 8L12 14L18 8" />
                </svg>
              </div>
            </div>
          </div>
          <div className="columnsContainer">
            <div className="columnp">
              <FolderColumn columnName={"Lotes"} items={lotesArray} />
            </div>
            <div className="columnp">
              <FolderColumn columnName={"Carpetas"} items={carpetasArray} />
            </div>
            <div className="columnp">
              <FolderColumn columnName={"Albumes"} items={albunesArray} />
            </div>
            <div className="imgColumn">
              <div className="cardHeaderp">
                <h3 className="columnTitlep">Imagenes</h3>
              </div>
              <div className="linep"></div>
              <div className="noImages">
                <img src={ghost} className="ghostp" />
                <h2>Este album aun no tiene fotos</h2>
                <p className="subtitlep">Arrastra fotos aqui</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FolderSystem;
