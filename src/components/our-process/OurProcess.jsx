import React, {useState} from "react"
import "./our-process.scss"

const OurProcess = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const steps = [
    {
      title: "Consultation",
      description:
        "Begin with a conversation with one of our team who will provide feedback on your current website and understand your objectives for the new one.",
      number: "01",
    },
    {
      title: "Design",
      description:
        "Our website designers will then craft an example website specifically for your small business, tailored to meet your objectives.",
      number: "02",
    },
    {
      title: "Development",
      description:
        "We will create your website using fully custom code, ensuring optimal performance and giving your visitors the perfect view of your business.",
      number: "03",
    },
    {
      title: "Maintenance",
      description:
        "Leave everything to us. We will manage all changes, updates, and maintenance, ensuring your website remains up-to-date and fully functional.",
      number: "04",
    },
  ]

  return (
    <div className="our-process-banner">
      <div className="our-process-section">
        <div className="our-process-header">
          <h2 className="h2-heading">Our Process, Your Peace of Mind</h2>
          <p>
            Once the contract is signed, we’ll schedule a meeting to learn more
            about your business and what you do. With this information, we’ll
            craft the content and design for your site. After receiving your
            final approval, we’ll begin building. The entire process typically
            takes 1 - 2 months, depending on the timing of your feedback and
            approvals. This allows us to deliver a smooth, thorough, and
            well-executed development experience.
          </p>
        </div>
        <div className="our-process-cards-container">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`our-process-card ${
                hoveredIndex !== null && index <= hoveredIndex
                  ? "highlight"
                  : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="process-info-container">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              <div className="process-number-container">
                <p
                  className={`process-number ${
                    hoveredIndex !== null && index <= hoveredIndex
                      ? "filled"
                      : ""
                  }`}
                >
                  {step.number}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurProcess
