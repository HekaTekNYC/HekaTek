import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { Modal, Button, Form } from "react-bootstrap"
import "./ContactForm.scss"

const ContactForm = () => {
  const form = useRef()
  const [openModal, setOpenModal] = useState(false)
  const [errorModal, setErrorModal] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    // Validate form fields
    const name = form.current.from_name.value
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
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Name"
              name="from_name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email"
              name="from_email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              placeholder="Message"
              name="message"
              required
              rows={4}
            />
          </Form.Group>
          <input type="hidden" name="message" />
          <input type="hidden" name="from_name" />
          <input type="hidden" name="from_email" />
          <Button variant="primary" type="submit">
            Submit
          </Button>
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
          <p>
            Please fi in all required fields correctly before submitting the
            form.
          </p>
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
