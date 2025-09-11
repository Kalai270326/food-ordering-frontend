import React from 'react'
import './Customerregiseter.css'
import { useState } from 'react'
import axios from 'axios'

function Customerregiseter() {
    const[name,setName]=useState('')
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
     setName(value)
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
  async function userregister()
{
  
  
  
  try {
      const response=await axios.post('http://localhost:3000/registercustomer',{email,password,name,phone,address})
      console.log(response.data);
      setError(response?.data.message);
     

      
    
  } catch (error) {
    setError(error.response?.data?.message || 'Something went wrong');
  }}

  

  return (
     <div className='registerpage-container'>
        <div className='create-account'>Create User Account</div>
        <div className='registerpage'>
          <div className='emial-main'>
            <label> Name:</label><br />
            <input type="text" name="name" value={name} placeholder=" name" required onChange={(e)=>{handleclick(e)}}  /><br />
             
             
            <label>Email:</label><br />
            <input type="email" name="email" value={email} placeholder="Email" onChange={(e)=>{handleclick(e)}} required /><br />
            <label>Password:</label><br />
            <input type="password" name="password" value={password} placeholder="Password"  onChange={(e)=>{handleclick(e)}} required /><br />
            <label>Phone:</label><br />
            <input type="text" name="phone" value={phone} placeholder="phone number"  onChange={(e)=>{handleclick(e)}} required /><br />
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
            
    <h4 className='err-message'>{error}</h4>        
   <button  className='buttonres'onClick={userregister}>submit</button>
       
        </div>
  )
}

export default Customerregiseter