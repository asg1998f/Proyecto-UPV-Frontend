import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FlechaNavigate from '../FlechaNavigate/FlechaNavigate';
import Search from 'antd/es/input/Search';
import carpetarosa from "../../assets/iconos/IconoCarpetaA.png";
import carpetaazul from "../../assets/iconos/IconoCarpetaM.png";
import flecharosa from "../../assets/iconos/IconoFlechaA.png";
import flechaazul from "../../assets/iconos/IconoFlechaM.png";
import "./Almacenaje.scss";
import { useDispatch, useSelector } from 'react-redux';
import { getLotesAlmacenados, getLotesAlmacenajePendiente } from '../../features/lote/loteSlice';

const Almacenaje = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {almacenajeUbicado, almacenajePendiente} = useSelector((state)=> state.lotes)

  useEffect(() => {
    dispatch(getLotesAlmacenados())
    dispatch(getLotesAlmacenajePendiente())
      
    }, []);


  // Datos simulados de lotes
  const lotesPendientes = [
    { id: "0000-AS", contenido: "3 albums" },
    
  ];

  const lotesAlmacenados = [
    { id: "0002-CS", contenido: "2 cuadros" },
  
  ];

  // Filtrar lotes según el término de búsqueda
  const filteredPendientes = lotesPendientes.filter((lote) =>
    lote.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAlmacenados = lotesAlmacenados.filter((lote) =>
    lote.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCarpetaClick = (id) => {
    navigate(`/anadirUbicacion/${id}`);
  };

  return (
    <div className='container-almacenaje'>
      <div className='tramo-1'>
        <div className='flecha-navigate'>
          <FlechaNavigate />
        </div>
        <div className='almacen-1'>
          <div className='titulo-almacen'>
            <img className="carpeta-rosa" src={carpetarosa} />
            <p className="almacen-texto">Almacén</p>
          </div>
          <div className="navegador-almacen">
            <Search
              placeholder="Buscar por ID..."
              className='buscador-almacen'
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className='tramo-2'>
        <p className='titulo-pendiente'>Pendientes de almacenar</p>
        {almacenajePendiente.map((fase) => (
          <div className='pendiente-almacenar' key={fase._id}>
          <div
            className='container-ubicado-almacen'
            onClick={() => handleCarpetaClick(fase.loteId._id)}
            style={{ cursor: "pointer" }}
          >
            <img className="carpeta-ubicados" src={carpetarosa}></img>
            <div className='codigo-lote'>
              <p className='font-lote'>{fase.loteId.nRegistro}</p>
              {/* <p className='font-contenido-lote'>{lote.contenido}</p> */}
            </div>
            <div></div>
            <div></div>
            <img src={flecharosa} className='flecha-ubicados'></img>
          </div>
        </div>
        ))}
      </div>

      <div className='tramo-3'>
        <p className='titulo-ubicado-almacen'>Ubicados almacén</p>
        {almacenajeUbicado.map((fase) => (
          <div className='pendiente-almacenar' key={fase._id}>
            <div
              className='container-ubicado-almacen'
              onClick={() => handleCarpetaClick(fase.loteId._id)}
              style={{ cursor: "pointer" }}
            >
              <img className="carpeta-ubicados" src={carpetaazul}></img>
              <div className='codigo-lote'>
                <p className='font-lote'>{fase.loteId.nRegistro}</p>
                {/* <p className='font-contenido-lote'>{lote.contenido}</p> */}
              </div>
              <div></div>
              <div></div>
              <img src={flechaazul} className='flecha-ubicados'></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Almacenaje;
