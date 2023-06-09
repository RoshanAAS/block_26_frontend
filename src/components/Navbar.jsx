

import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
   <div style={{display:"flex",justifyContent:"space-around",textDecoration:"none",height:"65px",boxShadow:"rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px",
   position:"fixed",zIndex:"10",top:"0px",width:"100%"}}>
    <Link to='/'><h3>Home</h3></Link>
    <Link to='/create'><h3>Create Notes</h3></Link>
    <Link to='/signup'><h3>Register</h3></Link>
    <Link to='/login'><h3>Login</h3></Link>
   </div>

    </>
  )
}

export default Navbar
