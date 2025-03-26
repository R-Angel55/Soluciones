import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Hardware from './Hardware.jsx'
import Software from './Software.jsx'
import Mantenimiento from './Mantenimiento.jsx'
import Comunes from './Comunes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<App />} />
      <Route path='/hardware' element= {<Hardware />} />
      <Route path='/software' element={<Software />} />
      <Route path='/mantenimiento' element={<Mantenimiento />} />
      <Route path='/comunes' element={<Comunes />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
