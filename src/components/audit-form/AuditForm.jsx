import {useState, useEffect, useRef} from "react"
import emailjs from "@emailjs/browser"
import "./audit-form.scss"
import Button from "../button/Button"

const AuditForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({title: "", message: ""})
  const [selectedOption, setSelectedOption] = useState("")
  const dropdownRef = useRef(null)
  const form = useRef()

  const [focusedFields, setFocusedFields] = useState({
    name: false,
    company: false,
    email: false,
    mobile: false,
    website: false,
    referral: false,
  })

  const handleFocus = field =>
    setFocusedFields(prev => ({...prev, [field]: true}))
  const handleBlur = field =>
    setFocusedFields(prev => ({...prev, [field]: false}))

  const handleSelect = option => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const sendEmail = e => {
    e.preventDefault()
    const {from_name, from_email, mobile, website} = form.current

    if (
      !from_name.value.trim() ||
      !from_email.value.trim() ||
      !mobile.value.trim() ||
      !website.value.trim() ||
      !isValidEmail(from_email.value)
    ) {
      setModalContent({
        title: "Oops!",
        message: "Please ensure all required fields are filled out correctly.",
      })
      setShowModal(true)
      return
    }

    emailjs
      .sendForm(
        "service_z5mt0wl",
        "template_05i5woc",
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
          setSelectedOption("")
        },
        error => {
          setModalContent({
            title: "Oops!",
            message: (
              <span>
                Contact form failed to submit. Please email us at{" "}
                <a className="modal-link" href="mailto:hekateknyc@gmail.com">
                  hekateknyc@gmail.com
                </a>
                .
              </span>
            ),
          })
          setShowModal(true)
        }
      )
  }

  return (
    <>
      <div className="audit-form-container">
        <form ref={form} onSubmit={sendEmail} className="audit-form">
          <h3 className="audit-form-header">REQUEST AUDIT</h3>
          <div className="two-input">
            <div className="audit-form-group">
              <label
                htmlFor="name"
                className={focusedFields.name ? "focused" : ""}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                onFocus={() => handleFocus("name")}
                onBlur={() => handleBlur("name")}
                required
              />
            </div>

            <div className="audit-form-group">
              <label
                htmlFor="company"
                className={focusedFields.company ? "focused" : ""}
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                onFocus={() => handleFocus("company")}
                onBlur={() => handleBlur("company")}
              />
            </div>
          </div>
          <div className="two-input">
            <div className="audit-form-group">
              <label
                htmlFor="email"
                className={focusedFields.email ? "focused" : ""}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                onFocus={() => handleFocus("email")}
                onBlur={() => handleBlur("email")}
                required
              />
            </div>

            <div className="audit-form-group">
              <label
                htmlFor="mobile"
                className={focusedFields.mobile ? "focused" : ""}
              >
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                onFocus={() => handleFocus("mobile")}
                onBlur={() => handleBlur("mobile")}
                required
              />
            </div>
          </div>

          <div className="audit-form-group" ref={dropdownRef}>
            <label
              htmlFor="referral"
              className={focusedFields.referral || isOpen ? "focused" : ""}
            >
              How Did You Hear About Us?
            </label>
            <div
              className={`custom-select ${isOpen ? "open" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="selected-option">
                {selectedOption || "Select an option"}
              </div>
              {isOpen && (
                <ul className="select-options">
                  {[
                    "Referral",
                    "Google Search",
                    "Networking Event",
                    "Social Media",
                    "Other",
                  ].map(option => (
                    <li key={option} onClick={() => handleSelect(option)}>
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <input type="hidden" name="referral" value={selectedOption} />
          </div>

          <div className="audit-form-group">
            <label
              htmlFor="website"
              className={focusedFields.website ? "focused" : ""}
            >
              Website Domain
            </label>
            <input
              type="text"
              id="website"
              name="website"
              onFocus={() => handleFocus("website")}
              onBlur={() => handleBlur("website")}
              required
            />
          </div>

          <div className="audit-form-btn">
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
            <p className="modal-message">{modalContent.message}</p>
            <button className="btn-modal" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default AuditForm
