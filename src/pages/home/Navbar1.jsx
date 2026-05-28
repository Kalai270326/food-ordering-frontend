import React from 'react'
import  './Navbar1.css'
import { Link } from 'react-router'
import { GrSearch } from "react-icons/gr";



function Navbar1() {
  return (
    <div className='main-nav'>
        <div className='left-nav'>
         <Link className='logo-button' to='/'> <img src='food-logo-removebg-preview.png' alt="" height={"100px"} width={'100px'} /></Link>
         
        </div>
        
          
        
        <div className='center-nav'><input className='search' type="text"  placeholder='Search..'/>
</div>
        <div className='right-nav'>

            <div className='logout-nav'><Link to='/logout'>Logout</Link></div>
            <div className='login-nav'><Link to='/custlogin'>Login</Link></div>
             <div className='login-nav'><Link to='/restalogin'>Restaurant login</Link></div>
            <div></div>
        </div>
    </div>
  )
}

export default Navbar1