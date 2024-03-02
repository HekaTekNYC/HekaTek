import React from "react"

import "./services.scss"

const servicesData = [
  {
    name: "WEB DEVELOPMENT",

    svgPath: "../../assets/icons/code1.svg",
    description:
      "We offer custom development services tailored to meet your unique needs, leveraging our expertise in various frameworks and JavaScript to create responsive websites.",
  },
  {
    name: "DEBUGGING",

    svgPath: "../../assets/icons/bug-slash.svg",
    description:
      "Our passion lies in tackling complex challenges and solving problems. Let's find some bugs and get them out of there!",
  },
  {
    name: "DIGITAL SOLUTIONS",

    svgPath: "../../assets/icons/gear2.svg",
    description:
      "Our range of digital services is custom-fit to your specific needs, ensuring quality and creativity from start to finish, with a keen eye on every detail.",
  },
  {
    name: "CODE OPTIMIZATION",
    svgPath: "../../assets/icons/optimize1.svg",
    description:
      "We review and refine existing codebases, enhancing their efficiency and readability. We focus on optimizing performance and ensuring best practices are followed.",
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
            <div className="iconz">
              <div className="service-shape"> </div>
              <div className="service-icon">
                {" "}
                {/* <div className="circle-container"> */}
                <img
                  src={service.svgPath}
                  alt={service.alt}
                  width="20%"
                  height="20%"
                />
                {/* <img src={service.svgPath} alt={service.alt} /> */}
                {/* </div> */}
              </div>
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
