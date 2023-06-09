
import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {

    const [state,setState]=useState({
        email:"",
        password:""
    })

    const login=()=>{

        axios.post(`https://lilac-boa-hem.cyclic.app/users/login`,state)
        .then((res)=>{
            console.log(res.data.token)

            localStorage.setItem("token",res.data.token)

        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

    const handalchange=(e)=>{
       const {name,value}=e.target
        setState((prev)=> {
            return {...prev,[name]:value}
        })
    }

    const handalsubmit=(e)=>{
       e.preventDefault()
       
         login()
         setState((prev)=> {
            return {email:"",password:""}
         })
    }
  return (
    <>
          <h1>Please Login..</h1>
       <form onSubmit={handalsubmit}>

         <label>Enter your Email</label>
         <br/>
         <input value={state.email} name="email" type='email' placeholder='Enter Your Email' onChange={handalchange} />
         <br/>
         <label>Enter your Password</label>
         <br/>
        <input value={state.password} name='password' type='password' placeholder='Enter Your Password' onChange={handalchange} />
        <br/>
        <button type='submit'>Login</button>
        </form>
    </>
  )
}

export default Login