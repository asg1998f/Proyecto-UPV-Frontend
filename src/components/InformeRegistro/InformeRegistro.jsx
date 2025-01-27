import React, { useEffect, useState } from 'react'
import iconoregistro from "../../assets/registrar-icono.png"
import "./InformeRegistro.scss"
import {  Button  } from 'antd';

const InformeRegistro = () => {
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
    numeroregistro: "",
    conpropietario: false,
    anonimo: false,
    nombre: "",
    apellido: "",
    dni: "",
    telefono: "",
    correo: "",
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
    dniresponsable: "",
    fotosenmarcadas: "",
    negativos: ""
  });

  useEffect(() => {
    const fetchRegistro = async () => {
      const nextRegistro = await getNextRegistroNumber();
      setFormData((prevFormData) => ({
        ...prevFormData,
        numeroregistro: nextRegistro,
      }));
    };

    fetchRegistro();
  }, []);

  const [errors, setErrors] = useState({});

  const {   fechaentrada,
            numeroregistro,
            conpropietario,
            anonimo,
            nombre,
            apellido,
            dni,
            telefono,
            correo, 
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
            dniresponsable} = formData

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
    
    
    
    if (!numeroregistro) {
      newErrors.numeroregistro = "El número de registro es obligatorio";
    } else {
      const registroRegex = /^\d{4}$/; 
      if (!registroRegex.test(numeroregistro)) {
        newErrors.numeroregistro = "El número de registro debe contener exactamente 4 números";
      } else if (!nombre || !apellido) {
        newErrors.numeroregistro = "Debe completar los campos Nombre y Apellido antes de generar el número de registro completo";
      } else {
        const primeraLetraNombre = nombre.trim().charAt(0).toUpperCase();
        const primeraLetraApellido = apellido.trim().charAt(0).toUpperCase();
        const formattedRegistro = `${numeroregistro}-${primeraLetraNombre}${primeraLetraApellido}`;
        formData.numeroregistro = formattedRegistro; 
      }
    }

    if (!conpropietario && !anonimo) {
      newErrors.propietario = "Debe seleccionar Con propietario o Anónimo";
    }

    if (conpropietario || anonimo) {
      if (!nombre) {
        newErrors.nombre = "El nombre es obligatorio.";
      } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
        newErrors.nombre = "El nombre solo puede contener letras.";
      }
    
      if (!apellido) {
        newErrors.apellido = "El apellido es obligatorio.";
      } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido)) {
        newErrors.apellido = "El apellido solo puede contener letras.";
      }
    
      if (!dni) {
        newErrors.dni = "El DNI es obligatorio.";
      } else if (!/^\d{8}[A-Z]$/.test(dni)) {
        newErrors.dni = "El DNI debe tener un formato válido (8 números seguidos de una letra mayúscula).";
      }
    
      if (!telefono) {
        newErrors.telefono = "El teléfono es obligatorio.";
      } else if (!/^\d{9}$/.test(telefono)) {
        newErrors.telefono = "El teléfono debe tener 9 dígitos.";
      }
    
      if (!correo) {
        newErrors.correo = "El correo es obligatorio.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        newErrors.correo = "El correo debe tener un formato válido (ej: ejemplo@dominio.com).";
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
    if (!dniresponsable) {
      newErrors.dniresponsable = "El DNI del responsable es obligatorio.";
    } else if (!/^\d{8}[A-Z]$/.test(dniresponsable)) {
      newErrors.dniresponsable = "El DNI del responsable debe tener un formato válido (8 números seguidos de una letra mayúscula).";
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
  const onSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulario enviado:", formData);
      alert("Formulario enviado correctamente.");
      // Aquí puedes enviar los datos a una API o realizar otras acciones
    } else {
      alert("Por favor, corrija los errores en el formulario.");
    }
  };
  return (
    <div className="container-formulario">
      <div className='sector-0'>
      <svg className='atras' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M22.2857 10.0088H5.14286L10.7829 3.42405C10.9435 3.23799 11.0711 3.01663 11.1581 2.77274C11.2451 2.52884 11.2899 2.26724 11.2899 2.00303C11.2899 1.73881 11.2451 1.47721 11.1581 1.23332C11.0711 0.989426 10.9435 0.768064 10.7829 0.582004C10.4617 0.209234 10.0272 0 9.57429 0C9.1214 0 8.68691 0.209234 8.36572 0.582004L1.01143 9.1882C0.367564 9.93544 0.00382764 10.9503 0 12.0102C0.00834272 13.0632 0.371733 14.0699 1.01143 14.8123L8.36572 23.4185C8.52555 23.6038 8.71508 23.7505 8.92349 23.8503C9.1319 23.95 9.3551 24.0009 9.58035 24C9.80559 23.9991 10.0285 23.9463 10.2363 23.8448C10.4441 23.7433 10.6327 23.5951 10.7914 23.4084C10.9501 23.2218 11.0758 23.0006 11.1613 22.7572C11.2467 22.5139 11.2903 22.2533 11.2895 21.9904C11.2887 21.7274 11.2436 21.4672 11.1566 21.2246C11.0697 20.9819 10.9427 20.7617 10.7829 20.5764L5.14286 14.0117H22.2857C22.7404 14.0117 23.1764 13.8008 23.4979 13.4255C23.8194 13.0501 24 12.5411 24 12.0102C24 11.4794 23.8194 10.9703 23.4979 10.595C23.1764 10.2197 22.7404 10.0088 22.2857 10.0088Z" fill="#E6E6E6"/>
</svg>
        <div className='container-titulo'>
          <div className='titulo-vista'>
    <img className='icono' src={iconoregistro} alt="registrar"></img>   
    <p className='titulo-1'>Registrar</p>
    </div>
    </div>
    </div>
    <form onSubmit={onSubmit}>
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
            name="numeroregistro"
            value={numeroregistro}
            placeholder="0456"
            maxLength="4"
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
            name="radiobtn1"
            checked={conpropietario}
            onChange={() =>
              setFormData({
                ...formData,
                conpropietario: true,
                anonimo: false,
              })}
          />
          <label className='radio-propietario'>Con propietario</label>
        </div>
        <div className='anonimo'>
        <input
        className='radio-button'
            type="radio"
            name="radiobtn1"
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
            name="nombre"
            value={nombre}
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
          /> 
          {errors.apellido && <p className="error">{errors.apellido}</p>}
        </div>
        <div className='dni-telefono'>
          <div className='dni'>
          <label className='label-propietario'>DNI</label>
          <input
          className='input-dni-telefono'
            type="text"
            name="dni"
            placeholder='00000000M'
            value={dni}
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
            name="telefono"
            placeholder='Ex: 000 000 000'
            value={telefono}
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
            name="correo"
            value={correo}
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
        className='radio-button-aceptable'
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
        <div
          className="continue-with-google-left-aligned-fixed"
          onClick={manejarEscaneo}
        >
          <img className="camera" src="camera0.svg" alt="Cámara" />
          <div className="escanear-formulario2">Escanear formulario</div>
        </div>
        <div className="pdf">
          <img className="rectangle-118" src="rectangle-1180.png" alt="PDF" />
          <div className="pdf2">Pdf</div>
          <img className="vector" src="vector0.svg" alt="Vector" />
        </div>
        <div className="button">
          <img className="close" src="close0.svg" alt="Cerrar" />
        </div>
        {mostrarCamara && (
          <div className="modal-camara">
            <Camara onClose={cerrarCamaraDesdeRegistro} />
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
            name="dniresponsable"
            placeholder='00000000M'
            value={dniresponsable}
            onChange={onChange}
          /> 
          {errors.dniresponsable && <p className="error">{errors.dniresponsable}</p>}
        </div>
      </div>
      <div className='btn-registrar'>
      <Button className='btn' type="primary" shape="round"  onClick={onSubmit} >
            <p className='login'>Registrar</p>
            
          </Button>
      </div>
    </form>
  </div>
  )
}

export default InformeRegistro