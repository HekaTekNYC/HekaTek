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
// import ServiceBkr from "../../assets/images/33.png"
import ServiceBkr from "../../assets/images/bkg-service25.jpg"
// import ServiceBkr from "../../assets/images/layer.png"
import Devicewebp from "../../assets/images/device-mockup.webp"
import Devicepng from "../../assets/images/sunset-iphone.png"
import ProofPage from "../../sections/proof/Proof-in-numbers"
import ServiceBlob from "../../assets/images/services-bkr-2.svg"

import "./services-page.scss"

const ServicesPage = () => {
  const halfIndex = Math.ceil(servicesData.length / 2)
  const allCards = servicesData
  return (
    <div className="services-page">
      <h2 className="services-header"> Our Services </h2>
      {/* Why Choose Us*/}
      <WhyUs />
      {/* Service Cards */}
      <div className="services-container">
        <div className="services">
          <div className="services-page-heading">
            <h2 className="h2-heading">How We Help Your Business</h2>
            <p className="services-p">
              We provide personalized web design and development services for
              small businesses nationwide. By hand-coding every element, we
              ensure optimal site performance, leading to higher customer
              engagement and increased earnings. No Wordpress, no page builders,
              just custom-coded websites with exceptional results from
              $150/month.
            </p>
          </div>
          <div className="services-cards-layout">
            <div className="services-blob">
              <img
                src={ServiceBlob}
                alt="gradient sunset background"
                loading="lazy"
              />
            </div>
            <div className="services-background">
              <div className="services-blur">
                <img
                  src={ServiceBkr}
                  alt="gradient sunset background"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="services-cards">
              {allCards.map((service, index) => (
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
            <div className="services-mobile">
              <img
                src={Devicepng}
                alt="mockup devices with desktop laptop tablet and phone"
                loading="lazy"
                sizes="(max-width: 750px) 100vw, 650px"
                height="625"
                width="384"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why We Care*/}
      <ProofPage />

      {/* Our Process*/}
      {/* <Process /> */}
    </div>
  )
}

export default ServicesPage
