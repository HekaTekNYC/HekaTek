import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import Button from "../button/Button"

import "./contact-form.scss"

const ContactForm = () => {
  const form = useRef()
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({ title: "", message: "" })
  const [firstNameFocused, setFirstNameFocused] = useState(false)
  const [lastNameFocused, setLastNameFocused] = useState(false)
  const [emailFocused, setEmailFocused] = useState(false)
  const [messageFocused, setMessageFocused] = useState(false)

  const handleFocus = (field) => {
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
  const handleBlur = (field) => {
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

  const sendEmail = (e) => {
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
        title: "Error",
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
        (result) => {
          setModalContent({
            title: "Success",
            message: "Your message has been successfully sent!",
          })
          setShowModal(true)
          form.current.reset()
        },
        (error) => {
          setModalContent({
            title: "Error",
            message: "Failed to send your message. Please try again later.",
          })
          setShowModal(true)
        }
      )
  }

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  return (
    <>
      <div className="contact-form-container">
        <form ref={form} onSubmit={sendEmail} className="form">
          <h3 className="contact-form-header">Contact Us</h3>
          <div className="form-group contact-name">
            <div className="first-name">
              <label
                for="firt-name"
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
                for="last-name"
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
            <label for="email" className={emailFocused ? "focused" : ""}>
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
            <label for="msg" className={messageFocused ? "focused" : ""}>
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
            <Button text={"Submit"} btnType={"solid"} type={"submit"} />
          </div>
        </form>
      </div>
      {showModal && (
        <div className="modal-background" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h4>{modalContent.title}</h4>
            <p>{modalContent.message || "Default message"}</p>

            <Button
              text={Close}
              btnType={"solid"}
              // style={{
              //   display: "block",
              //   marginLeft: "auto",
              //   marginRight: "auto",
              // }}
              onClick={() => setShowModal(false)}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ContactForm

// <div className="contact-form-container">
// <Form ref={form} onSubmit={sendEmail}>
//   <Row>
//     <Form.Group size="sm" as={Col} controlId="formGridFirstName">
//       <FloatingLabel
//         controlId="formGridFirstName"
//         label="First Name"
//         className="mb-3 mb-3 "
//       >
//         <Form.Control
//           type="text"
//           required
//           name="from_name"
//           placeholder="First Name"
//         />
//       </FloatingLabel>
//     </Form.Group>
//     <Form.Group as={Col} controlId="formGridLastName">
//       <FloatingLabel
//         controlId="formGridLastName"
//         label="Last Name"
//         className="mb-3 mb-3"
//       >
//         <Form.Control
//           type="text"
//           placeholder="Last Name"
//           name="from_last_name"
//         />
//       </FloatingLabel>
//     </Form.Group>
//   </Row>
//   <Form.Group className="mb-3">
//     <FloatingLabel controlId="floatingInput" label="Email">
//       <Form.Control
//         type="email"
//         placeholder="Email"
//         name="from_email"
//       />
//     </FloatingLabel>
//   </Form.Group>
//   <Form.Group className="mb-3">
//     <FloatingLabel controlId="floatingInput" label="Message">
//       <Form.Control
//         as="textarea"
//         placeholder="Message"
//         name="message"
//         rows={4}
//         style={{ height: "120px" }}
//       />
//     </FloatingLabel>
//   </Form.Group>
//   <div>
//     <Button text={"Submit"} btnType={"solid"} />
//   </div>
// </Form>
// </div>
// {showModal && (
// <div className="modal-background" onClick={() => setShowModal(false)}>
//   <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//     <h4>{modalContent.title}</h4>
//     <p>{modalContent.message || "Default message"}</p>

//     <Button
//       text={Close}
//       btnType={"solid"}
//       // style={{
//       //   display: "block",
//       //   marginLeft: "auto",
//       //   marginRight: "auto",
//       // }}
//       onClick={() => setShowModal(false)}
//     />
//   </div>
// </div>
// )}
// </>
