import React from "react"
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
          why <br /> HekaTek
        </h2>

        <h5 className="why-subheader">
          We're a duo of software developers who find joy in decluttering
          digital messes, turning complexity into simplicity.
        </h5>
        <p className="why-p">
          Our code is clean, our interfaces seamless, and our applications are
          so intuitive, they practically read your mind. Off the clock, you'll
          find us digging into algorithms, getting lost in games or cultivating
          the art of indoor plant whispering (they say the secret is in the
          coding lullabies). Ready to give your online presence a sprinkle of
          our HekaTek magic? Hit us up/contact us below.
        </p>

        <Button
          text={"Schedule A Meeting"}
          href={""}
          btnType={"solid"}
          width={"short"}
        />
      </div>
    </div>
  )
}

export default WhyUs
