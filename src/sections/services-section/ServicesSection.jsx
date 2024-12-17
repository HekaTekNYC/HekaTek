import ServiceCard from "../../components/service-card/ServiceCard"
import Button from "../../components/button/Button"
import {servicesData} from "../../data/ServicesData"

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
      <div className="services-home-btn">
        <Button
          text={"Learn More"}
          to={"/services"}
          btnType={"solid"}
          width={"short"}
        />
      </div>
    </div>
  )
}

export default ServicesSection
