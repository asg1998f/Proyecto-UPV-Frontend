import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import escoba from './assets/fi-sr-broom.png'
import avion from './assets/fi-sr-paper-plane.png'
import FaseSecado from './components/FaseSecado/FaseSecado'
import FaseLimpieza from './components/FaseLimpieza/FaseLimpieza'

function App() {
  const [count, setCount] = useState(0)

  return (
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
  )
}

export default App
