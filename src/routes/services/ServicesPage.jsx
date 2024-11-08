import React from "react"

import {servicesData} from "../../data/ServicesData"
import ServiceBg from "../../assets/images/services-bg.svg"
import "./services-page.scss"

const ServicesPage = () => {
  return (
    <div className="services-page">
      <div className="services-page-container">
        <div className="services-page-background">
          <img
            src={ServiceBg}
            alt="gradient blue and orange shape"
            loading="lazy"
          />
        </div>
        <h2 className="services-page-header">SERVICES</h2>
        <p className="services-page-p">
          We provide personalized web design and development services for small
          businesses nationwide. By hand-coding every element, we ensure optimal
          site performance, leading to higher customer engagement and increased
          earnings. No Wordpress, no page builders, just custom-coded websites
          with exceptional results from $150/month.
        </p>
        <div className="services-page-cards-container">
          {servicesData.map((service, index) => (
            <div key={index} className="service-page-card-container">
              <div className="services-page-icon-header-container">
                <div className="service-page-icon-container">
                  <img
                    src={service.svgPath}
                    alt={`${service.name} icon`}
                    height={service.height}
                    width={service.width}
                    loading="lazy"
                    decoding="async"
                    className="service-icon"
                  />
                </div>
                <h5 className="service-page-header"> {service.name}</h5>
              </div>
              <p className="service-page-text"> {service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
// when Celeste comes back from lunch ask her why the css is ignoring the 1200 media query and listening to the 768px query
export default ServicesPage
