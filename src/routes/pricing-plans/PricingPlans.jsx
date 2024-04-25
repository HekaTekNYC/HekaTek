import React from "react"
import Button from "../../components/button/Button"
import BackgroundShape from "../../assets/images/background-shape.png"
import PurpleCheck from "../../assets/icons/purple-check.svg"
import CoralCheck from "../../assets/icons/coral-check.svg"
import PeriwinkleCheck from "../../assets/icons/periwinkle-check.svg"
import "./pricing-plans.scss"

const PricingPlans = () => {
  return (
    <div>
      <div className="pricing-container">
        <div className="pricing-header">
          <h2>Pricing Plans</h2>
          <p className="pricing-text">
            We offer a monthly subscription, lump sum, and e-commerce pricing.
            Please contact us for price inuqiries on our E-Comm models.
          </p>
        </div>

        <div className="pricing-cards-container">
          <div className="background-style">
            <img src={BackgroundShape} alt="colored gradient shape" />
          </div>
          {/* Subscription pricing card */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <p className="pricing-plan-title sub">SUBSCRIPTION</p>
              <h3 className="pricing-plan-cost">
                $175
                <span className="pricing-plan-cost-sub">/mo</span>
              </h3>
              <p>monthly subscription fee</p>
              <div className="pricing-white-line"></div>
              <h3 className="pricing-plan-extra-fee">
                $350
                <span className="pricing-plan-extra-sub">
                  / one time design fee
                </span>
              </h3>
            </div>

            {/* Subscription Pricing Info Section */}
            <div className="pricing-half">
              <ul className="pricing-checklist-items">
                <li className="checklist">
                  <img
                    src={PurpleCheck}
                    alt="Purple Checkmark"
                    className="checkmark-icon"
                  />
                  5 fully responsive pages
                </li>
                <li className="checklist">
                  <img
                    src={PurpleCheck}
                    alt="Purple Checkmark"
                    className="checkmark-icon"
                  />
                  Includes Hosting
                </li>
                <li className="checklist">
                  <img
                    src={PurpleCheck}
                    alt="Purple Checkmark"
                    className="checkmark-icon"
                  />
                  24/7 Customer Service
                </li>
                <li className="checklist">
                  <img
                    src={PurpleCheck}
                    alt="Purple Checkmark"
                    className="checkmark-icon"
                  />
                  Lifetime Updates
                </li>
                <li className="checklist">
                  <img
                    src={PurpleCheck}
                    alt="Purple Checkmark"
                    className="checkmark-icon"
                  />
                  6 month minimum contract
                </li>
              </ul>

              <div className="pricing-btn-container">
                <Button
                  href="mailto:hekateknyc@gmail.com"
                  text={"Get Started"}
                ></Button>
              </div>
            </div>
          </div>

          {/* Lump Sum pricing card */}
          <div className="pricing-card">
            <img
              src="../../assets/images/pricing-gem.png"
              alt="Gem Image"
              className="pricing-card-image"
            />
            <div className="pricing-card-header">
              <p className="pricing-plan-title lump">LUMP SUM</p>
              <h3 className="pricing-plan-cost">
                $1800
                {/* <span className="pricing-plan-cost-sub">/one time fee</span> */}
              </h3>
              <p>one time fee</p>
              <div className="pricing-white-line"></div>
              <h3 className="pricing-plan-extra-fee">
                $25
                <span className="pricing-plan-extra-sub">
                  / monthly hosting fee
                </span>
              </h3>
            </div>
            <div className="pricing-half">
              <ul className="pricing-checklist-items">
                <li className="checklist">
                  <img
                    src={PeriwinkleCheck}
                    alt="Periwinkle Checkmark"
                    className="checkmark-icon"
                  />
                  5 fully responsive pages
                </li>
                <li className="checklist">
                  <img
                    src={PeriwinkleCheck}
                    alt="Periwinkle Checkmark"
                    className="checkmark-icon"
                  />
                  Custom Designed
                </li>

                <li className="checklist">
                  <img
                    src={PeriwinkleCheck}
                    alt="Periwinkle Checkmark"
                    className="checkmark-icon"
                  />
                  For $75 per month, we provide hosting, 24/7support, unlimited
                  edits, and updates for life
                </li>
                <li className="checklist">
                  <img
                    src={PeriwinkleCheck}
                    alt="Periwinkle Checkmark"
                    className="checkmark-icon"
                  />
                  12 month minimum commitment
                </li>
              </ul>

              <div className="pricing-btn-container">
                <Button
                  href="mailto:hekateknyc@gmail.com"
                  text={"Get Started"}
                  btnType={"solid"}
                ></Button>
              </div>
            </div>
          </div>
          {/* Ecommerce pricing card */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <p className="pricing-plan-title ecomm">ECOMM MODEL</p>
              <h3 className="pricing-plan-extra-fee">INQUIRE BELOW</h3>
              <div className="pricing-white-line"></div>
            </div>
            <div className="pricing-half">
              <ul className="pricing-checklist-items">
                <li className="checklist">
                  <img
                    src={CoralCheck}
                    alt="Checkmark"
                    className="checkmark-icon"
                  />
                  Custom Designed
                </li>
                <li className="checklist">
                  <img
                    src={CoralCheck}
                    alt="Checkmark"
                    className="checkmark-icon"
                  />
                  Custom coded Shopify Integration
                </li>
                <li className="checklist">
                  <img
                    src={CoralCheck}
                    alt="Checkmark"
                    className="checkmark-icon"
                  />
                  Easy to edit
                </li>
              </ul>

              <div className="pricing-btn-container">
                <Button
                  href="mailto:hekateknyc@gmail.com"
                  text={"Get Started"}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingPlans
