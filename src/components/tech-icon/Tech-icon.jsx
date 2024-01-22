import React from "react"
import "./tech-icon.scss"

const TechIcon = ({ svgPath, altText }) => {
  return (
    <div className="tech-icon">
      <img src={svgPath} alt={altText} className="icon-svg" />
    </div>
  )
}

export default TechIcon
