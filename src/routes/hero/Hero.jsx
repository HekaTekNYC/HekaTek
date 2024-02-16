import React from "react"
import { useSpring } from "@react-spring/web"
import ThreeDeeText from "../../components/3d-text/3d-text"

import PlanetSphere from "../../components/planet/Planet"
import SpaceCrag from "../../assets/images/space-crag3.svg"
import Spacepink from "../../assets/images/pink_space2.png"

import "./hero.scss"

const Hero = () => {

  return (
    <div>
      <div className="hero-container">
        <div className="hero-row">

          <div className="hero-left-container">
            <div className="header">
              <div className="hekatek-3d">
                HekaTek
                {/* <ThreeDeeText /> */}
              </div>
              <div className="header-text">
                
                FREELANCERS WITH A PASSION FOR BRINGING YOUR VISION TO LIFE.
              </div>
            </div>
          </div>

          <div className="hero-right-container">
            <div className="galaxy-container">
              <img src="https://i.ibb.co/tqnsT0M/Hero.jpg" alt="galaxy" className="galaxy" />
              <div className="hero-image">
                <PlanetSphere />
              </div>
    
            </div>
         
          </div>
          {/* <div className="cloud-overlay">
         <img src="https://i.ibb.co/xzsbLKv/Cloudframe-Adobe-Stock-701715001-Preview.png" alt='clouds' />      
         </div> */}
        </div>
      </div>
    </div>
  )
}

const ResponsivePlanet = () => {
  const { camera } = useThree()

  const updateCameraPosition = () => {
    const width = window.innerWidth

    if (width >= 1200) {
      camera.position.set(0, 0, 8)
      return 538.215; // Size for 1200px and above
    } else if (width >= 999) {
      camera.position.set(0, 0, 7)
      return 400; // Adjust size for 999px to 1200px
    } else if (width >= 768) {
      camera.position.set(0, 0, 6)
      return 300; // Adjust size for 768px to 999px
    } else if (width >= 600) {
      camera.position.set(0, 0, 5)
      return 200; // Adjust size for 600px to 768px
    } else {
      camera.position.set(0, 0, 4)
      return 150; // Adjust size for below 600px
    }
  }

  // Call updateCameraPosition initially and on window resize
  React.useEffect(() => {
    updateCameraPosition()
    window.addEventListener('resize', updateCameraPosition)
    return () => window.removeEventListener('resize', updateCameraPosition)
  }, [])

  const planetSize = updateCameraPosition(); // Get the size based on initial width

  return <PlanetSphere size={planetSize} />
}

export default Hero
