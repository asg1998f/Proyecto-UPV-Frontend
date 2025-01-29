import { useNavigate } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/Logo.png"
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="nav-top-bar-desktop">
      <div className="logo-container">
        <img className="logo-header" src={logo} alt="Salvem les Fotos" />
      </div>
      <div className="frame-11">
  <div className="nav-item">
    {/* Usamos <a href="#nuestro-proceso"> para enlazar a la sección correspondiente */}
    <a href="#nuestro-proceso" className="nav-item-content">
      <div className="nav-content">Nuestro proceso</div>
    </a>
  </div>
  <div className="nav-item">
  <a href="#nuestra-historia" className="nav-item-content">
    <div className="nav-content">Nuestra historia</div>
  </a>
</div>

<div className="nav-item">
  <a href="#preguntas-frecuentes" className="nav-item-content">
    <div className="nav-content">Preguntas frecuentes</div>
  </a>
</div>

<div className="nav-item">
  <a href="#donde-encontrarnos" className="nav-item-content">
    <div className="nav-content">Dónde encontrarnos</div>
  </a>
</div>
</div>
</div>
  );
};
export default Header;
