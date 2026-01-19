import React from 'react'
import {CgNametag} from 'react-icons/cg'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react';
import {HiMenuAlt1} from 'react-icons/hi'

export default function Navigation() {
  const [toggle,setToggle]=useState(false);
  function openMenu(){
    setToggle(true)
  }
  function closeMenu(){
    setToggle(false);
  }

  return (
     <>
    <div className="flex justify-between items-center p-5 bg-gray-800 text-white" >
      <div>
        <a href="#" className="text-white font-bold text-decoration none"><CgNametag /> Agrim</a>
      </div>
      <div className='space-x-4'>
        <div className='hidden lg:block space-x-2'>
          <a href="#" className="cursor-pointer text-decoration text-white font-family Arial, sans-serif hover:bg-gray-500 hover:text-black rounded px-3 py-1" > Skills</a>
        <a href="#" className="cursor-pointer text-decoration text-white font-family Arial, sans-serif hover:bg-gray-500 hover:text-black rounded px-3 py-1" > Projects</a>
        <a href="#" className="cursor-pointer text-decoration text-white font-family Arial, sans-serif hover:bg-gray-500 hover:text-black rounded px-3 py-1" > Testimonials</a>

        </div>
        <div>
          {toggle ? (<AiOutlineClose className='lg:hidden text-white' size={30} onClick={closeMenu} />) : (<HiMenuAlt1 className='lg:hidden text-white' size={30} onClick={openMenu} />)}
        </div>
      </div>

    </div>
    
    <div className='bg-gray-800'>
      {toggle ? (
      <div className='flex justify-between nl-10 md:hidden lg:hidden p-5 space-y-3 flex-col '>
        <ul>
          <li>
            <a href="#" className="text-decoration text-white font-family Arial, sans-serif hover:bg-gray-500 hover:text-black rounded px-3 py-1" > Skills</a>
          </li>
          <li>
            <a href="#" className="text-decoration text-white font-family Arial, sans-serif hover:bg-gray-500 hover:text-black rounded px-3 py-1" > Projects</a>
          </li>
          <li>
            <a href="#" className="text-decoration text-white font-family Arial, sans-serif hover:bg-gray-500 hover:text-black rounded px-3 py-1" > Testimonials</a> 
          </li>
        </ul>
      </div>
      ) :
      (
        <div></div>
      )
    }
    </div>
    </>
  )
}
