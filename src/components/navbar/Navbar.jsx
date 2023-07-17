"use client"

import React,{useState} from 'react'
import "./navbar.css"
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import Image from 'next/image'


const Navbar = () => {

  const [toggleMenu,setToggleMenu] = useState(false);
  const Menu = ()=>(
    <>
      <p><a href='##buyer'>Buyer</a></p>
      <p><a href='#seller'>Seller</a></p>
      <p><a href='#tenant'>Tenant</a></p>
      <p><a href='#blog'>Blog</a></p>
      <p><a href='#services'>Services</a></p>
    </>
  )

  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links__logo'>
          <Image 
            alt='Logo'
            src='/logo deal acres.png'
            height={60}
            width={60}
            className='IMG'
            />
        </div>
        <div className='navbar-links__container'>
          <Menu/>
        </div>
      </div>
      <div className='navbar-sign'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={()=>{setToggleMenu(false)}}/>
          : <RiMenu3Line color='#fff'size={27} onClick={()=>{setToggleMenu(true)}}/>}
          {toggleMenu
            && <div className='navbar-menu_container scale-up-center'>
              <div className='navabr-menu_container-links'>
                <Menu/>
                <div className='navbar-menu_container-links-sign'>
                  <p>Sign In</p>
                  <button type='button'>Sign Up</button>
                </div>
              </div>
            </div>}
      </div>
    </div>
  )
}

export default Navbar