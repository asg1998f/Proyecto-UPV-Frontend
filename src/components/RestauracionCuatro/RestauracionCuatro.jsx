import "./RestauracionCuatro.scss";
import { useState } from "react";
import escobaamarilla from "../../assets/iconos/escobita.png";
import carpetaamarilla from "../../assets/iconos/IconoCarpetaRT.png";
import FlechaNavigate from "../FlechaNavigate/FlechaNavigate";
import Search from "antd/es/input/Search";

const foldersData = [
  { id: "0012-FT", albums: "2 álbumes" },
  { id: "0013-FT", albums: "3 álbumes" },
  { id: "0014-FT", albums: "1 álbum" },
  { id: "0015-FT", albums: "4 álbumes" },
  { id: "0016-FT", albums: "5 álbumes" },
  { id: "0017-FT", albums: "2 álbumes" },
];

const RestauracionCuatro = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFolders, setFilteredFolders] = useState(foldersData);

  const handleSearch = (value) => {
    setSearchTerm(value);
    setFilteredFolders(
      foldersData.filter((folder) =>
        folder.id.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className="container-rest-cuatro">
      <div className="area-1">
        <div className="flecha-navigate-rest">
          <FlechaNavigate/>
        </div>
        <div className="rest-logo-cuatro">
          <div className="titulo-rest-cuatro">
            <img src={escobaamarilla} />
            <p className="texto-rest-cuatro">Restaurar</p>
            </div>
            <div className="barra-id-rest-cuatro">
            <Search
              placeholder="Buscar por ID..."
              className='buscador-almacen'
            />
            </div>
        </div>
      </div>
      <div className="area-2">
        <p className="titulo2-rest-cuatro">Finalizar restauración</p>
        <div className="container-carpetas-rest">
          <div className="container-carpeta-ind">
          <div className="icono-rest">
          <img src={carpetaamarilla}></img>
          <div className="lote-rest-cuatro">
            <p className="cod-lote-rest-cuatro">
            0012-FT
            </p>
            <p className="cont-lote-rest-cuatro">
              2 álbumes
            </p>
            </div>
          </div>
          <div></div>
          <div></div>
          <div>
            <input 
            className="chbox-rest-cuatro"
            type="checkbox"
            name='restaurado'
            /* value={restaurado} */
            /* onChange={onChange} *//>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default RestauracionCuatro;
