
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing/Landing'
import InformeRegistro from './components/InformeRegistro/InformeRegistro'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import HeaderM from './components/HeaderM/HeaderM'
import HomeDistributiva from './components/HomeDistributiva/HomeDistributiva'
import LogoSalvar from './assets/iconos/LogoSalvar.png'
import Dashboard from './components/Dashboard/Dashboard'

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
       <HeaderM/>
        <Route path="/restauracionLote" element={<restauracionLote/>}/>
        <Route path="Home" element={<UbicacionAlmacen
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
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/ubicacionAlmacen" element={<UbicacionAlmacen/>}/> */}
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>)}
    </>
  )
}
//   return (   
//     <>
//     {esMobil ? 
//     (      
//     <BrowserRouter>
//     <Header/>
//     <Routes>
//       <Route path="/" element={ <Landing/>} />
//       <Route path="/informeregistro" element={<InformeRegistro/>}/>

//     </Routes>
//     </BrowserRouter>
//     <div>
//       <FaseSecado
//       title = "Secado"
//       logo = {avion}
//       />
//       <FaseLimpieza 
//       title = "Limpieza"
//       logo = {escoba}
//       /> 
//     </div>
    
//     </>
//   )
// }

export default App