import React from "react"
import TechIcon from "../../components/tech-icon/Tech-icon"

import { FaReact, FaNodeJs, FaCss3, FaHtml5, FaSass } from "react-icons/fa6"
import { DiJavascript } from "react-icons/di"
import { SiMongodb, SiExpress } from "react-icons/si"

import "./about.scss"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1 className="about-header">Who We Are</h1>
        <div className="about-info">
          <div className="icon"></div>
          We came together creating open source developer tools, driven by a
          shared passion for community. Our objective is clear: to transform
          your digital interfaces into engaging, efficient, and aesthetically
          pleasing experiences. We specialize in crafting responsive designs,
          user-friendly interfaces, and innovative solutions, catering to a
          diverse range of needs – from small startups to large enterprises.
          It’s not just about coding; it’s about crafting experiences that
          resonate with your audience. Keen to explore how we can enhance your
          digital presence? Feel free to get in touch with us below.
        </div>
      </div>
      {/* <div className="about-services">
        <TechIcon iconColor="#05829b" iconText="React">
          <FaReact />
        </TechIcon>

        <TechIcon iconColor="purple" iconText="Node">
          <FaNodeJs />
        </TechIcon>
        <TechIcon iconColor="#1e2eda" iconText="CSS">
          <FaCss3 />
        </TechIcon>
        <TechIcon iconColor=" #dac71e" iconText="Javascript">
          <DiJavascript />
        </TechIcon>
        <TechIcon iconColor="#15a73c" iconText="MongoDB">
          <SiMongodb />
        </TechIcon>
        <TechIcon iconColor="#db7226" iconText="HTML">
          <FaHtml5 />
        </TechIcon>
        <TechIcon iconColor="#fff" iconText="Express">
          <SiExpress />
        </TechIcon>
        <TechIcon iconColor="#c65394" iconText="Express">
          <FaSass />
        </TechIcon>
      </div> */}
    </div>
  )
}

export default About
