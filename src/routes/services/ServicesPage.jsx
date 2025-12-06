import ServiceCard from "../../components/service-card/ServiceCard"
import Redefine from "../../sections/redefine-section/RedefineSeciton"
import ProcessSection from "../../sections/process-section/ProcessSection"
import IphoneWebp from "../../assets/images/IpadMockup.webp"
import IphonePng from "../../assets/images/IpadMockup.png"
import ProofPage from "../../sections/proof-section/ProofSection"
import ServiceBlob from "../../assets/images/serviceBlob.svg"
import ServiceBlobM from "../../assets/images/serviceBlobM.svg"

import {servicesData} from "../../data/ServicesData"

import "./services-page.scss"

const ServicesPage = () => {
  return (
    <div id="services" className="services-page">
      <h2 className="services-header"> OUR SERVICES </h2>

      {/* Redefine Digital Section*/}
      <Redefine />

      {/* Service Cards Section*/}
      <div className="services-container">
        <div className="services">
          <div className="services-page-heading">
            <h2 className="h2-heading">HOW WE HELP YOUR BUSINESS</h2>
            <p className="services-p">
              We provide personalized web design and development services for
              small businesses nationwide. By hand-coding every element, we
              ensure optimal site performance, leading to higher customer
              engagement and increased earnings. No Wordpress, no page builders,
              just custom-coded websites with exceptional results from
              $175/month.
            </p>
          </div>
          <div className="services-cards-layout">
            <div className="services-blob-m">
              <img
                src={ServiceBlobM}
                alt="gradient blob"
                loading="lazy"
                crossOrigin="anonymous"
                aria-hidden="true"
              />
            </div>
            <div className="services-blob">
              <img
                src={ServiceBlob}
                alt="gradient blob "
                loading="lazy"
                aria-hidden="true"
                crossOrigin="anonymous"
              />
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

              <div className="services-mobile">
                <picture>
                  <source
                    srcSet={IphoneWebp}
                    type="image/webp"
                    media="(min-width: 400px)"
                  />
                  <source
                    srcSet={IphonePng}
                    type="image/png"
                    media="(min-width: 400px)"
                  />
                  <img
                    src={IphonePng}
                    alt="mockup devices with desktop laptop tablet and phone"
                    loading="lazy"
                    sizes="(max-width: 750px) 100vw, 650px"
                    height="625"
                    width="461"
                  />
                </picture>
              </div>
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
