import React from "react"
import Button from "../../components/button/Button"
import BackgroundShape from "../../assets/images/bkrnd-shape.png"
import PurpleCheck from "../../assets/icons/purple-check.svg"
import CoralCheck from "../../assets/icons/coral-check.svg"
import PeriwinkleCheck from "../../assets/icons/periwinkle-check.svg"
import "./pricing-plans.scss"

const PricingPlans = () => {
  return (
    <div>
      <div className="pricing-container">
        <div className="pricing-background">
          <img src={BackgroundShape} alt="colored gradient shape" />
        </div>
        <div className="pricing-header">
          <h2>Pricing Plans</h2>
          <p className="pricing-text">
            We offer a monthly subscription, lump sum, and e-commerce pricing.
            Please contact us for price inuqiries on our E-Comm models.
          </p>
        </div>

        <div className="pricing-cards-container ">
          {/* Subscription pricing card */}
          <div className="pricing-card sub">
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
                  Includes hosting
                </li>
                <li className="checklist">
                  <img
                    src={PurpleCheck}
                    alt="Purple Checkmark"
                    className="checkmark-icon"
                  />
                  24/7 customer service
                </li>
                <li className="checklist">
                  <img
                    src={PurpleCheck}
                    alt="Purple Checkmark"
                    className="checkmark-icon"
                  />
                  Lifetime updates
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
                  text={"Get Started"}
                  scrollToId={"contact"}
                  onClick={() => scrollToSection("contact")}
                  btnType={"outline"}
                  width={"full"}
                />
              </div>
            </div>
          </div>

          {/* Lump Sum pricing card */}
          <div className="pricing-card lump">
            <img
              src="../../assets/images/pricing-gem.png"
              alt="Gem Image"
              className="pricing-card-image"
            />
            <div className="pricing-card-header">
              <p className="pricing-plan-title lump">LUMP SUM</p>
              <h3 className="pricing-plan-cost">$1800</h3>
              <p style={{ marginTop: "6px" }}>one time fee</p>
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
                  Custom design
                </li>

                <li className="checklist">
                  <img
                    src={PeriwinkleCheck}
                    alt="Periwinkle Checkmark"
                    className="checkmark-icon"
                  />
                  For $75 per month, we provide hosting, 24/7 support, unlimited
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
                  text={"Get Started"}
                  scrollToId={"contact"}
                  onClick={() => scrollToSection("contact")}
                  btnType={"outline"}
                  width={"full"}
                />
              </div>
            </div>
          </div>
          {/* Ecommerce pricing card */}
          <div className="pricing-card ecomm">
            <div className="pricing-card-header">
              <p className="pricing-plan-title ecomm">ECOMMERCE</p>
              <h3 className="pricing-plan-cost">
                $6000
                <span className="pricing-plan-cost-sub">/min</span>
              </h3>
              <p>
                starting price{" "}
                <span className="hidden-text">for basic ecomm</span>
              </p>
              <div className="pricing-white-line"></div>
              <h3 className="pricing-plan-extra-fee">INQUIRE BELOW</h3>
            </div>
            <div className="pricing-half">
              <ul className="pricing-checklist-items">
                <li className="checklist">
                  <img
                    src={CoralCheck}
                    alt="Coral Checkmark"
                    className="checkmark-icon"
                  />
                  Custom storefront design
                </li>
                <li className="checklist">
                  <img
                    src={CoralCheck}
                    alt="Coral Checkmark"
                    className="checkmark-icon"
                  />
                  Seamless payment integration
                </li>
                <li className="checklist">
                  <img
                    src={CoralCheck}
                    alt="Coral Checkmark"
                    className="checkmark-icon"
                  />
                  Custom-built CRM to streamline your business operations
                </li>
                <li className="checklist">
                  <img
                    src={CoralCheck}
                    alt="Coral Checkmark"
                    className="checkmark-icon"
                  />
                  Mobile optimized platform
                </li>
              </ul>

              <div className="pricing-btn-container">
                <Button
                  text={"Get Started"}
                  scrollToId={"contact"}
                  onClick={() => scrollToSection("contact")}
                  btnType={"outline"}
                  width={"full"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingPlans
