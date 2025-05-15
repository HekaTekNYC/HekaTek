import {useCalendlyPopup} from "../../hooks/useCalendlyPopup"
import ArrowIcon from "../../assets/icons/arrow.svg"

import "./contact-card.scss"

const ContactCard = ({
  svgPath,
  iconAlt,
  title,
  desc,
  contactCTA,
  linkType,
  linkValue,
}) => {
  const openCalendlyPopup = useCalendlyPopup()
  const renderLink = () => {
    switch (linkType) {
      case "calendly":
        return (
          <a
            href="#"
            className="contact-cta"
            onClick={e => {
              e.preventDefault()
              openCalendlyPopup()
            }}
          >
            <img src={ArrowIcon} alt="White Arrow Icon" />
            <p>{contactCTA}</p>
          </a>
        )
      case "phone":
        return (
          <a href={`tel:${linkValue}`} className="contact-cta">
            <img src={ArrowIcon} alt="White Arrow Icon" />
            <p>{contactCTA}</p>
          </a>
        )
      case "page":
      default:
        return (
          <a href={linkValue} className="contact-cta">
            <img src={ArrowIcon} alt="White Arrow Icon" />
            <p>{contactCTA}</p>
          </a>
        )
    }
  }
  return (
    <>
      <div className="contact-card">
        <div className="contact-card-header">
          <div className="contact-icon-container">
            <img
              src={svgPath}
              alt={iconAlt}
              width="24px"
              height="24px"
              className="contact-icon"
            />
          </div>
          <h3 className="contact-title">{title}</h3>
        </div>
        <p className="contact-desc">{desc}</p>
        {renderLink()}
      </div>
    </>
  )
}

export default ContactCard
