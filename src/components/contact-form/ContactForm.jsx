import React, {useRef, useState} from "react"
import emailjs from "@emailjs/browser"

import Button from "../button/Button"

import "./contact-form.scss"

const ContactForm = () => {
  const form = useRef()
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({title: "", message: ""})
  const [firstNameFocused, setFirstNameFocused] = useState(false)
  const [lastNameFocused, setLastNameFocused] = useState(false)
  const [emailFocused, setEmailFocused] = useState(false)
  const [messageFocused, setMessageFocused] = useState(false)

  const handleFocus = field => {
    switch (field) {
      case "firstName":
        setFirstNameFocused(true)
        break
      case "lastName":
        setLastNameFocused(true)
        break
      case "email":
        setEmailFocused(true)
        break
      case "message":
        setMessageFocused(true)
        break
      default:
        break
    }
  }

  const handleBlur = field => {
    switch (field) {
      case "firstName":
        setFirstNameFocused(false)
        break
      case "lastName":
        setLastNameFocused(false)
        break
      case "email":
        setEmailFocused(false)
        break
      case "message":
        setMessageFocused(false)
        break
      default:
        break
    }
  }

  const sendEmail = e => {
    e.preventDefault()

    const firstName = form.current.from_name.value
    const lastName = form.current.from_last_name.value
    const email = form.current.from_email.value
    const message = form.current.message.value
    console.log("Setting modal content:", {
      title: "Error",
      message: "Please ensure all fields are filled out correctly.",
    })

    if (!firstName || !lastName || !email || !message || !isValidEmail(email)) {
      setModalContent({
        title: "Oops!",
        message: "Please ensure all fields are filled out correctly.",
      })
      setShowModal(true)
      return
    }

    emailjs
      .sendForm(
        "service_k3llmpr",
        "template_333qtvl",
        form.current,
        "3M9sCaTmKUO1g2SRA"
      )
      .then(
        result => {
          setModalContent({
            title: "Message Sent!",
            message: "We will get back to you within 48 hours.",
          })
          setShowModal(true)
          form.current.reset()
        },
        error => {
          setModalContent({
            title: "Oops!",
            message: (
              <span>
                Contact form failed to submit. Please feel free to email us at{" "}
                <a className="modal-link" href="mailto:hekateknyc@gmail.com">
                  hekateknyc@gmail.com.
                </a>
              </span>
            ),
          })
          setShowModal(true)
        }
      )
  }

  const isValidEmail = email => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  return (
    <>
      <div className="contact-form-container">
        <form ref={form} onSubmit={sendEmail} className="form">
          <h3 className="contact-form-header">Send a Message</h3>
          <div className="form-group contact-name">
            <div className="first-name">
              <label
                htmlFor="first-name"
                className={firstNameFocused ? "focused" : ""}
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="from_name"
                onFocus={() => handleFocus("firstName")}
                onBlur={() => handleBlur("firstName")}
              />
            </div>
            <div className="last-name">
              <label
                htmlFor="last-name"
                className={lastNameFocused ? "focused" : ""}
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="from_last_name"
                onFocus={() => handleFocus("lastName")}
                onBlur={() => handleBlur("lastName")}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email" className={emailFocused ? "focused" : ""}>
              Email
            </label>
            <input
              type="text"
              id="email"
              name="from_email"
              onFocus={() => handleFocus("email")}
              onBlur={() => handleBlur("email")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="msg" className={messageFocused ? "focused" : ""}>
              Message
            </label>
            <textarea
              id="msg"
              name="message"
              onFocus={() => handleFocus("message")}
              onBlur={() => handleBlur("message")}
            ></textarea>
          </div>

          <div className="contact-form-btn">
            <Button
              text={"Submit"}
              btnType={"solid"}
              type={"submit"}
              width={"short"}
            />
          </div>
        </form>
      </div>
      {showModal && (
        <div className="modal-background" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h4>{modalContent.title}</h4>
            <p className="modal-message">
              {modalContent.message || "Default message"}
            </p>
            <button
              className="btn-modal"
              type={"submit"}
              onClick={() => {
                console.log("Close button clicked")
                setShowModal(false)
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ContactForm
