import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import {  Outlet, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser }  from './utils/userSlice'
import axios from 'axios'
import Profile from './components/Profile'
import {useSelector } from 'react-redux'

function Body() {

      //hooks
      const dispatch = useDispatch()
      const navigate = useNavigate()
      const userData = useSelector((store)=> store.user)


     //api call
      const fetchUser = async() =>{

        //if userpresent in store logged in then dont call again api for fetch 
          if(userData)
          {
            return 
          }
        try{

          const res = await axios.get("http://localhost:5001/api/profile/view",{
            withCredentials: true
          })

          //update store
          dispatch(addUser(res.data))

        }catch(err)
        {
          //if user not logged in  
           if(err.status === 401)
           {
             navigate('/login')
           }
            
            console.log(err)
        }

  }


  useEffect(()=>{
    //if user present in store then dont call api 
    fetchUser()
   
  },[])


  return (
    <div>
       
       <Navbar></Navbar>
        <Outlet></Outlet>
        <Profile></Profile>
    </div>
  )
}

export default Body
