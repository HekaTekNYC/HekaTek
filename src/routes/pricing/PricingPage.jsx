import {useState} from "react"
import PricingCard from "../../components/pricing-card/PricingCard"
import AddOnCard from "../../components/add-on-card/AddOnCard"
import Button from "../../components/button/Button"
import {subscription, lumpSum, ecomm} from "../../data/PricingData"
import {blog, editsMo, clientPortal} from "../../data/AddOnData"

import BackgroundShape from "../../assets/images/pricing-shape.svg?react"

import "./pricing-page.scss"

const PricingPage = () => {
  const pricingCards = [subscription, lumpSum, ecomm]
  const addOnCards = [blog, editsMo, clientPortal]

  const [activeCard, setActiveCard] = useState(2)

  const handleMouseEnter = id => {
    setActiveCard(id)
  }

  const handleMouseLeave = () => {
    setActiveCard(2)
  }

  return (
    <>
      <div id="pricing" className="pricing-page">
        <div className="pricing-page-container">
          <div className="pricing-page-background">
            <BackgroundShape />
          </div>

          <h2 className="pricing-header">SERVICES</h2>
          <div className="pricing-build-container">
            <div className="pricing-build-info">
              <div className="pricing-build-text">
                <h2 className="h2-heading">BUILD YOUR PLAN</h2>
                <p>
                  Every project is different, so we tailor our approach to fit
                  your specific needs. Whether you need a quick template
                  launch, a fully custom-coded website, or a complete
                  e-commerce storefront, we'll work with you to find the right
                  solution. Reach out and let's talk through what makes sense
                  for your business.
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
            <div
              className="pricing-build-cards-container"
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
          <div className="add-on-container">
            <div className="add-on-info">
              <div className="add-on-text-container">
                <h2 className="h2-heading">ADD-ON SERVICES</h2>
                <p>
                  Enhance your plan with our customizable add-ons, designed to
                  support your unique business needs. From ongoing support to
                  additional features, we can help you build the perfect package
                  for your website.
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
