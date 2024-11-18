import React, { useState } from 'react'
import { backendUrl } from '../App';
import axios from 'axios'

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
 
  const onSubmitHandler = async (e) => {
    try {
        e.preventDefault();
        const response = await axios.post(backendUrl + '/api/user/admin',{email,password});
        if(response.data.success){
          setToken(response.data.token);
        }else{
          
        }
        
        
      } catch (error) {
      
    }

  }

  

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
        <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
        <form onSubmit={onSubmitHandler} >
          <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
            <input onChange={(e) => {setEmail(e.target.value);}} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none ' type="email" placeholder='admin@gmail.com'/>
          </div>

          <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
            <input onChange={(e) => {setPassword(e.target.value)}} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none ' type="password" placeholder='********'/>
          </div>

          <button className='mt-2 w-full bg-black text-white px-4 py-2 rounded-md' type='submit' >Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login