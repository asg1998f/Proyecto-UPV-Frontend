import React from 'react'
import FlechaNavigate from '../FlechaNavigate/FlechaNavigate'
import Search from 'antd/es/input/Search'
import carpetarosa from "../../assets/iconos/IconoCarpetaA.png"
import carpetaazul from "../../assets/iconos/IconoCarpetaM.png"
import flecharosa from "../../assets/iconos/IconoFlechaA.png"
import flechaazul from "../../assets/iconos/IconoFlechaM.png"
import "./Almacenaje.scss"

const Almacenaje = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Datos simulados de lotes
  const lotesPendientes = [
    { id: "0000-AS", contenido: "3 albums" },
    { id: "0001-BS", contenido: "5 libros" },
  ];

  const lotesAlmacenados = [
    { id: "0002-CS", contenido: "2 cuadros" },
    { id: "0003-DS", contenido: "1 escultura" },
  ];

  // Filtrar lotes según el término de búsqueda
  const filteredPendientes = lotesPendientes.filter((lote) =>
    lote.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAlmacenados = lotesAlmacenados.filter((lote) =>
    lote.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container-almacenaje'>
      <div className='tramo-1'>
          <div className='flecha-navigate'>
          <FlechaNavigate/>
          </div>
        <div className='almacen-1'>
          <div className='titulo-almacen'>
            <img className="carpeta-rosa" src={carpetarosa}/>
            <p classname="almacen-texto">Almacén</p>
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
        {filteredPendientes.map((lote) =>(   
          <div className='pendiente-almacenar'>
            <div className='container-pendientes'>
              <img className="carpeta-pendientes" src={carpetaazul}></img>
              <div className='codigo-lote'>
                <p className='font-lote'>{lote.id}</p>
                <p className='font-contenido-lote'>{lote.contenido}</p>
              </div>
              <div className='flecha-pendientes'>
              <img src={flechaazul} ></img>
              </div>
            </div>
          </div>
          ))}
          </div>
          <div className='tramo-3'>
          <p className='titulo-ubicado-almacen'>Ubicados almacén</p>
          <div className='pendiente-almacenar'>
            <div className='container-ubicado-almacen'>
              <img className="carpeta-ubicados" src={carpetarosa}></img>
              <div className='codigo-lote'>
              <p className='font-lote'>0000-AS</p>
              <p className='font-contenido-lote'>3 albums</p>
              </div>
            <div></div>
            <div></div>
              <img src={flecharosa} className='flecha-ubicados'></img>
            </div>
          </div>
          </div>
    </div>
  )
}

export default Almacenaje