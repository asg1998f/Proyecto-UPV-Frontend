
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing/Landing'
import InformeRegistro from './components/InformeRegistro/InformeRegistro'
import Header from './components/Header/Header'
import HomeDistributiva from './components/HomeDistributiva/HomeDistributiva'
import avion from './assets/iconos/LogoSalvar.png'

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
      logo = {avion}/>}></Route>
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