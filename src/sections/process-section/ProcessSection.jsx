import {useState} from "react"
import {processSteps} from "../../data/ProcessData.jsx"

import Button from "../../components/button/Button"

import "./process-section.scss"

const ProcessSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="our-process-banner">
      <div className="our-process-section">
        <div className="our-process-header">
          <div className="our-process-info">
            <h2 className="h2-heading">OUR PROCESS, YOUR PEACE OF MIND</h2>
            <p>
              Once the contract is signed, we’ll schedule a meeting to learn
              more about your business and what you do. With this information,
              we’ll craft the content and design for your site. After receiving
              your final approval, we’ll begin building. The entire process
              typically takes 1 - 2 months, depending on the timing of your
              feedback and approvals. This allows us to deliver a smooth,
              thorough, and well-executed development experience.
            </p>
          </div>
          <div className="process-btn">
            <Button
              text={"Contact Us"}
              to="/contact"
              btnType={"solid"}
              width={"short"}
            />
          </div>
        </div>
        <div className="our-process-cards-container">
          {processSteps.map((step, index) => (
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

export default ProcessSection
