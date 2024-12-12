import { createRoot } from 'react-dom/client'
import Home from './pages/HomePage.jsx'
import './styles/global.css'

import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './routes'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainRoutes/>
  </BrowserRouter>,
)
