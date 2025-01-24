import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/Logo.png"




const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="nav-top-bar-desktop">
      {/* Logo */}
      <div className="logo-container">
        <img className="logo" src={logo} alt="Salvem les Fotos" />
      </div>

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