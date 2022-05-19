import { useState } from 'react'
import './App.css'
import Planes from './components/Planes';
import Navbar from './components/Navbar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar></Navbar>
      <Planes></Planes>
    </div>
  )
}

export default App
