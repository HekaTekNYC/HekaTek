import React from "react"
import ContactForm from "../../components/contact-form/ContactForm"
import BkgImage from '../../assets/images/119.jpeg';
import "./contact.scss"

const Contact = () => {

  return (
    <>
      <div className="contact-container" >
        <div className="contact-form-layer">
          <ContactForm />
        </div>
      </div>
    </>
  )
}

export default Contact
