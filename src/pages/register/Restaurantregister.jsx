import React, { useState } from 'react'
import './Restaurantregister.css'
import axios from 'axios'

function Restaurantregister() {
  const[restaurantname,setRestaurnatname]=useState('')
  const[error,setError]=useState()
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[phone,setPhone]=useState('')
  const [address, setAddress] = useState({
  street: '',
  city: '',
  district: '',
  pincode: ''
})

  function handleclick(e){
 
  const value=e.target.value;
  
  if(e.target.name == "email"){
    setEmail(value)
    
  }
if(e.target.name=="password"){
    setPassword(value)
  }
   if(e.target.name=="name"){
     setRestaurnatname(value)
   }
   if(e.target.name=="phone")
   {
     setPhone(value)
   }
   
  }
  function handlechan(e){
    const {name,value}=e.target;
    setAddress(prev=>({
      ...prev,[name]:value,
    }));
  }
async function restregister()
{
  
  
  
  try {
      const response=await axios.post('http://localhost:3000/registerrestaurant',{email,password,restaurantname,phone,address})
      
      setError(response?.data.message);
     

      
    
  } catch (error) {
    setError(error.response?.data?.message || 'Something went wrong');
  }}


  
  return (
            <div className='registerpage-container'>
        <div className='create-account'>Create Restaurant Account</div>
        <div className='registerpage'>
          <div className='emial-main'>
            <label>Restaurant name:</label><br />
            <input type="text" name="name" value={restaurantname} placeholder="restaurant name" onChange={(e)=>{handleclick(e)}}  /><br />
             
             
            <label>Email:</label><br />
            <input type="email" name="email" value={email} placeholder="Email" onChange={(e)=>{handleclick(e)}}  /><br />
            <label>Password:</label><br />
            <input type="password" name="password" value={password} placeholder="Password"  onChange={(e)=>{handleclick(e)}}  /><br />
            <label>Phone:</label><br />
            <input type="text" name="phone" value={phone} placeholder="phone number"  onChange={(e)=>{handleclick(e)}}  /><br />
</div><br/>

     <div className='main-address'>   
  <label>Street:</label><br />         
<input
  type="text"
  name="street"
  value={address.street}
  placeholder="Street"
  onChange={(e)=>{handlechan(e)}}
/><br />

<label>City:</label><br />
<input
  type="text"
  name="city"
  value={address.city}
  placeholder="City"
  onChange={(e)=>{handlechan(e)}}
/><br />

<label>District:</label><br />
<input
  type="text"
  name="district"
  value={address.district}
  placeholder="District"
  onChange={(e)=>{handlechan(e)}}
/><br />

<label>Pincode:</label><br />
<input
  type="text"
  name="pincode"
  value={address.pincode}
  placeholder="Pincode"
  onChange={(e)=>{handlechan(e)}}
/><br />
</div>    
 </div>
            
    <h4 className='error-message'>{error}</h4>        
   <button  className='buttonres'onClick={restregister}>submit</button>
       
        </div>
  )
}

export default Restaurantregister