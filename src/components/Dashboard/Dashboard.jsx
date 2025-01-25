import React from 'react'
import "./Dashboard.scss"
import Logo from '../../assets/iconos/LogoSalvar.png'
import Registro from '../../assets/iconos/IconoRegistrarR.png'
import Master from '../../assets/iconos/IconoMasterA.png'
import MasterFlecha from '../../assets/iconos/IconoFlechaM.png'
import Almacen from '../../assets/iconos/IconoAlmacenA.png'
import Restaurar from '../../assets/iconos/IconoRestaurarR.png'
import Digitalizar from '../../assets/iconos/IconoDigitalizarV.png'
import DigitalizarFlecha from '../../assets/iconos/IconoFlechaV.png'
import Entregar from '../../assets/iconos/IconoEntregarE.png'
import Inicio from '../../assets/iconos/IconoInicioN.png'
import Lotes from '../../assets/iconos/IconoCarpetaG.png'
import Equipo from '../../assets/iconos/IconoEquipoG.png'
import FlechaNegra from '../../assets/iconos/IconoFlechaN.png'
import FlechaGris from '../../assets/iconos/IconoFlechaG.png'
import CerrarSesion from '../../assets/iconos/IconoCerrarSesionN.png'
import Lote from '../../assets/iconos/IconoCarpetaN.png'
import Buscar from '../../assets/iconos/IconoBuscarG.png'
import CheckRegistrar from '../../assets/iconos/IconoCheckR.png'
import CheckMaster from '../../assets/iconos/IconoCheckM.png'
import CheckAlmacen from '../../assets/iconos/IconoCheckA.png'
import CheckRestaurar from '../../assets/iconos/IconoCheckRt.png'
import CheckDigitalizar from '../../assets/iconos/IconoCheckD.png'
import CheckMontaje from '../../assets/iconos/IconoCheckMt.png'
import CheckEntrega from '../../assets/iconos/IconoCheckE.png'

