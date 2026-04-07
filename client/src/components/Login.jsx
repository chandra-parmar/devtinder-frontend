import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'



const Login = () => {

     const [email,setEmail] = useState("")
     const [password,setPassword] = useState("")
     const [error,setError] = useState("")
     const dispatch = useDispatch()
     const navigate = useNavigate()

    

      const handleLogin = async()=>{
    
         try{

            const res= await axios.post('http://localhost:5001/api/login',{
               email,
               password
           },
           { withCredentials: true })
           
           console.log("Login successful:", res.data)

           //data added to the redux store
           dispatch(addUser(res.data))

           return navigate('/feed')
           
        }catch(err)
        {
          
           setError(err?.response?.data || "Invalid credentials")
           
        }
            
         
      }

  return (
    

    <div className="flex flex-row justify-center items-center mt-25">

      
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend text-3xl">Login</legend>

         

          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" value={email} 
             onChange={(e)=> setEmail(e.target.value)}
             required
            
          />

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" value={password} 
            onChange={(e)=> setPassword(e.target.value)}
            required
            
          />
          
          <p className='text-red-500'>{error}</p>
          <div className='card-actions justify-center m-2'>
             <button type="submit" className="btn btn-neutral mt-4" onClick={handleLogin}>login </button>
          </div>
         
        </fieldset>
      
    </div>
  )
}

export default Login
