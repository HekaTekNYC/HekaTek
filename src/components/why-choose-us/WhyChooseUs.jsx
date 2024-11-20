import React from "react"
import Award from "../../assets/icons/award.svg"
import Star from "../../assets/icons/trophy.svg"
import Icon8 from "../../assets/icons/icons8-award-85.png"
// import Star from "../../assets/icons/color-trophy.svg"
import CoralCheckIcon from "../../assets/icons/coral-check.svg"
import WireframeImg from "../../assets/images/jumbo-wireframe.webp"
import "./why-choose-us.scss"

const WhyChooseUs = () => {
  return (
    <div className="choose-us">
      {/* Left Column */}
      <div className="choose-us-text">
        <h2 className="choose-us-title h2-heading">
          Redefine Your Digital Presence
        </h2>
        <p className="choose-us-description">
          At HekaTek, we create fully custom websites tailored to your
          business's unique needs. Built from the ground up, our sites
          prioritize speed, functionality, and a seamless user experience that
          reflects your brand’s identity. We also provide ongoing hosting and
          maintenance to keep your site secure and up-to-date. Whether you’re
          starting fresh or need a redesign, we’re here to help your business
          succeed online.
        </p>
        {/* <p className="choose-us-description">
          As a web crawling expert, I help organizations adjust to the awesome
          expanding significance of internet marketing. Or lorem ipsum as it is
          sometimes known, is dummy text.
        </p> */}

        {/* Benefits List */}
        <ul className="choose-us-benefits">
          <li>
            <img src={CoralCheckIcon} alt="Checkmark" className="check-icon" />
            Custom Coded high-performance websites, no page builders
          </li>
          <li>
            <img src={CoralCheckIcon} alt="Checkmark" className="check-icon" />
            With years of experience, we deliver high-quality websites that
            combine form and function.
          </li>
          <li>
            <img src={CoralCheckIcon} alt="Checkmark" className="check-icon" />{" "}
            Coded to meet all SEO best practices.
          </li>
        </ul>
      </div>

      {/* Right Column */}
      <div className="choose-us-right">
        <img
          className="choose-us-image"
          src={WireframeImg}
          alt="Cleaning agency services"
        />

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
