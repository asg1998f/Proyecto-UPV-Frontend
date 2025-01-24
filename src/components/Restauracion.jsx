import './Restauracion.scss'; // Archivo de estilos

const Restauracion = () => {
  const carpetas = [
    { id: 1, nombre: 'ÁLBUM 1' },
    { id: 2, nombre: 'ÁLBUM 2' },
    { id: 3, nombre: 'ÁLBUM 3' },
    { id: 4, nombre: 'FOTOS' },
    { id: 5, nombre: 'MARCO' },
  ];

  const handleSeleccionarCarpeta = (nombreCarpeta) => {
    alert(`Accediendo a la cámara para: ${nombreCarpeta}`);
    // Aquí puedes incluir la lógica para abrir la cámara
  };

  return (
    <div className="restauracion">
      <div className="restauracion-header">
        <h2>Restauración</h2>
        <p>0012-FT</p>
        <span>3 álbumes, 40 fotos y 1 marco</span>
      </div>
      <div className="restauracion-carpetas">
        <p>¿Qué quieres fotografiar?</p>
        <div className="carpetas-grid">
          {carpetas.map((carpeta) => (
            <div
              key={carpeta.id}
              className="carpeta"
              onClick={() => handleSeleccionarCarpeta(carpeta.nombre)}
            >
              <div className="carpeta-icono">📁</div>
              <p>{carpeta.nombre}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restauracion;
