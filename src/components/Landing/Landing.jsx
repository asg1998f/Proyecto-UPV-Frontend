
import './Landing.scss';
import foto from '../../assets/imagenes/random2.png';
import historia from '../../assets/imagenes/historia.jpg';
import historia2 from '../../assets/imagenes/historia2.jpg';
import imgpf from '../../assets/imagenes/imgpf.png';
import fotoantes from '../../assets/imagenes/fotoantes.png';
import fotodespues from '../../assets/imagenes/fotodespues.png';
import FaPhotoVideo from "../../assets/iconos/PictureOutlined.png"
import FaBroom from "../../assets/iconos/Restaurar.png"
import FaLaptop from "../../assets/iconos/Digitalizar.png"
import FaHourglass from "../../assets/iconos/tiempo.png"
import FaGift from "../../assets/iconos/Icono.png"
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";
import React, { useState } from 'react';


const Landing = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <>
      <div id="primer-fold" class="informacion-primer-fold">
        <div class="section-text">
          <div class="headline">
            <div class="top">
              <div class="facultad-de-bellas-artes">FACULTAD DE BELLAS ARTES UPV</div>
              <div class="salvem-les-fotos-titulo">Salvem les fotos</div>
            </div>
            <div class="paragraph">
              Recuperamos tus fotografías familiares dañadas por la DANA de manera
              solidaria, gracias al apoyo de los voluntarios de la Universitat
              Politècnica de València.
            </div>
          </div>
          <div class="secondary-btn">
            <a href="#donde-encontrarnos" class="btn-text">Dónde encontrarnos</a>
          </div>
          <div className="image-container">
            <img src={foto} alt="Fotografía restaurada" />
          </div></div>
          <div className='porcentajes'>
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
            <div class="_15-000">18.000</div>
            <div class="paragraph3">Intervenciones y digitalizaciones</div>
          </div>
          <div class="voluntarios">
            <div class="_130">130</div>
            <div class="paragraph3">Voluntarios</div>
          </div>
        </div>
      </div>
      </div>

      {/* Barra de navegación superior */}
      <nav className="navbar-top">
        <div className="recordar-del-lat-n-recordis-volver-a-pasar-por-el-coraz-n">
          <span>
            <span className="recordar-del-lat-n-recordis-volver-a-pasar-por-el-coraz-n-span">Recordar</span>
            <span className="recordar-del-lat-n-recordis-volver-a-pasar-por-el-coraz-n-span2"> del Latín</span>
            <span className="recordar-del-lat-n-recordis-volver-a-pasar-por-el-coraz-n-span4"> recordis</span>
            <span className="recordar-del-lat-n-recordis-volver-a-pasar-por-el-coraz-n-span5">, volver a pasar por el</span>
            <span className="recordar-del-lat-n-recordis-volver-a-pasar-por-el-coraz-n-span6"> corazón.</span>
          </span>
        </div>
      </nav>
      <section className="nuestro-proceso">
        {/* Título y Descripción */}
        <div id="nuestro-proceso" className="nuestro-proceso-header">
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
              <img src={item.icon}></img>
              <h3 className="frame-title">{item.title}</h3>
              <p className="frame-text">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Imágenes Antes y Después */}
        <section className="seccion-imagenes-ayd">
  <div className="imagen-con-descripcion">
    <div className="image-container">
      <img src={fotoantes} alt="Fotografía antes de la restauración" className="foto-antes" />
    </div>
    <p className="foto-antes-de-la-restauracion">Foto antes de la restauración</p>
  </div>
  
  <div className="imagen-con-descripcion">
    <div className="image-container">
      <img src={fotodespues} alt="Fotografía después de la restauración" className="foto" />
    </div>
    <p className="foto-despues-de-la-restauracion">Foto después de la restauración</p>
  </div>
        </section>
      </section>


      {/* Mensaje destacado */}
      <div className="mensaje">
        <div className="parrafo">‘’No podíamos quedarnos de brazos cruzados’’</div>
        <div className="firma">Ana Carreres, responsable de Restauración</div>
      </div>

      <section className="nuestra-historia">
        <div id="nuestra-historia" className="contenedor-historia">
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
            <div className="parrafo-historia2">
            <p >
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
        </div>
      </section>

      <div className="faqs-container">
        <div id="preguntas-frecuentes" className="faqs">
          <div className="faqs-header">
            <p className="faqs-subtitle">Preguntas frecuentes</p>
            <h1 className="faqs-title">Qué necesitas saber</h1>
          </div>
          <div className="faqs-content">
            <div className="faq-item">
              <button
                className="faq-toggle"
                onClick={() => toggleFAQ(0)}
                aria-expanded={expandedFAQ === 0}
              >
                ¿Cómo mantener en el mejor estado las fotografías hasta que pueda llevarlas?
                <span className="faq-icon">{expandedFAQ === 0 ? '-' : '+'}</span>
              </button>
              {expandedFAQ === 0 && (
                <div className="faq-answer">
                  <p>  Tienes varias opciones para conservar tus fotografías en el mejor estado
                    posible hasta que puedas venir a entregárnoslas. En el caso de que sean
                    álbumes fotográficos, puedes meterlo en una bolsa de plástico y hacerle
                    agujeros para de esta forma protegerlos de la humedad.
                    <br />
                    <br />
                    En el caso de que sean fotografías sueltas, déjalas ventilando o secando al
                    aire libre.</p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button
                className="faq-toggle"
                onClick={() => toggleFAQ(1)}
                aria-expanded={expandedFAQ === 1}
              >
                ¿Dónde tengo que llevar las fotografías?
                <span className="faq-icon">{expandedFAQ === 1 ? '-' : '+'}</span>
              </button>
              {expandedFAQ === 1 && (
                <div className="faq-answer">
                  <p>Las fotografías tienen que ser entregadas en la Universidad
                    Politécnica de Valencia, en la facultad de Bellas Artes. Una vez
                    llegas a la cafetería de Bellas Artes, el laboratorio de Salvem les
                    Fotos se encuentra al fondo (aprox 50m desde la cafetería).</p> <p>
                    <a
                      href="https://www.google.com/maps?q=Universidad+Politécnica+de+Valencia,+facultad+de+Bellas+Artes"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ¿Cómo Llegar?
                    </a>
                  </p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button
                className="faq-toggle"
                onClick={() => toggleFAQ(2)}
                aria-expanded={expandedFAQ === 2}
              >
                ¿Qué procesos utilizáis para recuperar las fotografías?
                <span className="faq-icon">{expandedFAQ === 2 ? '-' : '+'}</span>
              </button>
              {expandedFAQ === 2 && (
                <div className="faq-answer">
                  <p> El proceso se compone de diferentes fases. Empezamos registrando y
                    documentando cada fotografía, para tener un control exhaustivo. Luego,
                    clasificamos y almacenamos las imágenes en condiciones óptimas para
                    frenar su deterioro. Con delicadeza, limpiamos y estabilizamos cada
                    fotografía, para poder recuperarla. Después, pasan a digitalización,
                    donde se escanean para que podáis tener también una copia digital de las
                    mismas. A través de técnicas avanzadas de restauración digital y el uso
                    de inteligencia artificial, reconstruimos los fragmentos dañados.
                    Finalmente, te entregamos las fotografías respetando el mismo orden
                    cronológico en el que estaban montadas en los álbumes originales.
                    Nuestro objetivo es recuperar el mayor número de fotografías para
                    conservar la memoria..</p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button
                className="faq-toggle"
                onClick={() => toggleFAQ(3)}
                aria-expanded={expandedFAQ === 3}
              >
                ¿Se pueden recuperar todas mis fotografías?
                <span className="faq-icon">{expandedFAQ === 3 ? '-' : '+'}</span>
              </button>
              {expandedFAQ === 3 && (
                <div className="faq-answer">
                  <p>Hacemos todo lo posible por recuperar la mayor cantidad de fotografías,
                    utilizando técnicas especializadas de limpieza, digitalización y
                    restauración. Sin embargo, el estado de cada imagen puede variar
                    dependiendo del daño causado por el agua y el barro. Nuestro compromiso
                    es tratar cada fotografía con el máximo cuidado y dedicación, trabajando
                    para salvar no solo las imágenes, sino también los recuerdos que
                    representan.</p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button
                className="faq-toggle"
                onClick={() => toggleFAQ(4)}
                aria-expanded={expandedFAQ === 4}
              >
                ¿Cuánto tiempo se tarda en recuperar las fotografías?
                <span className="faq-icon">{expandedFAQ === 4 ? '-' : '+'}</span>
              </button>
              {expandedFAQ === 4 && (
                <div className="faq-answer">
                  <p>El tiempo de recuperación de las fotografías depende del nivel de daño y
                    del volumen de imágenes que recibimos. Nuestro equipo trabaja con
                    dedicación en cada etapa del proceso, que incluye limpieza, secado,
                    estabilización, digitalización y restauración digital. Algunas
                    fotografías son más fáciles de recuperar, mientras que otras requieren
                    un tratamiento más detallado que puede llevar varios meses. Nos
                    esforzamos para devolver los recuerdos a las familias lo antes posible,
                    siempre asegurando el máximo cuidado y calidad en cada imagen.</p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <button
                className="faq-toggle"
                onClick={() => toggleFAQ(5)}
                aria-expanded={expandedFAQ === 5}
              >
                ¿Qué tipo de profesionales trabajan en el proyecto?
                <span className="faq-icon">{expandedFAQ === 5 ? '-' : '+'}</span>
              </button>
              {expandedFAQ === 5 && (
                <div className="faq-answer">
                  <p>Todas las fotografías son intervenidas de forma física únicamente por
                    profesionales graduados en Conservación y Restauración de Bienes
                    Culturales. La mayoría de ellos se encuentran cursando el segundo año
                    del Máster en Conservación y Restauración de Bienes Culturales por la
                    UPV o ya lo han finalizado.
                    <br />
                    <br />
                    En cuanto al equipo de digitalización, todos los voluntarios y
                    voluntarias están terminando su último año de Bellas Artes, habiéndose
                    especializado en fotografía. Por su parte, la restitución digital recae
                    en manos de fotógrafos y retocadores profesionales de distintos países
                    con años de experiencia en el sector.
                    <br />
                    <br />
                    La inmensa importancia del material con el que trabajamos exige que
                    únicamente las personas correctamente cualificadas y preparadas para
                    esta labor puedan intervenir las fotografías. Son los profesionales
                    quienes tienen los conocimientos y las técnicas adecuadas para llevar a
                    cabo un trabajo tan sumamente delicado y valioso.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="faqs-image-container">
          <img className="imgpf" src={imgpf} alt="Fotografías dañadas" />
        </div>
      </div>


      <div id="donde-encontrarnos"class="encuentranos">
        <div class="frame-80">
          <div class="tituloLanding">
            <div class="headline">
              <div class="salvem-les-fotos">Encuéntranos</div>
              <div class="parrafo-encuentranos">
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