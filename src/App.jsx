import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Register } from './Pages/Register'
import { Login } from './Pages/Login'
import { Dashboard } from './Pages/Dashboard'
import { EditUser } from './Pages/EditUser'
import Rediriguir from './Pages/Rediriguir'

export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Rediriguir />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/info' element={<EditUser />} />
    </Routes>

  )
}
