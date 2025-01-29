import React, { useState } from 'react'
import { Form, Select, Button } from 'antd';
import './LoginM.scss'
import { useNavigate } from 'react-router-dom';

const LoginM = () => {
  const [size] = useState('large');
  const [password, setPassword] = useState(''); // Estado para la contraseña
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault(); 
    console.log("Formulario enviado", { password });
    navigate('/home'); 
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // Actualiza el estado con el valor del input
  };

  return (
    <div className='container-formulario'> 
      <div className='raro'>
        <div className='tituloLoginM'>
          <div className='texto'>
            <span className='salvem'>SALVEM</span>
            <span className='les-fotos'>LES FOTOS</span>
          </div>
        </div>
        <div className='formulario-loginM'>
          <form onSubmit={onSubmit}>
            <div className='container-usuario'>
              <label className='label-usuario'>Usuario</label>
              <Form.Item>
                <Select className='input-usuario' placeholder="Usuario">
                  <Select.Option name="admin" value="admin">Admin</Select.Option>
                  <Select.Option name="trabajador" value="trabajador">Trabajador</Select.Option>
                </Select>
              </Form.Item>
            </div>
            <div className='container-contraseña'>
              <label className='label-contraseña'>Contraseña</label>
              <div className='container-password'>
                <input
                  type='password'
                  placeholder='Ejemplo'
                  name='contraseña'
                  value={password} // Asigna el estado actual
                  onChange={handlePasswordChange} // Maneja los cambios en el input
                  className="input-contraseña" // Clase para estilizar
                />
                <a href="#" className="forgot-password">
                  ¿Has olvidado tu contraseña?
                </a>
              </div>
            </div>
            <div className='container-btn'>
              <Button className='btn' type="primary" shape="round" size={size} htmlType="submit">
                <p className='login'>Iniciar sesión</p>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginM;



