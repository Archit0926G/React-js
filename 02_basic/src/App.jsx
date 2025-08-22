import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter]= useState(15)

  const addvalue = () => {
    setCounter(counter + 1)
  }

  const removevalue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>First react project</h1>
      <h2>Counter</h2>
      <h2>Number is : {counter}</h2>

      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
