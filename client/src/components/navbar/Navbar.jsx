import React from 'react'
import './navbar.css';

const Navbar = () => {
  return (
      <div className='navbar'>
          <div className='navContainer'>
            <span className='logo'><strong>Free Booking</strong></span>
            <div className="navItems">
                <button className='navButton'>Registration</button>
                <button className='navButton'>Login</button>
            </div>
          </div>
      </div>
  )
}
export default Navbar;