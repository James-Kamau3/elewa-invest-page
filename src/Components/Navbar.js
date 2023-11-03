import React from 'react'
import '../App.css'
import Quote from './Quote'

function Navbar() {
  return (
    <div className='navbar-container'>
      
      {/* Background image */}
        <img className='img' src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1679982347/elewa-group-website/hero-Images/dark-to-light_xrat5g.jpg' alt='sky'/>

      <nav className='relative container mx-auto p-12 md:border-b-2 md:border-white'>

        {/* Logo */}
        <div className='flex items-center justify-between md:ml-6'>
        <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg' alt='logo' />

        {/* Menu Items */}
        <div className='hidden text-white md:flex md:flex-row space-x-8 md:mr-12'>
            <a href='home' className='hover:underline'>Home</a>
            <a href='about' className='hover:underline'>About</a>
            <a href='contact' className='hover:underline'>Contact</a>
            <a href='invest' className='hover:underline'>Invest</a>
        </div>
        {/* Mobile menu items */}
        {/* <div className='md:hidden'>
          <div className='absolute flex-col items-center hidden text-white self-end py-8 mt-10 space-y-6 bg-black'>
        <a href='home' className='hover:underline'>Home</a>
        <a href='about' className='hover:underline'>About</a>
        <a href='contact' className='hover:underline'>Contact</a>
        <a href='invest' className='hover:underline'>Invest</a>
        </div>
        </div> */}
        {/* Hamburger Icon for mobile */}
        {/* <button id='menu-btn' className='open flex ml-auto hamburger focus:outline-none md:hidden'>
              <span class="hamburger-top"></span>
                <span class="hamburger-middle"></span>
                <span class="hamburger-bottom"></span>
        </button> */}
        </div>
      </nav>
      <Quote />
    </div>

  )
}

export default Navbar;
