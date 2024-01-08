import './App.css'
import { Hilsen } from "./components/Hilsen";

function App() {
  const hello = "Hej med dig, hvordan går det? Dette er en props"
  const helloWorld = "Hello World"
  const helloYou = "Hello to you"

  return (
    <>
      <Hilsen hello={hello} />
      <Hilsen hello={helloWorld} />
      <Hilsen hello={helloYou} />
    </>
  )
}

export default App
