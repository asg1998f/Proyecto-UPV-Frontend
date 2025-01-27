import React from 'react'
import './HeaderM.scss'
import Search from 'antd/es/input/Search'

const HeaderM = () => {
  return (

    <div className="nav-sup">
            <div className="nav-sup-titulo">
                <p className='tituloHeader'>{props.title}</p>
                <img src={props.logo} alt=" srcset" />
            </div>
            <div className="nav-sup-search-bar">
            <Search
            placeholder="Buscar por ID..."
            className='buscador'
            />
            </div>
    </div>
  )
}

export default HeaderM