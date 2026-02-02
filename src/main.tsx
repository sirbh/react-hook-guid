import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './hooks/use-optimistic/Basic'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
