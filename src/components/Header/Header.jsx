import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";

const Header = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const handleChange = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${text}`);
    } else {
      setText(e.target.value);
    }
  };

  const onLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="header">
      <img className="image-1" src="image-10.png" alt="Logo" />

      <div className="menu-item-horizontal">
        <div className="content">
          <div className="navigation-item">Home</div>
        </div>
      </div>

      <div className="menu-item-horizontal2">
        <div className="content2">
          <div className="navigation-item2">Nuestra historia</div>
        </div>
      </div>

      <div className="menu-item-horizontal2">
        <div className="content2">
          <div className="navigation-item2">Nuestro proceso</div>
        </div>
      </div>

      <div className="menu-item-horizontal2">
        <div className="content2">
          <div className="navigation-item2">FAQ</div>
        </div>
      </div>

      <div className="menu-item-horizontal2">
        <div className="content2">
          <div className="navigation-item2">Ubicación y horarios</div>
        </div>
      </div>

      <div className="menu-item-horizontal2">
        <div className="content2">
          <img className="icon-mail-outlined" src="icon-mail-outlined0.svg" alt="Mail Icon" />
          <div className="navigation-item2">Contacto</div>
        </div>
      </div>

      {user && (
        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      )}

      <input
        type="text"
        placeholder="Search..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleChange}
        className="search-input"
      />
    </div>
  );
};

export default Header;

