import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'; // Trae estos componentes Para las rutas
import Home from './components/Home';
import Personas from './components/Personas'
import Empresas from './components/Empresas'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path="/fisherwall" element={<Home />}/> {/*Ruta raiz*/}
        <Route path="fisherwall/personas" element={<Personas />}/>
        <Route path="fisherwall/empresas" element={<Empresas />}/>

      </Routes>
    </div>
  )
}

export default App
