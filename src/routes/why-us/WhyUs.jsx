import React from "react"
import { Link } from "react-router-dom"
import {
  firstRowIcons,
  secondRowIcons,
  thirdRowIcons,
  fourthRowIcons,
} from "../../data/TechData"
import Button from "../../components/button/Button"
import ExpressIcon from "../../assets/icons/express.svg"
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
  // const scrollToSection = (sectionId) => {
  //   document.getElementById(contact)?.scrollIntoView({ behavior: "smooth" })
  // }
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

        <h5 className="why-subheader">
          We view each project as a partnership and go beyond just meeting
          requirements.
        </h5>
        <p className="why-p">
          Our team invests time to understand your vision and goals, ensuring
          that every solution is not only effective but also a strategic asset
          to your business. Trust us to elevate your digital presence. Our
          proven track record of successful projects and satisfied clients
          speaks volumes of our ability to deliver exceptional results, no
          matter the scale or complexity of the project. Our team dedicates time
          to fully understand your vision and goals, ensuring every solution we
          deliver not only meets your needs but also becomes a strategic asset
          to your business. Trust in our ability to elevate your digital
          presence. With a proven track record of successful projects and
          satisfied clients, we demonstrate our capacity to achieve exceptional
          results, regardless of the project's scale or complexity.
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
