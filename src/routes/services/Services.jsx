import React from "react"

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
      <div className="section-header">OUR SERVICES</div>
      <div className="services-row">
        {servicesData.map((service, index) => (
          <div key={index} className="service-item-solid-card">
            <div className="service-item">
              <TechIcon2 svgPath={service.svgPath} />
              <div className="service-header">{service.name}</div>
              <div className="service-text">{service.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;


// const Services = () => {

//   return (
//     <div className="services-container">
//       <div className="services-header">OUR SERVICES</div>
//       <div className="services-row">
//         <div className="service-item">
//         <TechIcon2 svgPath={Code}  />

//           {/* <div className="services-icon"><img src={Code} alt="Code icon" /></div> */}

//           <div className="service-header">CODE OPTIMIZATION</div>
//           <div className="service-text">
//             We review and refine existing codebases, enhancing their efficiency
//             and readability. We focus on optimizing performance and ensuring
//             best practices are followed.
//           </div>
//         </div>
//         <div className="service-item">
//           <TechIcon2 svgPath={WebDev3}  />
//           <div className="service-header">WEB DEVELOPMENT</div>
//           <div className="service-text">
//             We offer custom development services tailored to meet your unique
//             needs, leveraging our expertise in various frameworks and JavaScript
//             to create responsive websites.
//           </div>
//         </div>
//         <div className="service-item-solid-card">
//           <div className="service-item">
//             <TechIcon2 svgPath={Debug2}  />

//           <div className="service-header">DEBUGGING</div>
//             <div className="service-text">
//             Our passion lies in tackling complex challenges and solving
//             problems. Let's find some bugs and get them out of there!
//           </div>
//         </div>
//         </div>
//         <div className="service-item">
//         <TechIcon2 svgPath={DigitalSol}  />

//           <div className="service-header">DIGITAL SOLUTIONS</div>
//           <div className="service-text">
//             Our range of digital services is custom-fit to your specific needs,
//             ensuring quality and creativity from start to finish, with a keen
//             eye on every detail.
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Services
