import PricingCard from "../../components/pricing-card/PricingCard"
import AddOnCard from "../../components/add-on-card/AddOnCard"
import Button from "../../components/button/Button"
import {subscription, lumpSum, ecomm} from "../../data/PricingData"
import {blog, editsMo, clientPortal} from "../../data/AddOnData"

import BackgroundShape from "../../assets/images/pricing-shape.svg"

import "./pricing-page.scss"

const PricingPage = () => {
  const pricingCards = [subscription, lumpSum, ecomm]
  const addOnCards = [blog, editsMo, clientPortal]

  return (
    <>
      <div id="pricing" className="pricing-page">
        <div className="pricing-page-container">
          <div className="pricing-page-background">
            <img
              src={BackgroundShape}
              alt="colored gradient shape"
              loading="lazy"
            />
          </div>

          <h2 className="pricing-header">Pricing</h2>
          <div className="pricing-build-container">
            <div className="pricing-build-info">
              <div className="pricing-build-text">
                <h2 className="h2-heading">Build Your Plan</h2>
                <p>
                  Our pricing is designed to fit your needs, offering monthly
                  subscription and one-time lump sum options, as well as
                  tailored pricing for e-commerce websites. You can personalize
                  each plan with add-ons, like unlimited edits or a blog, to
                  best suit your business needs. We pride ourselves on
                  transparent pricing with no hidden costs, ensuring you have a
                  clear understanding of your investment. Contact us to find the
                  best option for your business.
                </p>
              </div>
              <div className="pricing-build-btn">
                <Button
                  text={"Contact Us"}
                  to="/contact"
                  btnType={"solid"}
                  width={"short"}
                />
              </div>
            </div>
            <div className="pricing-build-cards-container">
              {pricingCards.map(card => (
                <div key={card.id}>
                  <PricingCard {...card} />
                </div>
              ))}
            </div>
          </div>
          <div className="add-on-container">
            <div className="add-on-info">
              <div className="add-on-text-container">
                <h2 className="h2-heading">Add-on Services</h2>
                <p>
                  Enhance your plan with our customizable add-ons, designed to
                  support your unique business needs. From ongoing support to
                  additional features, we can help you build the perfect package
                  for your website.
                </p>
              </div>
            </div>
            <div className="add-on-cards-container">
              {addOnCards.map(card => (
                <div key={card.id}>
                  <AddOnCard {...card} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PricingPage
