import React from 'react'
import '../App.css'

function Navbar() {
  return (
    <div className='navbar'>
      <nav className='relative container mx-auto p-12 md:border-bottom-solid md:border-bottom-white'>
        {/* Logo */}
        <div className='flex items-center justify-between'>
        <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg' alt='logo' />
        {/* Menu Items */}
        <div className='hidden text-white md:flex md:flex-row space-x-6'>
            <a href='home' className='hover:underline'>Home</a>
            <a href='home' className='hover:underline'>Home</a>
            <a href='home' className='hover:underline'>Home</a>
            <a href='home' className='hover:underline'>Home</a>
            <a href='home' className='hover:underline'>Home</a>
            <a href='home' className='hover:underline'>Home</a>
            <a href='home' className='hover:underline'>Home</a>
            <a href='home' className='hover:underline'>Home</a>
        </div>
        </div>
        <div className='bor'>

        </div>
      </nav>
      {/* Quote Section */}
      <div className=''>

      </div>
    </div>
  )
}

export default Navbar
