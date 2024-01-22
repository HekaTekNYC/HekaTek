import React from "react"
import "./tech-icon.scss"

const TechIcon = ({ svgPath, altText, className }) => {
  const iconClassName = className ? className : "icon-svg"
  return (
    <div className="tech-icon">
      <img src={svgPath} alt={altText} className={iconClassName} />
    </div>
  )
}

export default TechIcon
