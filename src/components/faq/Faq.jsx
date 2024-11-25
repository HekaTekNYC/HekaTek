import React, {useState} from "react"
import CaretIcon from "../../assets/icons/caret.svg"
import Button from "../../components/button/Button"
import "./FAQ.scss"

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const faqData = [
    //pricing & payments
    {
      category: "Pricing & Payments",
      question:
        "What happens if I cancel after the 12 month minimum and want to return?",
      answer: "Simply sign a new 12 month agreement to get started again.",
    },
    {
      category: "Pricing & Payments",
      question: "How long is the subscription commitment?",
      answer:
        "Our plans require an initial 12 month commitment. After completing the first year, the subscription automatically shifts to a month-to-month arrangement, allowing you to cancel anytime. Please note that the website remains our property upon cancellation.",
    },
    {
      category: "Pricing & Payments",
      question: "What happens if I cancel before the 12 months are up?",
      answer:
        "If you end your subscription early, you'll be responsible for covering the remaining balance of the site's total cost ($2,000), minus what you've already paid. Our focus is on building lasting relationships with our clients, and we hope they share the same commitment.",
    },
    {
      category: "Pricing & Payments",
      question: "What is your policy on late payments?",
      answer:
        "We allow a 7-day grace period for all invoices to be paid. If payment isn't received within that time, a $25 late fee is added. For subscription plans, if multiple payments remain overdue for an extended period without resolution, we may cancel the contract, and the client will be responsible for covering the full cost of the site.We understand that life happens, and we're happy to work with you in difficult situations. However, if there's no communication or response to our attempts to resolve the issue, we need to take necessary steps to protect the time and resources we've invested in building your site and ensure fair payment for our work.",
    },
    {
      category: "Pricing & Payments",
      question: "How are payments processed, and which methods are accepted?",
      answer:
        "We send email invoices through PayPal, providing a secure link to enter your payment information. Subscriptions can be paid using a credit or debit card, and we accept all major credit cards. For lump sum projects, we prefer ACH bank transfers to minimize processing fees. Please note that we do not accept checks or money orders.",
    },
    {
      category: "Pricing & Payments",
      question:
        "Is the $100 fee per additional page a one-time charge or monthly?",
      answer:
        "The $100 per additional page is a one-time fee, not a recurring charge. For example, if you need 3 extra pages, the total is $300, and that's it. It's not $300 a month—now that would be outrageous!",
    },
    {
      category: "Pricing & Payments",
      question: "Do you offer refunds?",
      answer:
        "Refunds are provided for unused work based on our hourly rate, excluding a $350 non-refundable design fee if the designer has started work. Refunds will be processed within 15 business days of contract termination.",
    },
    //Plans
    {
      category: "Plans",
      question:
        "After the 12-month minimum, do I continue paying for the subscription?",
      answer:
        "Yes, the subscription continues on a monthly basis after the initial 12-month commitment. It typically takes us 2 years to earn what we would from a lump sum project, so we aim to work with clients for at least 5 years to make the subscription model sustainable. By that time, your website should generate far more than $150 a month in value, essentially paying for itself. We aim for our clients to recognize the value of our continued efforts and choose to keep their subscription active for the long term.",
    },
    {
      category: "Plans",
      question:
        "Is it possible to cancel my subscription after the minimum term and buy out?",
      answer:
        "No, there isn't a buyout option to end the monthly subscription. As mentioned earlier, it typically takes 2 years (including hosting fees) for us to earn what we would from a lump sum payment. We rely on recurring monthly income to provide consistent and reliable service, allowing us to focus on supporting our clients rather than constantly chasing new sales. This structure helps us dedicate more time to client needs—like support calls and updates—so we can deliver a service that stands out from other agencies. If clients frequently bought out their subscriptions, it would disrupt this balance and impact the quality of service we provide.",
    },
    {
      category: "Plans",
      question:
        "Can the lump sum package be customized to include unlimited edits and support?",
      answer:
        "Yes, you can! For an additional $50 per month, we offer unlimited edits and support as a subscription add-on. This requires a 12-month minimum commitment, and it can't be turned on and off intermittently. If you cancel the add-on and wish to reinstate it later, you'll need to sign a new 12-month agreement.",
    },
    {
      category: "Plans",
      question: "How do the lump sum and subscription packages differ?",
      answer:
        "The key difference lies in the cost structure: long-term versus short-term expenses. With the subscription model, you'll pay more over time, but the smaller, manageable monthly payments make it affordable and include ongoing services. On the other hand, the lump sum option involves a one-time upfront payment, saving you money in the long run since you're covering design and development costs all at once.Choosing between the two depends on your cash flow and priorities. If minimizing upfront costs and receiving continuous service is important, the subscription is a great choice. If you'd rather save over time and don't need ongoing services, the lump sum package is ideal.",
    },
    {
      category: "Plans",
      question: "Does your subscription plan include e-commerce websites?",
      answer:
        "Currently, we don't offer e-commerce sites under the subscription plan. E-commerce setups require significantly more work and resources than standard business websites, which is why we're unable to provide them at $150 a month.",
    },
    {
      category: "Plans",
      question: "Will I still own my domain if I cancel my subscription?",
      answer: "Yes, your domain will always be yours to keep. ",
    },
    {
      category: "Plans",
      question: "Can Hekatek work within my budget?",
      answer:
        "We aim to be flexible and accommodate various budget levels, offering scalable solutions tailored to our clients' financial constraints. During our initial consultation, we'll discuss your budget and project requirements to find a viable solution that meets your needs without compromising quality.",
    },
    {
      category: "Plans",
      question: "How do I start a project with Hekatek?",
      answer:
        "Starting a project with us is simple—just reach out through our contact form, and we'll guide you through the process!",
    },
    {
      category: "Plans",
      question: "What services does Hekatek offer?",
      answer:
        "We specialize in custom web development, design, maintenance, and optimization services tailored to meet your needs.",
    },
    {
      category: "Plans",
      question: "How does the process work?",
      answer:
        "Our process involves discovery, specification, design, development, testing, and launch, ensuring transparency and collaboration throughout.",
    },
    {
      category: "Plans",
      question: "Who are your typical clients?",
      answer:
        "We work with small businesses, startups, and entrepreneurs looking for high-quality, custom-built websites.",
    },
    // {
    //   question: "",
    //   answer: "",
    // },
  ]

  const categories = ["All", ...new Set(faqData.map(faq => faq.category))]
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
