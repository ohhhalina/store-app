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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda error minima suscipit voluptate harum quia esse incidunt accusantium, dicta rerum, accusamus amet, ipsam necessitatibus omnis natus ab explicabo blanditiis. Earum?
            </p>
            <p className="primary-text">
                Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
            </p>
            <div className="about-buttons-container">
                <button className="secondary-button">Learn more</button>
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
