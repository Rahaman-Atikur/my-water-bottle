import { Suspense } from 'react'
import './App.css'
import Bottles from './Components/bottles/bottles'
// const bottle = [
//   { id: 1, name: 'Atikur', price: 250, color: 'pink' },
//   { id: 1, name: 'Shuvo', price: 300, color: 'red' },
//   { id: 1, name: 'Trisha', price: 150, color: 'yellow' },
//   { id: 1, name: 'okaToLight', price: 450, color: 'pink' },
//   { id: 1, name: 'NoPowerNoGame', price: 850, color: 'Green' }
// ]
function App() {

  return (
    <>
      <h1>My Water Bottle</h1>
      <Suspense>
        <Bottles></Bottles>
      </Suspense>
    </>
  )
}
export default App
