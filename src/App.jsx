
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing/Landing'
import InformeRegistro from './components/InformeRegistro/InformeRegistro'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import HomeDistributiva from './components/HomeDistributiva/HomeDistributiva'
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
      </Routes>
      </BrowserRouter>)}

    </>
  )
}

export default App