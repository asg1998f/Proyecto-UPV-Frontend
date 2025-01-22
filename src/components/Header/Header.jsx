import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import "./Header.scss"

const Header = () => { 
const navigate = useNavigate();

  return (
<div class="header">
  <img class="image-1" src="image-10.png" />
  <div class="menu-item-horizontal">
    <div class="content">
      <div class="navigation-item">Home</div>
    </div>
  </div>
  <div class="menu-item-horizontal2">
    <div class="content2">
      <div class="navigation-item2">Nuestra historia</div>
    </div>
  </div>
  <div class="menu-item-horizontal2">
    <div class="content2">
      <div class="navigation-item2">Nuestro proceso</div>
    </div>
  </div>
  <div class="menu-item-horizontal2">
    <div class="content2">
      <div class="navigation-item2">FAQ</div>
    </div>
  </div>
  <div class="menu-item-horizontal2">
    <div class="content2">
      <div class="navigation-item2">Ubicación y horarios</div>
    </div>
  </div>
  <div class="menu-item-horizontal2">
    <div class="content2">
      <img class="icon-mail-outlined" src="icon-mail-outlined0.svg" />
      <div class="navigation-item2">Contacto</div>
    </div>
  </div>
</div>

  );
};

export default Header;

