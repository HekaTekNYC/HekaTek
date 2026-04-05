import "./pricing-card.scss"

const PricingCard = ({
  id,
  className,
  title,
  tagline,
  checkList,
  isActive,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <>
      <div
        className={`pricing-card ${className} ${isActive ? "active" : ""}`}
        onMouseEnter={() => onMouseEnter(id)}
        onMouseLeave={() => onMouseLeave(id)}
      >
        <div className="pricing-card-header">
          <p className={`pricing-plan-title ${className}`}>{title}</p>
          <div className="pricing-white-line"></div>
          {tagline && <p className="pricing-tagline">{tagline}</p>}
          <div className="pricing-white-line"></div>
        </div>
        <div className="pricing-half">
          <ul className={`pricing-checklist-items ${className}`}>
            {checkList.map((item, index) => (
              <li key={index} className="checklist">
                <img src={item.img} alt={item.alt} className="checkmark-icon" />
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default PricingCard
