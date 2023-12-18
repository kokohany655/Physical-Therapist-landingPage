"use client"

import Image from 'next/image'
import  { useState } from 'react'
import Logo from '@/public/logo-1 1.png'
import Link from 'next/link'
import NavBarMobil from './NavBarMobil'

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className=' w-full shadow-md flex justify-center items-center mb-7 px-3'>
        <div className='container flex justify-between items-center '>
            <Image src={Logo} alt={"logo"}/>
            <div className='md:flex gap-4  hidden'>  
                    <Link href={'/'} className='NavLink'>Home</Link>
                    <Link href={"#about"} className='NavLink'>About</Link>
                    <Link href={'#services'} className='NavLink'>Services</Link>
                    <Link href={'#certificate'} className='NavLink'>Certificate</Link>
                    <Link href={'#contact'} className='NavLink'>Contact</Link>
            </div>
            <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"></path></svg>
        </button>
        </div>
        {showMenu && < NavBarMobil />}

    </div>
  )
}

export default NavBar