import ContactForm from "../../components/contact-form/ContactForm"
import {useCalendlyPopup} from "../../hooks/useCalendlyPopup"

import ContactCard from "../../components/contact-card/ContactCard"
import ContactBlob from "../../assets/images/contact-blob.svg"
import EmailIcon from "../../assets/icons/mail1.svg"
import PhoneIcon from "../../assets/icons/phone.svg"
import PinIcon from "../../assets/icons/map-pin2.svg"
import CalendarIcon from "../../assets/icons/calendar.svg"
import VideoIcon from "../../assets/icons/video.svg"
import CallIcon from "../../assets/icons/phone-wht.svg"

import "./contact-page.scss"

const ContactPage = () => {
  const openCalendlyPopup = useCalendlyPopup()

  const contactOptions = [
    {
      svgPath: CalendarIcon,
      iconAlt: "Calendar icon",
      title: "Book a Consult",
      desc: "Book a free 30-minute consultation where we’ll review where you’re at and discuss how we can work together to achieve your goals.",
      contactCTA: "Book Your Free Consultation",
      linkType: "calendly",
      linkValue: null,
    },
    {
      svgPath: VideoIcon,
      iconAlt: "Video icon",
      title: "Free Website Audit",
      desc: "We’ll send a personalized video walking through your site with clear, actionable insights to boost design, flow, and performance.",
      contactCTA: "Request Audit",
      linkType: "page",
      linkValue: "/free-audit",
    },
    {
      svgPath: CallIcon,
      iconAlt: "Tools icon",
      title: "Need to Talk Dev?",
      desc: "Already working with us? Give us a call if you’ve got questions or want to check in — we’re happy to hear from you.",
      contactCTA: "Call the Dev Team",
      linkType: "phone",
      linkValue: "9174262472",
    },
  ]
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
                    <h3 className="contact-h3">
                      Based in NYC, Serving the USA
                    </h3>
                    <p>
                      We work with clients nationwide, no matter where you are.
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
          <div className="contact-options">
            {contactOptions.map((item, index) => (
              <div className="contact-cards">
                <ContactCard
                  key={index}
                  svgPath={item.svgPath}
                  iconAlt={item.iconAlt}
                  title={item.title}
                  desc={item.desc}
                  contactCTA={item.contactCTA}
                  linkType={item.linkType}
                  linkValue={item.linkValue}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage
