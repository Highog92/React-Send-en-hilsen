import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hilsen } from "./components/Hilsen";

function App() {
 const hello = "Hej med dig, hvordan går det?"

  return (
    <>
      <Hilsen hello={hello}/> 
    </>
  )
}

export default App
