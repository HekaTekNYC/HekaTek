import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { Modal, Button, Form, Row, Col } from "react-bootstrap"
import FloatingLabel from "react-bootstrap/FloatingLabel"
// import emailIcon from "../../assets/icons/plane.svg"
import MyModal from '../modal/Modal'
import ErrorModal from '../modal/ErrorModal'
import "./ContactForm.scss"

const ContactForm = () => {
  const form = useRef()
  const [openModal, setOpenModal] = useState(false)
  const [errorModal, setErrorModal] = useState(false)


  const sendEmail = (e) => {
    e.preventDefault()

    // Validate form fields
    const firstName = form.current.from_name.value
    const lastName = form.current.from_last_name.value
    const email = form.current.from_email.value
    const message = form.current.message.value

    if (!firstName || !lastName || !email || !message || !isValidEmail(email)) {
     
      setErrorModal(true)
      return
    }

    emailjs
      .sendForm(
        "service_z5mt0wl",
        "template_333qtvl",
        form.current,
        "3M9sCaTmKUO1g2SRA"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result)
          setOpenModal(true)
        
          form.current.reset()
        },
        (error) => {
          console.error("Email send error:", error)
        }
      )
  }

  const isValidEmail = (email) => {
    // Basic email validation, you can enhance it further
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  return (
    <div className="contact-container">
      <div className="contact-form-container">
        <h6>Contact Us</h6>

        <Form ref={form} onSubmit={sendEmail}>
          <Row>
            <Form.Group size="sm" as={Col} controlId="formGridFirstName">
              <FloatingLabel
                controlId="floatingInput"
                label="First Name"
                className="mb-3 mb-3 "
              >
                <Form.Control
                  type="text"
                  required
                  name="from_name"
                  placeholder="First Name"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLastName">
              <FloatingLabel
                controlId="floatingInput"
                label="Last Name"
                className="mb-3 mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  name="from_last_name"
                />
              </FloatingLabel>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <FloatingLabel controlId="floatingInput" label="Email">
              <Form.Control
                type="email"
                placeholder="Email"
                name="from_email"
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3">
            <FloatingLabel controlId="floatingInput" label="Message">
              <Form.Control
                as="textarea"
                placeholder="Message"
                name="message"
                rows={4}
                style={{ height: "120px" }}
              />
            </FloatingLabel>
          </Form.Group>

          <button className="contact-btn" type="submit">
            Submit
          </button>
        </Form>
      </div>

      <MyModal
        show={openModal}
        onHide={() => setOpenModal(false)}
      />  
       
      <ErrorModal
        show={errorModal}
        onHide={() => setErrorModal(false)}
      />    
    </div>
  )
}

export default ContactForm
