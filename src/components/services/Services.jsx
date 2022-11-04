import React, { useState } from 'react'

import './services.css'
import { BsCheckCircle, BsArrowRightShort } from 'react-icons/bs'
import { GiQuill } from 'react-icons/gi'
import { BiCodeAlt, BiEdit } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'

export const Services = () => {
  const [modalToggle, setModalToggle] = useState(0)

  const modalClick = (numModal) => {
    setModalToggle(numModal)
  }

  return (
    <section className="section services__container" id="services">
      <h2 className="text-center section__title">Servicios</h2>
      <h5 className="text-center section__subtitle">Lo que ofrezco</h5>

      <div className="services__content">
        <div className="service__item">
          <div className="service__header">
            <GiQuill className="service__item-icon" />
            <h3 className="service__header-title">
              Diseñador <br /> Web
            </h3>
            <span
              className="service__header-more"
              onClick={() => modalClick(1)}
            >
              Leer Mas <BsArrowRightShort className="service__more-icon" />
            </span>
          </div>

          <div
            className={`${
              modalToggle === 1
                ? 'service__modal active__modal'
                : 'service__modal'
            }`}
          >
            <div className="service__modal-content">
              <IoMdClose
                className="service__modal-closed"
                onClick={() => modalClick(0)}
              />
              <h3 className="text-center">Diseñador Web</h3>
              <p className="text-center service__modal-subtitle">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p>

              <ul className="service__modal-list">
                <li className="service__modal-item">
                  <BsCheckCircle className="service__icon-modal" />
                  <p>I develop the user interface.</p>
                </li>

                <li className="service__modal-item">
                  <BsCheckCircle className="service__icon-modal" />
                  <p>Web page development.</p>
                </li>

                <li className="service__modal-item">
                  <BsCheckCircle className="service__icon-modal" />
                  <p>I create ux element interactions.</p>
                </li>

                <li className="service__modal-item">
                  <BsCheckCircle className="service__icon-modal" />
                  <p>I position your company brand.</p>
                </li>

                <li className="service__modal-item">
                  <BsCheckCircle className="service__icon-modal" />
                  <p>IDesign and mockups of products for companies.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service__item">
          <div className="service__header">
            <BiCodeAlt className="service__item-icon" />
            <h3 className="service__header-title">
              Ui/Ux <br /> Diseñador
            </h3>
            <span
              className="service__header-more"
              onClick={() => modalClick(2)}
            >
              Leer Mas <BsArrowRightShort className="service__more-icon" />
            </span>
          </div>

          <div
            className={`${
              modalToggle === 2
                ? 'service__modal active__modal'
                : 'service__modal'
            }`}
          >
            <div className="service__modal-content">
              <IoMdClose
                className="service__modal-closed"
                onClick={() => modalClick(0)}
              />
              <h3 className="text-center">Ui/Ux Designer</h3>
              <p className="text-center service__modal-subtitle">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p>

              <ul className="service__modal-list">
                <li className="service__modal-item">
                  <BsCheckCircle className="service__icon-modal" />
                  <p>I develop the user interface.</p>
                </li>

                <li className="service__modal-item">
                  <BsCheckCircle className="service__icon-modal" />
                  <p>Web page development.</p>
                </li>

                <li className="service__modal-item">
                  <BsCheckCircle className="service__icon-modal" />
                  <p>I create ux element interactions.</p>
                </li>

                <li className="service__modal-item">
                  <BsCheckCircle className="service__icon-modal" />
                  <p>I position your company brand.</p>
                </li>

                <li className="service__modal-item">
                  <BsCheckCircle className="service__icon-modal" />
                  <p>IDesign and mockups of products for companies.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service__item">
          <div className="service__header">
            <BiEdit className="service__item-icon" />
            <h3 className="service__header-title">
              Diseñador <br /> Visual
            </h3>
            <span
              className="service__header-more"
              onClick={() => modalClick(3)}
            >
              Leer Mas <BsArrowRightShort className="service__more-icon" />
            </span>
          </div>

          <div
            className={`${
              modalToggle === 3
                ? 'service__modal active__modal'
                : 'service__modal'
            }`}
          >
            <div className="service__modal-content">
              <IoMdClose
                className="service__modal-closed"
                onClick={() => modalClick(0)}
              />
              <h3 className="text-center">Diseñador Visual</h3>
              <p className="text-center service__modal-subtitle">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p>

              <ul className="service__modal-list">
                <li className="service__modal-item">
                  <BsCheckCircle className="service__icon-modal" />
                  <p>I develop the user interface.</p>
                </li>

                <li className="service__modal-item">
                  <BsCheckCircle className="service__icon-modal" />
                  <p>Web page development.</p>
                </li>

                <li className="service__modal-item">
                  <BsCheckCircle className="service__icon-modal" />
                  <p>I create ux element interactions.</p>
                </li>

                <li className="service__modal-item">
                  <BsCheckCircle className="service__icon-modal" />
                  <p>I position your company brand.</p>
                </li>

                <li className="service__modal-item">
                  <BsCheckCircle className="service__icon-modal" />
                  <p>IDesign and mockups of products for companies.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
