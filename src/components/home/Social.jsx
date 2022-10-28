import React from 'react'
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'

import './social.css'

export const Social = () => {
  return (
    <div className="social__container">
      <a
        href="https://www.instagram.com/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
      <a
        href="https://github.com/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://twitter.com/?lang=es"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <BsTwitter />
      </a>
    </div>
  )
}
