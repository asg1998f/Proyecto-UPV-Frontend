import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Restauracion from './components/Restauration/Restauracion'
import Restauracion2 from './components/Restauracion2';
import RestauracionCuatro from './components/RestauracionCuatro/RestauracionCuatro';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/restauracion" element={<Restauracion/>}/>
      <Route path="/restauracion2" element={<Restauracion2/>}/>
      <Route path="/restauracionCuatro" element={<RestauracionCuatro/>}/>


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
