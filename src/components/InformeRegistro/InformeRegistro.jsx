import React from 'react'
import './InformeRegistro.scss'

const InformeRegistro = () => {
  return (
   <div>
    <div class="formulario-i-phone-13-14">
  <form onSubmit="handleFormSubmit(event)">
    <div class="bot-n">
      <div class="registrar" onClick="handleRegisterClick()">Registrar</div>
    </div>
    <div class="frame-427319507">
      <div class="cabecera">
        <div class="informe-de-registro">INFORME DE REGISTRO</div>
        <div class="fecha-entrada-n-registro">
          <div class="vertical-form-item-input">
            <div class="label">
              <div class="title">Fecha de entrada</div>
            </div>
            <div class="field">
              <input
                class="input"
                type="text"
                placeholder="MM/DD/AA"
                onChange="handleInputChange(event)"
              />
            </div>
          </div>
          <div class="vertical-form-item-input">
            <div class="label">
              <div class="title">N. de registro</div>
            </div>
            <div class="field2">
              <input
                class="input2"
                type="text"
                placeholder="0456"
                onChange="handleInputChange(event)"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="datos-propietario">
        <div class="prop-anonimo">
          <div class="label2">
            <div class="title2">Datos propietario</div>
          </div>
          <div class="frame-47">
            <div class="radio-group">
              <div class="_02">
                <div class="frame-48">
                  <input
                    class="multiple-choice-input"
                    type="radio"
                    name="propietario"
                    value="con-propietario"
                    onChange="handleRadioChange(event)"
                  />
                  <div class="text">Con propietario</div>
                </div>
              </div>
              <div class="_01">
                <input
                  class="multiple-choice-input2"
                  type="radio"
                  name="propietario"
                  value="anonimo"
                  onChange="handleRadioChange(event)"
                />
                <div class="text">Anónimo</div>
              </div>
            </div>
          </div>
        </div>
        <div class="datos">
          <div class="vertical-form-item-input2">
            <div class="label">
              <div class="title3">Nombre</div>
            </div>
            <div class="field">
              <input
                class="input3"
                type="text"
                placeholder="|"
                onChange="handleInputChange(event)"
              />
            </div>
          </div>
          <div class="vertical-form-item-input2">
            <div class="label">
              <div class="title3">Apellido(s)</div>
            </div>
            <div class="field">
              <input
                class="input3"
                type="text"
                placeholder="|"
                onChange="handleInputChange(event)"
              />
            </div>
          </div>
          <div class="dni-tel-fono">
            <div class="vertical-form-item-input">
              <div class="label">
                <div class="title3">DNI</div>
              </div>
              <div class="field">
                <input
                  class="input3"
                  type="text"
                  placeholder="00000000M"
                  onChange="handleInputChange(event)"
                />
              </div>
            </div>
            <div class="vertical-form-item-input3">
              <div class="label">
                <div class="title3">Teléfono</div>
              </div>
              <div class="field">
                <input
                  class="input3"
                  type="text"
                  placeholder="Ex: 000 000 000"
                  onChange="handleInputChange(event)"
                />
              </div>
            </div>
          </div>
          <div class="vertical-form-item-input2">
            <div class="label">
              <div class="title3">Correo</div>
            </div>
            <div class="field">
              <input
                class="input3"
                type="email"
                placeholder="|"
                onChange="handleInputChange(event)"
              />
            </div>
          </div>
          <div class="vertical-form-item-input2">
            <div class="label">
              <div class="title3">Lugar</div>
            </div>
            <div class="field">
              <input
                class="input3"
                type="text"
                placeholder="|"
                onChange="handleInputChange(event)"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="que-es-lo-que-se-recoge">
        <div class="title4">¿Qué es lo que se recoge?</div>
        <div class="datos2">
          <div class="_012">
            <input
              class="input4"
              type="checkbox"
              value="albumes"
              onChange="handleCheckboxChange(event)"
            />
            <div class="text2">Album(es)</div>
          </div>
          <div class="_2">
            <input
              class="input4"
              type="checkbox"
              value="conjunto-fotografico"
              onChange="handleCheckboxChange(event)"
            />
            <div class="text2">Conjunto fotográfico</div>
          </div>
          <div class="_3">
            <input
              class="input4"
              type="checkbox"
              value="sobres-con-fotos"
              onChange="handleCheckboxChange(event)"
            />
            <div class="text2">Sobres con fotos</div>
          </div>
          <div class="vertical-form-item-input2">
            <div class="label3">
              <div class="title3">Otros</div>
            </div>
            <div class="field3">
              <input
                class="cursor2"
                type="text"
                placeholder="Otros..."
                onChange="handleInputChange(event)"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="estado">
        <div class="estado-general">
          <div class="title4">Estado general</div>
          <div class="checkbox">
            <div class="checkbox-group">
              <input
                class="multiple-choice-input"
                type="radio"
                name="estado-general"
                value="bueno"
                onChange="handleRadioChange(event)"
              />
              <div class="item-01">Bueno</div>
            </div>
            <div class="checkbox-group2">
              <input
                class="multiple-choice-input2"
                type="radio"
                name="estado-general"
                value="aceptable"
                onChange="handleRadioChange(event)"
              />
              <div class="item-01">Aceptable</div>
            </div>
            <div class="checkbox-group">
              <input
                class="multiple-choice-input2"
                type="radio"
                name="estado-general"
                value="malo"
                onChange="handleRadioChange(event)"
              />
              <div class="item-01">Malo</div>
            </div>
          </div>
        </div>
        <div class="tipo-de-da-o">
          <div class="title4">Tipo de daño</div>
          <div class="checkbox">
            <div class="checkbox-group3">
              <input
                class="checkbox-input"
                type="checkbox"
                value="barro"
                onChange="handleCheckboxChange(event)"
              />
              <div class="item-01">Barro</div>
            </div>
            <div class="checkbox-group4">
              <input
                class="checkbox-input2"
                type="checkbox"
                value="humedad"
                onChange="handleCheckboxChange(event)"
              />
              <div class="item-01">Humedad</div>
            </div>
            <div class="checkbox-group3">
              <input
                class="checkbox-input3"
                type="checkbox"
                value="hongos"
                onChange="handleCheckboxChange(event)"
              />
              <div class="item-01">Hongos</div>
            </div>
          </div>
        </div>
      </div>
      <div class="observaciones">
        <div class="title5">Observaciones</div>
        <div class="campo">
          <textarea
            class="cursor3"
            placeholder="Escribe aquí tus observaciones"
            onChange="handleInputChange(event)"
          ></textarea>
        </div>
      </div>
      <div class="escanear-formulario">
        <div
          class="continue-with-google-left-aligned-fixed"
          onClick="handleScanForm()"
        >
          <img class="camera" src="camera0.svg" />
          <div class="escanear-formulario2">Escanear formulario</div>
        </div>
        <div class="pdf" onClick="handleDownloadPDF()">
          <img class="rectangle-118" src="rectangle-1180.png" />
          <div class="pdf2">Pdf</div>
          <img class="vector" src="vector0.svg" />
        </div>
        <div class="button" onClick="handleCloseForm()">
          <img class="close" src="close0.svg" />
        </div>
      </div>
      <div class="responsable">
        <div class="title5">Responsable</div>
        <div class="vertical-form-item-input2">
          <div class="label">
            <div class="title3">DNI</div>
          </div>
          <div class="field">
            <input
              class="input3"
              type="text"
              placeholder="00000000M"
              onChange="handleInputChange(event)"
            />
          </div>
        </div>
      </div>
    </div>
  </form>
</div>

   </div>

  )
}

export default InformeRegistro
