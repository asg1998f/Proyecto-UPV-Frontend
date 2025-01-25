
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UbicacionAlmacen from './components/UbicacionAlmacen/UbicacionAlmacen'
import InformeRegistro from './components/InformeRegistro/InformeRegistro'
import Header from './components/Header/Header'
import Landing from './components/Landing/Landing'
import avion from './assets/images/fi-sr-box0/fi-sr-box0.svg'




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
        <Route path="UbicacionAlmacen" element={<UbicacionAlmacen logo = {avion}/>}></Route>
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
      </Routes>
      </BrowserRouter>)}
    </>
  )
}

export default App