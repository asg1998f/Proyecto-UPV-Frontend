import React from 'react'
import './HeaderM.scss'
import Search from 'antd/es/input/Search'

const HeaderM = (props) => {
  return (
    <div className="nav-sup">
            <div className="nav-sup-titulo">
                <img src={props.logo} alt="" srcset="" />
                <a className='tituloHeader'>{props.title}</a>
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