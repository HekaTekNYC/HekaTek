import ContactForm from "../../components/contact-form/ContactForm"
import ContactBlob from "../../assets/images/contact-blob.svg"
import EmailIcon from "../../assets/icons/mail1.svg"
import PhoneIcon from "../../assets/icons/phone.svg"
import PinIcon from "../../assets/icons/map-pin2.svg"
import {useCalendlyPopup} from "../../hooks/useCalendlyPopup"

import "./contact-page.scss"

const ContactPage = () => {
  const openCalendlyPopup = useCalendlyPopup()
  return (
    <>
      <div className="contact-page">
        <div className="contact-page-container">
          <div className="contact-page-info">
            <h2 className="h2-heading">Get In Touch</h2>
            <p>
              Get in touch with us for a no-hassle, 100% free consultation. You
              don't need to have your video camera on — our goal is to make you
              comfortable. We can meet to discuss your pain points and address
              any questions you may have. Reach out today and let us help you
              find the best solutions for your business.
            </p>
            <div className="contact-list">
              <div className="contact-detail-items">
                <div className="contact-icon-container">
                  <img src={PhoneIcon} alt="Phone Icon" />
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
                  <img src={EmailIcon} alt="Email Icon" />
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
              />
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage
