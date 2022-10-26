import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from './components/Login'
import Admin from './components/Admin'
import Doctor from './components/Doctor'
import Nurse from './components/Nurse'


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/nurse" element={<Nurse />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App