const Dashboard = () => {
    return (
        <>
            <div className="inicio-admin">
                <div className="tracking-lotes">
                    <div className="header">
                        <div className="auto-layout-horizontal"></div>
                        <div className="auto-layout-horizontal2">
                            <div className="auto-layout-horizontal3">
                                <div className="component-70">
                                    <div className="frame-427319640">
                                        <img className="oc-on-the-laptop" src="oc-on-the-laptop0.svg" />
                                    </div>
                                </div>
                                <div className="dario-rodriguez">Dario Rodriguez</div>
                            </div>
                            <div className="icono">
                                <img className="fi-rr-exclamation" src="fi-rr-exclamation0.svg" />
                            </div>
                        </div>
                    </div>
                    <div className="frame">
                        <div className="titulo-tracking">
                            <div className="panel-de-control">Tracking de lotes</div>
                            <div className="auto-layout-horizontal4">
                                <div className="auto-layout-horizontal5">
                                    <div className="group">
                                        <div className="rectangle"></div>
                                        <div className="rectangle2"></div>
                                    </div>
                                </div>
                                <div className="_65-completado">65% completado</div>
                            </div>
                        </div>
                        <div className="frame-427319534">
                            <div className="auto-layout-horizontal">
                                <div className="component-53">
                                    <div className="placeholder">
                                        <div className="placeholder2">Ingresa el ID o la fase</div>
                                    </div>
                                    <div className="icono">
                                        <img className="search-outlined" src={Buscar} />
                                    </div>
                                </div>
                            </div>
                            <div className="auto-layout-horizontal6"></div>
                        </div>
                    </div>
                    <div className="tabla">
                        <div className="columna-id">
                            <div className="id">
                                <div className="id-lote">ID LOTE</div>
                            </div>
                            <div className="component-55">
                                <div className="alarm-details">
                                    <div className="alarm-details2">
                                        <div className="alarm-details3">
                                            <div className="left">
                                                <div className="icono2">
                                                    <img className="folder-open-outlined" src={Lote} />
                                                </div>
                                                <div className="frame-39955">
                                                    <div className="_0012-ft">0012-FT</div>
                                                    <div className="_2-lbumes">2 álbumes</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="almacenaje">
                            <div className="campos-cabecera-tablon">
                                <div className="registrar">Registrar</div>
                            </div>
                            <div className="campos">
                                <img className="icono3" src={CheckRegistrar} />
                            </div>
                        </div>
                        <div className="liempieza">
                            <div className="campos-cabecera-tablon">
                                <div className="m-ster">Máster</div>
                            </div>
                            <div className="campos">
                                <img className="icono10" src={CheckMaster} />
                            </div>
                        </div>
                        <img className="line-3" src="line-30.svg" />
                        <div className="line-4"></div>
                        <div className="fotografiado">
                            <div className="campos-cabecera-tablon">
                                <div className="almac-n">Almacén</div>
                            </div>
                            <div className="campos">
                                <img className="icono17" src={CheckAlmacen} />
                            </div>
                        </div>
                        <div className="cabecera">
                            <div className="campos-cabecera-tablon">
                                <div className="restaurar">Restaurar</div>
                            </div>
                            <div className="campos">
                                <img className="icono24" src={CheckRestaurar} />
                            </div>
                        </div>
                        <div className="frame-427319622">
                            <div className="campos-cabecera-tablon">
                                <div className="digitalizar">Digitalizar</div>
                            </div>
                            <div className="campos">
                                <img className="icono31" src={CheckDigitalizar} />
                            </div>
                        </div>
                        <div className="frame-427319623">
                            <div className="campos-cabecera-tablon">
                                <div className="montaje">Montaje</div>
                            </div>
                            <div className="campos">
                                <img className="icono38" src={CheckMontaje} />
                            </div>
                        </div>
                        <div className="frame-427319624">
                            <div className="campos-cabecera-tablon2">
                                <div className="entregar">Entregar</div>
                            </div>
                            <div className="campos">
                                <img className="icono45" src={CheckEntrega} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="administracion-menu">
                    <div className="secci-n-salir-default">
                        <div className="frame-427319459">
                            <img className="icono52" src={CerrarSesion} />
                            <div className="cerrar-sesi-n">Cerrar Sesión</div>
                        </div>
                    </div>
                    <div className="frame-427319589">
                        <div className="frame-427319591">
                            <div className="divisor-menu">
                                <div className="line-1"></div>
                                <div className="administrador">ADMINISTRADOR</div>
                                <div className="line-2"></div>
                            </div>
                            <div className="frame-427319467">
                                <div className="component-64">
                                    <div className="frame-427319616">
                                        <div className="frame-4273194592">
                                            <div className="icono">
                                                <img className="group2" src={Inicio} />
                                            </div>
                                            <div className="inicio">Inicio</div>
                                        </div>
                                        <img className="icono53" src={FlechaNegra} />
                                    </div>
                                </div>
                                <div className="component-66">
                                    <div className="frame-427319616">
                                        <div className="frame-4273194592">
                                            <div className="icono">
                                                <img
                                                    className="folder-open-outlined8"
                                                    src={Lotes}
                                                />
                                            </div>
                                            <div className="inicio2">Lotes</div>
                                        </div>
                                        <img className="icono54" src={FlechaGris} />
                                    </div>
                                </div>
                                <div className="component-65">
                                    <div className="frame-427319616">
                                        <div className="frame-4273194592">
                                            <div className="icono">
                                                <img className="group3" src={Equipo} />
                                            </div>
                                            <div className="inicio2">Equipo</div>
                                        </div>
                                        <img className="icono55" src={FlechaGris} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-4273195892">
                            <div className="frame-427319590">
                                <div className="divisor-menu">
                                    <div className="line-1"></div>
                                    <div className="administrador">TRABAJADOR</div>
                                    <div className="line-2"></div>
                                </div>
                                <div className="inicio-button">
                                    <div className="frame-4273196162">
                                        <div className="frame-4273194592">
                                            <div className="icono">
                                                <img className="icono56" src={Registro} />
                                            </div>
                                            <div className="inicio">Registrar</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="inicio-button">
                                    <div className="frame-427319616">
                                        <div className="frame-4273194592">
                                            <div className="icono">
                                                <img className="icono56" src={Master} />
                                            </div>
                                            <div className="inicio">Master</div>
                                        </div>
                                        <img className="icono57" src={MasterFlecha} />
                                    </div>
                                </div>
                                <div className="inicio-button">
                                    <div className="frame-427319616">
                                        <div className="frame-4273194592">
                                            <div className="icono">
                                                <img className="icono56" src={Almacen} />
                                            </div>
                                            <div className="inicio">Almacén</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="inicio-button">
                                    <div className="frame-427319616">
                                        <div className="frame-4273194592">
                                            <div className="icono">
                                                <img className="icono56" src={Restaurar} />
                                            </div>
                                            <div className="inicio">Restaurar</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="inicio-button">
                                    <div className="frame-427319616">
                                        <div className="frame-4273194592">
                                            <div className="icono">
                                                <img className="icono56" src={Digitalizar} />
                                            </div>
                                            <div className="inicio">Digitalizar</div>
                                        </div>
                                        <img className="icono57" src={DigitalizarFlecha} />
                                    </div>
                                </div>
                                <div className="inicio-button">
                                    <div className="frame-427319616">
                                        <div className="frame-4273194592">
                                            <div className="icono">
                                                <img className="icono56" src={Entregar} />
                                            </div>
                                            <div className="inicio">Entregar</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="logos">
                        <div className="salvem-les-fotos">
                            <div className="salvem-les-fotos-span">
                            <img src={Logo} />
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
                <div className="scroll">
                    <div className="rectangle3"></div>
                    <div className="rectangle4"></div>
                </div>
            </div>
        </>
    )
}

export default Dashboard