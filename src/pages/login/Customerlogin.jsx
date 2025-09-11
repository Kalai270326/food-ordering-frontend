import React, { useState } from 'react'
import './Customerlogin.css'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'


function Customerlogin() {
  //usestate
  const [email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[error,setError]=useState()
  const navigate=useNavigate()
//handle the customer
  function handleuser(e){
      
    const value=e.target.value;
    if(e.target.name =='email'){
      setEmail(value)
    }
    if(e.target.name == 'password'){
      setPassword(value)
     }
     
    }
 //get api 
async function customerlogin(e){
 e.preventDefault();

  
  try {
    const res=await axios.post('http://localhost:3000/logincustomer',{email,password})
     localStorage.setItem('token',res.data?.token)
     const extractedToken=jwtDecode(res.data?.token)
     setError(res?.data?.message)
    
    //  console.log(extractedToken)
     if(extractedToken.role == 'customer')
     {
      navigate('/customer')
     }



    } catch (error) {
    console.log(error.message);
  }
}
  return (
    <div className="login-container">

      <div className="login-headerr"><h3>User Login</h3></div>
      <form className="login-form">
      {error && <p className="error-message">{error}</p>}
        <label>Email:</label>
        <input type="email" name="email" value={email} placeholder="Enter your email" onChange={(e)=>{handleuser(e)}} />
        <label>Password:</label>
        <input type="password" name="password" value={password} placeholder="Enter your password" onChange={(e)=>{handleuser(e)}} />
        <button onClick={customerlogin} className='button'>Login</button>
        <div className="register-link">
        <h5>Don't have an account?</h5>
        <Link to="/custregister">Register</Link><br />

        </div>
      </form>
      </div>
   
  )
}

export default Customerlogin