import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import loginImg from '../assets/login.jpg'

export default function Login() {
  const [isChecked, setIsChecked] = React.useState(false); // State for checkbox

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  }

  const handleForgotPassword = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Implement your logic for handling forgot password here (e.g., navigate to a forgot password page)
  }

  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
      <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" />

      <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
          <h2 className='text-4xl font-bold text-center py-4'>Log In</h2>
          <div className='flex justify-between py-8'>
            <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p>
            <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
          </div>
          <div className='flex flex-col mb-4'>
            <label>Username</label>
            <input className='border relative bg-gray-100 p-2' type="text" />
          </div>
          <div className='flex flex-col '>
            <label>Password</label>
            <input className='border relative bg-gray-100 p-2' type="password" />
          </div>
          <div className="text-sm">
            <a href="#" className="font-medium text-blue cursor-wait" onClick={handleForgotPassword}>
              Forgot your password?
            </a>
          </div>
          <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 
          relative text-white'>Log In</button>
          <p className='flex items-center mt-2'>
            <input className='mr-2' type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            Remember Me
          </p>
          <p className='text-center mt-8'>Not a member? <Link to="/signup" className='text-blue'>Sign up now</Link> </p>
        </form>
      </div>
    </div>
  )
}
