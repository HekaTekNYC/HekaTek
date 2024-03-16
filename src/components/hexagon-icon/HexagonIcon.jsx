import React from "react"

import "./hexagon-icon.scss"

const HexagonIcon = ({ icon }) => {
  return (
    <>
      <div className="turning-wrapper">
        <div className="hexagon-wrapper">
          <div className="hexagon">
            <div className="icon-wrapper"></div>
            <div className="img-logo">
              <img
                src={icon.src}
                alt={icon.alt}
                title="tech stack icons on hexagon shapes"
                loading="lazy"
                decoding="async"
                height="45px"
                width="45px"
              />
              <div className="icon-name">{icon.name}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HexagonIcon
