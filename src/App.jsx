import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UbicacionAlmacen from './components/UbicacionAlmacen/UbicacionAlmacen'
import InformeRegistro from './components/InformeRegistro/InformeRegistro'
import LoginM from './components/LoginM/LoginM'
/* import './styles/globalstyles.scss' */
import Header from './components/Header/Header'
import Login from './components/Login/Login'
<<<<<<< HEAD
import HeaderM from './components/HeaderM/HeaderM'
=======
import Restauracion from './components/Restauration/Restauracion'
import Restauracion2 from './components/Restauracion2';
import Restauracion4 from './components/RestauracionCuatro/RestauracionCuatro';
>>>>>>> 239d671446fdcdbc943c2c25f0d6392f92c1ebb8
import HomeDistributiva from './components/HomeDistributiva/HomeDistributiva'
import Landing from './components/Landing/Landing'
import LogoSalvar from './assets/iconos/LogoSalvar.png'
import RestauracionImagenes from './components/RestauracionImagenes/RestauracionImagenes'
import Dashboard from './components/Dashboard/Dashboard'
import Almacenaje from './components/Almacenaje/Almacenaje'
import IconoAlmacenH from './assets/iconos/IconoAlmacenH.png'

const esMobil = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
)

function App() {
<<<<<<< HEAD


=======
>>>>>>> 239d671446fdcdbc943c2c25f0d6392f92c1ebb8
  return (
    <>
    {esMobil ?
    (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
       <HeaderM/>
        <Route path="/restauracionLote" element={<restauracionLote/>}/>
        <Route path="Home" element={<UbicacionAlmacen
      logo = {avion}/>}></Route>
=======

        <Route path="/home" element={<HomeDistributiva logo = {LogoSalvar}/>}></Route>
        <Route path="/ubicacionAlmacen" element={<UbicacionAlmacen icono = {IconoAlmacenH} />}></Route>
        <Route path="/almacenaje" element={<Almacenaje icono = {IconoAlmacenH}/>}></Route>
        <Route path="/restauracion" element={<Restauracion/>}/>
        <Route path="/restauracion2" element={<Restauracion2/>}/>
        <Route path="/restauracion4" element={<Restauracion4/>}/>

       <Route path="/restauracionimagenes" element={ <RestauracionImagenes/>} />

>>>>>>> 239d671446fdcdbc943c2c25f0d6392f92c1ebb8
      </Routes>
    <Routes>
      <Route path="/" element={ <Landing/>} />
      <Route path="/informeregistro" element={<InformeRegistro/>}/>
      <Route path="/loginM" element={<LoginM/>}/>
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

export default App;