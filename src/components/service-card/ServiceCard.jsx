import ServiceBlob from "../../assets/images/contact-blob.svg"
import "./service-card.scss"

const ServiceCard = ({name, svgPath, description, height, width}) => {
  return (
    <div className="service-card-container">
      {/* <img src={ServiceBlob} alt="blue blob" className="service-blob" /> */}
      <div className="service-icon-header">
        <div className="service-icon-container">
          <div className="service-icon">
            <img
              src={svgPath}
              alt={`${name} icon`}
              height={height}
              width={width}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <h5 className="service-card-header">{name}</h5>
      </div>
      <p className="service-card-text">{description}</p>
    </div>
  )
}

export default ServiceCard
