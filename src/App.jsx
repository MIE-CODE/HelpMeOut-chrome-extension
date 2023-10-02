import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Login from './pages/login'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <React.Suspense fallback={<div>Loading...</div>}>
          <Home />
        </React.Suspense>),
    },
    {
      path: '/login',
      element: (
        <React.Suspense fallback={<div>Loading...</div>}>
          <Login />
        </React.Suspense>
      )
    }
  ])

  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  )
}

export default App
