import React from 'react'
import Logo from "../Assets/Logo.svg"
import { BsTwitter } from 'react-icons/bs'
import {SiLinkedin} from "react-icons/si"
import { BsYoutube } from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer-wrapper">
        <div className="futer-section-one">
            <div className="footer-logo-container">
                <img src={Logo} alt="" />
            </div>
            <div className="footer-icons">
                <BsTwitter />
                <SiLinkedin />
                <BsYoutube />
                <FaFacebookF />
            </div>
        </div>
        <div className="footer-section-two">
            <div className="footer-section-columns">
                <span>Качество</span>
                <span>Помощь</span>
                <span>Поделиться</span>
                <span>Вакансии</span>
                <span>Отзывы</span>
                <span>Работа</span>
            </div>
            <div className="footer-section-columns">
                <span>***-****-****</span>
                <span>hello@food.com</span>
                <span>press@food.com</span>
                <span>contact@food.com</span>
            </div>
            <div className="footer-section-columns">
                <span>Условия и политика конфиденциальности</span>
                {/* <span>Privacy Policy</span> */}
            </div>
        </div>
    </div>
  )
}

export default Footer
