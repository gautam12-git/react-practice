import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeProvider } from './components/contexts/theme'
import { useEffect } from 'react'
import theme from './components/contexts/theme'
import { ThemeContext } from './components/contexts/theme'

function App() {
const [themeMode, setThemeMode] = useState('light')

const darkMode = () => {
  setThemeMode('dark')
}

  const lightMode = () => {
    setThemeMode('light')
  }


    useEffect(() => {
  const html = document.querySelector('html')
  if (themeMode === 'dark') {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
}, [themeMode])

 

  return (
    
     <ThemeProvider value={{themeMode, lightMode, darkMode}}>
<div className="min-h-screen flex items-center justify-center">
  <div className="flex flex-col items-center px-2">
    <div className="mb-[20px] z-10">
        <ThemeBtn />
      </div>
    <div className=' bg-gray-100 dark:bg-gray-900 transition-colors duration-500 rounded-2xl p-6'>
    <Card />
  </div>
</div>
</div>
</ThemeProvider>

    
  )
}

export default App
