import React from 'react';
import './Login.scss';
import rostro from '../../assets/images/rostroDestrozado.jpg';
import logo from '../../assets/iconos/LogoN.png'
import flecha from '../../assets/iconos/Flecha.png'

const Login = () => {
  return (
    <div class="log-in-desktop">
      <img
        className='rostro'
        class="chris-lee-70-l-1-t-dai-6-r-m-unsplash-2"
        src={rostro}
      />
      <div class="frame-427319587">
        <div class="frame-427319586">
          <div class="salvem-les-fotos">

            <span class="salvem-les-fotos-span2">
              <img
                className='logo'
                class=""
                src={logo}
              />
            </span>

          </div>
        </div>
        <div class="frame-57">
          <div class="group-5">
            <div class="dropdown-desktop-usuario">
              <div class="frame-427319577">
                <div class="frame-52">
                  <div class="usuario">Usuario</div>
                </div>
              </div>
              <div class="dropdown-desktop">
                <div class="boton">
                  <div class="wrapper">
                    <div class="text">
                      <div class="placeholder">Usuario</div>
                      <img class="vector" src={flecha} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contrase-a">
              <div class="frame-427319577">
                <div class="frame-52">
                  <div class="contrase-a2">Contraseña</div>
                </div>
              </div>
              <div class="frame-53">
                <div class="frame-58">
                  <div class="ejemplo">Ejemplo</div>
                </div>
              </div>
              <div class="frame-427319578">
                <div class="has-olvidado-tu-contrase-a">
                  ¿Has olvidado tu contraseña?
                </div>
              </div>
            </div>
            <div class="boton2">
              <div class="login">Iniciar sesión</div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Login