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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel alias
            voluptatibus asperiores optio, assumenda nisi! Provident quae vel,
            ipsum, laboriosam et soluta unde illum dolore, ratione in
            consequuntur? Voluptatum aut nesciunt expedita culpa est asperiores
            quasi totam quas assumenda eligendi.
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
