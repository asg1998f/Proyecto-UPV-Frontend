
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UbicacionAlmacen from './components/UbicacionAlmacen/UbicacionAlmacen'
import InformeRegistro from './components/InformeRegistro/InformeRegistro'
import Header from './components/Header/Header'
import Landing from './components/Landing/Landing'
import Login from './components/Login/Login'
import HomeDistributiva from './components/HomeDistributiva/HomeDistributiva'
import LogoSalvar from './assets/iconos/LogoSalvar.png'
import RestauracionImagenes from './components/RestauracionImagenes/RestauracionImagenes'
import Dashboard from './components/Dashboard/Dashboard'
import Almacenaje from './components/Almacenaje/Almacenaje'
import IconoAlmacenH from './assets/iconos/IconoAlmacenH.png'





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
        <Route path="/home" element={<HomeDistributiva
      logo = {LogoSalvar}/>}></Route>
       <Route path="/restauracionimagenes" element={ <RestauracionImagenes/>} />
      <Route path="/home" element={<HomeDistributiva logo = {LogoSalvar}/>}></Route>
      <Route path="/UbicacionAlmacen" element={<UbicacionAlmacen icono = {IconoAlmacenH} />}></Route>
      <Route path="/Almacenaje" element={<Almacenaje icono = {IconoAlmacenH}/>}></Route>
      </Routes>
    </BrowserRouter>
      )
    :
     (
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <Landing/>} />
        <Route path="/informeregistro" element={<InformeRegistro/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>)}
    </>
  )
}

export default App