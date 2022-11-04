import React from 'react'
import { Backend } from './Backend'
import { Frontend } from './Frontend'

import './skill.css'

export const Skill = () => {
  return (
    <section className="section skill__container" id="skill">
      <h2 className="text-center section__title">Mis Habilidades</h2>
      <h5 className="text-center section__subtitle">Nivel de tecnologias</h5>

      <div className="skill__content">
        <Frontend />

        <Backend />
      </div>
    </section>
  )
}
