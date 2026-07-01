import React from 'react'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Screens/Login/Login'
import Dashboard from './Screens/Dashboard/Dashboard'
import Profile from './Screens/Profile/Profile'
import ProtectedRoute from './Route/ProtectedRoute'
import { mockUsers } from './mock'




const App = () => {

  useEffect(() => {

    const existinUser = JSON.parse(localStorage.getItem("users"))
     if (!existinUser || existinUser.length === 0) {
    localStorage.setItem("users", JSON.stringify(mockUsers));
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