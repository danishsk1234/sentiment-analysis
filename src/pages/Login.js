import React from 'react'

import LoginForm from '../components/LoginForm'
import Navbar from '../components/Navbar'


const Login = () => {
  return (
    <div className='h-screen'>
  <Navbar></Navbar>
        <LoginForm/>
    </div>
  )
}

export default Login
