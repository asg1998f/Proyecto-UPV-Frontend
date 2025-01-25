
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing/Landing'
import InformeRegistro from './components/InformeRegistro/InformeRegistro'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'


function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={ <Landing/>} />
      <Route path="/informeregistro" element={<InformeRegistro/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App