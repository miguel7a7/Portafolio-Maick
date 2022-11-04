import React from 'react'
import { About } from './components/about/About'
import { Header } from './components/header/Header'
import { Services } from './components/services/Services'
import { Skill } from './components/skill/Skill'

export const AppPortafolio = () => {
  return (
    <>
      <Header />

      <>
        <About />
        <Skill />
        <Services />
      </>
    </>
  )
}
