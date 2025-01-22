
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing/Landing'
import { InformeRegistro } from './components/InformeRegistro/InformeRegistro'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Landing/>} />
      <Route path="/informeregistro" element={<InformeRegistro/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App