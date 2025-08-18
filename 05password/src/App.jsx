import { useCallback, useEffect, useRef, useState } from 'react'
import React from 'react'

function App() {
  const[length, setLength] = useState(3)
  const[numberAllowed, setNumberAllowed] = useState('true')
  const[symbolAllowed, setSymmbolAllowed] = useState('false')
  const[password, setPassword] = useState('')

  const passwordReference = useRef(null)

  const generatePassword = useCallback(() => {
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let num = '1234567890'
    let char = '!@#$%^&*<>\/~-=+'
    let pass = ''

    if(numberAllowed) str += num
    if(symbolAllowed) str += char      

    for (let i = 0; i < length; i++) {
    const characters =  Math.floor(Math.random() * str.length + 1)
     pass += str.charAt(characters)
      
    }

    setPassword(pass)
        
  },[length, numberAllowed, symbolAllowed])

  useEffect(() => {
    generatePassword()
  },[length, numberAllowed, symbolAllowed])

  const copyPass = () => {
    window.navigator.clipboard.writeText(password)
    passwordReference.current?.select()
    passwordReference.current?.setSelectionRange(0, password.length)


  }

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Password Generator</h1>
      <div className="flex items-center gap-3 mb-6 w-full max-w-md"> 
        <input 
        type="text"
        placeholder='password'
        value={password}
        readOnly
        ref={passwordReference}
         className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
         />
         <button
         onClick={copyPass}
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 active:scale-95 transition"
         >Copy</button>
      </div>
      <div className="flex flex-col gap-4 w-full max-w-md bg-white p-5 rounded-lg shadow-md">
        <input 
        type="range"
        min={8}
        max={25}
         className="flex-1 accent-indigo-500"
         value={length}
         onChange={(e) => setLength(e.target.value)}
         />
         <label htmlFor="length"  className="text-gray-700 font-medium">length: {length}</label>
        <div  className="flex items-center gap-2">
         <input type="checkbox" 
         defaultChecked = {numberAllowed}
         onChange={(e) => setNumberAllowed((prev) => (!prev))}
         className="w-4 h-4 accent-indigo-500" />
         <label htmlFor="Numbers" className="text-gray-700">Numbers</label>
         <div  className="flex items-center gap-2">
         <input type="checkbox"
         defaultChecked = {symbolAllowed}
         onChange={(e) => setSymmbolAllowed((prev) => (!prev))}
         className="w-4 h-4 accent-indigo-500" />
         <label htmlFor="Symbols" className="text-gray-700">Symbols</label>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
