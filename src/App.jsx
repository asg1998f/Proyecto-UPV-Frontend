
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UbicacionAlmacen from './components/UbicacionAlmacen/UbicacionAlmacen'
import InformeRegistro from './components/InformeRegistro/InformeRegistro'
import Header from './components/Header/Header'
<<<<<<< HEAD
import Landing from './components/Landing/Landing'
import avion from './assets/images/fi-sr-box0/fi-sr-box0.svg'
=======
import Login from './components/Login/Login'
import HomeDistributiva from './components/HomeDistributiva/HomeDistributiva'
import LogoSalvar from './assets/iconos/LogoSalvar.png'
>>>>>>> develop

const esMobil = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
)


const esMobil = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
)
function App() {
<<<<<<< HEAD
  return (
    <>
    {esMobil ?
    (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<UbicacionAlmacen
      logo = {avion}/>}></Route>
      </Routes>
    </BrowserRouter>
      )
=======

  return (   
    <>
    {esMobil ? 
    (      
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomeDistributiva
      logo = {LogoSalvar}/>}></Route>
      </Routes>
    </BrowserRouter>
      ) 
>>>>>>> develop
    :
     (
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <Landing/>} />
        <Route path="/informeregistro" element={<InformeRegistro/>}/>
<<<<<<< HEAD
        <Route path="/ubicacionAlmacen" element={<UbicacionAlmacen/>}/>
      </Routes>
      </BrowserRouter>)}
=======
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>)}

>>>>>>> develop
    </>
  )
}

export default App