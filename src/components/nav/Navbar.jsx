import React, { useState } from 'react'

import './navbar.css'

import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineUserSwitch,
} from 'react-icons/ai'
import { BsBriefcase, BsFolderSymlink } from 'react-icons/bs'
import { VscFolderLibrary } from 'react-icons/vsc'
import { FaWindowClose } from 'react-icons/fa'
import { TiLockOpen } from 'react-icons/ti'

export const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav>
      <div className="nav__content">
        <a href="index.html" className="nav__logo">
          WebMaick
        </a>

        <div className={`${toggle ? 'nav__menu nav__active' : 'nav__menu'}`}>
          <ul className="nav__list">
            <li>
              <a href="#home" className="nav__link nav__link-active">
                <AiOutlineHome className="nav__icon" />
                <small>Inicio</small>
              </a>
            </li>
            <li>
              <a href="#about" className="nav__link active__link">
                <AiOutlineUserSwitch className="nav__icon" />
                <small>Sobre Mi</small>
              </a>
            </li>
            <li>
              <a href="#skill" className="nav__link">
                <VscFolderLibrary className="nav__icon" />
                <small>Habilidades</small>
              </a>
            </li>
            <li>
              <a href="#services" className="nav__link">
                <BsBriefcase className="nav__icon" />
                <small>Servicios</small>
              </a>
            </li>
            <li>
              <a href="#portfolio" className="nav__link">
                <BsFolderSymlink className="nav__icon" />
                <small>Portafolio</small>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav__link">
                <AiOutlineMessage className="nav__icon" />
                <small>Contactos</small>
              </a>
            </li>
          </ul>

          <FaWindowClose
            className="nav__close"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <TiLockOpen />
        </div>
      </div>
    </nav>
  )
}
