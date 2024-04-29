import React from "react"
import {
  firstRowIcons,
  secondRowIcons,
  thirdRowIcons,
  fourthRowIcons,
} from "../../data/TechData"
import Button from "../../components/button/Button"
import HexagonIcon from "../../components/hexagon-icon/HexagonIcon"

import WhyBkrnd from "../../assets/images/why-gradient.png"

import "./why-us.scss"

const WhyUs = () => {
  const renderIcons = (icons) => (
    <>
      {icons.map((icon, index) => (
        <HexagonIcon
          icon={icon}
          key={`icon-${index}`}
          loading="lazy"
          decoding="async"
        />
      ))}
    </>
  )
  return (
    <div className="why-us-container">
      <div className="tech-stack-container">
        <div className="why-us-bkrnd">
          <img src={WhyBkrnd} alt="gradient blur colored blob" />
        </div>
        <div className="tech-icons-container">
          <div className="tech-row-1">{renderIcons(firstRowIcons)}</div>
          <div className="tech-row-2">{renderIcons(secondRowIcons)}</div>
          <div className="tech-row-3">{renderIcons(thirdRowIcons)}</div>
          <div className="tech-row-4">{renderIcons(fourthRowIcons)}</div>
        </div>
      </div>
      <div className="why-info-container">
        <h2 className="why-header">
          Why <br /> HekaTek
        </h2>

        <h4 className="why-subheader">
          We view each project as a partnership and go beyond just meeting
          requirements.
        </h4>
        <p className="why-p">
          Our team invests time to understand your vision and goals, ensuring
          that every solution is not only effective but also a strategic asset
          to your business. Trust us to elevate your digital presence. Our
          proven track record of successful projects and satisfied clients
          speaks volumes of our ability to deliver exceptional results, no
          matter the scale or complexity of the project.
        </p>
        <Button
          text={"Schedule A Meeting"}
          scrollToId={"contact"}
          onClick={() => scrollToSection("contact")}
          btnType={"solid"}
          width={"short"}
        />
      </div>
    </div>
  )
}

export default WhyUs
