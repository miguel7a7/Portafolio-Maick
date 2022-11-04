import React from 'react'

import { BsCheckCircleFill } from 'react-icons/bs'

export const Frontend = () => {
  return (
    <div className="habilidad__container">
      <h3 className="habilidad__title">Frontend Developer</h3>

      <div className="habilidad__content">
        <div className="habilidad__item">
          <BsCheckCircleFill className="habilidad__icon" />
          <div className="habilidad__item-detail">
            <h3>HTML</h3>
            <span>Alto</span>
          </div>
        </div>
        <div className="habilidad__item">
          <BsCheckCircleFill className="habilidad__icon" />
          <div className="habilidad__item-detail">
            <h3>CSS</h3>
            <span>Alto</span>
          </div>
        </div>
        <div className="habilidad__item">
          <BsCheckCircleFill className="habilidad__icon" />
          <div className="habilidad__item-detail">
            <h3>JAVASCRIPT</h3>
            <span>Intermedio</span>
          </div>
        </div>

        <div className="habilidad__item">
          <BsCheckCircleFill className="habilidad__icon" />
          <div className="habilidad__item-detail">
            <h3>BOOTSTRAP</h3>
            <span>Intermedio</span>
          </div>
        </div>

        <div className="habilidad__item">
          <BsCheckCircleFill className="habilidad__icon" />
          <div className="habilidad__item-detail">
            <h3>GIT</h3>
            <span>Intermedio</span>
          </div>
        </div>

        <div className="habilidad__item">
          <BsCheckCircleFill className="habilidad__icon" />
          <div className="habilidad__item-detail">
            <h3>REACT</h3>
            <span>Intermedio</span>
          </div>
        </div>
      </div>
    </div>
  )
}
