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
                About
            </p>
            <h1 className="primary-heading">
                Food Is An Important Part Of A Balanced Diet
            </h1>
            <p className="primary-text">
                Noodles are prepared in various ways – boiled, fried, stewed, steamed, added to soups. They use ready-made noodles in hot and cold form. Noodle dishes can taste spicy, sweet, salty, or sour.
            </p>
            <p className="primary-text">
                By the way, the term "kuksu" refers not only to noodles, but also to a dish of the same name. This is a cold soup with boiled noodles, generously flavored with meat, egg and vegetable strips, coriander, garlic and seasoned with soy sauce, vinegar and sesame oil.
            </p>
            <div className="about-buttons-container">
                <button className="secondary-button">👉 Узнать больше</button>
                <button className="watch-video-button">
                    {" "}
                    <BsFillPlayCircleFill /> Watch Video
                </button>
            </div>
        </div>
    </div>
  )
}

export default About
