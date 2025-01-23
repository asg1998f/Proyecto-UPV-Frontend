import React, { useState } from 'react'

const InformeRegistro = () => {
  const [formData, setFormData] = useState({
    fechaentrada: "",
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
    sobresfotos: "",
    otros: "",
    bueno: false,
    aceptable: false,
    malo: false,
    barro: false,
    humedad: false,
    hongos: false,
    observaciones: "",
    dniresponsable: "",
  });

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
            sobresfotos, 
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

    if (!fechaentrada) newErrors.fechaentrada = "La fecha de entrada es obligatoria";
    if (!numeroregistro) newErrors.numeroregistro = "El número de registro es obligatorio";

    if (!conpropietario && !anonimo) {
      newErrors.propietario = "Debe seleccionar Con propietario o Anónimo";
    }

    if (conpropietario) {
      if (!nombre) newErrors.nombre = "El nombre es obligatorio";
      if (!apellido) newErrors.apellido = "El apellido es obligatorio";
      if (!dni) newErrors.dni = "El DNI es obligatorio";
      if (!telefono) newErrors.telefono = "El teléfono es obligatorio";
      if (!correo) newErrors.correo = "El correo es obligatorio";
      if (!lugar) newErrors.lugar = "El lugar es obligatorio";
    }

    if (!album && !conjuntofotografico && !sobresfotos) {
      newErrors.recoleccion = "Debe especificar al menos un elemento recogido";
    }

    if (!bueno && !aceptable && !malo) {
      newErrors.estado = "Debe seleccionar un estado general";
    }

    if (!barro && !humedad && !hongos) {
      newErrors.tipoDano = "Debe seleccionar al menos un tipo de daño";
    }

    if (!observaciones) newErrors.observaciones = "Las observaciones son obligatorias";
    if (!dniresponsable) newErrors.dniresponsable = "El DNI del responsable es obligatorio";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Devuelve true si no hay errores
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' || type === 'radio' ? checked : value,
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
    <h1 className='titulo-1'>INFORME DE REGISTRO</h1>
    <form onSubmit={onSubmit}>
      <div className="sector-1">
        <div className="fecha-entrada">
          <label className="fecha">Fecha de entrada</label>
          <input
            type="text"
            name="fechaentrada"
            value={fechaentrada}
            placeholder="MM/DD/AA"
            onChange={onChange}
          />
          {errors.fechaentrada && <p className="error">{errors.fechaentrada}</p>}
        </div>
        <div className="numero-registro">
          <label className="num-registro">N. de registro</label>
          <input
            type="text"
            name="numeroregistro"
            value={numeroregistro}
            placeholder="0456"
            onChange={onChange}
          />
          {errors.numeroregistro && <p className="error">{errors.numeroregistro}</p>}
        </div>
      </div>
      <div className='sector-2'>
        <h2 className='titulo-2'>Datos propietario</h2>
       <div className='radio-buttons-1'> 
        <div className='conpropietario'>
        <input
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
          <label className='nombre-propietario'>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={onChange}
          /> 
           {errors.nombre && <p className="error">{errors.nombre}</p>}
        </div>
        <div className='apellido'>
          <label className='apellido-propietario'>Apellido</label>
          <input
            type="text"
            name="apellido"
            value={apellido}
            onChange={onChange}
          /> 
          {errors.apellido && <p className="error">{errors.apellido}</p>}
        </div>
        <div className='dni+telefono'>
          <div className='dni'>
          <label className='dni-propietario'>DNI</label>
          <input
            type="text"
            name="dni"
            value={dni}
            onChange={onChange}
          /> 
          {errors.dni && <p className="error">{errors.dni}</p>}
          </div>
          <div className='telefono'>
          <label className='telefono-propietario'>Teléfono</label>
          <input
            type="number"
            name="telefono"
            value={telefono}
            onChange={onChange}
          /> 
          {errors.telefono && <p className="error">{errors.telefono}</p>}
          </div>
        </div>
        <div className='correo'>
        <label className='correo-propietario'>Correo</label>
          <input
            type="email"
            name="correo"
            value={correo}
            onChange={onChange}
          /> 
          {errors.correo && <p className="error">{errors.correo}</p>}
        </div>
        <div className='lugar'>
        <label className='lugar-propietario'>Lugar</label>
          <input
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
            type="text"
            name="album"
            value={album}
            onChange={onChange}
          />
          {errors.album && <p className="error">{errors.album}</p>}
          <label className='album-propietario'>Album(es)</label>
          </div>
          <div className='conjuntofotografico'>
          <input
            type="text"
            name="conjuntofotografico"
            value={conjuntofotografico}
            onChange={onChange}
          />
          {errors.conjuntofotografico && <p className="error">{errors.conjuntofotografico}</p>}
          <label className='conjuntofotografico-propietario'>Conjunto fotográfico</label>
          </div>
          <div className='sobres'>
          <input
            type="text"
            name="sobresfotos"
            value={sobresfotos}
            onChange={onChange}
          />
          {errors.sobresfotos && <p className="error">{errors.sobresfotos}</p>}
          <label className='sobresfotos-propietario'>Sobres con fotos</label>
          </div>
        </div>
        <div className='otros'>
        <label className="recoge-otros">Otros</label>
          <input
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
            type="radio"
            name="radio-button-2"
            value={bueno}
            onChange={onChange}
          />
          <label className='radio-bueno'>Bueno</label>
        </div>
        <div className='aceptable'>
        <input
            type="radio"
            name="radio-button-2"
            value={aceptable}
            onChange={onChange}
          />
          <label className='radio-aceptable'>Aceptable</label>
        </div>
        <div className='malo'>
        <input
            type="radio"
            name="radio-button-2"
            value={malo}
            onChange={onChange}
          />
          <label className='radio-malo'>Malo</label>
        </div>
        </div>
      </div>
      <div className='sector-5'>
        <h2 className='tipodedaño'>Tipo de daño</h2>
        <div className='check-box'> 
        <div className='barro'>
        <input
            type="checkbox"
            name="barro"
            value={barro}
            onChange={onChange}
          />
          <label className='checkbox-bueno'>Barro</label>
        </div>
        <div className='humedad'>
        <input
            type="checkbox"
            name="humedad"
            value={humedad}
            onChange={onChange}
          />
          <label className='checkbox-humedad'>Humedad</label>
        </div>
        <div className='hongos'>
        <input
            type="checkbox"
            name="hongos"
            value={hongos}
            onChange={onChange}
          />
          <label className='checkbox-hongos'>Hongos</label>
        </div>
        </div>
      </div>
      <div className='sector-6'>
        <h2 className='observaciones'>Observaciones</h2>
        <div className='input-observaciones'>
        <input
            type="text"
            name="observaciones"
            value={observaciones}
            onChange={onChange}
          />
        </div>
      </div>
      <div className='sector-7'>
      </div>
      <div className='sector-8'>
        <h2 className='responsable'>Responsable</h2>
        <div className='responsable-dni'>
        <label className='dni-responsable'>DNI</label>
          <input
            type="text"
            name="dniresponsable"
            placeholder='00000000M'
            value={dniresponsable}
            onChange={onChange}
          /> 
        </div>
      </div>
      <div className='btn-registrar'>
      <button type="registrar">Registrar</button>
      </div>
    </form>
  </div>
  )
}

export default InformeRegistro