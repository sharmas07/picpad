import React from 'react'
import githubicon from '../assets/github-mark/github-mark-white.png'

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center bg-black m-4 p-3 rounded-full">
      <h1 className="text-white text-center ml-5 text-2xl font-bold">PicPad</h1>
      <a href="https://github.com/sharmas07/picpad" target='_blank'>
      <img className='mr-2' src={githubicon} width={40} height={40} alt="" />
      </a>
    </div>
    
  )
}

export default Navbar