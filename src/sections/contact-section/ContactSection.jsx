import ContactForm from "../../components/contact-form/ContactForm"
import ContactBlob from "../../assets/images/contact-blob.svg"

import "./contact-section.scss"

const ContactSection = () => {
  return (
    <>
      <div className="contact-us-container">
        <div className="contact-us-info">
          <h2>
            Get In <br /> Touch
          </h2>
          <p>
            Get in touch with us for a no-hassle, 100% free consultation. You
            don't need to have your video camera on — our goal is to make you
            comfortable. We can meet to discuss your pain points and address any
            questions you may have. Reach out today and let us help you find the
            best solutions for your business.
          </p>
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

export default ContactSection
