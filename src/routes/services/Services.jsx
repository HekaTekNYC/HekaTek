import React from "react"

import "./services.scss"

const servicesData = [
  {
    name: "WEB DEVELOPMENT",
    svgPath: "../../assets/icons/website.svg",
    description:
      "We offer custom development services tailored to meet your unique needs, leveraging our expertise in various frameworks and JavaScript to create responsive websites.",
  },
  {
    name: "CODE OPTIMIZATION",
    svgPath: "../../assets/icons/solutions.svg",
    description:
      "We review and refine existing codebases, enhancing their efficiency and readability. We focus on optimizing performance and ensuring best practices are followed.",
  },
  {
    name: "DEBUGGING",
    svgPath: "../../assets/icons/bug.svg",
    description:
      "Our passion lies in tackling complex challenges and solving problems. Let's find some bugs and get them out of there!",
  },
  {
    name: "DIGITAL SOLUTIONS",
    svgPath: "../../assets/icons/solutions.svg",
    description:
      "Our range of digital services is custom-fit to your specific needs, ensuring quality and creativity from start to finish, with a keen eye on every detail.",
  },
]

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-section-header">
        <h2>SERVICES</h2>
      </div>
      <div className="services-card">
        {servicesData.map((service, index) => (
          <div key={index} className="service-info">
            <div className="service-icon">
              {" "}
              <img src={service.svgPath} alt={service.alt} />
            </div>
            <h5 className="service-header">{service.name}</h5>
            <div className="service-text">{service.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
