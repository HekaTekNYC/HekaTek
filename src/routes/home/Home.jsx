import React, { useRef, useState } from "react"
import Hero from "../hero/Hero"
import Products from "../products/Products"
import About from "../about/About"
import Contact from "../contact/Contact"
import Spacepink from "../../assets/images/pink_space.png"
import SparklesOverlay from "../../components/sparkles/Sparkles"
import { Modal, Form, Row, Col } from "react-bootstrap"


import Space from "../../assets/images/space_bussy2.png"

import "./home.scss"

const Home = () => {
  const ref = useRef()

  return (
    <>
      <div>
        <div className="hero-section" id="hero">
  
            <Hero />
     
        </div>
        <div className="bg">
          <div className="another-overlay">
            <div className="content"></div>

            <div className="product-section" id="product">
            
              <Products />
            </div>

            <div className="about-section " id="about">
              <div className="space-layer">
                <img src={Space} alt={"space"} className="fuck" />
              </div>
              <div className="about-layer">
                <About />
              </div>
            </div>

            <div className="contact-section" id="contact">
       
              <Contact />
          
  
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
