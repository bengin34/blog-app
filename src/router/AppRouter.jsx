import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />}  />
            <Route path='/' element={<Register />}  />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
