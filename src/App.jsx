
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing/Landing'
import InformeRegistro from './components/InformeRegistro/InformeRegistro'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
<<<<<<< HEAD
import Header from './components/HeaderM/HeaderM'
=======
import HomeDistributiva from './components/HomeDistributiva/HomeDistributiva'
import LogoSalvar from './assets/iconos/LogoSalvar.png'
>>>>>>> develop

const esMobil = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
)

function App() {

  return (   
    <>
    {/* {esMobil ? 
    (       */}
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={ <Landing/>} />
      <Route path="/informeregistro" element={<InformeRegistro/>}/>

      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    <div>
      <FaseSecado
      title = "Secado"
      logo = {avion}
      />
      <FaseLimpieza 
      title = "Limpieza"
      logo = {escoba}
      /> 
    </div>
    
    </>
  )
}

export default App