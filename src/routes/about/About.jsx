import React from "react"
import { useSpring, animated, useInView } from "@react-spring/web"
import SpaceOverlay from "../../components/stars/Stars"
import "./about.scss"
// import Projects from "../projects/Projects"

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.33 }) // Trigger when first 1/3 of screen is visible
  const [ref2, inView2] = useInView({ threshold: 0.66 }) // Trigger when 2/3 of screen is visible
  const [ref3, inView3] = useInView({ threshold: 1 }) // Trigger when the last 1/3 is visible on screen
  const [ref4, inView4] = useInView({ threshold: 0.5 }) // Trigger when 50% is visible

  // const text1 = useSpring({
  //   opacity: inView ? 1 : 0,
  //   transform: inView ? "translate3d(0,0px,0)" : "translate3d(0,40px,0)",
  //   config: { duration: 1000 },
  // })
  // const text2 = useSpring({
  //   opacity: inView2 ? 1 : 0,
  //   transform: inView2 ? "translate3d(0,0px,0)" : "translate3d(0,40px,0)",
  //   config: { duration: 1000 },
  // })
  const text1 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translate3d(0,0px,0)" : "translate3d(-100%,0,0)",
    config: { duration: 1000 },
  })
  const text2 = useSpring({
    opacity: inView2 ? 1 : 0,
    transform: inView2 ? "translate3d(0,0px,0)" : "translate3d(100%,0,0)",
    config: { duration: 1000 },
  })
  const text3 = useSpring({
    opacity: inView3 ? 1 : 0,
    transform: inView3 ? "translate3d(0,0px,0)" : "translate3d(-100%,0,0)",
    config: { duration: 1000 },
  })
  // const text1 = useSpring({
  //   opacity: inView ? 1 : 0,
  //   transform: inView ? "translate3d(0,0px,0)" : "translate3d(-100%,0,0)",
  //   config: { duration: 1000 },
  // })
  // const text2 = useSpring({
  //   opacity: inView2 ? 1 : 0,
  //   transform: inView2 ? "translate3d(0,0px,0)" : "translate3d(100%,0,0)",
  //   config: { duration: 1000 },
  // })

  // const text3 = useSpring({
  //   opacity: inView3 ? 1 : 0,
  //   transform: inView3 ? "translate3d(0,0px,0)" : "translate3d(0,40px,0)",
  //   config: { duration: 1000 },
  // })
  const text4 = useSpring({
    opacity: inView4 ? 1 : 0,
    transform: inView4 ? "translate3d(0,0px,0)" : "translate3d(0,40px,0)",
    config: { duration: 1000 },
  })

  return (
    <div className="about-container">
      <div className="about-header">
        <animated.div ref={ref} style={text1}>
          <h1 className="about-header-text">About HekaTek</h1>
        </animated.div>
      </div>

      <div className="about-info">
        <animated.div ref={ref2} style={text1} className="about-text">
          We are two software developers whose passions lie in unraveling
          complex challenges and transforming them into opportunities. Whether
          it's revitalizing an existing codebase or innovating from the ground
          up, we provide dynamic, responsive, and intuitively user-friendly
          applications.
        </animated.div>
        <animated.div ref={ref3} style={text2} className="about-text">
          Driven by the art of building digital spaces that not only meet, but
          anticipate the needs of your audience. When we're not coding, you'll
          find us sharpening our skills with algorithm challenges, diving into
          gaming adventures, or picking up a new hobby.
        </animated.div>
        <animated.div ref={ref4} style={text3} className="about-text">
          It's this continuous pursuit of knowledge that keeps our work fresh
          and exciting. Interested in elevating your online presence? Get in
          touch below. When we're not coding, you'll find us sharpening our
          skills with algorithm challenges, diving into gaming adventures, or
          picking up a new expertise. It's this continuous pursuit of knowledge
          that keeps our work fresh and exciting.
        </animated.div>
      </div>

      <div className="about-services">
        <div className="star-overlay">
          <SpaceOverlay />
        </div>
      </div>
    </div>
  )
}

export default About
