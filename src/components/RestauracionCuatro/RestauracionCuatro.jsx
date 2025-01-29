import "./RestauracionCuatro.scss";
import { useState } from "react";
import Broom from "../../assets/images/escobita.png";
import Folder from "../../assets/iconos/IconoCarpetaRT.png";
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
    <div className="restauraci-n">
      <div className="home">
        <div className="logoRestauracion4">
          <FlechaNavigate />
          <div className="frame-427319580Restauracion4">
            <div className="frame-427319553">
              <div className="icono">
                <img className="fi-sr-broom" src={Broom} alt="Broom" />
              </div>
              <div className="restauraci-n2">Restaurar</div>
            </div>
            <Search
              placeholder="Buscar por ID..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="frame-427319548">
          <div className="finalizar-restauraci-n">Finalizar restauración</div>
          <div className="cards">
            {filteredFolders.length > 0 ? (
              filteredFolders.map((folder, index) => (
                <div key={index} className="component-folder" style={{ marginBottom: "50px" }}>
                  <div className="alarm-details">
                    <div className="alarm-details2">
                      <div className="alarm-details3">
                        <div className="left">
                          <div className="icono3">
                            <img
                              className="folder-open-outlined"
                              src={Folder}
                              alt="Folder"
                            />
                          </div>
                          <div className="frame-39955">
                            <div className="_0012-ft">{folder.id}</div>
                            <div className="_2-lbumes">{folder.albums}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="checkbox-container">
                      <input type="checkbox" id={`item${index}`} name={`item${index}`} />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">No se encontraron coincidencias</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestauracionCuatro;
