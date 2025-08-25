import React, {useState, useContext} from 'react'
import UserContext from '../Context/userContext'

function Login() {
        const [userName, setUserName] = useState('')
      const [password, setPassword] = useState('')
      const {setUser} = useContext(UserContext)

      const handleSubmit = (e) => {
         e.preventDefault()
         setUser({userName, password})
      }
  return (
    <div className="bg-white/10 p-10 rounded-2xl shadow-xl">
      {/* <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-[90%] max-w-md border border-white/20"> */}
      <h1 className="text-4xl font-extrabold text-white mb-8 justify-centre tracking-wide drop-shadow-lg">Context Mini</h1>
      
      <input 
      type="text"
      placeholder='Username'
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      className="w-72 p-3 mb-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-md transition duration-300"
      />
      {''}  

      <input 
      type="text"
      placeholder='Password'
      value={password}
      onChange = {(e) => setPassword(e.target.value)}
      className="w-72 p-3 mb-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-md transition duration-300"
       />
       <div>
        <button
        onClick={handleSubmit}
          className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >Submit</button>
       </div>
    {/* </div> */}
    </div>
    
  )
}

export default Login
