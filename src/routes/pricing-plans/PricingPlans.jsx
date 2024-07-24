import React from "react"
import BackgroundShape from "../../assets/images/Bg-shape.svg"
import PricingCard from "../../components/pricing-card/PricingCard"
import {subscription, lumpSum, ecomm} from "../../data/PricingData"
import "./pricing-plans.scss"

const PricingPlans = () => {
  const pricingCards = [subscription, lumpSum, ecomm]

  return (
    <>
      <div className="pricing-container">
        <div className="pricing-background">
          <img src={BackgroundShape} alt="colored gradient shape" />
        </div>
        <div className="pricing-header">
          <h2>Pricing Plans</h2>
          <p className="pricing-text">
            We offer a monthly subscription, lump sum, and e-commerce pricing.
            Please contact us for price inquiries on our E-Comm models.
          </p>
        </div>

        <div className="pricing-cards-container">
          {pricingCards.map(card => (
            <div key={card.id}>
              <PricingCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default PricingPlans
