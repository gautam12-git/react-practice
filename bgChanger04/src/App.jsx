import { useEffect, useState } from 'react'
-
function App() {
  const [color,  setCOlor] = useState('olive')
  

  return (
    <>
    <div className='w-full h-screen transition-colors duration-500 ease-in-out'
    style={{backgroundColor: color}}>
      <div className="fixed bottom-0 left-0 right-0 flex justify-center gap-4 p-4 bg-black/50 backdrop-blur-md shadow-lg">
        
          <button
          onClick={() => setCOlor('red')}
          className="px-6 py-2 rounded-full text-white font-semibold bg-red-500 hover:bg-red-600 shadow-md hover:scale-105 transition-transform duration-200"
          >Red</button>
          <button
           onClick={() => setCOlor('green')}
            className="px-6 py-2 rounded-full text-white font-semibold bg-green-500 hover:bg-green-600 shadow-md hover:scale-105 transition-transform duration-200"
         >Green</button>
          <button
          onClick={() => setCOlor('blue')}
          className="px-6 py-2 rounded-full text-white font-semibold bg-blue-500 hover:bg-blue-600 shadow-md hover:scale-105 transition-transform duration-200"
          >Blue</button>
          <button
          onClick={() => setCOlor('orange')}
           className="px-6 py-2 rounded-full text-white font-semibold bg-orange-500 hover:bg-orange-600 shadow-md hover:scale-105 transition-transform duration-200"
          >Orange</button>
          <button
          onClick={() => setCOlor('purple')}
           className="px-6 py-2 rounded-full text-white font-semibold bg-purple-500 hover:bg-purple-600 shadow-md hover:scale-105 transition-transform duration-200"
          >Purple</button>
        </div>
      
    </div>
    </>
  )
}

export default App
