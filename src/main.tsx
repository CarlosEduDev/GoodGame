// import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './global.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routes}/>
)
