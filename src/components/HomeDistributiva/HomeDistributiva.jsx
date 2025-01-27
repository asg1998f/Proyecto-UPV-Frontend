import "./HomeDistributiva.scss"
import HeaderM from '../HeaderM/HeaderM'
 import Registro from '../../assets/iconos/IconoRegistrarH.png'
import RegistroFlecha from '../../assets/iconos/IconoFlechaHR.png'
import Master from '../../assets/iconos/IconoMasterH.png'
import Almacen from '../../assets/iconos/IconoAlmacenH.png'
import AlmacenFlecha from '../../assets/iconos/IconoFlechaHA.png'
import Restaurar from '../../assets/iconos/IconoRestaurarH.png'
import RestaurarFlecha from '../../assets/iconos/IconoFlechaHRt.png'
import Digitalizar from '../../assets/iconos/IconoDigitalizarH.png'
import Entregar from '../../assets/iconos/IconoEntregarH.png'
import EntregarFlecha from '../../assets/iconos/IconoFlechaHE.png'
import { useNavigate } from "react-router-dom"

const HomeDistributiva = (props) => {
    const navigate = useNavigate()

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
                <div className="pantalla-inf-boton registrar" onClick={()=>{navigate("/")}}>
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
                <div className="pantalla-inf-boton master">
                    <div className="icono1-inf-boton">
                        <img src={Master}/>
                    </div>
                    <div className="icono2-inf-boton">
                        
                    </div>
                    <div className="icono3-inf-boton tb">
                        Máster
                    </div>
                    <div className="icono4-inf-boton">

                    </div>
                
                </div>
                <div className="pantalla-inf-boton almacen" onClick={()=>{navigate("/almacenaje")}}>
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
                <div className="pantalla-inf-boton restaurar" onClick={()=>{navigate("/restauracion")}}>
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
                <div className="pantalla-inf-boton digitalizar">
                    <div className="icono1-inf-boton">
                            <img src={Digitalizar}/>
                        </div>
                        <div className="icono2-inf-boton">
                            
                        </div>
                        <div className="icono3-inf-boton tb">
                            Digitalizar
                        </div>
                        <div className="icono4-inf-boton">

                        </div>
                    
                    </div>
                <div className="pantalla-inf-boton entregar" onClick={()=>{navigate("/")}}>
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