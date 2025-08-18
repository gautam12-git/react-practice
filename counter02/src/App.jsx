import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'






function App () {
  const [count, setCount] = useState(0)

  let username = 'Gautam'
const Add = () => {
 
// setCount(count + 1)
setCount((pichla) => pichla + 1)
setCount((pichla) => pichla + 1)
setCount((pichla) => pichla + 1)
setCount((pichla) => pichla + 1)
setCount((pichla) => pichla + 1)
  
}


const Reduce = () => {
  setCount((prev) => prev - 1)
  setCount((prev) => prev - 1)
  setCount((prev) => prev - 1)
  setCount((prev) => prev - 1)
  setCount((prev) => prev - 1)
  setCount((prev) => prev - 1)
}


// function Add () {
//   setCount(count + 1)
// }

// function Reduce () {
//   setCount(count - 1)
// }

  return(
    <>
    <h1>This is counter by {username}</h1>
    <h2>Count : {count}</h2>
    <button
    onClick={Add}
    >Increase Count</button>{" "}
    <button
    onClick={Reduce}
    >Decrease Count</button>
    <p>footer : {count}</p>
    </>
  )
}

export default App