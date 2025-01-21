import React, { useState } from "react";
const InformeRegistro = () => {
  const [formData, setFormData] = useState({ fechaentrada: "", email: "", age: 0, password: "" });
  const { fechaentrada, ID, DNItrabajador, anonimo, conpropietario, propietario, DNIpropietario, telefono, email, objetosrecogida, bueno, malo, aceptable, barro, humedad, hongos  } = formData;
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData);
  };
  return (
    <form onSubmit={onSubmit}>
      <h2>INFORME DE REGISTRO</h2>
      <input type="date" name="fecha de entrada" value={fechaentrada} onChange={onChange} />
      <input type="text" name="ID" value={ID} onChange={onChange} />
      <input type="text" name="DNItrabajador" value={DNItrabajador} onChange={onChange} />
      <input type="checkbox" name="anonimo" value={anonimo} onChange={onChange} />
      <input type="chackbox" name="con propietario" value={conpropietario} onChange={onChange} />
      <h2>INFORMACIÓN GENERAL</h2>
      <input type="text" name="propietario/a" value={propietario} onChange={onChange} />
      <input type="text" name="DNIpropietario" value={DNIpropietario} onChange={onChange} />
      <input type="number" name="telefono" value={telefono} onChange={onChange} />
      <input type="email" name="email" value={email} onChange={onChange} />
      <input type="textarea" name="objetosrecogida" value={objetosrecogida} onChange={onChange} />
      <h2>ESTADO DE CONSERVACIÓN</h2>
      <input type="checkbox" name="bueno" value={bueno} onChange={onChange} />
      <input type="checkbox" name="aceptable" value={aceptable} onChange={onChange} />
      <input type="checkbox" name="malo" value={malo} onChange={onChange} />
      <input type="checkbox" name="barro" value={barro} onChange={onChange} />
      <input type="checkbox" name="humedad" value={humedad} onChange={onChange} />
      <input type="checkbox" name="hongos" value={hongos} onChange={onChange} />
      <h2>OBSERVACIONES</h2>
      <input type="textarea" name="observaciones" value={observaciones} onChange={onChange} />
    </form>
  );
};
export default InformeRegistro;
