import React from "react"

import SpaceOverlay from "../../components/stars/Stars"
import "./about.scss"
import Projects from "../projects/Projects"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1 className="about-header">About HekaTek</h1>
        <div className="about-info">
          {/* Two software developers love design but hate coming up with on our own
          love puzzles and problem solving / working out complex issues - love
          to learn and teach others - we love tackling complex challenges - we
          love the newest tech and learning together javascript, react
          responsive designs and innovative cool shit - interfaces -other tech
          shit woodworking, gaming, plants, algos  */}
          {/* Two software developers who came together with a shared love of
          collaborating in the open source developer community.     
          We are always on the hunt for our next (Project) and
          newest tech.
          tackling complex
          challenges
          In our spare time youll find us practice some algos, gaming or learning a new
          skill. 
          working with clients to enhance their digital presence.  

          driven by the art of building digital spaces that not only meet but also anticipate the needs of your audience. 
          
          
          
          Two software developers who came together with a passion for problem solving and love of front
          
          Whether we're diving into an existing codebase or
          crafting something from scratch, our focus is on developing dynamic,
          responsive, and user-friendly websites. 
          With a love of creating digital environments that resonate with your audience's needs. 
          Keen to explore how we can enhance your digital presence? Feel
          free to get in touch with us below.

      

          # Two Devs, One Mission: Solving Problems, Crafting Solutions 🚀
          **creating a project from scratch**  */}
          We are two software developers whose passions lie in unraveling
          complex challenges and transforming them into opportunities. Whether
          it's revitalizing an existing codebase or innovating from the ground
          up, we provide dynamic, responsive, and intuitively user-friendly
          applications. Driven by the art of building digital spaces that not
          only meet but also anticipate the needs of your audience. When we're
          not coding, you'll find us sharpening our skills with algorithm
          challenges, diving into gaming adventures, or picking up a new hobby.
          It's this continuous pursuit of knowledge that keeps our work fresh
          and exciting. Interested in elevating your online presence? Get in
          touch below. When we're not coding, you'll find us sharpening our
          skills with algorithm challenges, diving into gaming adventures, or
          picking up a new expertise. It's this continuous pursuit of knowledge
          that keeps our work fresh and exciting.
          {/* Whether we're
          diving into an existing codebase or crafting something from scratch,
          our focus is on developing dynamic, responsive, and user-friendly
          websites. We don't just build websites; we create digital environments
          that resonate with your audience's needs. We are passionate about
          crafting responsive designs, user-friendly interfaces, and innovative
          solutions, catering to a diverse range of needs – from small startups
          to large enterprises. */}
        </div>
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
