import React, { useEffect, useState } from "react";
import "./InicioAdmin.scss";
import Lote from "../../../assets/iconos/IconoCarpetaN.png";
import Buscar from "../../../assets/iconos/IconoBuscarG.png";

// Importamos los iconos de estados de los lotes
import CheckRegistrar from "../../../assets/iconos/IconoCheckR.png";
import CheckSelRegistrar from "../../../assets/iconos/IconoCheckSeleccionadoR.png";
import CheckMaster from "../../../assets/iconos/IconoCheckM.png";
import CheckSelMaster from "../../../assets/iconos/IconoCheckSeleccionadoM.png";
import CheckAlmacen from "../../../assets/iconos/IconoCheckA.png";
import CheckSelAlmacen from "../../../assets/iconos/IconoCheckSeleccionadoA.png";
import CheckRestaurar from "../../../assets/iconos/IconoCheckRt.png";
import CheckSelRestaurar from "../../../assets/iconos/IconoCheckSeleccionadoRt.png";
import CheckDigitalizar from "../../../assets/iconos/IconoCheckD.png";
import CheckSelDigitalizar from "../../../assets/iconos/IconoCheckSeleccionadoD.png";
import CheckMontaje from "../../../assets/iconos/IconoCheckMt.png";
import CheckSelMontaje from "../../../assets/iconos/IconoCheckSeleccionadoMt.png";
import CheckEntrega from "../../../assets/iconos/IconoCheckE.png";
import CheckSelEntrega from "../../../assets/iconos/IconoCheckSeleccionadoE.png";

import { useDispatch, useSelector } from "react-redux";
import { getAllLotes, getByNregistro } from "../../../features/lote/loteSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { lotes } = useSelector((state) => state.lotes);
  const [lote, setLote] = useState("");

  // Estado para controlar qué imágenes están seleccionadas
  const [selectedStates, setSelectedStates] = useState({});

  useEffect(() => {
    dispatch(getAllLotes());
  }, []);

  useEffect(() => {
    if (lote.length === 0) {
      dispatch(getAllLotes());
    }
  }, [lote]);

  const handleSearchChange = (e) => {
    setLote(e.target.value);
  };

  const handleImageClick = (loteId, tipo) => {
    setSelectedStates((prevState) => ({
      ...prevState,
      [loteId]: {
        ...prevState[loteId],
        [tipo]: !prevState[loteId]?.[tipo], // Alternar entre true y false
      },
    }));
  };

  const getImageSrc = (loteId, tipo, normal, seleccionado) => {
    return selectedStates[loteId]?.[tipo] ? seleccionado : normal;
  };

  return (
    <div className="fondo2">
      <div className="container">
        <header>
          <h1>Tracking de lotes</h1>
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
              {lotes.map((lote) => (
                <tr key={lote.nRegistro} className="filaLote">
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
                    <img
                      src={getImageSrc(lote.nRegistro, "Registrar", CheckRegistrar, CheckSelRegistrar)}
                      alt="Check Registrar"
                      onClick={() => handleImageClick(lote.nRegistro, "Registrar")}
                    />
                  </td>
                  <td>
                    <img
                      src={getImageSrc(lote.nRegistro, "Master", CheckMaster, CheckSelMaster)}
                      alt="Check Máster"
                      onClick={() => handleImageClick(lote.nRegistro, "Master")}
                    />
                  </td>
                  <td>
                    <img
                      src={getImageSrc(lote.nRegistro, "Almacen", CheckAlmacen, CheckSelAlmacen)}
                      alt="Check Almacén"
                      onClick={() => handleImageClick(lote.nRegistro, "Almacen")}
                    />
                  </td>
                  <td>
                    <img
                      src={getImageSrc(lote.nRegistro, "Restaurar", CheckRestaurar, CheckSelRestaurar)}
                      alt="Check Restaurar"
                      onClick={() => handleImageClick(lote.nRegistro, "Restaurar")}
                    />
                  </td>
                  <td>
                    <img
                      src={getImageSrc(lote.nRegistro, "Digitalizar", CheckDigitalizar, CheckSelDigitalizar)}
                      alt="Check Digitalizar"
                      onClick={() => handleImageClick(lote.nRegistro, "Digitalizar")}
                    />
                  </td>
                  <td>
                    <img
                      src={getImageSrc(lote.nRegistro, "Montaje", CheckMontaje, CheckSelMontaje)}
                      alt="Check Montaje"
                      onClick={() => handleImageClick(lote.nRegistro, "Montaje")}
                    />
                  </td>
                  <td>
                    <img
                      src={getImageSrc(lote.nRegistro, "Entrega", CheckEntrega, CheckSelEntrega)}
                      alt="Check Entregar"
                      onClick={() => handleImageClick(lote.nRegistro, "Entrega")}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;