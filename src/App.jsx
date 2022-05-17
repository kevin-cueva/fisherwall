import { useState } from 'react'
import './App.css'
import Planes from './components/Planes';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Fisherwall</h1>
      <Planes></Planes>
    </div>
  )
}

export default App
