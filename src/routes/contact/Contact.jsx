import React from "react"
import ContactForm from "../../components/contact-form/ContactForm"
import "./contact.scss"

const Contact = () => {
  return (
    <>
      <div className="contact-container">
            <h2>About</h2>
         <div className="glass-card">
          <div className="about-text">
            <p>
          We're a duo of software developers who find joy in decluttering
          digital messes, turning complexity into simplicity. Our code is clean,
          our interfaces seamless, and our applications are so intuitive, they
          practically read your mind. Off the clock, you'll find us digging into
          algorithms, getting lost in games or cultivating the art of indoor
          plant whispering (they say the secret is in the coding lullabies).
          Ready to give your online presence a sprinkle of our HekaTek magic?
          Contact us below.</p>
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
