import React,{useState} from 'react'
import './Restaurantlogin.css'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

function Restaurantlogin() {
  const [email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate();
  function handlechange(e){
      
    const value=e.target.value;
    if(e.target.name =='email'){
      setEmail(value)
    }
    if(e.target.name == 'password'){
      setPassword(value)
     }
     




  }
  async function restalogin(e){
 e.preventDefault();

  
  try {
    const response=await axios.post('http://localhost:3000/loginrestaurant',{email,password})
     localStorage.setItem('token', response.data?.token)
     const extractedToken=jwtDecode(response.data?.token)
    


      if(extractedToken.role == 'restaurant')
      {
       navigate('/restaurant')

      }

    } catch (error) {
    console.log(error.message);
  }
}
  return (
    <div>
      <div className="login-container">

      <div className="login-header"><h3>Restaurant Login</h3></div>
      <form className="login-form">
        <label>Email:</label>
        <input type="email" name="email" value={email} placeholder="Enter your email" onChange={(e)=>{handlechange(e)}} />
        <label>Password:</label>
        <input type="password" name="password" value={password}  placeholder="Enter your password" onChange={(e)=>{handlechange(e)}} />
        <button onClick={restalogin} className='button'>Login</button>
        <div className="register-link">
        <h5>Don't have an account?</h5>
        <Link to="/restaregister">Register</Link><br />
        </div>
      </form>
      </div>
    </div>
  )
}

export default Restaurantlogin