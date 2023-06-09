
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Createnotes from './Createnotes'
import Home from './Home'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/create' element={<Createnotes/>}/>
    </Routes>
  )
}

export default AllRoutes