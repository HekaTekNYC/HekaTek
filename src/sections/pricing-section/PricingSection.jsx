import BackgroundShape from "../../assets/images/pricing-shape.svg"
import PricingCard from "../../components/pricing-card/PricingCard"
import {subscription, lumpSum, ecomm} from "../../data/PricingData"

import "./pricing-section.scss"

const PricingSection = () => {
  const pricingCards = [subscription, lumpSum, ecomm]

  return (
    <>
      <div className="pricing-container">
        <div className="pricing-background">
          <img
            src={BackgroundShape}
            alt="colored gradient shape"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="pricing-header">
          <h2>Pricing Plans</h2>
          <p className="pricing-text">
            Flexible pricing to suit your needs: choose a monthly subscription,
            one-time payment, or tailored e-commerce plans. Add-ons like
            unlimited edits or blogs let you customize your website to fit your
            business perfectly—no hidden costs, just clear value.
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

export default PricingSection
