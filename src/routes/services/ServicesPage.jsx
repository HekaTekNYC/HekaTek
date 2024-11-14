import React from "react"

import {servicesData} from "../../data/ServicesData"
import ServiceBg from "../../assets/images/services-bg.svg"
import Devicewebp from "../../assets/images/device-mockup.webp"
import Devicepng from "../../assets/images/device-mockup.png"

import "./services-page.scss"

const ServicesPage = () => {
  // Split the data into two equal parts
  const halfIndex = Math.ceil(servicesData.length / 2)
  const leftCards = servicesData.slice(0, halfIndex)
  const rightCards = servicesData.slice(halfIndex)

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
        <div className="services-page-cards-layout">
          <div className="services-page-cards-left">
            {leftCards.map((service, index) => (
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
                  <h5 className="service-page-header">{service.name}</h5>
                </div>
                <p className="service-page-text">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="services-image-container">
            <div className="services-page-img-container">
              <picture>
                <source
                  srcSet={Devicewebp}
                  type="image/webp"
                  media="(min-width: 400px)"
                />
                <source
                  srcSet={Devicepng}
                  type="image/png"
                  media="(min-width: 400px)"
                />
                <img
                  loading="lazy"
                  decoding="async"
                  src={Devicepng}
                  alt="mockup devices with desktop laptop tablet and phone"
                  sizes="(max-width: 750px) 100vw, 650px"
                  height="689"
                  width="1097"
                />
              </picture>
            </div>
          </div>
          <div className="services-page-cards-right">
            {rightCards.map((service, index) => (
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
                  <h5 className="service-page-header">{service.name}</h5>
                </div>
                <p className="service-page-text">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
