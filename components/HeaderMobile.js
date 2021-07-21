import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/headerMobile.module.scss";
import { Fade as Hamburger } from 'hamburger-react'

export default function HeaderMobile({backgroundColor, isNavOpen, handleOpenNav}){
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false)

  useEffect(()=>{
    if (isOpen !== isNavOpen) setIsOpen(isNavOpen)
  }, [isNavOpen])

  const handleCLick = (value) => {
    handleOpenNav(value)
    setIsOpen(!isOpen)
  }

  if (pathname === '/') return null
  
  return (
    <div className = {styles.headerMobile + ' header-mobile'} style = {{backgroundColor}}>
        <Link href='/'>
          <img
            src='https://i.imgur.com/HjDbXtR.png'
            alt='Mauzoun logo'
            className="header-mobile__logo"
            layoutId="header-logo"
            onClick = {() => isNavOpen && handleCLick('instant')}
            style = {{cursor: "pointer"}}
          />
        </Link>

        <div className = {styles.button + ' header-mobile__button'}>
          <Hamburger toggled={isOpen} toggle={handleCLick} size={45}/>
        </div>
    </div>
  )
}
