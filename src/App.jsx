import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Restauracion from './components/Restauracion'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/restauracion" element={<Restauracion/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
