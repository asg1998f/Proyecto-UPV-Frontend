import "./InformeRegistro.scss";
import { BotonRegistrar } from "../BotonRegistrar/BotonRegistrar.jsx";
import { Wrapper } from "../Wrapper/Wrapper.jsx";
import { RadioInputVariasOpciones } from "../RadioInputVariasOpciones/RadioInputVariasOpciones.jsx";
import { PropiedadesInputVO } from "../PropiedadesInputVO/PropiedadesInputVO.jsx";
import { CheckboxMarcado } from "../CheckboxMarcado/CheckboxMarcado.jsx";
import { CheckboxPredeterminado } from "../CheckboxPredeterminado/CheckboxPredeterminado.jsx";
import { Camara } from "../Camara/Camara.jsx";
import { Cerrar } from "../Cerrar/Cerrar.jsx";
import { Radio } from "../Radio/Radio.jsx";
import { InputVertical } from "../InputVertical/InputVertical.jsx";

export const InformeRegistro = ({ className, ...props }) => {
  return (
    <div className={"formulario-i-phone-13-14 " + className}>
      <BotonRegistrar className="bot-n-instance"></BotonRegistrar>
      <div className="frame-427319507">
        <div className="cabecera">
          <div className="informe-de-registro">INFORME DE REGISTRO </div>
          <div className="fecha-entrada-n-registro">
            <InputVertical
              text="Fecha de entrada"
              className="vertical-form-item-input-instance"
            ></InputVertical>
            <InputVertical
              text="0456"
              text2="N. de registro "
              className="vertical-form-item-input-instance"
            ></InputVertical>
          </div>
        </div>
        <div className="datos-propietario">
          <div className="prop-anonimo">
            <div className="label">
              <div className="title">Datos propietario </div>
            </div>
            <div className="frame-47">
              <Radio
                text="Con propietario"
                className="radio-group-instance"
              ></Radio>
            </div>
          </div>
          <div className="datos">
            <InputVertical
              text="Nombre"
              text2="|"
              className="vertical-form-item-input-instance2"
            ></InputVertical>
            <InputVertical
              text="Apellido(s)"
              text2="|"
              className="vertical-form-item-input-instance2"
            ></InputVertical>
            <div className="dni-tel-fono">
              <InputVertical
                text="DNI"
                text2="00000000M"
                className="vertical-form-item-input-instance"
              ></InputVertical>
              <InputVertical
                text="Teléfono"
                text2="Ex: 000 000 000"
                className="vertical-form-item-input-instance3"
              ></InputVertical>
            </div>
            <InputVertical
              text="Correo"
              text2="|"
              className="vertical-form-item-input-instance2"
            ></InputVertical>
            <InputVertical
              text="Lugar"
              text2="|"
              className="vertical-form-item-input-instance2"
            ></InputVertical>
          </div>
        </div>
        <div className="que-es-lo-que-se-recoge">
          <div className="title2">¿Qué es lo que se recoge? </div>
          <div className="datos2">
            <div className="_01">
              <Wrapper className="wrapper-instance"></Wrapper>
              <div className="text">Album(es) </div>
            </div>
            <div className="_2">
              <Wrapper className="wrapper-instance"></Wrapper>
              <div className="text">Conjunto fotográfico </div>
            </div>
            <div className="_3">
              <Wrapper className="wrapper-instance"></Wrapper>
              <div className="text">Sobres con fotos </div>
            </div>
            <div className="vertical-form-item-input">
              <div className="label2">
                <div className="title3">Otros </div>
              </div>
              <div className="field">
                <div className="cursor"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="estado">
          <div className="estado-general">
            <div className="title2">Estado general </div>
            <div className="checkbox">
              <div className="checkbox-group">
                <div className="checkbox2">
                  <RadioInputVariasOpciones
                    property1="radio"
                    className="multiple-choice-input-instance"
                  ></RadioInputVariasOpciones>
                  <div className="item-01">Bueno </div>
                </div>
              </div>
              <div className="checkbox-group2">
                <div className="checkbox2">
                  <PropiedadesInputVO className="multiple-choice-input-instance"></PropiedadesInputVO>
                  <div className="item-01">Aceptable </div>
                </div>
              </div>
              <div className="checkbox-group">
                <div className="checkbox2">
                  <PropiedadesInputVO className="multiple-choice-input-instance"></PropiedadesInputVO>
                  <div className="item-01">Malo </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tipo-de-da-o">
            <div className="title2">Tipo de daño </div>
            <div className="checkbox">
              <div className="checkbox-group3">
                <div className="checkbox2">
                  <CheckboxMarcado className="checkbox-input-instance"></CheckboxMarcado>
                  <div className="item-01">Barro </div>
                </div>
              </div>
              <div className="checkbox-group4">
                <div className="checkbox2">
                  <CheckboxMarcado className="checkbox-input-instance2"></CheckboxMarcado>
                  <div className="item-01">Humedad </div>
                </div>
              </div>
              <div className="checkbox-group3">
                <div className="checkbox2">
                  <CheckboxPredeterminado
                    property1="default"
                    className="checkbox-input-instance3"
                  ></CheckboxPredeterminado>
                  <div className="item-01">Hongos </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="observaciones">
          <div className="title4">Observaciones </div>
          <div className="campo">
            <div className="cursor2"></div>
          </div>
        </div>
        <div className="escanear-formulario">
          <div className="continue-with-google-left-aligned-fixed">
            <Camara className="camera-instance"></Camara>
            <div className="escanear-formulario2">Escanear formulario </div>
          </div>
          <div className="pdf">
            <img className="rectangle-118" src="rectangle-1180.png" />
            <div className="pdf2">Pdf </div>
            <img className="vector" src="vector0.svg" />
          </div>
          <div className="button">
            <Cerrar className="close-instance"></Cerrar>
          </div>
        </div>
        <div className="responsable">
          <div className="title4">Responsable </div>
          <InputVertical
            text="DNI"
            text2="00000000M"
            className="vertical-form-item-input-instance2"
          ></InputVertical>
        </div>
      </div>
    </div>
  );
};

