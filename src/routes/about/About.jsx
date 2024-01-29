import React from "react"
// import { useSpring, animated, useInView, useScroll } from "@react-spring/web"
import Sparkles from "../../components/sparkles/Sparkles"
import SpaceOverlay from "../../components/stars/Stars"
import TechServices from "../../components/tech-services/Tech-services"
import ThreeDeeText from "../../components/3d-text/3d-text"
import "./about.scss"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-row">
        <div className="about-info">
          <div className="about-header">About Us</div>
          We are two software developers whose passions lie in unraveling
          complex challenges and transforming them into opportunities. Whether
          it's revitalizing an existing codebase or innovating from the ground
          up, we provide dynamic, responsive, and intuitively user-friendly
          applications. Driven by the art of building digital spaces that not
          only meet but anticipate the needs of your audience. When we're not
          coding, you'll find us sharpening our skills with algorithm
          challenges, diving into gaming adventures, or picking up a new hobby.
          It's this continuous pursuit of knowledge that keeps our work fresh
          and exciting. Interested in elevating your online presence? Get in
          touch below.
        </div>
        <div className="about-services">
          <div className="tech-overlay">
            <TechServices />
          </div>

          <div className="about-glass">
            <div className="sparkle-overlay">
              <Sparkles />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

// const [ref, inView] = useInView({ threshold: 0.33, once: true })
// const [ref2, inView2] = useInView({ threshold: 0.66, once: true })
// const [ref3, inView3] = useInView({ threshold: 1, once: true })

// const text1 = useSpring({
//   opacity: inView ? 1 : 0,
//   // transform: inView ? "translate3d(0,0px,0)" : "translate3d(-100%,0,0)",
//   config: { duration: 1000 },
//   reset: true,
// })
// const text2 = useSpring({
//   opacity: inView2 ? 1 : 0,
//   // transform: inView2 ? "translate3d(0,0px,0)" : "translate3d(100%,0,0)",
//   config: { duration: 1000 },
//   reset: true,
// })

// const text3 = useSpring({
//   opacity: inView3 ? 1 : 0,
//   // transform: inView ? "translate3d(0,0px,0)" : "translate3d(-100%,0,0)",
//   config: { duration: 1000 },
//   reset: true,
// })
