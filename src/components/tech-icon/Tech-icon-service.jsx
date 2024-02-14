import React from "react"
import "./tech-icon-service.scss"

const TechIcon2 = ({ svgPath, altText, className }) => {
  const iconClassName = className ? className : "icon-svg"
  return (
    <div className="tech-icon">
      <img src={svgPath} alt={altText} className={iconClassName} />
    </div>
  )
}

export default TechIcon2
