import React from "react"
import ContactForm from "../../components/contact-form/ContactForm"
import Blob1 from "../../assets/images/sunset-blob.svg"
import ProductCard from "../../components/product-cards/ProductCard"
import "./contact.scss"

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="blob-container">
          <div className="contact-blob">
            <img
              src={Blob1}
              alt="blob image"
              loading="lazy"
              decoding="async"
              title="blob shape that sits behind the contact container"
            />
          </div>
        </div>

        <h3>Contact</h3>
        <div className="glass-card">
          <div className="about-text">
            <p>
              We're a duo of software developers who find joy in decluttering
              digital messes, turning complexity into simplicity. Our code is
              clean, our interfaces seamless, and our applications are so
              intuitive, they practically read your mind. Off the clock, you'll
              find us digging into algorithms, getting lost in games or
              cultivating the art of indoor plant whispering (they say the
              secret is in the coding lullabies). Ready to give your online
              presence a sprinkle of our HekaTek magic? Contact us below.
            </p>
          </div>

          <div className="contact-info-right">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
