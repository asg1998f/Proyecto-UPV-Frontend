import React from 'react'
import  "./RestauracionImagenes.scss"
import IconoRestaurar from "../../assets/iconos/IconoRestaurar.png"
import FlechaIzquierda from "../../assets/iconos/FlechaIzquierda.png"

const RestauracionImagenes = () => {
  return (
    <>
    
    <div class="restauraci-n">
  <div class="home">
    <div class="logo">
    <img src={FlechaIzquierda}/>
      <div class="frame-427319580">
        <div class="frame-427319550">
          <div class="icono">
          <img src={IconoRestaurar}/>
          </div>
          <div class="almac-n">Restaurar</div>
        </div>
        <div class="frame-427319552">
          <div class="_0012-ft">0012-FT-A01</div>
        </div>
      </div>
    </div>
    <div class="auto-toodo-imgs">
      <div class="auto-imgs-button">
        <div class="titulo-imgs">
          <div class="im-genes">Imágenes</div>
        </div>
        <div class="btton-select-all-default">
          <div class="seleccionar">Seleccionar</div>
        </div>
      </div>
    </div>
    <div class="cards">
  {Array.from({ length: 16 }).map((_, index) => (
    <div class="image-check-no-check" key={index}>
      <img
        class="rectangle-118"
        src={`rectangle-118${index + 1}.png`}
        alt={`Imagen ${index + 1}`}
      />
    </div>
  ))}
  </div>
</div>
  <div class="bot-n">
    <div class="validar">Añadir más</div>
  </div>
  <div class="bot-n2">
    <div class="validar2">Validar subida</div>
  </div>
</div>
</>
  )
}

export default RestauracionImagenes