import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UbicacionAlmacen from './components/UbicacionAlmacen/UbicacionAlmacen'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Restauracion from './components/Restauration/Restauracion'
import Restauracion2 from './components/Restauracion2';
import Restauracion4 from './components/RestauracionCuatro/RestauracionCuatro';
import HomeDistributiva from './components/HomeDistributiva/HomeDistributiva'
import Landing from './components/Landing/Landing'
import LogoSalvar from './assets/iconos/LogoSalvar.png'
import Dashboard from './components/Dashboard/Dashboard'
import Almacenaje from './components/Almacenaje/Almacenaje'
import IconoAlmacenH from './assets/iconos/IconoAlmacenH.png'
import FolderSystem from './components/FolderSystem/FolderSystem'





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
      <Route path="/UbicacionAlmacen" element={<UbicacionAlmacen icono = {IconoAlmacenH} />}></Route>
      <Route path="/Almacenaje" element={<Almacenaje icono = {IconoAlmacenH}/>}></Route>
        <Route path="/home" element={<HomeDistributiva
      logo = {LogoSalvar}/>}></Route>
      <Route path="/restauracion" element={<Restauracion/>}/>
      <Route path="/restauracion2" element={<Restauracion2/>}/>
      <Route path="/restauracion4" element={<Restauracion4/>}/>
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
        <Route path="/carpetas" element={<FolderSystem/>}/>
      </Routes>
      </BrowserRouter>)}
    </>
  )
}

export default App;
