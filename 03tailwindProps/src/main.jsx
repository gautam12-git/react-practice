import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './Component/card'

createRoot(document.getElementById('root')).render(
 
   <>
   
    <Card username = 'Gautii' role = 'Student'/>
    <Card />
  </> 
)
