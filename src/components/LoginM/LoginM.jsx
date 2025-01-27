import React, { useState } from 'react'
import { Form, Select, Input, Button  } from 'antd';
import './LoginM.scss'

const LoginM = () => {
    const [size, setSize] = useState('large');
  return (
    <div className='container-formulario'> 
    <div className='raro'>
    <div className='tituloLoginM'>
        <div className='texto'>
        <h1 className='salvem'>SALVEM</h1>
        <h2 className='les-fotos'>LES FOTOS</h2>
        </div>
    </div>
    <div className='formulario'>
        <form>
            <div className='container-usuario'>
                <label className='label-usuario'>Usuario
                </label>
                <Form.Item>
        <Select className='input-usuario' placeholder="Usuario">
          <Select.Option value="admin">Admin</Select.Option>
          <Select.Option value="trabajador">Trabajador</Select.Option>
        </Select>
      </Form.Item>
            </div>
            <div className='container-contraseña'>
                <label className='label-contraseña'>Contraseña
                </label>
                <Form.Item
      name="contraseña"
      rules={[
        {
          required: true,
          message: 'Please input your contraseña!',
        },
      ]}
    >
      <Input.Password />
      <a href="#" className="forgot-password">
            ¿Has olvidado tu contraseña?
          </a>
    </Form.Item>
            </div>
            <div className='container-btn'>
            <Button className='btn' type="primary" shape="round"  size={size}>
            <p className='login'>Iniciar sesión</p>
          </Button>
            </div>
        </form>
    </div>
    </div>
    </div>
  )
}

export default LoginM


