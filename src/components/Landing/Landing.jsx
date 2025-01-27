import React from 'react';
import './Landing.scss';
import foto from '../../assets/imagenes/random2.png';
import historia from '../../assets/imagenes/historia.jpg';
import historia2 from '../../assets/imagenes/historia2.jpg';
import imgpf from '../../assets/imagenes/imgpf.png';
import { FaPhotoVideo, FaBroom, FaLaptop, FaHourglass, FaGift } from 'react-icons/fa';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";


const Landing = () => {
  
  return (
    <>
      <div class="informacion-primer-fold">
        <div class="section-text">
          <div class="headline">
            <div class="top">
              <div class="facultad-de-bellas-artes">FACULTAD DE BELLAS ARTES UPV</div>
              <div class="salvem-les-fotos">Salvem les fotos</div>
            </div>
            <div class="paragraph">
              Recuperamos tus fotografías familiares dañadas por la DANA de manera
              solidaria, gracias al apoyo de los voluntarios de la Universitat
              Politècnica de València.
            </div>
          </div>
          <div class="secondary-btn">
            <div class="btn-text">Dónde encontrarnos</div>
          </div>
          <div className="image-container">
            <img src={foto} alt="Fotografía restaurada" />
          </div></div>
        <div class="datos">
          <div class="lbumes">
            <div class="_1-800">1.800</div>
            <div class="paragraph2">Álbumes</div>
          </div>
          <div class="fotograf-a">
            <div class="_230-000">230.000</div>
            <div class="paragraph2">Fotografías</div>
          </div>
          <div class="intervenciones">
            <div class="_15-000">15.000</div>
            <div class="paragraph3">Intervenciones y digitalizaciones</div>
          </div>
          <div class="voluntarios">
            <div class="_130">130</div>
            <div class="paragraph3">Voluntarios</div>
          </div>
        </div>
      </div>

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
      <section className="nuestro-proceso">
        {/* Título y Descripción */}
        <div className="nuestro-proceso-header">
          <h2 className="titulo-nuestroproceso">Nuestro proceso</h2>
          <p className="parrafo-nuestroproceso">
            Si quieres recuperar tus imágenes dañadas por la DANA de manera gratuita,
            tráenos tus álbumes o imágenes a la Facultad de Bellas Artes de la UPV.
          </p>
        </div>

        {/* Sección de Iconos */}
        <div className="proceso">
          {[
            { icon: FaPhotoVideo, title: 'Tráenos tu álbum y recuerdos', text: 'Recepcionamos y organizamos las fotografías.' },
            { icon: FaBroom, title: 'Restauramos los daños', text: 'Lavado y limpieza mediante procesos específicos.' },
            { icon: FaLaptop, title: 'Digitalizamos las imágenes', text: 'Tus fotografías estarán disponibles en digital.' },
            { icon: FaHourglass, title: 'Montamos en orden cronológico', text: 'Respetamos el orden original de tus álbumes.' },
            { icon: FaGift, title: 'Te devolvemos tus recuerdos', text: 'Entregamos las imágenes recuperadas.' },
          ].map((item, index) => (
            <div className="frame" key={index}>
              <item.icon className="icon" />
              <h3 className="frame-title">{item.title}</h3>
              <p className="frame-text">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Imágenes Antes y Después */}
        <section className="seccion-imagenes-ayd">
          <div className="imagen-con-descripcion">
            <img
              src="ruta-de-la-imagen-antes.jpg"
              alt="Foto antes de la restauración"
              className="captura-de-pantalla-2025-01-22-a-las-13-06-16-1"
            />
            <p className="foto-antes-de-la-restauraci-n">Foto antes de la restauración</p>
          </div>
          <div className="imagen-con-descripcion">
            <img
              src="ruta-de-la-imagen-despues.jpg"
              alt="Foto después de la restauración"
              className="captura-de-pantalla-2025-01-22-a-las-13-06-16-2"
            />
            <p className="foto-despu-s-de-la-restauraci-n">Foto después de la restauración</p>
          </div>
        </section>
      </section>


      {/* Mensaje destacado */}
      <div className="mensaje">
        <div className="parrafo">‘’No podíamos quedarnos de brazos cruzados’’</div>
        <div className="firma">Ana López, responsable de Restauración</div>
      </div>

      <section className="nuestra-historia">
        <div className="contenedor-historia">
          {/* Primer bloque */}
          <div className="primer-bloque-nuestrahistoria">
            <div className="texto-historia">
              <h2 className="titulo-historia">Nuestra historia</h2>
              <h3 className="subtitulo-historia">
                Recuperar las Memorias nació del lodo y la devastación, pero sobre
                todo, de nuestro compromiso con la memoria y la identidad.
              </h3>
              <p className="parrafo-historia">
                El 29 de octubre de 2024, una riada sin precedentes arrasó municipios
                enteros de Valencia, llevándose consigo hogares, pertenencias y, lo
                más doloroso, los recuerdos de toda una vida. Fotografías flotaban a
                la deriva, atrapadas en el barro, a punto de perderse para siempre.
              </p>
            </div>
            <img
              className="imagen-historia"
              src={historia}
              alt="Nuestra historia"
            />
          </div>

          {/* Segundo bloque */}
          <div className="segundo-bloque">
            <img
              className="imagen-historia"
              src={historia2}
              alt="Recuperando memorias"
            />
            <p className="parrafo-historia2">
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
            </p>
          </div>
        </div>
      </section>


      <div class="faqs-container">
        <div class="faqs">
          <div class="faqs-header">
            <p class="faqs-subtitle">Preguntas frecuentes</p>
            <h1 class="faqs-title">Qué necesitas saber</h1>
          </div>
          <div class="faqs-content">
            <div class="faq-item">
              <button class="faq-toggle" aria-expanded="false">
                ¿Cómo mantener en el mejor estado las fotografías hasta que pueda llevarlas?
                <span class="faq-icon">+</span>
              </button>
            </div>
            <div class="faq-item">
              <button class="faq-toggle" aria-expanded="false">
                ¿Dónde tengo que llevar las fotografías?
                <span class="faq-icon">+</span>
              </button>
            </div>
            <div class="faq-item">
              <button class="faq-toggle" aria-expanded="false">
                ¿Qué procesos utilizáis para recuperar las fotografías?
                <span class="faq-icon">+</span>
              </button>
            </div>
            <div class="faq-item">
              <button class="faq-toggle" aria-expanded="false">
                ¿Se pueden recuperar todas mis fotografías?
                <span class="faq-icon">+</span>
              </button>
            </div>
            <div class="faq-item">
              <button class="faq-toggle" aria-expanded="false">
                ¿Cuánto tiempo se tarda en recuperar las fotografías?
                <span class="faq-icon">+</span>
              </button>
            </div>
            <div class="faq-item">
              <button class="faq-toggle" aria-expanded="false">
                ¿Qué tipo de profesionales trabajan en el proyecto?
                <span class="faq-icon">+</span>
              </button>
            </div>
          </div>
        </div>
        <div class="faqs-image-container">
          <img class="imgpf" src={imgpf} alt="Fotografías dañadas" />
        </div>
      </div>



      <div class="encu-ntranos">
        <div class="frame-80">
          <div class="titulo">
            <div class="headline">
              <div class="salvem-les-fotos">Encuéntranos</div>
              <div
                class="puedes-venir-a-traernos-tus-fotograf-as-a-la-facultad-de-bellas-artes-de-la-upv"
              >
                Puedes venir a traernos tus fotografías a la Facultad de Bellas Artes
                de la UPV.
              </div>
            </div>
          </div>
          <div class="frame-78">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1539.6753710334099!2d-0.34454972892483!3d39.48399400990552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1737546898503!5m2!1ses!2ses"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Ubicación"
            ></iframe>
            <div className="frame-73">
              <div className="frame-68">
                <FaMapMarkerAlt className="icono" />
                <div className="salvem-les-fotos2">
                  Camino de Vera, s/n, Edificio 3M - 3N,
                  <br />
                  46022 Valencia
                </div>
              </div>
              <div className="frame-69">
                <FaClock className="icono2" />
                <div className="salvem-les-fotos3">
                  L-V 07:30 a 21:00
                  <br />
                  S 08:00
                  <br />
                  D Cerrado
                </div>
              </div>
              <div className="frame-70">
                <FaPhoneAlt className="icono3" />
                <div className="salvem-les-fotos2">673 881 136</div>
              </div>
              <div className="frame-72">
                <FaEnvelope className="icono4" />
                <div className="salvem-les-fotos2">restauración@upv.es</div>
              </div>
              <div className="frame-71">
                <FaInstagram className="vector" />
                <div className="salvem-les-fotos4">salvemoslesfotos</div>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-79">
          <img class="vector-1" src="vector-10.svg" />
          <div class="frame-77">
            <div class="cookies">Cookies</div>
            <div class="aviso-legal">Aviso legal</div>
            <div class="pol-tica-de-privacidad">Política de privacidad</div>
            <div class="contacto">Contacto</div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Landing;