import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "./ContactForm.scss";

const ContactForm = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false); // Unified modal state
  const [modalContent, setModalContent] = useState({ title: '', message: '' }); // Modal content state

  const sendEmail = (e) => {
    e.preventDefault();

    const firstName = form.current.from_name.value;
    const lastName = form.current.from_last_name.value;
    const email = form.current.from_email.value;
    const message = form.current.message.value;
    console.log('Setting modal content:', { title: 'Error', message: 'Please ensure all fields are filled out correctly.' });

    if (!firstName || !lastName || !email || !message || !isValidEmail(email)) {
      setModalContent({ title: 'Error', message: 'Please ensure all fields are filled out correctly.' });
      setShowModal(true);
      return;
    }

    emailjs.sendForm("service_k3llmpr", "template_333qtvl", form.current, "3M9sCaTmKUO1g2SRA")
      .then(
        (result) => {
          setModalContent({ title: 'Success', message: 'Your message has been successfully sent!' });
          setShowModal(true);
          form.current.reset();
        },
        (error) => {
          setModalContent({ title: 'Error', message: 'Failed to send your message. Please try again later.' });
          setShowModal(true);
        }
      );
  };

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

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
          <Button className="contact-btn" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      {showModal && (
        <div className="modal-background" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h4>{modalContent.title}</h4>
            <p>{modalContent.message || "Default message"}</p>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          </div>
        </div>
      )}
{      console.log('Component re-rendering', modalContent)
}
    </div>
  );
};

export default ContactForm;


