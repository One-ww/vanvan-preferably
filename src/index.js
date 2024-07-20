import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import { HashRouter } from 'react-router-dom'

import 'normalize.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Suspense>
      <HashRouter>
        <App />
      </HashRouter>
    </Suspense>
  </React.StrictMode>
)
