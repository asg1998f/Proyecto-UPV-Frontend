
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing/Landing'
import InformeRegistro from './components/InformeRegistro/InformeRegistro'
import Header from './components/Header/Header'


function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={ <Landing/>} />
      <Route path="/informeregistro" element={<InformeRegistro/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App