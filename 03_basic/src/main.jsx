import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyCard from './Card.jsx'   

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyCard name="Archit" btn = "click archit"/>   
    <MyCard name="het" />   

  </StrictMode>,
)
