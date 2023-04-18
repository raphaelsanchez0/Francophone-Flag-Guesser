import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import Header from './Header.jsx'
import Guesser from './Guesser'

import '../style.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Guesser />
    </div>
  )
}

