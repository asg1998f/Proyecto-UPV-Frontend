import React, { useState, useEffect } from "react";
import axios from "axios"; // Importar axios
import "./RestauracionImagenes.scss";
import IconoRestaurarR from "../../assets/iconos/IconoRestaurarR.png";
import papelera from "../../assets/iconos/IconoPapelera.png";
import FlechaNavigate from "../FlechaNavigate/FlechaNavigate";
import { Button } from "antd";
import Validacion from "../Validacion/Validacion";
import "../Validacion/Validacion.scss"
import { useDispatch } from "react-redux";
import { validar } from "../../features/auth/authSlice";
import fotoejemplo1 from '../../assets/imagenes/Foto-prueba-3.jpg'
import fotoejemplo2 from '../../assets/imagenes/Foto-prueba-4.jpg'
import fotoejemplo3 from '../../assets/imagenes/Foto-prueba-5.jpg'
import fotoejemplo4 from '../../assets/imagenes/Foto-prueba-7.jpg'
import fotoejemplo5 from '../../assets/imagenes/Foto-prueba-11.jpg'
import fotoejemplo6 from '../../assets/imagenes/Foto-prueba-16.jpg'
import fotoejemplo7 from '../../assets/imagenes/Foto-prueba-10.jpg'
import fotoejemplo8 from '../../assets/imagenes/Foto-prueba-14.jpg'
import fotoejemplo9 from '../../assets/imagenes/Foto-prueba-15.jpg'
import fotoejemplo10 from '../../assets/imagenes/Foto-prueba-9.jpg'
//import fotoejemplo11 from '../../assets/imagenes/Foto-prueba-6.jpg'

const RestauracionImagenes = () => {
  const [images, setImages] = useState([
    { id: 1, src: fotoejemplo1 },
    { id: 2, src: fotoejemplo2 },
    { id: 3, src: fotoejemplo3 },
    { id: 4, src: fotoejemplo4 },
    { id: 5, src: fotoejemplo5 },
    { id: 6, src: fotoejemplo6 },
    { id: 7, src: fotoejemplo7 },
    { id: 8, src: fotoejemplo8 },
    { id: 9, src: fotoejemplo9 },
    { id: 10, src: fotoejemplo10 },
    
   ])
  
  const [selectedImages, setSelectedImages] = useState([]);
  const [isSelecting, setIsSelecting] = useState(false); // Nuevo estado para modo selección
  const [documentSerial, setDocumentSerial] = useState("Cargando...");
  
  const dispatch = useDispatch()

  const [modalAbierto, setModalAbierto] = useState(false)
  const handleConfirm = async (dni) => { 
          await dispatch( validar(dni))   
        let esCorrecto = localStorage.getItem("dni")
          if(esCorrecto == "true" ){  
              alert("El DNI  es correcto.");
          }
        setModalAbierto(false);
      }

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

  return (
    <>
      <div className={modalAbierto ? "blur-background" : "restauraci-n"}>
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
      </div>

      {/* Botones Inferiores */}
      <div className="padreBotones">
       {/*  <div className="bot-n">
          <label className="validar" htmlFor="addMore">
            Añadir más
          </label>
        </div> */}

      <div className="bot-n2">
        <div className="validar2" onClick={() => setModalAbierto(true)}>Validar subida</div>
        <Validacion 
          isOpen={modalAbierto} 
          onClose={() => setModalAbierto(false)} 
          onConfirm={handleConfirm} 
        />
      </div>
    </div>

   </>
  );
};

export default RestauracionImagenes;

