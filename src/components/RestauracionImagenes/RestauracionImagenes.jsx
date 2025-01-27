import React, { useState, useEffect } from "react";
import axios from "axios"; // Importar axios
import "./RestauracionImagenes.scss";
import IconoRestaurar from "../../assets/iconos/IconoRestaurar.png";
import FlechaIzquierda from "../../assets/iconos/FlechaIzquierda.png";
import IconoPapelera from "../../assets/iconos/IconoPapelera.png";

const RestauracionImagenes = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [documentSerial, setDocumentSerial] = useState("Cargando..."); // Estado para el número de serie
  const [dni, setDni] = useState(""); // Estado para el DNI ingresado
  const [validationMessage, setValidationMessage] = useState(""); // Mensaje de validación

  const images = Array.from({ length: 16 }, (_, index) => ({
    id: index + 1,
    src: `rectangle-118${index + 1}.png`,
  }));

  useEffect(() => {
    // Hacer la petición al backend
    const fetchDocumentSerial = async () => {
      try {
        const response = await axios.get("https://api.example.com/document-serial");
        setDocumentSerial(response.data.serialNumber); // Asignar el número de serie recibido
      } catch (error) {
        console.error("Error al obtener el número de serie:", error);
        setDocumentSerial("Error al cargar"); // Mostrar error si la petición falla
      }
    };

    fetchDocumentSerial();
  }, []); // Ejecutar solo al montar el componente

  const handleSelectImage = (id) => {
    if (selectedImages.includes(id)) {
      setSelectedImages(selectedImages.filter((imageId) => imageId !== id));
    } else {
      setSelectedImages([...selectedImages, id]);
    }
  };

  const handleDeleteSelected = () => {
    const filteredImages = images.filter(
      (image) => !selectedImages.includes(image.id)
    );
    setSelectedImages([]);
  };
  const handleValidateDni = async () => {
    try {
      const response = await axios.post("https://api.example.com/validate-dni", {
        dni,
      });
      if (response.data.isValid) {
        setValidationMessage("DNI válido. ¡Validación exitosa!");
        setShowModal(false); // Cerrar el modal si el DNI es válido
      } else {
        setValidationMessage("El DNI no está registrado. Intenta nuevamente.");
      }
    } catch (error) {
      console.error("Error al validar el DNI:", error);
      setValidationMessage("Error al validar el DNI. Por favor, intenta más tarde.");
    }
  };
  const handleAddMore = (event) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files).map((file, index) => ({
        id: images.length + index + 1,
        src: URL.createObjectURL(file),
      }));
      setSelectedImages([...selectedImages, ...newImages.map((img) => img.id)]);
    }
  };

  return (
    <>
      <div className="restauraci-n">
        <div className="home">
          <div className="logo">
            <img src={FlechaIzquierda} alt="Flecha hacia la izquierda" />
            <div className="frame-427319580">
              <div className="frame-427319550">
                <div className="icono">
                  <img src={IconoRestaurar} alt="Icono restaurar" />
                </div>
                <div className="almac-n">Restaurar</div>
              </div>
              <div className="frame-427319552">
                {/* Mostrar el número de serie */}
                <div className="_0012-ft">{documentSerial}</div>
              </div>
            </div>
          </div>

          <div className="auto-toodo-imgs">
            <div className="auto-imgs-button">
              <div className="titulo-imgs">
                <div className="im-genes">Imágenes</div>
              </div>
              <div className="btton-select-all-default">
                <div className="seleccionar">Seleccionar</div>
              </div>
            </div>
          </div>

          <div className="cards">
            {images.map((image) => (
              <div
                className={`image-check-no-check ${
                  selectedImages.includes(image.id) ? "selected" : ""
                }`}
                key={image.id}
                onClick={() => handleSelectImage(image.id)}
              >
                <img
                  className="rectangle-118"
                  src={image.src}
                  alt={`Imagen ${image.id}`}
                />
              </div>
            ))}
          </div>
        </div>

        {selectedImages.length > 0 && (
          <div className="popup">
            <div className="popup-content">
              <div>
                {selectedImages.length} imagen
                {selectedImages.length > 1 ? "es" : ""} seleccionada
                {selectedImages.length > 1 ? "s" : ""}
              </div>
              <button className="delete-button" onClick={handleDeleteSelected}>
                <IconoPapelera size={20} /> Eliminar
              </button>
            </div>
          </div>
        )}

        {/* Botón Añadir más */}
        <div className="bot-n">
          <label className="validar" htmlFor="addMore">
            Añadir más
          </label>
          <input
            id="addMore"
            type="file"
            accept="image/*"
            capture="environment"
            style={{ display: "none" }}
            multiple
            onChange={handleAddMore}
          />
        </div>

        <div className="bot-n2" onClick={() => setShowModal(true)}>
          <div className="validar2">Validar subida</div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-dni">
          <div className="content">
            <img className="icono" src="icono0.svg" alt="Icono" />
            <div className="right">
              <div className="title">Introduce DNI para validar</div>
            </div>
          </div>
          <div className="field">
            <input
              type="text"
              className="input"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              placeholder="00000000M"
            />
          </div>
          <div className="bot-n" onClick={handleValidateDni}>
            <div className="validar">Validar</div>
          </div>
          {validationMessage && (
            <div className="validation-message">{validationMessage}</div>
          )}
        </div>
      )}
    </>
  );
};

export default RestauracionImagenes;
