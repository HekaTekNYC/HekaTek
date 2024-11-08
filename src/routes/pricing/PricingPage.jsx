import BackgroundShape from "../../assets/images/pricing-shape.svg"
import PricingCard from "../../components/pricing-card/PricingCard"
import {subscription, lumpSum, ecomm} from "../../data/PricingData"
import "./pricing-page.scss"

const PricingPage = () => {
  const pricingCards = [subscription, lumpSum, ecomm]

  return (
    <>
      <div className="pricing-page">
        <div className="pricing-page-container">
          <div className="pricing-page-background">
            <img
              src={BackgroundShape}
              alt="colored gradient shape"
              loading="lazy"
            />
          </div>
          <div className="pricing-page-header">
            <h2>Pricing Plans</h2>
            <p className="pricing-page-text">
              We offer a monthly subscription, lump sum, and e-commerce pricing.
              Please contact us for price inquiries on our E-Comm models.
            </p>
          </div>

          <div className="pricing-page-cards-container">
            {pricingCards.map(card => (
              <div key={card.id}>
                <PricingCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default PricingPage
