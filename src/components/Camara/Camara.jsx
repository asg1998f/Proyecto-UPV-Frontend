import React, { Component } from 'react';
import Webcam from "react-webcam";

export default class Camara extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagen: null,
      mostrarCamara: false
    };
    this.webcam = React.createRef();
  }

  foto = () => {
    const captura = this.webcam.current.getScreenshot(); // Obtener la imagen en formato Base64
    if (captura) {
      this.setState({ imagen: captura }, () => {
        // Llamar a la prop onCapture para enviar la imagen al componente padre
        if (this.props.onCapture) {
          this.props.onCapture(captura); // Enviar la imagen capturada como Base64
        }
      });
    }
  };

  cerrarCamara = () => {
    if (this.webcam.current && this.webcam.current.stream) {
      const tracks = this.webcam.current.stream.getTracks();
      tracks.forEach((track) => track.stop());
      this.webcam.current.stream = null;
    }
    this.setState({ mostrarCamara: false }, () => {
      if (this.props.onClose) {
        this.props.onClose(); // Llamar a la prop onClose si está definida
      }
    });
  };

  abrirCamara = () => {
    this.setState({ mostrarCamara: true });
  };

  render() {
    const videoConstraints = {
      facingMode: "environment"
    };

    return (
      <div className="App">
        {this.state.mostrarCamara ? (
          <div>
            <Webcam
              audio={false}
              height={350}
              ref={this.webcam}
              screenshotFormat="image/jpeg"
              width={350}
              videoConstraints={videoConstraints}
              onUserMedia={(stream) => {
                this.webcam.current.stream = stream;
              }}
              onUserMediaError={() => {
                console.error("Error al acceder a la cámara");
              }}
            />
            <br />
            <button onClick={this.foto}>Hacer captura</button>
            <button onClick={this.cerrarCamara}>Cerrar cámara</button>
          </div>
        ) : (
          <div>
            <p>La cámara está cerrada.</p>
            <button onClick={this.abrirCamara}>Abrir cámara</button>
          </div>
        )}
        <hr />
        {this.state.imagen && (
          <>
            <img src={this.state.imagen} alt="Captura" />
            <br />
            <a href={this.state.imagen} download="captura">Descargar captura</a>
          </>
        )}
      </div>
    );
  }
}

