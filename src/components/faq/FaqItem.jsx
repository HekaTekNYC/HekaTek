import React, {useState} from "react"
import "./faq-item.scss"

const FaqItem = ({question, answer}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={toggle}>
        {question}
        <span className={isOpen ? "arrow up" : "arrow down"}></span>
      </button>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  )
}

export default FaqItem
