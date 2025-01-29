import React, { useEffect, useState } from "react";
import "./InicioAdmin.scss";
import LogoUsuario from "../../../assets/iconos/LogoUsuario.png";
import Lote from "../../../assets/iconos/IconoCarpetaN.png";
import Buscar from "../../../assets/iconos/IconoBuscarG.png";
import CheckRegistrar from "../../../assets/iconos/IconoCheckR.png";
import CheckMaster from "../../../assets/iconos/IconoCheckM.png";
import CheckAlmacen from "../../../assets/iconos/IconoCheckA.png";
import CheckRestaurar from "../../../assets/iconos/IconoCheckRt.png";
import CheckDigitalizar from "../../../assets/iconos/IconoCheckD.png";
import CheckMontaje from "../../../assets/iconos/IconoCheckMt.png";
import CheckEntrega from "../../../assets/iconos/IconoCheckE.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllLotes, getByNregistro } from "../../../features/lote/loteSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { lotes } = useSelector((state) => state.lotes);
  const [lote, setLote] = useState("");

  useEffect(() => {
    dispatch(getAllLotes());
  }, []);
  
  useEffect(() => {
    if (lote.length == 0) {
      dispatch(getAllLotes());
    }
  }, [lote]);

  // Función para manejar la búsqueda en tiempo real
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setLote(value);
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
                  <div className="component-70">
                    <img src={LogoUsuario} alt="" />
                  </div>
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
            <input
              id="inputBuscar"
              type="text"
              placeholder="Ingresa el ID"
              value={lote}
              onChange={handleSearchChange}
            />
            <button onClick={() => dispatch(getByNregistro(lote))}>
              <img src={Buscar} alt="Search" />
            </button>
          </div>
          <div className="table-container">
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
                {lotes.map((lote) => {
                  return (
                    <>
                      <tr className="filaLote">
                        <td>
                          <div className="lot-info">
                            <img src={Lote} alt="Folder" />
                            <div className="nombreLote">
                              <p className="parrafo-lote">{lote.nRegistro}</p>
                              <p className="elementosLote">
                                {lote.subCarpetas.length} elementos
                              </p>
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
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
