import "./service-card.scss"

const ServiceCard = ({name, svgPath, description, height, width}) => {
  return (
    <div className="service-card-container">
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
        <h3 className="service-card-header">{name}</h3>
      </div>
      <p className="service-card-text">{description}</p>
    </div>
  )
}

export default ServiceCard
