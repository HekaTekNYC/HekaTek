import React from "react"
import ServiceCard from "../../components/service-card/ServiceCard"
import Redefine from "../../sections/redefine-section/RedefineSeciton"
import ProcessSection from "../../sections/process-section/ProcessSection"
import Devicewebp from "../../assets/images/device-mockup.webp"
import Devicepng from "../../assets/images/sunset-iphone.png"
import ProofPage from "../../sections/proof-section/ProofSection"
import ServiceBlob from "../../assets/images/serviceBlob.svg"
import ServiceBlobM from "../../assets/images/serviceBlobM.svg"

import {servicesData} from "../../data/ServicesData"
import "./services-page.scss"

const ServicesPage = () => {
  return (
    <div className="services-page">
      <h2 className="services-header"> Our Services </h2>

      {/* Redefine Digital Section*/}
      <Redefine />

      {/* Service Cards Section*/}
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
            <div className="services-blob-m">
              <img src={ServiceBlobM} alt="gradient blob" loading="lazy" />
            </div>
            <div className="services-blob">
              <img src={ServiceBlob} alt="gradient blob " loading="lazy" />
            </div>
            <div className="services-cards">
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
      <ProcessSection />
    </div>
  )
}

export default ServicesPage
