import React, { useState } from 'react';
import './Entrega.scss';
import FlechaNavigate from '../FlechaNavigate/FlechaNavigate';
import carpetanaranja from '../../assets/iconos/IconoCarpetaE.png';
import IconoCheckSeleccionadoE from '../../assets/iconos/IconoCheckSeleccionadoE.png';
import Search from 'antd/es/input/Search';
import { useNavigate } from 'react-router-dom';


const Entrega = (props) => {
  const [showCard, setShowCard] = useState(true); // Estado para controlar la visibilidad de la tarjeta
   const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
  
    // Datos simulados de lotes
    const lotesPendientes = [
      { id: "0000-AS", contenido: "3 albums" },
      
    ];
  
    const lotesAlmacenados = [
      { id: "0002-CS", contenido: "2 cuadros" },
    
    ];
  
    const filteredPendientes = lotesPendientes.filter((lote) =>
      lote.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const filteredAlmacenados = lotesAlmacenados.filter((lote) =>
      lote.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const handleCarpetaClick = (id) => {
      navigate(`/añadir-ubicacion/${id}`);
    };

  return (
    <div className="home">
          <div className='tramo-1'>
        <div className='flecha-navigate'>
          <FlechaNavigate />
        </div>
        <div className='almacen-1'>
          <div className='titulo-almacen'>
            <img className="carpeta-rosa" src={carpetanaranja} />
            <p className="almacen-texto">Entrega</p>
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
  
      <div className="frame-427319548">
        <div className="pendiente-de-entregar">Pendiente de entregar</div>
        <div className="cards">
          {showCard && (
            <div
              className="component-59"
              onClick={() => setShowCard(false)} 
            >
              <div className="alarm-details">
                <div className="alarm-details2">
                  <div className="alarm-details3">
                    <div className="left">
                      <div className="icono3">
                        <img
                          className="folder-open-outlined"
                          src={carpetanaranja}
                          alt="Folder Icon"
                        />
                      </div>
                      <div className="frame-39955">
                        <div className="_0012-ft">0012-FT</div>
                        <div className="_2-lbumes">2 álbumes</div>
                      </div>
                    </div>
                  </div>
                </div>
                <img className="icono4" src={IconoCheckSeleccionadoE} alt="Check Icon" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Entrega;
