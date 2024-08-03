import React, { memo, useEffect, Suspense } from 'react'
import { useRoutes, useLocation } from 'react-router-dom'
import routes from './router'

import AppHerder from './components/app-header'
import AppFooter from './components/app-footer'

const App = memo(() => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="App">
      <AppHerder />
      <Suspense fallback="loading">
        <div className="page">{useRoutes(routes)}</div>
      </Suspense>

      <AppFooter />
    </div>
  )
})

export default App
