import React from "react"
import Sass from "../../assets/icons/sass.svg"
import "./hexagon-icon.scss"

const HexagonIcon = ({ icon }) => {
  return (
    <>
      <div className="turning-wrapper">
        <div className="hexagon-wrapper">
          <div className="hexagon">
            <div className="icon-wrapper"></div>
            <img src={icon.src} alt={icon.alt} />
          </div>
        </div>
      </div>
    </>
  )
}

export default HexagonIcon
