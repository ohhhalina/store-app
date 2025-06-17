import React from 'react'
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/about-background-image.png"
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { duration } from '@mui/material/styles'
import { motion } from "framer-motion";


const About = () => {
  return (
    <div className='about-section-container'>
        <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
            {/* <img src={AboutBackgroundImage} alt="" /> */}
            <motion.img 
            img src={AboutBackgroundImage}
            alt="plate"
            initial={{ x: -200, opacity: 0, rotate:-90 }}
            whileInView={{ x:0, opacity: 1, rotate: 0}}
            transition={{ duration: 1, ease: "easeOut"}}
            viewport={{once: true}}
            />
        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading">
                О нас
            </p>
            <h1 className="primary-heading">
                Питание — важная часть сбалансированной жизни
            </h1>
            <p className="primary-text">
                Наши блюда готовятся из рисовой, пшеничной или гречневой лапши, с добавлением овощей, мяса, морепродуктов и ароматного бульона.
            </p>
            <p className="primary-text">
                Благодаря разнообразию вкусов и способов приготовления, азиатская лапша завоевала любовь по всему миру.
            </p>
            <div className="about-buttons-container">
                <button className="secondary-button">👉 Узнать больше</button>
                <button className="watch-video-button">
                    {" "}
                    <BsFillPlayCircleFill /> Смотреть видео
                </button>
            </div>
        </div>
    </div>
  )
}

export default About
