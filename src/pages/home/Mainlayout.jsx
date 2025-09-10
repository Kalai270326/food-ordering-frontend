import React from 'react'
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'
import Footer from './Footer'
import './Mainlayout.css'


function Mainlayout({children}) {
  return (
    <div>
      <div>
        <Navbar1/>
        </div>
        <div className='child'>
        {children}
        </div>
        <div className='footer-root'>
        <Footer/>
</div>
    </div>
  )
}

export default Mainlayout