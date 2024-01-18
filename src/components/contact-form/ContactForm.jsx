import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { Modal, Button, Form, Row, Col } from "react-bootstrap"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import "./ContactForm.scss"

const ContactForm = () => {
  const form = useRef()
  const [openModal, setOpenModal] = useState(false)
  const [errorModal, setErrorModal] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    // Validate form fields
    const firstName = form.current.from_first_name.value
    const lastName = form.current.from_last_name.value
    const email = form.current.from_email.value
    const message = form.current.message.value

    if (!name || !email || !message || !isValidEmail(email)) {
      setErrorModal(true)
      return
    }

    emailjs
      .sendForm(
        "service_sxi7pdp",
        "template_rbn6s28",
        form.current,
        "3M9sCaTmKUO1g2SRA"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result)
          setOpenModal(true)
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
      <div className="form-container">
        <h6>Contact Us</h6>

        <Form ref={form} onSubmit={sendEmail}>
          <Row>
            <Form.Group
              size="sm"
              as={Col}
              controlId="formGridFirstName"
              className=""
            >
              <FloatingLabel
                controlId="floatingInput"
                label="First Name"
                className="mb-3 mb-3 "
              >
                <Form.Control
                  type="text"
                  required
                  autoFocus
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
                  autoFocus
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
                autoFocus
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3">
            {/* <Form.Label>Message</Form.Label> */}
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
      <Modal show={openModal} onHide={() => setOpenModal(false)}>
        <Modal.Body>
          <p>
            Thank you for submitting your message. We will get back to you
            within 24-48 hours.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setOpenModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={errorModal} onHide={() => setErrorModal(false)}>
        <Modal.Body>
          <p>Please fill in all required fields before submitting the form.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setErrorModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ContactForm
