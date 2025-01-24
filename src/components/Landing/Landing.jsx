import React from 'react';
import './Landing.scss';
import foto from '../../assets/random2.png';
import historia from '../../assets/historia.jpg';
import historia2 from '../../assets/historia2.jpg';
import imgpf from '../../assets/imgpf.png';
import { FaPhotoVideo, FaBroom, FaLaptop, FaHourglass, FaGift } from 'react-icons/fa';

const Landing = () => {
  return (
    <>
      {/* Imagen principal */}
      <div className="image-container">
        <img className="foto" src={foto} alt="Imagen principal" />
      </div>

      {/* Información inicial */}
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
          <div className="albumes">
            <div className="_1-800">1.800</div>
            <div className="paragraph2">Álbumes</div>
          </div>
          <div className="fotografias">
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

      {/* Barra de navegación superior */}
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

      {/* Nuestro proceso */}
      <section className="nuestro-proceso">
        <div className="titulo-nuestroproceso">
          <div className="headline">
            <div className="titulo-nuestroproceso">Nuestro proceso</div>
            <div className="parrafo-nuestroproceso">
              Si quieres recuperar tus imágenes dañadas por la DANA de manera gratuita, 
              tráenos tus álbumes o imágenes a la Facultad de Bellas Artes de la UPV.
            </div>
          </div>
        </div>

        <div className="proceso">
          <div className="frame">
            <FaPhotoVideo className="icon" />
            <div className="frame-text">
              <h3 className='titulo-iconos'>Tráenos tu álbum y recuerdos</h3>
              <p>Recepcionamos y organizamos las fotografías recibidas y las almacenamos hasta su limpieza.</p>
            </div>
          </div>
          <div className="frame">
            <FaBroom className="icon" />
            <div className="frame-text">
              <h3 className='titulo-iconos'>Restauramos los daños</h3>
              <p>Lavado, limpieza e higienización mediante diferentes procesos para restaurar los daños.</p>
            </div>
          </div>
          <div className="frame">
            <FaLaptop className="icon" />
            <div className="frame-text">
              <h3 className='titulo-iconos'>Digitalizamos las imágenes</h3>
              <p>Digitalizamos tus fotografías restauradas para que las tengas en ambos formatos.</p>
            </div>
          </div>
          <div className="frame">
            <FaHourglass className="icon" />
            <div className="frame-text">
              <h3 className='titulo-iconos'>Montamos en orden cronológico</h3>
              <p>Montamos tus fotografías restauradas en el mismo orden que tus álbumes originales.</p>
            </div>
          </div>
          <div className="frame">
            <FaGift className="icon" />
            <div className="frame-text">
              <h3 className='titulo-iconos'>Te devolvemos tus recuerdos</h3>
              <p>Te entregamos las fotografías que hemos podido recuperar, para conservar tus recuerdos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Imágenes antes y después */}
      <section className="im-genes">
        <div className="frame-74">
          <img className="captura" src="captura1.png" alt="Antes" />
          <div className="foto-antes">Foto antes de la restauración.</div>
        </div>
        <div className="frame-75">
          <img className="captura" src="captura2.png" alt="Después" />
          <div className="foto-despues">Foto después de la restauración.</div>
        </div>
      </section>

      {/* Mensaje destacado */}
      <div className="mensaje">
        <div className="parrafo">‘’No podíamos quedarnos de brazos cruzados’’</div>
        <div className="firma">Ana López, responsable de Restauración</div>
      </div>

      {/* Nuestra historia */}
      <section className="nuestra-historia">
    <div class="nuestra-historia">
  <div class="primer-bloque-nuestrahistoria">
    <div class="historia">
      <div class="titulo-nuestrahistoria">Nuestra historia</div>
      <div class="texto">
        <div
          class="subtitulo-historia"
        >
          Recuperar las Memorias nació del lodo y la devastación, pero sobre
          todo, de nuestro compromiso con la memoria y la identidad.
        </div>
        <div
          class="parrafo-primerbloque"
        >
          El 29 de octubre de 2024, una riada sin precedentes arrasó municipios
          enteros de Valencia, llevándose consigo hogares, pertenencias y, lo
          más doloroso, los recuerdos de toda una vida. Fotografías flotaban a
          la deriva, atrapadas en el barro, a punto de perderse para siempre.
        </div>
      </div>
    </div>
    <img className= "imagenhistoria1" src={historia} alt="Nuestra historia" />
  </div>
  <div class="segundo-bloque-nuestrahistoria">
  <img className= "imagenhistoria2" src={historia2} alt="Recuperando memorias" />
    <div
      class="parrafo-segundobloque"
    >
      Desde la Facultad de Bellas Artes de la Universitat Politècnica de
      València, decidimos unir fuerzas para hacer frente a esta pérdida
      irreparable. Así nació nuestro laboratorio de recuperación, donde
      trabajamos día tras día recogiendo, limpiando, restaurando y digitalizando
      miles de fotografías familiares. Sabemos que cada imagen es mucho más que
      papel; es un trozo de historia, de identidad, de amor.
      <br />
      <br />
      Lo que comenzó como una labor de emergencia, hoy se ha transformado en un
      proyecto lleno de esperanza: Recuperar las Memorias. No solo
      salvaguardamos fotografías, sino que también reconstruimos las memorias
      que en ellas viven. Porque creemos que recordar es el acto de amor más
      grande que podemos ofrecer, y estamos aquí para asegurarnos de que esas
      historias sigan vivas, intactas y listas para ser compartidas con las
      generaciones futuras.
    </div>
  </div>
</div>
    </section>

    <div class="faqs">
  <div class="faqs-header">
    <h1 class="faqs-title">Preguntas Frecuentes</h1>
    <p class="faqs-subtitle">Qué necesitas saber</p>
  </div>
  <div class="faqs-content">
    <div class="faq-item">
      <button class="faq-toggle" aria-expanded="false">
        <span class="faq-question">¿Cómo mantener en el mejor estado las fotografías hasta que pueda llevarlas?</span>
        <img class="faq-icon" src="icon-jam-icons-outline-logos-plus0.svg" alt="Expandir pregunta" />
      </button>
      <div class="faq-answer">
        Mantén las fotografías en un lugar seco, lejos de la luz directa del sol, y guárdalas en sobres o cajas libres de ácido.
      </div>
    </div>
    <div class="faq-item">
      <button class="faq-toggle" aria-expanded="false">
        <span class="faq-question">¿Dónde tengo que llevar las fotografías?</span>
        <img class="faq-icon" src="icon-jam-icons-outline-logos-plus1.svg" alt="Expandir pregunta" />
      </button>
      <div class="faq-answer">
        Puedes llevarlas a cualquiera de nuestras oficinas o enviarlas por correo a nuestra dirección oficial.
      </div>
    </div>
    <div class="faq-item">
      <button class="faq-toggle" aria-expanded="false">
        <span class="faq-question">¿Qué procesos utilizáis para recuperar las fotografías?</span>
        <img class="faq-icon" src="icon-jam-icons-outline-logos-plus2.svg" alt="Expandir pregunta" />
      </button>
      <div class="faq-answer">
        Utilizamos tecnología avanzada de restauración digital y limpieza manual para recuperar las fotografías.
      </div>
    </div>
    <div class="faq-item">
      <button class="faq-toggle" aria-expanded="false">
        <span class="faq-question">¿Se pueden recuperar todas mis fotografías?</span>
        <img class="faq-icon" src="icon-jam-icons-outline-logos-plus3.svg" alt="Expandir pregunta" />
      </button>
      <div class="faq-answer">
        En la mayoría de los casos, sí. Sin embargo, dependerá del estado actual de las fotografías.
      </div>
    </div>
    <div class="faq-item">
      <button class="faq-toggle" aria-expanded="false">
        <span class="faq-question">¿Cuánto tiempo se tarda en recuperar las fotografías?</span>
        <img class="faq-icon" src="icon-jam-icons-outline-logos-plus4.svg" alt="Expandir pregunta" />
      </button>
      <div class="faq-answer">
        El proceso puede tomar entre una y dos semanas, dependiendo de la cantidad y el estado de las fotografías.
      </div>
    </div>
    <div class="faq-item">
      <button class="faq-toggle" aria-expanded="false">
        <span class="faq-question">¿Qué tipo de profesionales trabajan en el proyecto?</span>
        <img class="faq-icon" src="icon-jam-icons-outline-logos-plus5.svg" alt="Expandir pregunta" />
      </button>
      <div class="faq-answer">
        Contamos con expertos en restauración digital, fotógrafos profesionales y conservadores de arte.
      </div>
    </div>
  </div>
  <img class="faqs-image" src="frame-760.png" alt="Imagen representativa" />
</div>

      {/* Ubicación y horarios */}
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