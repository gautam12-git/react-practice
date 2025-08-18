import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const ReactElement = {
    type: 'a',
    papaya: { href: 'https://www.google.com', target: '_blank'},
    text: 'mko daba do google m pauch jaoge' 

}

const Mango = (
  <img src='/public/vite.svg' alt='vite'/>
  // <h1>Vite logo</h1>
)


const Tango = (
  <h1>Vite logo</h1>
)

const actualReactElement = React.createElement(
  'a',
 {href: 'https://www.google.com', target: '_blank'},
  
  'Daba do na..!'
)

createRoot(document.getElementById('root')).render(

  <App />

)
