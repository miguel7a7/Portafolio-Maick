import React from 'react'
import { Data } from './Data'

import './home.css'
import user from '@/assets/img/foto.png'
import { Social } from './Social'
import { ScrollDown } from './ScrollDown'

export const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container">
        <div className="home__content">
          <Social />

          <div className="home__img">
            <img src={user} alt="user-foto" />
          </div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  )
}
