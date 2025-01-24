import React from 'react'
import './HeaderM.scss'
import Search from 'antd/es/input/Search'

const HeaderM = (props) => {
  return (
    <div className="nav-sup">
            <div>
                <p className='tituloHeader'>{props.title}</p>
                <img src={props.logo} alt="" srcset="" />
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