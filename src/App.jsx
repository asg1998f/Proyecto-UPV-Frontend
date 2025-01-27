import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Restauracion from './components/Restauration/Restauracion'
import Restauracion2 from './components/Restauracion2';
import Restauracion4 from './components/RestauracionCuatro/RestauracionCuatro';
import HomeDistributiva from './components/HomeDistributiva/HomeDistributiva'
import Landing from './components/Landing/Landing'
//import InformeRegistro from './components/InformeRegistro/InformeRegistro'
import Login from './components/Login/Login'
import Header from './components/Header/Header'
import LogoSalvar from './assets/iconos/LogoSalvar.png'

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
        {/* <Route path="/informeregistro" element={<InformeRegistro/>}/> */}
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>)}

    </>
  )
}

export default App;
