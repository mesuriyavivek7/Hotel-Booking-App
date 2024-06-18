import React from 'react'

//importing sass
import './login.scss'


import { useContext, useState } from 'react'

//importing contexts
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Login() {
  const [credentials,setCredentials]=useState({
    username:undefined,
    password:undefined
})

const navigate=useNavigate()
const {loading,error,dispatch}=useContext(AuthContext)

const handleChange=(e)=>{
    setCredentials((prev)=>({...prev,[e.target.id]:e.target.value}))
}

const handleClick=async (e)=>{
    e.preventDefault()
    dispatch({type:"LOGIN_START"})

    try{
      const res=await axios.post('/auth/login',credentials)
      if(res.data.isAdmin){
        dispatch({type:"LOGIN_SUCCESS",payload:res.data.details})
        navigate("/")
      }else{
        dispatch({type:"LOGIN_FAILURE",payload:{message:"You are not allowed"}})
      }
      
    }catch(err){
      dispatch({type:"LOGIN_FAILURE",payload:err.response.data})
    }
}
  return (
    <div className='login'>
    <div className='loginContainer'>
        <div className='loginHead'>
           <h4>Login</h4>
        </div>
        <input type='text' className='loginInput' placeholder='username' id='username' onChange={handleChange}></input>
        <input type='password' className='loginInput' placeholder='password' id='password' onChange={handleChange}></input>
        <button disabled={loading} className='loginBtn' onClick={handleClick}>Login</button>
        {
            error && <span className='errorMsg'>{error.message}</span>
        }
    </div>
</div>
  )
}
