import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import InformeRegistro from './components/InformeRegistro/InformeRegistro'

function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/informeRegistro" element={<InformeRegistro/>} />
   </Routes>
   </BrowserRouter>

  </>

  )
  
}

export default App
