import React from "react"
import ContactForm from "../../components/contact-form/ContactForm"
import ContactBlob from "../../assets/images/contact-blob.webp"

import "./contact.scss"

const Contact = () => {
  return (
    <>
      <div className="contact-us-container">
        <div className="contact-us-info">
          <h2>
            Get In <br /> Touch
          </h2>
          <p>
            Building a website can be a daunting task, but it doesn't have to
            be. We're here to take the stress out of the equation and craft a
            site you'll love. Ready to get started? Drop us a message and let's
            chat!
          </p>
        </div>
        <div className="contact-us-form-container">
          <div className="contact-us-blob">
            <img src={ContactBlob} alt="gradient blurred shape" />
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  )
}

export default Contact
