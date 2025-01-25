
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing/Landing'
import InformeRegistro from './components/InformeRegistro/InformeRegistro'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import HeaderM from './components/HeaderM/HeaderM'

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
        <Route path="/ubicacionAlmacenmb" element={<UbicacionAlmacen
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