import ContactForm from "../../components/contact-form/ContactForm"
import {useCalendlyPopup} from "../../hooks/useCalendlyPopup"

import ContactBlob from "../../assets/images/contact-blob.svg"
import EmailIcon from "../../assets/icons/mail1.svg"
import PhoneIcon from "../../assets/icons/phone.svg"
import PinIcon from "../../assets/icons/map-pin2.svg"

import "./contact-page.scss"

const ContactPage = () => {
  const openCalendlyPopup = useCalendlyPopup()
  return (
    <>
      <div id="contact" className="contact-page">
        <div className="contact-page-container">
          <h2 className="contact-header">CONTACT US</h2>
          <div className="contact-page-subsection">
            <div className="contact-page-info">
              <div className="contact-page-header">
                <h2 className="h2-heading">GET IN TOUCH</h2>
                <p>
                  Get in touch with us for a no-hassle, 100% free consultation.
                  We can meet to discuss your pain points and address any
                  questions you may have. Reach out today and let us help you
                  find the best solutions for your business.
                </p>
              </div>
              <div className="contact-list">
                <div className="contact-detail-items">
                  <div className="contact-icon-container">
                    <img src={PhoneIcon} alt="Phone Icon" aria-hidden="true" />
                  </div>
                  <div className="contact-details">
                    <h3 className="contact-h3">PHONE</h3>
                    <p>
                      <a href="tel:9174262472">917.426.2472</a>
                    </p>
                  </div>
                </div>
                <div className="contact-detail-items">
                  <div className="contact-icon-container">
                    <img src={EmailIcon} alt="Email Icon" aria-hidden="true" />
                  </div>
                  <div className="contact-details ">
                    <h3 className="contact-h3">EMAIL</h3>
                    <p>
                      <a href="mailto:hekatek@hekateknyc.com">
                        hekatek@hekateknyc.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="contact-detail-items">
                  <div className="contact-icon-container">
                    <img
                      src={PinIcon}
                      alt="Location Icon"
                      className="contact-pin"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="contact-details">
                    <h3 className="contact-h3">GET STARTED TODAY</h3>
                    <p className="contact-book">
                      <a
                        href="#"
                        onClick={e => {
                          e.preventDefault()
                          openCalendlyPopup()
                        }}
                      >
                        Click here to book a 30-minute call with our team
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-page-form-container">
              <div className="contact-page-blob">
                <img
                  src={ContactBlob}
                  alt="gradient blurred shape"
                  loading="lazy"
                  crossOrigin="anonymous"
                  aria-hidden="true"
                />
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage
