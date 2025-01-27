import React from 'react';
import './Landing.scss';
import foto from '../../assets/imagenes/random2.png';
import historia from '../../assets/imagenes/historia.jpg';
import historia2 from '../../assets/imagenes/historia2.jpg';
import imgpf from '../../assets/imagenes/imgpf.png';
import { FaPhotoVideo, FaBroom, FaLaptop, FaHourglass, FaGift } from 'react-icons/fa';

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



<section className="ubicacion-y-horarios">
  <h2 className="secondary-headline">Encuéntranos</h2>
  <p>Puedes venir a traernos tus fotografías a la Facultad de Bellas Artes de la UPV.</p>
  <div className="frame-62">
    <div className="horarios-y-ubicacion">
      <div className="card-ubicacion-y-horarios">
        <img src="icon-horarios.svg" alt="Horarios" />
        <div className="texto-dire">
          <h3>Horarios</h3>
          <p>Lunes a viernes: 7:30 hasta las 21:00</p>
          <p>Sábados: 8:00 hasta las 14:00</p>
          <p>Domingo: Cerrado</p>
        </div>
      </div>
      <div className="card-ubicacion-y-horarios">
        <img src="icon-direccion.svg" alt="Dirección" />
        <div className="texto-dire">
          <h3>Dirección</h3>
          <p>Camino de Vera, s/n, Edificio 3M - 3N, 46022 Valencia</p>
        </div>
      </div>
    </div>
    <div className="google-maps-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14..."
        width="100%"
        height="450"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
        title="Ubicación"
      ></iframe>
    </div>
  </div>
  <footer>
    <div className="footer-links">
      <a href="#">Cookies</a>
      <a href="#">Aviso legal</a>
      <a href="#">Política de privacidad</a>
      <a href="#">Contacto</a>
    </div>
  </footer>
</section>

    </>
  );
};

export default Landing;