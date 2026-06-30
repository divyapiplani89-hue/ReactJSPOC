import React from 'react'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import Profile from './Profile'
import ProtectedRoute from './ProtectedRoute'

const App = () => {

  useEffect(() => {

    const existinUser = JSON.parse(localStorage.getItem("users"))
    if (!existinUser || existinUser.length === 0) {
      const users = [
        {
          id: 1,
          username: "Admin",
          password: "admin@123",
          role: "Admin",
          email: "admin@tcs.com"
        },
        {
          id: 2,
          username: "Editor",
          password: "editor@123",
          role: "Editor",
          email: "editor@tcs.com"
        },
        {
          id: 3,
          username: "Viewer",
          password: "viewer@123",
          role: "Viewer",
          email: "viewer@tcs.com"
        },

      ]

      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [])


  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />


        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />


        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />


      </Routes>

    </BrowserRouter>

  )
}

export default App