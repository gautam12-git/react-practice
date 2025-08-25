import React, { useState } from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'
import UserContext from './Context/userContext'



function App() {
  const [count, setCount] = useState(0)
  

  return (
    <UserContextProvider>
      <div className="min-h-screen w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center gap-10">
      <Login/>
      <Profile/>
      </div>
    </UserContextProvider>
    
  )
}

export default App
