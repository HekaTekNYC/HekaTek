import React from "react"
import ServiceIcon from  "../../components/service-icon/Service-icon"
import TechIcon2 from "../../components/tech-icon/tech-icon-service";
import "./services.scss"

const servicesData = [
  {
    name: "CODE OPTIMIZATION",
    svgPath: "../../assets/icons/code.svg",
    description:
      "We review and refine existing codebases, enhancing their efficiency and readability. We focus on optimizing performance and ensuring best practices are followed.",
  },
  {
    name: "WEB DEVELOPMENT",
    svgPath: "../../assets/icons/WebDev.svg",
    description:
      "We offer custom development services tailored to meet your unique needs, leveraging our expertise in various frameworks and JavaScript to create responsive websites.",
  },
  {
    name: "DEBUGGING",
    svgPath: "../../assets/icons/Debug2.svg",
    description:
      "Our passion lies in tackling complex challenges and solving problems. Let's find some bugs and get them out of there!",
  },
  {
    name: "DIGITAL SOLUTIONS",
    svgPath: "../../assets/icons/DigitalSolutions.svg",
    description:
      "Our range of digital services is custom-fit to your specific needs, ensuring quality and creativity from start to finish, with a keen eye on every detail.",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="section-header">OUR SERVICES</h2>
      <div className="services-row">
        {servicesData.map((service, index) => (
            <div className="service-card"  key={index}>
              {/* <TechIcon2 svgPath={service.svgPath} /> */}
              <ServiceIcon svgPath={service.svgPath} />
              <div className="service-header">{service.name}</div>
              <div className="service-text">{service.description}</div>
            </div>
         
        ))}
      </div>
    </div>
  );
};

export default Services;




