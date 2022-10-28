import React from 'react'
import { FiAward } from 'react-icons/fi'
import { BiBriefcase } from 'react-icons/bi'
import { FcSupport } from 'react-icons/fc'

import './info.css'

export const InfoUser = () => {
  return (
    <div className="info__container">
      <article className="info__item">
        <FiAward className="info__icon" />
        <div className="info__item-title">Experiencia</div>
        <span className="info__item-subtitle">+5 Años</span>
      </article>

      <article className="info__item">
        <BiBriefcase className="info__icon" />
        <div className="info__item-title">Completados</div>
        <span className="info__item-subtitle">48 + Proyectos</span>
      </article>

      <article className="info__item">
        <FcSupport className="info__icon" />
        <div className="info__item-title">Soporte</div>
        <span className="info__item-subtitle">En linea 24/7</span>
      </article>
    </div>
  )
}
