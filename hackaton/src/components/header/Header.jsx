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
  </div>
  )
}

export default Header