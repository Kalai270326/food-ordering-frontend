import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



function Footer() {
  return (
    <div className='main-footer'>
      <div className='footer1'></div>
      <div className='footer2'>
        <div>
        <span className='title-text'>Get to Know Us</span>
            <p className='sec-text'>Carreers <br/>
             Press Realeases<br/>
             about us<br/>
             
        </p>
    </div>
     <div>
        <span className='title-text'>Connect with Us</span>
        <p className='sec-text'><FaFacebookF /> Facebook<br/>
         <FaTwitter /> Twitter <br/>
         <FaInstagram /> Instagram<br/>

        </p>
    </div>
     <div>
        <span className='title-text'>Let Us Help You</span>
        <p className='sec-text'>Your account<br/>
             Retruns centre <br/>
             Recalls and product<br/>
             Safety Alets<br/>
             100% purchase protection 
        </p>
    </div>
     <div>
        <span className='title-text'>Legal</span>
        <p className='sec-text'>
             Terms & Conditions <br/>
             Cookie Policy<br/>
             Privacy Policy<br/>
            
        </p>
    </div>
      </div>
      </div>
        
  
  )
}

export default Footer