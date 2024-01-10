import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter(counter + 1)
  }

  const removeValue = () => {
    if(counter !== 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter value: {counter}</h2>
      <br />
      <button onClick={addValue}>Add value: {counter}</button>
      <button onClick={removeValue}>Remove value: {counter}</button>
    </>
  )
}

export default App
