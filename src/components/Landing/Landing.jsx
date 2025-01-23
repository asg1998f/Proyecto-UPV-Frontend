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

      <div className="ubicacion-y-horarios">
        <div className="secondary-headline">Ubicación y horarios</div>
        <div className="frame-62">
          <div className="horarios-y-ubicacion">
            <div className="card-ubicacion-y-horarios">
              <img
                className="icon-cloud-outlined"
                src="icon-cloud-outlined0.svg"
                alt="Icono de horarios"
              />
              <div className="texto-dire">
                <div className="direccion">Horarios</div>
                <div className="detalles-horarios">
                  <span>Lunes a viernes: 7:30 hasta las 21:00</span>
                  <span>Sábados: 8:00 hasta las 14:00</span>
                  <span>Domingo: Cerrado</span>
                </div>
              </div>
            </div>
            <div className="card-ubicacion-y-horarios">
              <img
                className="icon-cloud-outlined2"
                src="icon-cloud-outlined1.svg"
                alt="Icono de dirección"
              />
              <div className="texto-dire">
                <div className="direccion">Dirección</div>
                <div className="direccion-detalle">
                  Camino de Vera, s/n, Edificio 3M - 3N, 46022 Valencia
                </div>
              </div>
            </div>
          </div>

          <div className="google-maps-container">
            <div className="google-maps-map">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing
