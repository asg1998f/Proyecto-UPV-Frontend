import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";




const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="titulo-salvem-les-fotos">
  <div className="logo-text">Salvem les Fotos</div>



      <div className="frame-11">
        <div className="nav-item" onClick={() => navigate("/nuestro-proceso")}>
          <div className="nav-item-content">
            <div className="nav-content">Nuestro proceso</div>
          </div>
        </div>

        <div className="nav-item" onClick={() => navigate("/nuestra-historia")}>
          <div className="nav-item-content">
            <div className="nav-content">Nuestra historia</div>
          </div>
        </div>

        <div className="nav-item" onClick={() => navigate("/faq")}>
          <div className="nav-item-content">
            <div className="nav-content">Preguntas frecuentes</div>
          </div>
        </div>

        <div
          className="nav-item"
          onClick={() => navigate("/ubicacion-horarios")}
        >
          <div className="nav-item-content">
            <div className="nav-content">Dónde encontrarnos</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
