import {useState} from "react"
import BackgroundShape from "../../assets/images/pricing-shape.svg"
import PricingCard from "../../components/pricing-card/PricingCard"
import {subscription, lumpSum, ecomm} from "../../data/PricingData"

import "./pricing-section.scss"

const PricingSection = () => {
  const pricingCards = [subscription, lumpSum, ecomm]

  const [activeCard, setActiveCard] = useState(2)

  const handleMouseEnter = id => {
    setActiveCard(id)
  }

  const handleMouseLeave = () => {
    setActiveCard(2)
  }

  return (
    <>
      <div className="pricing-container">
        <div className="pricing-background">
          <img
            src={BackgroundShape}
            alt="colored gradient shape"
            loading="lazy"
            decoding="async"
            aria-hidden="true"
            crossOrigin="anonymous"
          />
        </div>
        <div className="pricing-header">
          <h2>OUR SERVICES</h2>
          <p className="pricing-text">
            From fast template launches to fully custom-coded websites and
            storefronts, we offer flexible options tailored to your business.
            Contact us to discuss what fits your needs.
          </p>
        </div>

        <div
          className="pricing-cards-container"
          onMouseLeave={handleMouseLeave}
        >
          {pricingCards.map(card => (
            <PricingCard
              key={card.id}
              {...card}
              isActive={activeCard === card.id}
              onMouseEnter={() => handleMouseEnter(card.id)}
              onMouseLeave={handleMouseLeave}
              btnType={activeCard === card.id ? "solid" : "outline"}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default PricingSection
