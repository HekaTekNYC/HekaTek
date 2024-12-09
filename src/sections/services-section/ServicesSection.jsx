import React from "react"
import {servicesHomeData} from "../../data/ServicesHomeData"
import ServiceBg from "../../assets/images/services-bg.svg"
import {servicesData} from "../../data/ServicesData"
import ServiceCard from "../../components/service-card/ServiceCard"
import "./services-section.scss"

const ServicesSection = () => {
  const halfIndex = Math.ceil(servicesData.length / 2)
  const leftCards = servicesData.slice(0, halfIndex)
  const rightCards = servicesData.slice(halfIndex)

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
      {/* Render Service Cards from servicesData */}
      <div className="services-home-cards">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            name={service.name}
            svgPath={service.svgPath}
            description={service.description}
            height={service.height}
            width={service.width}
          />
        ))}
      </div>
      <div className="services-home-details"></div>
    </div>
  )
}

export default ServicesSection
