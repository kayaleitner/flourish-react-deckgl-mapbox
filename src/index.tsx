import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/main.css'
import { MapContextProvider } from './contexts/MapContext'

const root = ReactDOM.createRoot(
  document.getElementById('app') as Element
)

root.render(
  <React.StrictMode>
    <MapContextProvider>
      <App />
    </MapContextProvider>
  </React.StrictMode>
)