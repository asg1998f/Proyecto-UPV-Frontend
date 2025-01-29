import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AnadirUbicacion from "./components/AnadirUbicacion/AnadirUbicacion";
import UbicacionAlmacen from "./components/UbicacionAlmacen/UbicacionAlmacen";
import InformeRegistro from "./components/InformeRegistro/InformeRegistro";
import LoginM from "./components/LoginM/LoginM";
/* import './styles/globalstyles.scss' */
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Restauracion from './components/Restauracion/Restauracion'
import HomeDistributiva from './components/HomeDistributiva/HomeDistributiva'
import Landing from './components/Landing/Landing'
import LogoSalvar from './assets/iconos/LogoSalvar.png'
import RestauracionImagenes from './components/RestauracionImagenes/RestauracionImagenes'
import Dashboard from './components/Dashboard/Dashboard'
import Lotesadmin from './components/Dashboard/Lotesadmin/Lotesadmin';
import Almacenaje from './components/Almacenaje/Almacenaje'
import IconoAlmacenH from './assets/iconos/IconoAlmacenH.png'
import Entrega from './components/Entrega/Entrega'
import IconoEntregarE from './assets/iconos/IconoEntregarE.png'
import RestauracionCuatro from './components/RestauracionCuatro/RestauracionCuatro'


const esMobil = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
)

function App() {
  return (
    <>
    {esMobil ?
    (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomeDistributiva logo = {LogoSalvar}/>}></Route>
        <Route path="/ubicacionAlmacen" element={<UbicacionAlmacen icono = {IconoAlmacenH} />}></Route>
        <Route path="/almacenaje" element={<Almacenaje icono = {IconoAlmacenH}/>}></Route>
        <Route path="/restauracion" element={<Restauracion/>}/>
        <Route path="/restauracioncuatro" element={<RestauracionCuatro/>}/>
        <Route path="/restauracionimagenes" element={ <RestauracionImagenes/>} />
        <Route path="/anadirubicacion/:_id" element={ <AnadirUbicacion/>} />
      </Routes>
    <Routes>
      <Route path="/" element={ <Landing/>} />
      <Route path="/informeregistro" element={<InformeRegistro/>}/>
      <Route path="/loginM" element={<LoginM/>}/>
      
    </Routes>
    </BrowserRouter>
      )
    :
     (
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <Landing/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/Lotesadmin" element={<Lotesadmin/>}/>
      </Routes>
      </BrowserRouter>)}
    </>
  );
}

export default App;
