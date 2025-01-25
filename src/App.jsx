
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing/Landing'
import InformeRegistro from './components/InformeRegistro/InformeRegistro'
import LoginM from './components/LoginM/LoginM'
import './styles/globalstyles.scss'



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Landing/>} />
      <Route path="/informeregistro" element={<InformeRegistro/>}/>
      <Route path="/loginM" element={<LoginM/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App