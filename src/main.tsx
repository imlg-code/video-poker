import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     { /* Her ligger browserrouter rundt appen, slik at vi kan bruke react-router for å navigere mellom sider viaURL */ }
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </StrictMode>,
)

