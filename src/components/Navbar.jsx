import React from 'react'

const Navbar = () => {
  return (
    <div className='flex bg-white h-20 items-center gap-3 py-5 px-20 shadow-md fixed top-0 left-0 right-0 z-50'>
      <span className='flex items-center gap-3 text-[#256AF4FF] font-bold text-xl'>
        <img src="https://cdn-icons-png.flaticon.com/512/13889/13889090.png " className='bg-slate-300/50 w-10 h-10 rounded-lg p-1' />
        Bright Future Academy
      </span>
      <div className=" flex gap-8 ml-auto text-gray-600 font-medium text-sm justify-center items-center">
        <a href='#home'>Home</a>
        <a href='#courses'>Course</a>
        <a href='#results'>Results</a>
        <a href='#faculty'>Faculty</a>
        <a href='#contact'>Contact</a>
        <a href='#' className='bg-[#256AF4FF] text-white px-5 py-3 hover:scale-105 hover:shadow-[0px_4px_6px_0px_rgba(59,_130,_246,_0.5)] rounded-[2rem]'>Enroll Now</a>
      </div>

    </div>
  )
}

export default Navbar
