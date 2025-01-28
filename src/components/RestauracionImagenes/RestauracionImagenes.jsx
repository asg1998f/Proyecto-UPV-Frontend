import React, { useState, useEffect } from "react";
import axios from "axios"; // Importar axios
import Webcam from "react-webcam";
import "./RestauracionImagenes.scss";
import IconoRestaurarR from "../../assets/iconos/IconoRestaurarR.png";
import papelera from "../../assets/iconos/IconoPapelera.png";
import FlechaNavigate from "../FlechaNavigate/FlechaNavigate";
import { Button } from "antd";

const RestauracionImagenes = () => {
  const [images, setImages] = useState(
    Array.from({ length: 16 }, (_, index) => ({
      id: index + 1,
      src: `rectangle-118${index + 1}.png`,
    }))
  );
  const [selectedImages, setSelectedImages] = useState([]);
  const [isSelecting, setIsSelecting] = useState(false); // Nuevo estado para modo selección
  const [documentSerial, setDocumentSerial] = useState("Cargando...");
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  // Fetch document serial
  useEffect(() => {
    const fetchDocumentSerial = async () => {
      try {
        const response = await axios.get("https://api.example.com/document-serial");
        setDocumentSerial(response.data.serialNumber);
      } catch (error) {
        console.error("Error al obtener el número de serie:", error);
        setDocumentSerial("Error al cargar");
      }
    };

    fetchDocumentSerial();
  }, []);

  const handleSelectImage = (id) => {
    if (isSelecting) {
      if (selectedImages.includes(id)) {
        setSelectedImages(selectedImages.filter((imageId) => imageId !== id));
      } else {
        setSelectedImages([...selectedImages, id]);
      }
    }
  };

  const handleDeleteSelected = () => {
    setImages(images.filter((image) => !selectedImages.includes(image.id)));
    setSelectedImages([]);
  };

  const handleToggleSelectMode = () => {
    setIsSelecting(!isSelecting); // Alternar el modo de selección
    if (isSelecting) setSelectedImages([]); // Limpiar selección al salir del modo
  };

  const handleCapturePhoto = (webcamRef) => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setImages([...images, { id: images.length + 1, src: imageSrc }]);
        setIsCameraOpen(false);
      }
    }
  };

  const webcamRef = React.useRef(null);

  return (
    <>
      <div className="restauraci-n">
        <div className="home">
          <div className="logo">
            <FlechaNavigate />
            <div className="frame-427319580">
              <div className="frame-427319550">
                <div className="icono">
                  <img src={IconoRestaurarR} alt="Icono restaurar" />
                </div>
                <div className="almac-n">Restauración</div>
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
              <Button
                className={`btton-select-all-default ${isSelecting ? "active" : ""}`}
                onClick={handleToggleSelectMode}
              >
                <div className="seleccionar">
                  {isSelecting ? "Cancelar" : "Seleccionar"}
                </div>
              </Button>
            </div>
          </div>

          <div className="cardsRestauracion">
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

        {/* Mostrar pop-up solo si hay imágenes seleccionadas */}
        {selectedImages.length > 0 && (
          <div className="popup">
            <div className="popup-content">
              <div>
                {selectedImages.length} imagen
                {selectedImages.length > 1 ? "es" : ""} seleccionada
                {selectedImages.length > 1 ? "s" : ""}
              </div>
              <Button className="delete-button" onClick={handleDeleteSelected}>
                <img src={papelera} alt="Eliminar" className="papelera-icono" />
              </Button>
            </div>
          </div>
        )}

        {/* Cámara de fotos */}
        {isCameraOpen && (
  <div className="camera-container full-screen">
    <Webcam
      audio={false}
      ref={webcamRef}
      screenshotFormat="image/jpeg"
      className="webcam-view"
    />
    <div className="camera-buttons">
      <Button
        className="capture-button"
        onClick={() => handleCapturePhoto(webcamRef)}
      >
        Capturar
      </Button>
      <Button
        className="close-camera-button"
        onClick={() => setIsCameraOpen(false)}
      >
        Cerrar cámara
      </Button>
    </div>
  </div>
)}


        {/* Botones Inferiores */}
        {selectedImages.length === 0 && !isCameraOpen && (
          <div className="padreBotones">
            <div className="bot-n" onClick={() => setIsCameraOpen(true)}>
              <div className="validar">Añadir más</div>
            </div>

            <div className="bot-n2" onClick={() => console.log("Validar subida")}>
              <div className="validar2">Validar subida</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RestauracionImagenes;

