'use client'

import React from 'react'
import ButtonHamburguer from './ButtonHamburguer'
import { LogoOlympic } from '../../icons/icons'
import Link from 'next/link'
import Router, { useRouter } from 'next/navigation'

const Header = () => {

  const { pathname } = useRouter();


  return (
    <div className="navbar bg-base-100 px-8 shadow-md fixed top-0 z-40">
    <div className="flex-1">
      <span >
        <LogoOlympic />
      </span>
    </div>
    <div className="flex-none">
      <ButtonHamburguer />
    </div>
    <ul className={'hidden md:flex gap-8  justify-around  text-xl text-center font-semibold '}>
          <Link href={'/'}>
            <li className={`hover:text-blue-600 cursor-pointer text-primary ${pathname === '/' ? 'text-accent' : ''} `}>
            world of the olympics
            </li>
          </Link>
          <Link href={'/events'}>
            <li className="hover:text-blue-600 cursor-pointer">Events</li>
          </Link>
            <li className="hover:text-blue-600 cursor-pointer">
            Medals
            </li>
            <li className="hover:text-blue-600 cursor-pointer">APICODANTE</li>
          </ul>
  </div>
  )
}

export default Header