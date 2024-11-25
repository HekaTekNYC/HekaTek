import React from "react"
import Award from "../../assets/icons/award.svg"
import Button from "../../components/button/Button"
import Star from "../../assets/icons/trophy.svg"
import Icon8 from "../../assets/icons/icons8-award-85.png"
// import Star from "../../assets/icons/color-trophy.svg"
import CoralCheckIcon from "../../assets/icons/coral-check.svg"
import WireframeImg from "../../assets/images/code-vert.jpg"
import CodeSm from "../../assets/images/code-vert-sm.png"
import {useCalendlyPopup} from "../../hooks/useCalendlyPopup"
import "./why-choose-us.scss"

const WhyChooseUs = () => {
  const openCalendlyPopup = useCalendlyPopup()
  return (
    <div className="choose-us">
      {/* Left Column */}
      <div className="choose-us-info">
        <h2 className="h2-heading">Redefine Your Digital Presence</h2>
        <p>
          At HekaTek, we create fully custom websites tailored to your
          business's unique needs. Built from the ground up, our sites
          prioritize speed, functionality, and a seamless user experience that
          reflects your brand’s identity. We also provide ongoing hosting and
          maintenance to keep your site secure and up-to-date. Whether you’re
          starting fresh or need a redesign, we’re here to help your business
          succeed online.
        </p>

        {/* Benefits List */}
        <ul className="choose-us-benefits">
          <li>
            <img src={CoralCheckIcon} alt="Checkmark" className="check-icon" />
            Custom-coded websites built without page builders for top
            performance.
          </li>
          <li>
            <img src={CoralCheckIcon} alt="Checkmark" className="check-icon" />
            Designed with SEO best practices to enhance visibility.
          </li>
          <li>
            <img src={CoralCheckIcon} alt="Checkmark" className="check-icon" />{" "}
            Clear, transparent pricing—no hidden costs.
          </li>
        </ul>
        <Button
          text={"Schedule a Meeting"}
          onClick={openCalendlyPopup}
          btnType={"solid"}
          width={"short"}
        />
      </div>

      {/* Right Column */}
      <div className="choose-us-right">
        <div className="choose-us-image">
          <img src={CodeSm} alt="Cleaning agency services" />
        </div>

        <div className="years-experience">
          <img src={Award} alt="Trophy icon" className="trophy-icon" />
          <div className="years-experience-text">
            <span className="years">12+</span>
            <p>Years Experiences</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
