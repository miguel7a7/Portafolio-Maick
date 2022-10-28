import React from 'react'
import { Home } from '../home/Home'
import { Navbar } from '../nav/Navbar'

import './header.css'

export const Header = () => {
  return (
    <header>
      <Navbar />

      <div className="container">
        <Home />
      </div>
    </header>
  )
}
