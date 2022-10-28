import React from 'react'
import { InfoUser } from './InfoUser'

import './about.css'
import user from '@/assets/img/foto.png'
import CV from '@/assets/miguel-cv.pdf'
import { FiDownloadCloud } from 'react-icons/fi'

export const About = () => {
  return (
    <section className="section about__container" id="about">
      <h2 className="text-center section__title">Sobre Mi</h2>
      <h5 className="text-center section__subtitle">Introducción</h5>

      <div className="about__content">
        <div className="info__img-content">
          <img src={user} alt="img-user" className="info__img" />
        </div>

        <div className="about__detail">
          <InfoUser />

          <p className="about__description">
            Desarrollador frontend, creo páginas web con interfaz de usuario
            UI/UX, tengo años de experiencia y muchos clientes están contentos
            con los proyectos realizados.
          </p>

          <a download="" href={CV} className="btn btn-primary about__btn">
            <FiDownloadCloud className="about__icon-btn" />
            <span>Descargar CV</span>
          </a>
        </div>
      </div>
    </section>
  )
}
