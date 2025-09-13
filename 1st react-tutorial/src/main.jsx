import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* send component(App) to the html element which id='root' in index.html to render */}
  </StrictMode>
)

