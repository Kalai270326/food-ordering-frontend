import React from 'react'
import { useNavigate } from 'react-router'
import {jwtDecode} from 'jwt-decode'
import './Logout.css'
function Logout() {
    const navigate=useNavigate()
    const token=localStorage.getItem('token')
    const decode=jwtDecode(token)
    const Decode=jwtDecode(token)
    const username=decode?.name
    const resta=Decode?.restaurantname

    function handleclick(){
            localStorage.removeItem('token')
            navigate('/')
    }
  return (
 
        <div className='main-contianer'>
     <div className='logout-head'><h3>Logout</h3></div>
    <div className='logout-para1'><p>Hi,{username}{resta}</p></div>
    <div className='logout-para2'><p>Are you sure you want to log out from this page</p></div>
    

       
 

   <div className='logout-button' onClick={handleclick}> <button>Logout</button></div></div>
  )
}

export default Logout