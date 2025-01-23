import React from 'react';
import './Landing.scss';

const Landing = () => {
  return (
    <div className="nuestra-historia">
      <div className="titulo">
        <div className="nuestra-historia2">Nuestra historia</div>
        <p className="descripcion-historia">
          El proyecto RECUPERAR LAS MEMORIAS, impulsado por la Facultad de Bellas Artes de la Universitat Politècnica de
          València, tiene como objetivo fundamental recuperar las fotografías familiares y la memoria de varias generaciones
          de familias valencianas que el barro no consiguió borrar.
        </p>
      </div>
      <div className="cosas-nuestra-historia">
        <div className="faq-item">
          <div className="toggle">
            <div className="question">Surgimiento</div>
            <img
              className="icon-jam-icons-outline-logos-plus"
              src="icon-jam-icons-outline-logos-plus0.svg"
              alt="Surgimiento"
            />
          </div>
        </div>
        <div className="faq-item">
          <div className="toggle">
            <div className="question">Surgimiento</div>
            <img
              className="icon-jam-icons-outline-logos-plus2"
              src="icon-jam-icons-outline-logos-plus1.svg"
              alt="Surgimiento"
            />
          </div>
        </div>
      </div>

      <div className="proceso">
        <div className="titulo">
          <div className="el-proceso">EL PROCESO</div>
          <div className="descripcion-proceso">
            Este PROYECTO busca recuperar las fotografías familiares y preservar la MEMORIA de generaciones de familias
            valencianas que el barro no logró borrar.
          </div>
        </div>
        <div className="steps">
          {['Recepción y Registro', 'Limpieza y Conservación Preventiva', 'Secado y Montaje Interino', 'Digitalización y Restauración', 'Preparación y Entrega'].map((step, index) => (
            <div key={index} className="recepcion-y-registro">
              <img
                className={`icon-cloud-outlined${index}`}
                src={`icon-cloud-outlined${index}.svg`}
                alt={`Icono de paso ${step}`}
              />
              <div className="recepcion-y-registro-title">{step}</div>
              <div className="descripcion-paso">
                {step === 'Recepción y Registro' && 'Registro y organización de las fotografías recibidas. Almacenamiento controlado y documentación del estado inicial.'}
                {step === 'Limpieza y Conservación Preventiva' && 'Limpieza, separación y estabilización de las fotografías.'}
                {step === 'Secado y Montaje Interino' && 'Secado de fotografías y montaje provisional respetando el orden original.'}
                {step === 'Digitalización y Restauración' && 'Digitalización y restauración de fotografías dañadas con IA y retoque profesional.'}
                {step === 'Preparación y Entrega' && 'Preparación y entrega del material físico y digital a las familias.'}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="faq">
        <div className="section-text">
          <div className="top">
            <div className="secondary-headline">Preguntas frecuentes</div>
          </div>
        </div>
        <div className="images">
          {['Who should use the app?', 'What is included with my subscription?', 'How do I get paid?', 'Is my personal information safe?', 'How can we get in touch?'].map((question, index) => (
            <div key={index} className="faq-item">
              <div className="toggle">
                <div className="question">{question}</div>
                <img
                  className={`icon-jam-icons-outline-logos-plus${index}`}
                  src={`icon-jam-icons-outline-logos-plus${index}.svg`}
                  alt={`Icono de pregunta ${question}`}
                />
              </div>
            </div>
          ))}
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
      <div class="frame-73">
        <div class="frame-68">
          <img class="vector" src="vector0.svg" />
          <div class="salvem-les-fotos2">
            Camino de Vera, s/n, Edificio 3M - 3N,
            <br />
            46022 Valencia
          </div>
        </div>
        <div class="frame-69">
          <img class="vector2" src="vector1.svg" />
          <div class="salvem-les-fotos3">
            L-V 07:30 a 21:00
            <br />
            S 08:00
            <br />
            D Cerrado
          </div>
        </div>
        <div class="frame-70">
          <img class="vector3" src="vector2.svg" />
          <div class="salvem-les-fotos2">673 881 136</div>
        </div>
        <div class="frame-72">
          <img class="vector4" src="vector3.svg" />
          <div class="salvem-les-fotos2">restauración@upv.es</div>
        </div>
        <div class="frame-71">
          <img class="vector5" src="vector4.svg" />
          <div class="salvem-les-fotos4">salvemoslesfotos</div>
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

    </div>
  );
};

export default Landing
