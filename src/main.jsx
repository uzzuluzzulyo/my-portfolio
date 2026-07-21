import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import theme from './theme.js'
import SiteLock from './components/common/site-lock.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SiteLock>
        <HashRouter>
          <App />
        </HashRouter>
      </SiteLock>
    </ThemeProvider>
  </StrictMode>,
)
