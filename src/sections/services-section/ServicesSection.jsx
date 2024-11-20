import React from "react"

import {servicesHomeData} from "../../data/ServicesHomeData"
import ServiceBg from "../../assets/images/services-bg.svg"
import "./services-section.scss"

const ServicesSection = () => {
  return (
    <div className="services-home-container">
      <div className="services-home-background">
        <img
          src={ServiceBg}
          alt="gradient blue and orange shape"
          loading="lazy"
        />
      </div>
      <h2 className="services-home-header">SERVICES</h2>
      <p className="services-home-p">
        We provide personalized web design and development services for small
        businesses nationwide. By hand-coding every element, we ensure optimal
        site performance, leading to higher customer engagement and increased
        earnings. No Wordpress, no page builders, just custom-coded websites
        with exceptional results from $150/month.
      </p>
      <div className="services-home-cards">
        {servicesHomeData.map((service, index) => (
          <div key={index} className="service-home-card">
            <div className="services-home-icon-header">
              <div className="service-home-icon">
                <img
                  src={service.svgPath}
                  alt={`${service.name} icon`}
                  height={service.height}
                  width={service.width}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h5 className="service-home-header"> {service.name}</h5>
            </div>
            <p className="service-home-text"> {service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
// when Celeste comes back from lunch ask her why the css is ignoring the 1200 media query and listening to the 768px query
export default ServicesSection
