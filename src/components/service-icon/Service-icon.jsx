import React from "react"
import "./service-icon.scss"

const ServiceIcon = ({ svgPath, altText, className }) => {
  const iconClassName = className ? className : "service-icon-svg"
  return (
    <div className="service-icon">
      <img src={svgPath} alt={altText} className={iconClassName} loading="lazy" decoding="async"/>
    </div>
  )
}

export default ServiceIcon
