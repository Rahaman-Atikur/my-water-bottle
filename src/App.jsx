import { Suspense } from 'react'
import './App.css'
import Bottles from './Components/bottles/bottles'
const bottlesPromise = fetch("./bottle.json").then(res => res.json());
function App() {
  return (
    <>
      <h1>My Water Bottle</h1>
      <Suspense fallback={<h3>Bottles are Loading...</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  )
}
export default App
