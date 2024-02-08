import React from "react"
import ContactForm from "../../components/contact-form/ContactForm"

import "./contact.scss"

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="nebula-container">
          <div className="nebula-overlay"></div>
          <img
            // src="https://i.ibb.co/QK5HXqF/Adobe-Stock-631222921-Preview.png"
            // src="../../assets/images/spac"
            // src="https://i.ibb.co/XDjBqDh/Adobe-Stock-699813980-Preview.png"
            // src="https://i.ibb.co/MgcmrWJ/Adobe-Stock-716057565-Preview.png"
            // src="https://i.ibb.co/w6C1dhr/Adobe-Stock-631224272-Preview.png"
            // src="https://i.ibb.co/PZczck8/Adobe-Stock-631222978-Preview.png"
            // src="https://i.ibb.co/WDQ9Fbv/Adobe-Stock-631222920-Preview-1.png"
            // src="https://i.ibb.co/87NSBR6/Adobe-Stock-614749175-Preview.png"
            // src="https://i.ibb.co/0qNwqv4/Adobe-Stock-559904425-Preview.png"
            // src="https://i.ibb.co/NFhd5Pm/Adobe-Stock-631223450-Preview.png"
            alt="nebula"
            className="nebula-layer desaturated-image"
          />
        </div>

        <div className="contact-form-layer">
          <ContactForm />
        </div>
      </div>
    </>
  )
}

export default Contact
{
  /* <animated.div
                style={{ transform: rotate.to((r) => `rotate(${r}deg)`) }}
              >
                <img
                  src="https://i.ibb.co/0qNwqv4/Adobe-Stock-559904425-Preview.png"
                  alt="cosmo"
                />
                {/* <img src={Cosmo} alt="cosmo" /> 
              </animated.div> */
}
