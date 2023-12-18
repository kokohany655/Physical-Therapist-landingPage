import Link from 'next/link'
import React from 'react'

const NavBarMobil = () => {
  return (
    <nav className="w-full bg-white absolute top-20 left-0 z-10 p-4 shadow-xl block md:hidden">
      <ul className="flex flex-col justify-center items-center text-right">
                    <Link href={'/'} className='NavLink'>Home</Link>
                    <Link href={"#about"} className='NavLink'>About</Link>
                    <Link href={'#services'} className='NavLink'>Services</Link>
                    <Link href={'#certificate'} className='NavLink'>Certificate</Link>
                    <Link href={'#contact'} className='NavLink'>Contact</Link>
      </ul>
    </nav>
  )
}

export default NavBarMobil