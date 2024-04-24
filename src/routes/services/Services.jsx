import React from "react"

import { servicesData } from "../../data/ServicesData"
import ServiceBg from "../../assets/images/services-bkrnd.png"
import "./services.scss"

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-background">
        <img src={ServiceBg} alt="" />
      </div>
      <h2 className="services-header">SERVICES</h2>
      <p className="services-p">
        We offer a wide range of digital solutions to help you stand out online.
        From code optimization to complex problem-solving, our team loves a good
        challenge. Whatever your website needs, we've got the expertise to
        deliver.
      </p>
      <div className="services-cards-container">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon-container">
              <img
                src={service.svgPath}
                alt={`${service.name} icon`}
                loading="lazy"
                decoding="async"
                className="service-icon"
              />
            </div>
            <h4 className="service-header"> {service.name}</h4>
            <p className="service-text"> {service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
