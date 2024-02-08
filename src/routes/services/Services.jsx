import React from "react"

import "./services.scss"

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-row">
        <div className="service-item">
          <div className="service-header">CODE OPTIMIZATION</div>
          <div className="service-text">
            We review and refine existing codebases, enhancing their efficiency
            and readability. We focus on optimizing performance and ensuring
            best practices are followed.
          </div>
        </div>
        <div className="service-item">
          <div className="service-header">WEBSITE DEVELOPMENT</div>
          <div className="service-text">
            We offer custom website development services tailored to meet your
            unique business needs, leveraging our expertise in various
            frameworks and TypeScript to create responsive a user-friendly
            websites.
          </div>
        </div>
        <div className="service-item">
          <div className="service-header">DEBUGGING</div>
          <div className="service-text">
            Our passion lies in tackling complex challenges and solving
            problems. Let's find some bugs and get them out of there!
          </div>
        </div>
        <div className="service-item">
          <div className="service-header">DIGITAL SOLUTIONS</div>
          <div className="service-text">
            Our range of digital services is custom-fit to your specific needs,
            ensuring quality and creativity from start to finish, with a keen
            eye on every detail.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
