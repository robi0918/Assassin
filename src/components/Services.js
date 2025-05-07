import React from 'react';
import "../styles/Services.css"
import {IoGameController} from "react-icons/io5"
import {BiCodeAlt, } from "react-icons/bi"
import { motion } from "framer-motion";

const Services = () => {

   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }

  return (
      <>
          <div className="services" id='services'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className="heading-sub-text">What I can do</p>
                    <p className='heading-text'>Services</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                <div className="services-card">
                        <IoGameController className='services-icon' />
                        <p className='services-title'>Game Development</p>
                        <p className='services-desc'>I use Unity to develop engaging, immersive, interactive, optimized, and visually appealing gameplay experiences for mobile, PC, and console platforms.</p>
                    </div>
                    <div className="services-card">
                        <BiCodeAlt className='services-icon' />
                        <p className='services-title'>dApps Development</p>
                        <p className='services-desc'>I use modern blockchain technologies to build secure, transparent, decentralized, efficient, and scalable smart contract-based applications and systems.</p>
                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Services;
