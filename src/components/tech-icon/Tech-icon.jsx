import React from "react"
import "./tech-icon.scss"

const TechIcon = ({ children, iconColor, iconText }) => {
  return (
    <div className="icon-container" style={{ color: iconColor }}>
      <div className="icon-svg">{children}</div>

      <div className="icon-text">{iconText}</div>
    </div>
  )
}

export default TechIcon
