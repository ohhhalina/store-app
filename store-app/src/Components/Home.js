import React, { useState } from 'react'
import Navbar from './Navbar'
import BannerBackground from "../Assets/home-banner-background.png"
import BannerImage from "../Assets/home-banner-image.png"
import { FiArrowRight } from "react-icons/fi"
import { motion } from 'framer-motion'

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className='home-container'>
      <Navbar/> 
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Authentic Asian noodles delivery and pickup
          </h1>
          <p className="primary-text">
            Asian noodles are a traditional dish popular in the cuisines of China, Japan, Korea and other East Asian countries.
          </p>
          <button className="secondary-button" onClick={() => setIsModalOpen(true)}>
            Order Now <FiArrowRight />
            {isModalOpen && (
              <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                  <h3>Modal open</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusantium nemo quos consequuntur quam fugiat aperiam non minus ratione nam harum quibusdam maiores ullam eum sed, reprehenderit, provident cum itaque?</p>
                  <button className="secondary-button" onClick={() => setIsModalOpen(false)}>
                    Закрыть
                  </button>
                </div>
              </div>
            )}
          </button>
        </div>
        <div className="home-image-container">
          {/* <img src={BannerImage} alt="" /> */}
          <motion.img
                      src={BannerImage}
                      alt=""
                      initial={{ x: 200, opacity: 0 }}
                      animate={{ x: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeOut"}}
                      />
        </div>
      </div>
    </div>
  )
}

export default Home
