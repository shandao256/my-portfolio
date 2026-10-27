import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.tsx'
import Privacy from './components/Datenschutz.tsx'

import './assets/fonts/Nacelle/nacelle.css'


const path = window.location.pathname.replace(/\/$/, '')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {path === '/privacy' ? <Privacy /> : <App />}
  </StrictMode>,
)