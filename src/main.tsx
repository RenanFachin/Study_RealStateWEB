import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/global.css'
import { Route } from './routes'

import { HouseProvider } from './contexts/HouseContexts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HouseProvider>
      <Route />
    </HouseProvider>
  </React.StrictMode>,
)
