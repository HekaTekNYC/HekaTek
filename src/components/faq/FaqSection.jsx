import React from "react"
import FaqItem from "./FaqItem"
import "./faq-section.scss"

const FaqSection = ({faqs}) => {
  return (
    <div className="faq-section">
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  )
}

export default FaqSection
