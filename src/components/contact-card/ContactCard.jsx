import {useCalendlyPopup} from "../../hooks/useCalendlyPopup"
import ArrowIcon from "../../assets/icons/arrow.svg"

import "./contact-card.scss"

const ContactCard = ({svgPath, iconAlt, title, desc, contactCTA}) => {
  const openCalendlyPopup = useCalendlyPopup()
  return (
    <>
      <div className="contact-card">
        <div className="contact-card-header header-text">
          <img src={svgPath} alt={iconAlt} />
          <h3 className="contact-title">{title}</h3>
        </div>
        <p className="contact-desc">{desc}</p>
        <div className="contact-cta">
          <img src={ArrowIcon} alt="White Arrow Icon" />
          <p>{contactCTA}</p>
        </div>
      </div>
    </>
  )
}

export default ContactCard
