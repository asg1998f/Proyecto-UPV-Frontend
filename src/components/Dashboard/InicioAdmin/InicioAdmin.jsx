import React, { useState } from "react";
import "./InicioAdmin.scss";
import Logo from "../../../assets/iconos/LogoN.png";
import LogoUsuario from "../../../assets/iconos/LogoUsuario.png";
import Registro from "../../../assets/iconos/IconoRegistrarR.png";
import Master from "../../../assets/iconos/IconoMasterA.png";
import MasterFlecha from "../../../assets/iconos/IconoFlechaM.png";
import Almacen from "../../../assets/iconos/IconoAlmacenA.png";
import Restaurar from "../../../assets/iconos/IconoRestaurarR.png";
import Digitalizar from "../../../assets/iconos/IconoDigitalizarV.png";
import DigitalizarFlecha from "../../../assets/iconos/IconoFlechaV.png";
import Entregar from "../../../assets/iconos/IconoEntregarE.png";
import InicioG from "../../../assets/iconos/IconoInicioG.png";
import Inicio from "../../../assets/iconos/IconoInicioN.png";
import Lotes from "../../../assets/iconos/IconoCarpetaN.png";
import LotesG from "../../../assets/iconos/IconoCarpetaG.png";
import Equipo from "../../../assets/iconos/IconoEquipoN.png";
import EquipoG from "../../../assets/iconos/IconoEquipoG.png";
import FlechaNegra from "../../../assets/iconos/IconoFlechaN.png";
import FlechaGris from "../../../assets/iconos/IconoFlechaG.png";
import CerrarSesion from "../../../assets/iconos/IconoCerrarSesionN.png";
import Lote from "../../../assets/iconos/IconoCarpetaN.png";
import Buscar from "../../../assets/iconos/IconoBuscarG.png";
import CheckRegistrar from "../../../assets/iconos/IconoCheckR.png";
import CheckMaster from "../../../assets/iconos/IconoCheckM.png";
import CheckAlmacen from "../../../assets/iconos/IconoCheckA.png";
import CheckRestaurar from "../../../assets/iconos/IconoCheckRt.png";
import CheckDigitalizar from "../../../assets/iconos/IconoCheckD.png";
import CheckMontaje from "../../../assets/iconos/IconoCheckMt.png";
import CheckEntrega from "../../../assets/iconos/IconoCheckE.png";

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
        <div className="container">
          <header>
            <div className="header">
              <div className="auto-layout-horizontal"></div>
              <div className="auto-layout-horizontal2">
                <div className="auto-layout-horizontal3">
                  <div className="component-70"></div>
                  <select className="dropdown">
                    <img src={LogoUsuario} alt="Laptop" />
                    <option value="opcion1">Dario Rodriguez</option>
                  </select>
                </div>
              </div>
            </div>

            <h1>Tracking de lotes</h1>
            <div className="progress-bar">
              <div className="progress" style={{ width: "65%" }}></div>
            </div>
            <p className="progress-text">65% completado</p>
          </header>

          <div className="search-bar">
            <input id="inputBuscar" type="text" placeholder="Ingresa el ID" />
            <button>
              <img src={Buscar} alt="Search" />
            </button>
          </div>

          <table>
            <thead>
              <tr>
                <th>ID LOTE</th>
                <th>Registrar</th>
                <th>Máster</th>
                <th>Almacén</th>
                <th>Restaurar</th>
                <th>Digitalizar</th>
                <th>Montaje</th>
                <th>Entregar</th>
              </tr>
            </thead>
            <tbody>
              {/* Repetir esta fila para cada lote */}
              <tr className="filaLote">
                <td>
                  <div className="lot-info">
                    <img src={Lote} alt="Folder" />
                    <div className="nombreLote">
                      <p className="parrafo-lote">0012-FT</p>
                      <p>2 álbumes, 1 negativo, 2 marcos</p>
                    </div>
                  </div>
                </td>
                <td>
                  <img src={CheckRegistrar} alt="Check Rojo" />
                </td>
                <td>
                  <img src={CheckMaster} alt="Check Rojo" />
                </td>
                <td>
                  <img src={CheckAlmacen} alt="Check Rojo" />
                </td>
                <td>
                  <img src={CheckRestaurar} alt="Check Rojo" />
                </td>
                <td>
                  <img src={CheckDigitalizar} alt="Check Rojo" />
                </td>
                <td>
                  <img src={CheckMontaje} alt="Check Rojo" />
                </td>
                <td>
                  <img src={CheckEntrega} alt="Check Rojo" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
