import BackgroundShape from "../../assets/images/pricing-shape.svg"
import PricingCard from "../../components/pricing-card/PricingCard"
import {subscription, lumpSum, ecomm} from "../../data/PricingData"
import Button from "../../components/button/Button"
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
            <h2 className="h2-heading">Your Business, Your Plan</h2>
            <div className="price-header-right">
              <p className="pricing-page-text">
                Our pricing options include monthly subscriptions, lump sum
                packages, and e-commerce solutions. Enhance your plan with
                optional add-on services tailored to your needs. Contact us for
                details on e-commerce pricing.
              </p>
              <Button />
            </div>
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
