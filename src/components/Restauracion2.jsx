import './Restauracion2.scss';
import gato from "../assets/cat.jpg";
import HeaderRestauracion from './HeaderRestauracion/HederRestauracion';


const Restauracion2 = () => {
  return (
    <div className="restauracion-container">
      {/* Encabezado */}
      
<HeaderRestauracion></HeaderRestauracion>
      {/* Sección de imágenes */}
      <section className="imagenes-section">
        <h2>Imágenes</h2>
        <div className="imagenes-grid">
          {/* Generar imágenes dinámicamente */}
          {[...Array(12)].map((_, index) => (
            <div className="imagen-item" key={index}>
              <img src={gato} alt={`Imagen ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Botones */}
      <div className="acciones">
        <button className="boton-agregar">Añadir más</button>
        <button className="boton-validar">Validar subida</button>
      </div>
    </div>
  );
};

export default Restauracion2;

