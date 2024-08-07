import React from 'react'
import ButtonHamburguer from './ButtonHamburguer'
import { LogoOlympic } from '../../icons/icons'

const Header = () => {
  return (
    <div className="navbar bg-base-100 px-8 shadow-md fixed top-0 z-20">
    <div className="flex-1">
      <span >
        <LogoOlympic />
      </span>
    </div>
    <div className="flex-none">
      <ButtonHamburguer />
    </div>
    <ul className="hidden md:flex gap-8  justify-around  text-xl text-center font-semibold text-primary">
            <li className="hover:text-secondary cursor-pointer">
            world of the olympics
            </li>
            <li className="hover:text-secondary cursor-pointer">Competitions</li>
            <li className="hover:text-secondary cursor-pointer">
            Ratings
            </li>
            <li className="hover:text-secondary cursor-pointer">Athletes</li>
          </ul>
  </div>
  )
}

export default Header