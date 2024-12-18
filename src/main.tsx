import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { SearchContextManager } from '@giphy/react-components'
import App from './App'
import { SnackbarProvider } from './contexts/SnackbarContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SearchContextManager apiKey={import.meta.env.VITE_GIPHY_API_KEY!}>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </SearchContextManager>
  </StrictMode>
)
