import "./HomeDistributiva.scss"
import HeaderM from '../HeaderM/HeaderM'
import Registro from '../../assets/iconos/IconoRegistrar.png'
import RegistroFlecha from '../../assets/iconos/IconoRegistrarFlecha.png'
import Master from '../../assets/iconos/IconoMaster.png'
import Almacen from '../../assets/iconos/IconoAlmacen.png'
import AlmacenFlecha from '../../assets/iconos/IconoAlmacenFlecha.png'
import Restaurar from '../../assets/iconos/IconoRestaurar.png'
import RestaurarFlecha from '../../assets/iconos/IconoRestaurarFlecha.png'
import Digitalizar from '../../assets/iconos/IconoDigitalizar.png'
import Entregar from '../../assets/iconos/IconoEntregar.png'
import EntregarFlecha from '../../assets/iconos/IconoEntregarFlecha.png'



const HomeDistributiva = (props) => {
  return (
    <div className="fondo">
        <div className="nav-sup">
            <HeaderM
                title = {props.title}
                logo = {props.logo}
            />
        </div>

        <div className="pantalla-inf">
            <div className="pantalla-inf-titulo">
                ¿A qué fase quieres acceder?
            </div>
            <div className="pantalla-inf-botones">
                <div className="pantalla-inf-boton">
                    <div className="icono1-inf-boton">
                        <img src={Registro}/>
                    </div>
                    <div className="icono2-inf-boton">
                        
                    </div>
                    <div className="icono3-inf-boton">
                        Registrar
                    </div>
                    <div className="icono4-inf-boton">
                        <img src={RegistroFlecha}/>
                    </div>
                </div>
                <div className="pantalla-inf-boton">
                <div className="icono1-inf-boton">
                        <img src={Master}/>
                    </div>
                    <div className="icono2-inf-boton">
                        
                    </div>
                    <div className="icono3-inf-boton">
                        Máster
                    </div>
                    <div className="icono4-inf-boton">

                    </div>
                
                </div>
                <div className="pantalla-inf-boton">
                <div className="icono1-inf-boton">
                        <img src={Almacen}/>
                    </div>
                    <div className="icono2-inf-boton">
                        
                    </div>
                    <div className="icono3-inf-boton">
                        Almacén
                    </div>
                    <div className="icono4-inf-boton">
                        <img src={AlmacenFlecha}/>
                    </div>
                
                </div>
                <div className="pantalla-inf-boton">
                <div className="icono1-inf-boton">
                        <img src={Restaurar}/>
                    </div>
                    <div className="icono2-inf-boton">
                        
                    </div>
                    <div className="icono3-inf-boton">
                        Restaurar
                    </div>
                    <div className="icono4-inf-boton">
                        <img src={RestaurarFlecha}/>
                    </div>
                
                </div>
                <div className="pantalla-inf-boton">
                <div className="icono1-inf-boton">
                        <img src={Digitalizar}/>
                    </div>
                    <div className="icono2-inf-boton">
                        
                    </div>
                    <div className="icono3-inf-boton">
                        Digitalizar
                    </div>
                    <div className="icono4-inf-boton">

                    </div>
                
                </div>
                <div className="pantalla-inf-boton">
                <div className="icono1-inf-boton">
                        <img src={Entregar}/>
                    </div>
                    <div className="icono2-inf-boton">
                        
                    </div>
                    <div className="icono3-inf-boton">
                        Entregar
                    </div>
                    <div className="icono4-inf-boton">
                        <img src={EntregarFlecha}/>
                    </div>

                </div>
            
            </div>
            
        </div>
    </div>
  )
}

export default HomeDistributiva