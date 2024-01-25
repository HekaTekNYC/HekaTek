import React from "react"
import { useSpring, animated, useInView } from "@react-spring/web"
import SpaceOverlay from "../../components/stars/Stars"
import TechServices from "../../components/tech-services/Tech-services"
import "./about.scss"

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.33, once: true })
  const [ref2, inView2] = useInView({ threshold: 0.66, once: true })
  const [ref3, inView3] = useInView({ threshold: 1, once: true })

  const text1 = useSpring({
    opacity: inView ? 1 : 0,
    // transform: inView ? "translate3d(0,0px,0)" : "translate3d(-100%,0,0)",
    config: { duration: 1000 },
    reset: true,
  })
  const text2 = useSpring({
    opacity: inView2 ? 1 : 0,
    // transform: inView2 ? "translate3d(0,0px,0)" : "translate3d(100%,0,0)",
    config: { duration: 1000 },
    reset: true,
  })

  const text3 = useSpring({
    opacity: inView3 ? 1 : 0,
    // transform: inView ? "translate3d(0,0px,0)" : "translate3d(-100%,0,0)",
    config: { duration: 1000 },
    reset: true,
  })

  return (
    <div className="about-container">
      <div className="about-header">About Us</div>
      <div className="about-row">
        <div className="about-info">
          <animated.div ref={ref} style={text1} className="about-text">
            We are two software developers whose passions lie in unraveling
            complex challenges and transforming them into opportunities. Whether
            it's revitalizing an existing codebase or innovating from the ground
            up, we provide dynamic, responsive, and intuitively user-friendly
            applications.
          </animated.div>

          <animated.div ref={ref2} style={text2} className="about-text">
            Driven by the art of building digital spaces that not only meet but
            anticipate the needs of your audience. When we're not coding, you'll
            find us sharpening our skills with algorithm challenges, diving into
            gaming adventures, or picking up a new hobby.
          </animated.div>

          <animated.div ref={ref3} style={text3} className="about-text">
            It's this continuous pursuit of knowledge that keeps our work fresh
            and exciting. Interested in elevating your online presence? Get in
            touch below.
          </animated.div>
        </div>

        <div className="about-services">
          <TechServices />
          {/* <div className="star-overlay">
            <SpaceOverlay />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default About
