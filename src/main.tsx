import './polyfills'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'
import App from './App'
import './index.css'

const theme = {
  colors: {
    primary: '#ffffff',
    background: '#000000',
    secondary: '#666666',
    accent: '#ff00ff',
  }
}

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      background: string;
      secondary: string;
      accent: string;
    }
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
