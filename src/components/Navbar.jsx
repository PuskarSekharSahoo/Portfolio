import React from 'react'
import '../App.css'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24  sticky top-0 z-50  border-b-2 rounded-full border-cyan-100'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>


        <div className='text-2xl  font-extrabold hidden md:inline hover:cursor-pointer  gradient-text '>Puskar</div>



        <div className='space-x-6'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#service" className='hover:text-gray-400'>Services</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="https://drive.google.com/file/d/1kCmtI01fhrUlM3fJ3OihRJVlhdFcUtdt/view?usp=drive_link" className='hover:text-gray-400'>Academy</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>

        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'><a href="#contact">Connect Me</a></button>
      </div>
    </nav>
  )
}

export default Navbar