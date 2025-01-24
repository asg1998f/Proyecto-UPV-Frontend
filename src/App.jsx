
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing/Landing'
import InformeRegistro from './components/InformeRegistro/InformeRegistro'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Header from './components/HeaderM/HeaderM'


function App() {

  return (
    <>
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