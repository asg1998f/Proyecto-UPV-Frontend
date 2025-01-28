import React, { useState } from "react";

// El siguiente código va en el componente en el que se use la validación:

// import { useState } from "react"
// import Validacion from "../Validacion/Validacion";

// const [modalAbierto, setModalAbierto] = useState(false)
  
// const handleConfirm = (dni) => {
//   alert("Ingresar DNI: ${dni}");
//   setModalAbierto(false);
// }
// const miComponente =(){}
// <>
//   <div className={modalAbierto ? "blur-background" : "fondo"}>
//     <button onClick={() => setModalAbierto(true)}>Validar</button>
//     <Validacion 
//       isOpen={modalAbierto} 
//       onClose={() => setModalAbierto(false)} 
//       onConfirm={handleConfirm} 
//     />
//   </div>
// </>

const Validacion = ({ isOpen, onClose, onConfirm }) => {
  const [dni, setDni] = useState("");

  if (!isOpen) return null; // No renderiza el modal si no está abierto

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Validar DNI</h2>
        <input
          type="text"
          placeholder="Introduce tu DNI"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />
        <div className="modal-buttons">
          <button onClick={onClose} className="cancelar">Cancelar</button>
          <button onClick={() => onConfirm(dni)} className="confirmar">Confirmar</button>
        </div>
      </div>
    </div>
  );
};

export default Validacion