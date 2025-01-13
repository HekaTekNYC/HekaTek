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
          <h2>PRICING PLANS</h2>
          <p className="pricing-text">
            Flexible pricing to suit your needs: choose a monthly subscription,
            one-time payment, or tailored e-commerce plans. Add-ons like
            unlimited edits or blogs let you customize your website to fit your
            business perfectly—no hidden costs, just clear value.
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
