import {techIcons} from "../../data/TechData"

import "./tech-circle.scss"

const TechCircle = () => {
  return (
    <>
      <div className="tech-circle-container">
        <div className="outer-circle">
          <div className="inner-ring">
            <div className="inner-circle"></div>
          </div>
        </div>
        {techIcons.map((icon, index) => (
          <div key={index} className={`tech-icon ${icon.rail}`}>
            <img
              src={icon.svgPath}
              alt={icon.altText}
              className={icon.techClass}
              loading="lazy"
              decoding="async"
              title="technology stack icon"
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default TechCircle
