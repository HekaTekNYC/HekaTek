import ContactForm from "../../components/contact-form/ContactForm"
import ContactBlob from "../../assets/images/contact-blob.svg"
// import Phone from "../../assets/"

import "./contact-page.scss"

const Contact = () => {
  return (
    <>
      <div className="contact-us-container">
        <div className="contact-us-info">
          <h2>Get In Touch</h2>
          <p>
            Get in touch with us for a no-hassle, 100% free consultation. You
            don't need to have your video camera on — our goal is to make you
            comfortable. We can meet to discuss your pain points and address any
            questions you may have. Reach out today and let us help you find the
            best solutions for your business.
          </p>
          <div className="contact-details">
            <div className="detail-item">
              <img
                src="../../assets/icons/phone.svg"
                alt="Phone"
                className="icon icon-wrapper"
              />
              <p>+123 456 7890</p>
            </div>
            <div className="detail-item">
              <img
                src="../../assets/icons/mail1.svg"
                alt="Email"
                class="icon icon-wrapper"
              />
              <p>hekatek@hekateknyc.com</p>
            </div>
            <div className="detail-item">
              <img
                src="../../assets/icons/map-pin2.svg"
                alt="Location"
                className="icon icon-wrapper"
              />
              <p>123 Example Street, Brooklyn, NY</p>
            </div>
          </div>
        </div>
        <div className="contact-us-form-container">
          <div className="contact-us-blob">
            <img
              src={ContactBlob}
              alt="gradient blurred shape"
              loading="lazy"
            />
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  )
}

export default Contact
