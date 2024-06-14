import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const onClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Hello Vite + React!</h1>
      <button onClick={onClick}>Clicks: { count }</button>
    </>
  )
}

export default App
