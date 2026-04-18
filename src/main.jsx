import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './App.css'
import App from './App.jsx'
import Products from './products.jsx'
import Members from './members.jsx'
import Admin from './admin.jsx'
import Vision from './Vision.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/index.html" element={<App />} />
        <Route path="/products" element={<Products />} />
        <Route path="/members" element={<Members />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/vision" element={<Vision />} /> 
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)