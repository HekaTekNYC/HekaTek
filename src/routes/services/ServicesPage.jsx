import React from "react"
import ServiceCard from "../../components/service-card/ServiceCard"
import WhyUs from "../../components/why-choose-us/WhyChooseUs"
import WhyCare from "../../components/why-we-care/WhyWeCare"
import Process from "../../components/our-process/OurProcess"
import {servicesData} from "../../data/ServicesData"
// import ServiceBkr from "../../assets/images/bkg-service2.jpg"
// import ServiceBkr from "../../assets/images/ten.png"
// import ServiceBkr from "../../assets/images/33.png"
// import ServiceBkr from "../../assets/images/bkg-service24.jpg"
// import ServiceBkr from "../../assets/images/33.png"
// import ServiceBkr from "../../assets/images/bk11.jpg"
// import ServiceBkr from "../../assets/images/bk11.jpg"
import ServiceBkr from "../../assets/images/33.png"
// import ServiceBkr from "../../assets/images/bkg-service25.jpg"
import Devicewebp from "../../assets/images/device-mockup.webp"
import Devicepng from "../../assets/images/sunset-iphone.png"
import ProofPage from "../../sections/proof/Proof-in-numbers"

import "./services-page.scss"

const ServicesPage = () => {
  const halfIndex = Math.ceil(servicesData.length / 2)
  const leftCards = servicesData.slice(0, halfIndex)
  const rightCards = servicesData.slice(halfIndex)

  return (
    <div className="services-page">
      <h2 className="services-header"> Our Services </h2>
      {/* Why Choose Us*/}
      <WhyUs />
      {/* Service Cards */}
      <div className="services-container">
        <div className="services">
          <h2 className="h2-heading">How We Help Your Business</h2>
          <p className="services-p">
            We provide personalized web design and development services for
            small businesses nationwide. By hand-coding every element, we ensure
            optimal site performance, leading to higher customer engagement and
            increased earnings. No Wordpress, no page builders, just
            custom-coded websites with exceptional results from $150/month.
          </p>
          <div className="services-cards-layout">
            <div className="services-background">
              <div className="services-blur">
                <img
                  src={ServiceBkr}
                  alt="gradient blue and orange shape"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="services-cards-left">
              {leftCards.map((service, index) => (
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
            <div className="services-mobile-container">
              <div className="services-mobile">
                {/* <picture>
                <source
                  srcSet={Devicewebp}
                  type="image/webp"
                  media="(min-width: 400px)"
                />
                <source
                  srcSet={Devicepng}
                  type="image/png"
                  media="(min-width: 400px)"
                /> */}
                <img
                  loading="lazy"
                  decoding="async"
                  src={Devicepng}
                  alt="mockup devices with desktop laptop tablet and phone"
                  sizes="(max-width: 750px) 100vw, 650px"
                  height="689"
                  width="1097"
                />
                {/* </picture> */}
              </div>
            </div>
            <div className="services-cards-right">
              {rightCards.map((service, index) => (
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
          </div>
        </div>
      </div>
      <div className="services-padding-container">
        {/* Why We Care*/}
        <WhyCare />
      </div>
      {/* Our Process*/}
      <Process />
      <ProofPage />
    </div>
  )
}

export default ServicesPage
