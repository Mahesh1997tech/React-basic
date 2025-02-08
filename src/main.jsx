import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './App.css'
import Mycomponent from './Mycomponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Mycomponent></Mycomponent>
  </StrictMode>,
)
