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
    <div className="formulario-i-phone-13-14">
  <div className="bot-n">
    <div className="registrar">Registrar</div>
  </div>
  <div className="frame-427319507">
    <div className="cabecera">
      <div className="informe-de-registro">INFORME DE REGISTRO</div>
      <div className="fecha-entrada-n-registro">
        <div className="vertical-form-item-input">
          <div className="label">
            <div className="title">Fecha de entrada</div>
          </div>
          <div className="field">
            <div className="input">
              <div className="placeholder">
                <div className="placeholder2" placeholder="MM/DD/AA"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="vertical-form-item-input">
          <div className="label">
            <div className="title">N. de registro</div>
          </div>
          <div className="field2">
            <div className="input2">
              <div className="placeholder">
                <div className="placeholder2">0456</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="datos-propietario">
      <div className="prop-anonimo">
        <div className="label2">
          <div className="title2">Datos propietario</div>
        </div>
        <div className="frame-47">
          <div className="radio-group">
            <div className="_02">
              <div className="frame-48">
                <div className="multiple-choice-input">
                  <div className="halo"></div>
                  <div className="rectangle"></div>
                  <div className="rectangle2"></div>
                </div>
                <div className="text">Con propietario</div>
              </div>
            </div>
            <div className="_01">
              <div className="multiple-choice-input2">
                <div className="bg"></div>
                <div className="border"></div>
              </div>
              <div className="text">Anónimo</div>
            </div>
          </div>
        </div>
      </div>
      <div className="datos">
        <div className="vertical-form-item-input2">
          <div className="label">
            <div className="title3">Nombre</div>
          </div>
          <div className="field">
            <div className="input3">
              <div className="placeholder">
                <div className="placeholder2">|</div>
              </div>
            </div>
          </div>
        </div>
        <div className="vertical-form-item-input2">
          <div className="label">
            <div className="title3">Apellido(s)</div>
          </div>
          <div className="field">
            <div className="input3">
              <div className="placeholder">
                <div className="placeholder2">|</div>
              </div>
            </div>
          </div>
        </div>
        <div className="dni-tel-fono">
          <div className="vertical-form-item-input">
            <div className="label">
              <div className="title3">DNI</div>
            </div>
            <div className="field">
              <div className="input3">
                <div className="placeholder">
                  <div className="placeholder2">00000000M</div>
                </div>
              </div>
            </div>
          </div>
          <div className="vertical-form-item-input3">
            <div className="label">
              <div className="title3">Teléfono</div>
            </div>
            <div className="field">
              <div className="input3">
                <div className="placeholder">
                  <div className="placeholder2">Ex: 000 000 000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vertical-form-item-input2">
          <div className="label">
            <div className="title3">Correo</div>
          </div>
          <div className="field">
            <div className="input3">
              <div className="placeholder">
                <div className="placeholder2">|</div>
              </div>
            </div>
          </div>
        </div>
        <div className="vertical-form-item-input2">
          <div className="label">
            <div className="title3">Lugar</div>
          </div>
          <div className="field">
            <div className="input3">
              <div className="placeholder">
                <div className="placeholder2">|</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="que-es-lo-que-se-recoge">
      <div className="title4">¿Qué es lo que se recoge?</div>
      <div className="datos2">
        <div className="_012">
          <div className="wrapper">
            <div className="input4">
              <div className="cursor"></div>
            </div>
          </div>
          <div className="text2">Album(es)</div>
        </div>
        <div className="_2">
          <div className="wrapper">
            <div className="input4">
              <div className="cursor"></div>
            </div>
          </div>
          <div className="text2">Conjunto fotográfico</div>
        </div>
        <div className="_3">
          <div className="wrapper">
            <div className="input4">
              <div className="cursor"></div>
            </div>
          </div>
          <div className="text2">Sobres con fotos</div>
        </div>
        <div className="vertical-form-item-input2">
          <div className="label3">
            <div className="title3">Otros</div>
          </div>
          <div className="field3">
            <div className="cursor2"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="estado">
      <div className="estado-general">
        <div className="title4">Estado general</div>
        <div className="checkbox">
          <div className="checkbox-group">
            <div className="checkbox2">
              <div className="multiple-choice-input">
                <div className="halo"></div>
                <div className="rectangle"></div>
                <div className="rectangle2"></div>
              </div>
              <div className="item-01">Bueno</div>
            </div>
          </div>
          <div className="checkbox-group2">
            <div className="checkbox2">
              <div className="multiple-choice-input2">
                <div className="bg"></div>
                <div className="border"></div>
              </div>
              <div className="item-01">Aceptable</div>
            </div>
          </div>
          <div className="checkbox-group">
            <div className="checkbox2">
              <div className="multiple-choice-input2">
                <div className="bg"></div>
                <div className="border"></div>
              </div>
              <div className="item-01">Malo</div>
            </div>
          </div>
        </div>
      </div>
      <div className="tipo-de-da-o">
        <div className="title4">Tipo de daño</div>
        <div className="checkbox">
          <div className="checkbox-group3">
            <div className="checkbox2">
              <img className="checkbox-input" src="checkbox-input0.svg" />
              <div className="item-01">Barro</div>
            </div>
          </div>
          <div className="checkbox-group4">
            <div className="checkbox2">
              <img className="checkbox-input2" src="checkbox-input1.svg" />
              <div className="item-01">Humedad</div>
            </div>
          </div>
          <div className="checkbox-group3">
            <div className="checkbox2">
              <div className="checkbox-input3">
                <div className="bg2"></div>
                <div className="border2"></div>
              </div>
              <div className="item-01">Hongos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="observaciones">
      <div className="title5">Observaciones</div>
      <div className="campo">
        <div className="cursor3"></div>
      </div>
    </div>
    <div className="escanear-formulario">
      <div className="continue-with-google-left-aligned-fixed">
        <img className="camera" src="camera0.svg" />
        <div className="escanear-formulario2">Escanear formulario</div>
      </div>
      <div className="pdf">
        <img className="rectangle-118" src="rectangle-1180.png" />
        <div className="pdf2">Pdf</div>
        <img className="vector" src="vector0.svg" />
      </div>
      <div className="button">
        <img className="close" src="close0.svg" />
      </div>
    </div>
    <div className="responsable">
      <div className="title5">Responsable</div>
      <div className="vertical-form-item-input2">
        <div className="label">
          <div className="title3">DNI</div>
        </div>
        <div className="field">
          <div className="input3">
            <div className="placeholder">
              <div className="placeholder2">00000000M</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};
export default InformeRegistro;
