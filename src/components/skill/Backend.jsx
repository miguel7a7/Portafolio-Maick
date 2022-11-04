import React from 'react'

import { BsCheckCircleFill } from 'react-icons/bs'

export const Backend = () => {
  return (
    <div className="habilidad__container">
      <h3 className="habilidad__title">Backend developer</h3>

      <div className="habilidad__content">
        <div className="habilidad__item">
          <BsCheckCircleFill className="habilidad__icon" />
          <div className="habilidad__item-detail">
            <h3>PHP</h3>
            <span>Intermedio</span>
          </div>
        </div>
        <div className="habilidad__item">
          <BsCheckCircleFill className="habilidad__icon" />
          <div className="habilidad__item-detail">
            <h3>NODE js</h3>
            <span>Intermedio</span>
          </div>
        </div>
        <div className="habilidad__item">
          <BsCheckCircleFill className="habilidad__icon" />
          <div className="habilidad__item-detail">
            <h3>PYTHON</h3>
            <span>Basico</span>
          </div>
        </div>

        <div className="habilidad__item">
          <BsCheckCircleFill className="habilidad__icon" />
          <div className="habilidad__item-detail">
            <h3>MYSQL</h3>
            <span>Intermedio</span>
          </div>
        </div>

        <div className="habilidad__item">
          <BsCheckCircleFill className="habilidad__icon" />
          <div className="habilidad__item-detail">
            <h3>FIREBASE</h3>
            <span>Intermedio</span>
          </div>
        </div>
      </div>
    </div>
  )
}
