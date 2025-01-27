import React from 'react';
import './Landing.scss';
import foto from '../../assets/random2.png';

const Landing = () => {
  
  return (
    <>
      {/* Imagen al lado del texto */}
      <div className="image-container foto">
        <img className="foto" src={foto} alt="Imagen" />
      </div>

      <section className="informacion-primer-fold">
        <header className="section-text">
          <h1 className="headline">
            <div className="top">
              <div className="facultad-de-bellas-artes">FACULTAD DE BELLAS ARTES UPV</div>
              <div className="titulosalvem-les-fotos">Salvem les fotos</div>
            </div>
            <p className="paragraph">
              Recuperamos tus fotografías familiares dañadas por la DANA de manera solidaria, gracias al apoyo de los voluntarios de la Universitat Politècnica de València.
            </p>
          </h1>
          <button className="secondary-btn">
            <span className="btn-text">Dónde encontrarnos</span>
          </button>
        </header>

        <div className="datos">
          <div className="lbumes">
            <div className="_1-800">1.800</div>
            <div className="paragraph2">Álbumes</div>
          </div>
          <div className="fotograf-a">
            <div className="_230-000">230.000</div>
            <div className="paragraph2">Fotografías</div>
          </div>
          <div className="intervenciones">
            <div className="_15-000">15.000</div>
            <div className="paragraph3">Intervenciones y digitalizaciones</div>
          </div>
          <div className="voluntarios">
            <div className="_130">130</div>
            <div className="paragraph3">Voluntarios</div>
          </div>
        </div>
      </section>

      <nav className="navbar-top">
        <div className="recordar-del-lat-n-recordis-volver-a-pasar-por-el-coraz-n">
          <span>
            <span className="recordar-del-lat-n-recordis-volver-a-pasar-por-el-coraz-n-span">Recordar</span>
            <span className="recordar-del-lat-n-recordis-volver-a-pasar-por-el-coraz-n-span2">del Latín</span>
            <span className="recordar-del-lat-n-recordis-volver-a-pasar-por-el-coraz-n-span4">recordis</span>
            <span className="recordar-del-lat-n-recordis-volver-a-pasar-por-el-coraz-n-span5">, volver a pasar por el</span>
            <span className="recordar-del-lat-n-recordis-volver-a-pasar-por-el-coraz-n-span6">corazón.</span>
          </span>
        </div>
      </nav>

      <section className="nuestro-proceso">
      <div class="titulo-nuestroproceso">
    <div class="headline">
      <div class="salvem-les-fotos">Nuestro proceso</div>
      <div
        class="si-quieres-recuperar-tus-im-genes-da-adas-por-la-dana-de-manera-gratuita-tr-enos-tus-lbumes-o-im-genes-a-la-facultad-de-bellas-artes-de-la-upv"
      >
        Si quieres recuperar tus imágenes dañadas por la DANA de manera
        gratuita, tráenos tus álbumes o imágenes a la Facultad de Bellas Artes
        de la UPV.
      </div>
    </div>
  </div>
  <div class="proceso">
    <div class="frame-60">
      <img class="picture-outlined" src="picture-outlined0.svg" />
      <div class="frame-57">
        <div class="tr-enos-tu-lbum-y-recuerdos">
          Tráenos tu álbum y recuerdos
        </div>
        <div
          class="recepcionamos-y-organizamos-las-fotograf-as-recibidas-y-las-almacenamos-hasta-su-limpieza"
        >
          Recepcionamos y organizamos las fotografías recibidas y las
          almacenamos hasta su limpieza.
        </div>
      </div>
    </div>
    <div class="frame-61">
      <img class="clear-outlined" src="clear-outlined0.svg" />
      <div class="frame-56">
        <div class="restauramos-los-da-os">Restauramos los daños</div>
        <div
          class="lavado-limpieza-e-higienizaci-n-mediante-diferentes-procesos-para-restaurar-los-da-os"
        >
          Lavado, limpieza e higienización mediante diferentes procesos para
          restaurar los daños.
        </div>
      </div>
    </div>
    <div class="frame-63">
      <img class="laptop-outlined" src="laptop-outlined0.svg" />
      <div class="frame-59">
        <div class="digitalizamos-las-im-genes">Digitalizamos las imágenes</div>
        <div
          class="digitalizamos-tus-fotograf-as-restauradas-para-que-las-tengas-en-ambos-formatos"
        >
          Digitalizamos tus fotografías restauradas para que las tengas en ambos
          formatos.
        </div>
      </div>
    </div>
    <div class="frame-62">
      <img class="hourglass-outlined" src="hourglass-outlined0.svg" />
      <div class="frame-58">
        <div class="montamos-en-orden-cronol-gico">
          Montamos en orden cronológico
        </div>
        <div
          class="montamos-tus-fotograf-as-restauradas-en-el-mismo-orden-que-tus-lbumes-originales"
        >
          Montamos tus fotografías restauradas en el mismo orden que tus álbumes
          originales.
        </div>
      </div>
    </div>
    <div class="frame-562">
      <div class="frame-64">
        <img class="gift-outlined" src="gift-outlined0.svg" />
        <div class="te-devolvemos-tus-recuerdos">
          Te devolvemos tus recuerdos
        </div>
        <div
          class="te-entregamos-las-fotograf-as-que-hemos-podido-recuperar-para-conservar-tus-recuerdos"
        >
          Te entregamos las fotografías que hemos podido recuperar, para
          conservar tus recuerdos.
        </div>
      </div>
    </div>
  </div>
  <div class="im-genes">
    <div class="frame-74">
      <img
        class="captura-de-pantalla-2025-01-22-a-las-13-06-16-1"
        src="captura-de-pantalla-2025-01-22-a-las-13-06-16-10.png"
      />
      <div class="foto-antes-de-la-restauraci-n">
        Foto antes de la restauración.
      </div>
    </div>
    <div class="frame-75">
      <img
        class="captura-de-pantalla-2025-01-22-a-las-13-06-16-2"
        src="captura-de-pantalla-2025-01-22-a-las-13-06-16-20.png"
      />
      <div class="foto-despu-s-de-la-restauraci-n">
        Foto después de la restauración.
      </div>
    </div>
  </div>
  </section>

  <div
  class="mensaje"
>
  <div class="parrafo">
    ‘’No podíamos quedarnos de brazos cruzados’’
  </div>
  <div class="firma">
    Ana López, responsable de Restauración
  </div>
</div>

    <section className="nuestra-historia">
      <header className="titulo-nuestrahistoria">
        <h2 className="nuestra-historia2">Nuestra historia</h2>
        <p className="descripcion-nuestrahistoria">
          El proyecto RECUPERAR LAS MEMORIAS, impulsado por la Facultad de Bellas Artes de la Universitat Politècnica de
          València, tiene como objetivo fundamental recuperar las fotografías familiares y la memoria de varias generaciones
          de familias valencianas que el barro no consiguió borrar.
        </p>
      </header>
    </section>


      <section className="ubicacion-y-horarios">
        <h2 className="secondary-headline">Ubicación y horarios</h2>
        <div className="frame-62">
          <div className="horarios-y-ubicacion">
            <div className="card-ubicacion-y-horarios">
              <img className="icon-cloud-outlined" src="icon-cloud-outlined0.svg" alt="Horarios" />
              <div className="texto-dire">
                <h3 className="direccion">Horarios</h3>
                <div className="direccion-detalle">
                  <p>Lunes a viernes: 7:30 hasta las 21:00</p>
                  <p>Sábados: 8:00 hasta las 14:00</p>
                  <p>Domingo: Cerrado</p>
                </div>
              </div>
            </div>
            <div className="card-ubicacion-y-horarios">
              <img className="icon-cloud-outlined" src="icon-cloud-outlined1.svg" alt="Dirección" />
              <div className="texto-dire">
                <h3 className="direccion">Dirección</h3>
                <p>Camino de Vera, s/n, Edificio 3M - 3N, 46022 Valencia</p>
              </div>
            </div>
          </div>
          <div className="google-maps-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14..."
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: "0" }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
              title="Ubicación"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
