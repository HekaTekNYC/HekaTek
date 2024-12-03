import React, {useState} from "react"
import CaretIcon from "../../assets/icons/caret.svg"
import Button from "../../components/button/Button"
import {PricingData, WebsiteData, PlansData} from "../../data/FaqsData"
import "./FAQ.scss"

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const faqData = [...PricingData, ...WebsiteData, ...PlansData]

  const categories = [...new Set(faqData.map(faq => faq.category))]
  const filteredFaqs = faqData.filter(faq =>
    selectedCategory === "All" ? true : faq.category === selectedCategory
  )

  const handleToggle = index => {
    setOpenIndex(openIndex === index ? null : index) // Toggle open/close
  }

  return (
    <div className="faq-container">
      {/* <h1 className="faq-header">Frequently Asked Questions</h1> */}
      <div className="faq-categories">
        {categories.map(category => (
          <Button
            key={category}
            text={category}
            className={`category-button ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="faq-list">
        {filteredFaqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => handleToggle(index)}
          >
            <div className="faq-question">
              <p>{faq.question}</p>
              <img
                height="20"
                width="20"
                src={CaretIcon}
                className={`faq-toggle-icon ${
                  openIndex === index ? "open" : ""
                }`}
              />
            </div>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
export default FAQ
