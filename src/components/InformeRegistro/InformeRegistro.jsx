import React, { useEffect, useState } from 'react'
import iconoregistro from "../../assets/registrar-icono.png"
import "./InformeRegistro.scss"
import {  Button  } from 'antd';
import { jsPDF } from 'jspdf';
import Camara from '../Camara/Camara';
import imgcamara from '../../assets/iconos/IconoCamara.png'
import FlechaNavigate from '../FlechaNavigate/FlechaNavigate';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLast, updateByNregistro } from '../../features/lote/loteSlice';
import axios from "axios";



const InformeRegistro = () => {
  const [mostrarCamara, setMostrarCamara] = useState(false); // Estado para mostrar la cámara
  const [archivoPDF, setArchivoPDF] = useState(null); // Estado para guardar el PDF

  

  const manejarEscaneo = () => {
    setMostrarCamara(true);
  };

  const cerrarCamaraDesdeRegistro = () => {
    setMostrarCamara(false);
  };

  const manejarCaptura = (fotoBase64) => {
    // Convertir la imagen Base64 a un archivo PDF
    const pdf = new jsPDF();
    pdf.addImage(fotoBase64, 'JPEG', 10, 10, 190, 0); // Ajustar la imagen al ancho del PDF
    const blobPDF = pdf.output('blob'); // Generar el PDF como Blob
    const archivo = new File([blobPDF], 'captura.pdf', { type: 'application/pdf' });

    setArchivoPDF(archivo); // Guardar el archivo PDF en el estado
    setMostrarCamara(false); // Cerrar la cámara
  };

  const obtenerFechaActual = () => {
    const fechaActual = new Date();
    const dia = String(fechaActual.getDate()).padStart(2, '0');
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0');
    const anio = fechaActual.getFullYear();
    return `${dia}/${mes}/${anio}`; 
  };

  const [formData, setFormData] = useState({
    /* if (event.target.imageProduct.files[0]) formData.set('imageProduct', event.target.imageProduct.files[0]) */
    fechaentrada: obtenerFechaActual(),
    nRegistro: "",
    conpropietario: false,
    anonimo: false,
    nombre: "",
    apellido: "",
    dniPropietario: "",
    telefonoPropietario: "",
    correoPropietario: "",
    lugar: "",
    album: "",
    conjuntofotografico: "",
    otros: "",
    bueno: false,
    aceptable: false,
    malo: false,
    barro: false,
    humedad: false,
    hongos: false,
    observaciones: "",
    idResponsable: "",
    fotosenmarcadas: "",
    negativos: ""
  });
  const dispatch = useDispatch();

  const {ultimoLote} = useSelector((state)=> state.lotes)
  
  useEffect(() => {
  dispatch(getLast())
    
  }, []);
  const nRegistroHandler= () => {
    console.log(ultimoLote);
    // Extraer los primeros 4 números
let numberPart = parseInt(ultimoLote.nRegistro.slice(0, 4), 10); // Convierte "0001" en el número 1

// Incrementar el número en 1
numberPart += 1;

// Volver a formatear con ceros iniciales si es necesario
let letraNombre = formData.nombrePropietario[0]
let letraApellido = formData.apellido[0]
let updatedString = numberPart.toString().padStart(4, '0') + "-" + letraNombre + letraApellido;

setRegistroInput(updatedString)
    
  }

  const [errors, setErrors] = useState({});

  const { 
    fechaentrada, 
    nRegistro, 
    conPropietario, 
    anonimo, 
    nombrePropietario, 
    apellido, 
    dniPropietario, 
    telefonoPropietario, 
    correoPropietario, 
    lugar, 
    album, 
    conjuntofotografico, 
    fotosenmarcadas, 
    negativos, 
    otros, 
    bueno, 
    aceptable, 
    malo, 
    barro, 
    humedad, 
    hongos, 
    observaciones, 
    idResponsable 
  } = formData;
  const [nRegistroInput,setRegistroInput] = useState("XXXX-YY");

  const validateForm = () => {
    const newErrors = {};

    if (fechaentrada) {
      const fechaRegex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/; 
      if (!fechaRegex.test(fechaentrada)) {
        newErrors.fechaentrada = "El formato de fecha debe ser DD/MM/AAAA";
      } else {
        const [dia, mes, anio] = fechaentrada.split("/").map(Number); 
        const fechaIngresada = new Date(anio, mes - 1, dia); 
        const fechaActual = new Date();
        if (fechaIngresada > fechaActual) {
          newErrors.fechaentrada = "La fecha de entrada no puede ser posterior al día actual";
        }
      }
    }
    
    
    
    
    
    // if (!nRegistro) {
    //   newErrors.nRegistro = "El número de registro es obligatorio";
    // } else {
    //   const registroRegex = /^\d{4}$/; 
    //   if (!registroRegex.test(nRegistro)) {
    //     newErrors.nRegistro = "El número de registro debe contener exactamente 4 números";
    //   } else if (!nombrePropietario || !apellido) {
    //     newErrors.nRegistro = "Debe completar los campos Nombre y Apellido antes de generar el número de registro completo";
    //   } else {
    //     const primeraLetraNombre = nombrePropietario.trim().charAt(0).toUpperCase();
    //     const primeraLetraApellido = apellido.trim().charAt(0).toUpperCase();
    //     const formattedRegistro = `${nRegistro}-${primeraLetraNombre}${primeraLetraApellido}`;
    //     formData.nRegistro = formattedRegistro; 
    //   }
    // }

    if (!conPropietario && !anonimo) {
      newErrors.propietario = "Debe seleccionar Con propietario o Anónimo";
    }

    if (conPropietario || anonimo) {
      if (!nombrePropietario) {
        newErrors.nombrePropietario = "El nombre es obligatorio.";
      } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombrePropietario)) {
        newErrors.nombrePropietario = "El nombre solo puede contener letras.";
      }
    
      if (!apellido) {
        newErrors.apellido = "El apellido es obligatorio.";
      } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido)) {
        newErrors.apellido = "El apellido solo puede contener letras.";
      }
    
      if (!dniPropietario) {
        newErrors.dniPropietario = "El DNI es obligatorio.";
      } else if (!/^\d{8}[A-Z]$/.test(dniPropietario)) {
        newErrors.dniPropietario = "El DNI debe tener un formato válido (8 números seguidos de una letra mayúscula).";
      }
    
      if (!telefonoPropietario) {
        newErrors.telefonoPropietario = "El teléfono es obligatorio.";
      } else if (!/^\d{9}$/.test(telefonoPropietario)) {
        newErrors.telefonoPropietario = "El teléfono debe tener 9 dígitos.";
      }
    
      if (!correoPropietario) {
        newErrors.correoPropietario = "El correo es obligatorio.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoPropietario)) {
        newErrors.correoPropietario = "El correo debe tener un formato válido (ej: ejemplo@dominio.com).";
      }
    
      if (!lugar) {
        newErrors.lugar = "El lugar es obligatorio.";
      }
    }
    

    if (!album && !conjuntofotografico && !negativos && !fotosenmarcadas) {
      newErrors.recoleccion = "Debe especificar al menos un elemento recogido";
    } else {
      if (album && isNaN(Number(album))) {
        newErrors.album = "El número de álbumes debe ser un valor numérico";
      }
      if (conjuntofotografico && isNaN(Number(conjuntofotografico))) {
        newErrors.conjuntofotografico = "El número de conjuntos fotográficos debe ser un valor numérico";
      }
      if (negativos && isNaN(Number(negativos))) {
        newErrors.negativos = "El número de negativos debe ser un valor numérico";
      }
      if (fotosenmarcadas && isNaN(Number(fotosenmarcadas))) {
        newErrors.fotosenmarcadas = "El número de fotos enmarcadas debe ser un valor numérico";
      }
    
    }
    

    if (!bueno && !aceptable && !malo) {
      newErrors.estado = "Debe seleccionar un estado general";
    }

    if (!barro && !humedad && !hongos) {
      newErrors.tipoDano = "Debe seleccionar al menos un tipo de daño";
    }

    if (!observaciones) newErrors.observaciones = "Las observaciones son obligatorias";
    if (!idResponsable) {
      newErrors.idResponsable = "El DNI del responsable es obligatorio.";
    } else if (!/^\d{8}[A-Z]$/.test(idResponsable)) {
      newErrors.idResponsable = "El DNI del responsable debe tener un formato válido (8 números seguidos de una letra mayúscula).";
    }
    

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const getNextRegistroNumber = async () => {
    try {
      const response = await fetch('/api/ultimoregistro'); 
      const data = await response.json();
  
      if (data && data.ultimoRegistro) {
        const match = data.ultimoRegistro.match(/^(\d{4})-/);
        if (match) {
          const lastNumber = parseInt(match[1], 10); 
          const nextNumber = String(lastNumber + 1).padStart(4, '0'); 
          return nextNumber;
        } else {
          throw new Error("El formato del número de registro no es válido.");
        }
      } else {
        throw new Error("No se pudo obtener el último número de registro.");
      }
    } catch (error) {
      console.error("Error al obtener el siguiente número de registro:", error);
      return "0001"; 
    }
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    setFormData((prevFormData) => {
      const updatedFormData = {
        ...prevFormData,
        [name]: type === "checkbox" || type === "radio" ? checked : value,
      };
      if (name === "nombre" || name === "apellido") {
        const { nombre, apellido, numeroregistro } = updatedFormData;
  
        if (numeroregistro && /^\d{4}$/.test(numeroregistro) && nombre && apellido) {
          const primeraLetraNombre = nombre.trim().charAt(0).toUpperCase();
          const primeraLetraApellido = apellido.trim().charAt(0).toUpperCase();
          updatedFormData.numeroregistro = `${numeroregistro}-${primeraLetraNombre}${primeraLetraApellido}`;
        }
      }
  
      return updatedFormData;
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      
      alert("Formulario enviado correctamente.");
      let danyos = [{barro:formData.barro},{humedad:formData.humedad},{hongos:formData.hongos}]

      const trueKeys = danyos
  .filter(obj => Object.values(obj)[0]) // Filtra solo los objetos con valor true
  .map(obj => Object.keys(obj)[0]); // Obtén las keys de esos objetos
      let estado = [{bueno:formData.bueno},{aceptable:formData.aceptable},{malo:formData.malo}]
      const trueKeys2 = estado
      .filter(obj => Object.values(obj)[0]) // Filtra solo los objetos con valor true
      .map(obj => Object.keys(obj)[0]); // Obtén las keys de esos objetos
      
      
      const formularioFiltrado = {
        nombrePropietario : formData.nombrePropietario + " " +formData.apellido,
        conPropietario : formData.conPropietario?true:false,
        otros: formData.otros,
        lugar: formData.lugar,
        observaciones: formData.observaciones,
        telefonoPropietario: formData.telefonoPropietario,
        // formularioEscaneado: 
        dmg: trueKeys,
        nRegistro:nRegistroInput,
        estado: trueKeys2[0],
        correoPropietario:formData.correoPropietario,
        dniPropietario:formData.dniPropietario,
        album:formData.album,
        conjuntofotografico:formData.conjuntofotografico,
        fotosenmarcadas:formData.fotosenmarcadas,
        negativos:formData.negativos
      }
      const dataForm = new FormData();
      dataForm.append("archivo", document.getElementById("pdf").files[0]);
      console.log("Formulario enviado:", formularioFiltrado);
      const file = new File([archivoPDF], formularioFiltrado.nRegistro+"-Registro", { type: "application/pdf" });
      
      console.log(formularioFiltrado.nRegistro);
      console.log(formularioFiltrado);
      
      
      await axios.post("https://desafio-tripulaciones-429508457144.europe-west1.run.app/crear_estructura_completa?nombre_principal="+formularioFiltrado.nRegistro+"&cantidad_albumes="+formularioFiltrado.album+"&cantidad_marcos="+formularioFiltrado.fotosenmarcadas+"&cantidad_negativos="+formularioFiltrado.negativos,dataForm,{
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
      dispatch(updateByNregistro({nRegistro:formularioFiltrado.nRegistro,body:formularioFiltrado}))

    } else {
      alert("Por favor, corrija los errores en el formulario.");
    }
  };
  const navigate = useNavigate()
  return (
    <div className="container-formularioRegistro">
      <div className='sector-0'>
        
      <FlechaNavigate/>
        <div className='container-titulo'>
          <div className='titulo-vista'>
    <img className='icono' src={iconoregistro} alt="registrar"></img>   
    <p className='titulo-1'>Registrar</p>
    </div>
    </div>
    </div>
    <form onSubmit={onSubmit}>
      <div className='zone-gris'>
      <div className="sector-1">
        <div className="fecha-entrada">
          <label className="fecha">Fecha de entrada</label>
          <input
          className='input-fecha'
            type="text"
            name="fechaentrada"
            value={fechaentrada}
            placeholder="MM/DD/AA"
            onChange={onChange}
            max={new Date().toISOString().split("T")[0]}
          />
          {errors.fechaentrada && <p className="error">{errors.fechaentrada}</p>}
        </div>
        <div className="numero-registro">
          <label className="num-registro">N. de registro</label>
          <input
          className='input-nregistro'
            type="text"
            name="nRegistro"
            value={nRegistroInput}
            placeholder="XXXX"
            maxLength="4"
            disabled={true}
            onChange={(e) => {
              const { value } = e.target;
              if (/^\d{0,4}$/.test(value)) {
                setFormData({
                  ...formData,
                  numeroregistro: value,
                });
              }
            }}
            onBlur={() => {
              if (numeroregistro.length === 4 && nombre && apellido) {
                const formatted = `${numeroregistro}-${nombre.charAt(0).toUpperCase()}${apellido.charAt(0).toUpperCase()}`;
                setFormData({
                  ...formData,
                  numeroregistro: formatted,
                });
              }
            }}
          />
          {errors.numeroregistro && <p className="error">{errors.numeroregistro}</p>}
        </div>
      </div>
      <div className='sector-2'>
        <h2 className='titulo-2'>Datos propietario</h2>
       <div className='radio-buttons-1'> 
        <div className='conpropietario'>
        <input
        className='radio-button'
            type="radio"
            name="conPropietario"
            checked={conPropietario}
            onChange={() =>
              setFormData({
                ...formData,
                conPropietario: true,
                anonimo: false,
              })}
          />
          <label className='radio-propietario'>Con propietario</label>
        </div>
        <div className='conpropietario'>
        <input
        className='radio-button'
            type="radio"
            name="conPropietario"
            checked={anonimo}
            onChange={() =>
              setFormData({
                ...formData,
                conpropietario: false,
                anonimo: true,
              })
            }
          />
          <label className='radio-propietario'>Anónimo</label>
        </div>
        </div>
        {errors.radiobtn1 && <p className="error">{errors.radiobtn1}</p>}
        <div className='nombre'>
          <label className='label-propietario'>Nombre</label>
          <input
          className='input-sector2'
            type="text"
            name="nombrePropietario"
            value={nombrePropietario}
            onChange={onChange}
            pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+"
            title="El nombre solo puede contener letras."
          /> 
           {errors.nombre && <p className="error">{errors.nombre}</p>}
        </div>
        <div className='apellido'>
          <label className='label-propietario'>Apellido</label>
          <input
          className='input-sector2'
            type="text"
            name="apellido"
            value={apellido}
            onChange={onChange}
            pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+"
            title="El apellido solo puede contener letras."
            onBlur={nRegistroHandler}
          /> 
          {errors.apellido && <p className="error">{errors.apellido}</p>}
        </div>
        <div className='dni-telefono'>
          <div className='dni'>
          <label className='label-propietario'>DNI</label>
          <input
          className='input-dni-telefono'
            type="text"
            name="dniPropietario"
            placeholder='00000000M'
            value={dniPropietario}
            onChange={onChange}
            pattern="\d{8}[A-Z]"
            title="El DNI debe tener 8 números seguidos de una letra mayúscula."
            maxLength="9"
          /> 
          {errors.dni && <p className="error">{errors.dni}</p>}
          </div>
          <div className='telefono'>
          <label className='label-propietario'>Teléfono</label>
          <input
          className='input-dni-telefono'
            type="number"
            name="telefonoPropietario"
            placeholder='Ex: 000 000 000'
            value={telefonoPropietario}
            onChange={onChange}
            pattern="\d{9}"
            title="El teléfono debe tener 9 dígitos."
            maxLength="9"
          /> 
          {errors.telefono && <p className="error">{errors.telefono}</p>}
          </div>
        </div>
        <div className='correo'>
        <label className='label-propietario'>Correo</label>
          <input
          className='input-sector2'
            type="email"
            name="correoPropietario"
            value={correoPropietario}
            onChange={onChange}
            required
            title="Introduce un correo válido (ej: ejemplo@dominio.com)."
          /> 
          {errors.correo && <p className="error">{errors.correo}</p>}
        </div>
        <div className='lugar'>
        <label className='label-propietario'>Lugar</label>
          <input
          className='input-sector2'
            type="text"
            name="lugar"
            value={lugar}
            onChange={onChange}
          /> 
          {errors.lugar && <p className="error">{errors.lugar}</p>}
        </div>
      </div>
      <div className='sector-3'>
        <h2 className='queserecoge'>¿Qué es lo que se recoge?</h2>
        <div className='inputs-numericos'>
          <div className='album'>
          <input
          className='input-recoge'
            type="number"
            name="album"
            value={album}
            onChange={onChange}
          />
          {errors.album && <p className="error">{errors.album}</p>}
          <label className='album-propietario'>Album(es)</label>
          </div>
          <div className='album'>
          <input
          className='input-recoge'
            type="number"
            name="fotosenmarcadas"
            value={fotosenmarcadas}
            onChange={onChange}
          />
          {errors.fotosenmarcadas && <p className="error">{errors.fotosenmarcadas}</p>}
          <label className='album-propietario'>Fotos enmarcadas</label>
          </div>
          <div className='album'>
          <input
          className='input-recoge'
            type="number"
            name="negativos"
            value={negativos}
            onChange={onChange}
          />
          {errors.negativos && <p className="error">{errors.negativos}</p>}
          <label className='album-propietario'>Negativos</label>
          </div>
          <div className='album'>
          <input
          className='input-recoge'
            type="number"
            name="conjuntofotografico"
            value={conjuntofotografico}
            onChange={onChange}
          />
          {errors.conjuntofotografico && <p className="error">{errors.conjuntofotografico}</p>}
          <label className='album-propietario'>Conjunto fotográfico</label>
          </div>
        </div>
        <div className='otros'>
        <label className="recoge-otros">Otros</label>
          <input
          className='input-otros'
            type="text"
            name="otros"
            value={otros}
            onChange={onChange}
          />
          {errors.otros && <p className="error">{errors.otros}</p>}
        </div>
      </div>
      <div className='sector-4'>
    
        <h2 className='estadogeneral'>Estado general</h2>
       
        <div className='radio-buttons-2'> 
        <div className='bueno'>
        <input
        className='radio-button'
            type="radio"
            name="radio-button-2"
            value={bueno}
            onChange={() =>
              setFormData({ ...formData, bueno: true, aceptable: false, malo: false })
            }
          />
          <label className='radio-bueno'>Bueno</label>
        </div>
        <div className='bueno'>
        <input
        className='radio-button'
            type="radio"
            name="radio-button-2"
            value={aceptable}
            onChange={() =>
              setFormData({ ...formData, bueno: false, aceptable: true, malo: false })
            }
          />
          <label className='label-aceptable'>Aceptable</label>
        </div>
        <div className='bueno'>
        <input
        className='radio-button'
            type="radio"
            name="radio-button-2"
            value={malo}
            onChange={() =>
              setFormData({ ...formData, bueno: false, aceptable: false, malo: true })
            }
          />
          <label className='radio-bueno'>Malo</label>
        </div>
        </div>
        {errors.estado && <p className="error">{errors.estado}</p>}
      </div>
      <div className='sector-5'>
        <h2 className='tipodedaño'>Tipo de daño</h2>
        <div className='check-box'> 
        <div className='barro'>
        <input
        className='checkbox-1'
            type="checkbox"
            name="barro"
            value={barro}
            onChange={onChange}
          />
          <label className='label-checkbox'>Barro</label>
        </div>
        <div className='humedad'>
        <input
        className='checkbox-1'
            type="checkbox"
            name="humedad"
            value={humedad}
            onChange={onChange}
          />
          <label className='label-checkbox'>Humedad</label>
        </div>
        <div className='hongos'>
        <input
        className='checkbox-1'
            type="checkbox"
            name="hongos"
            value={hongos}
            onChange={onChange}
          />
          <label className='label-checkbox'>Hongos</label>
        </div>
        </div>
        {errors.tipoDano && <p className="error">{errors.tipoDano}</p>}
      </div>
      <div className='sector-6'>
        <h2 className='observaciones'>Observaciones</h2>

        <textarea
            className='input-observaciones'
            name="observaciones"
            value={observaciones}
            onChange={onChange}
          />
          {errors.observaciones && <p className="error">{errors.observaciones}</p>}
      </div>
      <div className="sector-7">
      {/* Botón para abrir la cámara */}
      <button type="button" className="btn-camara" onClick={manejarEscaneo}>
        <img className="camera" src={imgcamara} alt="Cámara" />
        <div className="escanear-formulario2">Escanear formulario</div>
      </button>

      {/* Modal de la cámara */}
      {mostrarCamara && (
        <div className="modal-camara">
          <Camara onClose={cerrarCamaraDesdeRegistro} onCapture={manejarCaptura} />
        </div>
      )}

      {/* Mostrar el archivo PDF generado */}
      {archivoPDF && (
        <div>
          <p>Archivo generado:</p>
          <a
            href={URL.createObjectURL(archivoPDF)}
            download={archivoPDF.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar PDF
          </a>
          <input type="file" name="" id="pdf"/>
        </div>
      )}
    </div>
      <div className='sector-8'>
        <h2 className='responsable'>Responsable</h2>
        <div className='responsable-dni'>
        <label className='dni-responsable'>DNI</label>
          <input
          className='input-sector2'
            type="text"
            name="idResponsable"
            placeholder='00000000M'
            value={idResponsable}
            onChange={onChange}
          /> 
          {errors.idResponsable && <p className="error">{errors.idResponsable}</p>}
        </div>
      </div>
  
      <div className='btn-registrar'>
        
      <Button className='btn' type="primary" shape="round"  onClick={onSubmit} >
            <p className='login'>Registrar</p>
          </Button>
      </div>
      </div>
    </form>
  </div>
  )
}

export default InformeRegistro
