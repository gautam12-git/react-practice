import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { Counter } from './Features/Counter/counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800">
        <h1 className="text-3xl font-extrabold text-purple-700 mb-6">
          Counter using Redux Toolkit
        </h1>
        <Counter />
      </div>
    </Provider>
  )
}

export default App
