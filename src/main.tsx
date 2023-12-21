import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './AppRouters'
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Auth0ProviderWithNavigate childern={<AppRoutes />}>
      </Auth0ProviderWithNavigate>
    </Router>
  </StrictMode>,
)
