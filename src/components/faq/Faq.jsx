import React, {useState, useEffect, useRef} from "react"

import Button from "../../components/button/Button"
import {PricingData, WebsiteData, PlansData} from "../../data/FaqsData"

import "./FAQ.scss"

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("Pricing & Payments")

  const faqData = [...PricingData, ...WebsiteData, ...PlansData]
  const categories = [...new Set(faqData.map(faq => faq.category))]
  const filteredFaqs = faqData.filter(faq => faq.category === selectedCategory)

  const faqContainerRef = useRef(null)

  const handleToggle = index => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index))
  }

  const handleClickOutside = event => {
    if (
      faqContainerRef.current &&
      !faqContainerRef.current.contains(event.target)
    ) {
      setOpenIndex(null)
    }
  }

  const handleCategoryChange = category => {
    setOpenIndex(null)
    setSelectedCategory(category)
  }

  useEffect(() => {
    if (!selectedCategory && categories.length > 0) {
      setSelectedCategory(categories[0])
    }
  }, [categories, selectedCategory])

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="faq-container" ref={faqContainerRef}>
      <div className="faq-categories">
        {categories.map(category => {
          const isActive = selectedCategory === category
          return (
            <Button
              key={category}
              text={category}
              width="full"
              active={isActive}
              btnType={isActive ? "solid" : "outline"}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Button>
          )
        })}
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
              <div
                className={`faq-toggle-icon ${
                  openIndex === index ? "rotate" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  x="0px"
                  y="0px"
                  height="20"
                  width="20"
                  fill={openIndex === index ? "#ffffff" : "#444d82"}
                >
                  <g>
                    <path d="M19,9.5a.49842.49842,0,0,1-.14648.35352l-6.5,6.5a.49983.49983,0,0,1-.707,0l-6.5-6.5a.5.5,0,0,1,.707-.707L12,15.293l6.14648-6.14649A.5.5,0,0,1,19,9.5Z" />
                  </g>
                </svg>
              </div>
            </div>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
