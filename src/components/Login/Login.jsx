import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <div class="container">
      <div class="logincontainer">

        {/* imagen apartada */}
        <img
          class="fotoderecha"
          src="chris-lee-70-l-1-t-dai-6-r-m-unsplash-20.png"
        />

        <div class="containerizquierda">
          <div class="titulo">
            <div class="salvem-les-fotos">
              <span>
                <span class="salvem-les-fotos-span">
                  SALVEM
                  <br />
                </span>
                <span class="salvem-les-fotos-span2">LES FOTOS</span>
              </span>
            </div>
          </div>
          <div class="divform">
            <div class="divform2">
              <div class="userinput">
                <div class="divuser">
                  <div class="user">
                    <div class="usuario">Usuario</div>
                  </div>
                </div>
                <div class="desplaguebaleuser">
                  <div class="botonuser">
                    <div class="wrapper">
                      <div class="text">
                        <div class="placeholder">Usuario</div>
                        <img class="vector" src="vector0.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="divpassword">
                <div class="password">
                  <div class="passwordletras">
                    <div class="password">Contraseña</div>
                  </div>
                </div>
                <div class="registropassword">
                  <div class="ejemplodiv">
                    <div class="ejemplo">Ejemplo</div>
                  </div>
                </div>
                <div class="frame-427319578">
            <div class="has-olvidado-tu-contrase-a">
              ¿Has olvidado tu contraseña?
            </div>
          </div>
              </div>
              <div class="loginboton">
                <div class="login">Login</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Login