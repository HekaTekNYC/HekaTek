import React from "react"

import "./services.scss"

const servicesData = [
  {
    name: "WEB DEVELOPMENT",
    svgPath: "../../assets/icons/Document.png",
    description:
      "We offer custom development services tailored to meet your unique needs, leveraging our expertise in various frameworks and JavaScript to create responsive websites.",
  },
  {
    name: "DEBUGGING",
    svgPath: "../../assets/icons/Shield.png",
    description:
      "Our passion lies in tackling complex challenges and solving problems. Let's find some bugs and get them out of there!",
  },
  {
    name: "DIGITAL SOLUTIONS",
    svgPath: "../../assets/icons/Setting.png",
    description:
      "Our range of digital services is custom-fit to your specific needs, ensuring quality and creativity from start to finish, with a keen eye on every detail.",
  },
  {
    name: "CODE OPTIMIZATION",
    svgPath: "../../assets/icons/Discovery.png",
    description:
      "We review and refine existing codebases, enhancing their efficiency and readability. We focus on optimizing performance and ensuring best practices are followed.",
  },
]
const Services = () => {
  return (
    <div className="services-container">
      <div className="services-section-header">
        <h3>SERVICES</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea non at, sed, ut veritatis magnam culpa repudiandae dolorem excepturi minima accusantium, quis nobis sint asperiores dolorum? Aliquid saepe sint tempora nam, vero maiores temporibus totam, corporis laboriosam fugit possimus id.
        </p>
      </div>
      <div className="services-cards-container"> {/* Renamed for clarity */}
        {servicesData.map((service, index) => (
          <div key={index} className="service-card"> {/* This now represents an individual card */}
            <div className="service-icon-container"> {/* Renamed for clarity */}
              <img
                src={service.svgPath}
                alt={`${service.name} icon`}
                loading="lazy"
                decoding="async"
                className="service-icon"
              />
            </div>
            <h6 className="service-header">{service.name}</h6>
            <p className="service-text">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services;
// const Services = () => {
//   return (
//     <div className="services-container">
//       <div className="services-section-header">
//         <h3>SERVICES</h3>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea non at, sed, ut veritatis magnam culpa repudiandae dolorem excepturi minima accusantium, quis nobis sint asperiores dolorum? Aliquid saepe sint tempora nam, vero maiores temporibus totam, corporis laboriosam fugit possimus id.
//         </p>
//       </div>
//       <div className="services-card">
//         {servicesData.map((service, index) => (
//           <div key={index} className="service-info">
//             <div className="service-icons">
//               <div className="service-shape"> </div>
//               <div className="service-icon">
//                 <img
//                   src={service.svgPath}
//                   alt="service icons"
//                   // width="70px"
//                   // height="70px"
//                   loading="lazy"
//                   decoding="async"
//                   title="services section icons featuring web development, bug fixes and optimization"
//                 />
//               </div>
//             </div>

//             <h6 className="service-header">{service.name}</h6>
//             <p className="service-text">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Services
