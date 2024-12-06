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

  // Ref to detect clicks outside
  const faqContainerRef = useRef(null)

  // Toggle FAQ open/close
  const handleToggle = index => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index))
  }

  // Close FAQ on clicking outside
  const handleClickOutside = event => {
    if (
      faqContainerRef.current &&
      !faqContainerRef.current.contains(event.target)
    ) {
      setOpenIndex(null) // Close the FAQ if clicking outside
    }
  }

  // Handle category button clicks
  const handleCategoryChange = category => {
    setOpenIndex(null) // Close the currently open FAQ
    setSelectedCategory(category) // Switch to the selected category
  }
  //Handle Outside Clicks!!
  const handleClickOUtside = event => {
    if (
      faqContainerRef.current &&
      !faqContainerRef.current.contains(event.target)
    ) {
      setOpenIndex(null)
    }
  }

  useEffect(() => {
    if (!selectedCategory && categories.length > 0) {
      setSelectedCategory(categories[0])
    }
  }, [categories, selectedCategory])

  // Attach and detach event listener for outside clicks
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="faq-container" ref={faqContainerRef}>
      <div className="faq-categories">
        {categories.map(category => (
          <Button
            key={category}
            text={category}
            active={selectedCategory === category}
            btnType={selectedCategory === category ? "solid" : "outline"}
            onClick={() => handleCategoryChange(category)} // Updated to close FAQ
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
                  <title>_</title>
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
