import React, {useState, useEffect} from "react"
import Button from "../../components/button/Button"
import Modal from "../../components/calendly-modal/Modal"
import BackgroundShape from "../../assets/images/Bg-shape.svg"
import PurpleCheck from "../../assets/icons/purple-check.svg"
import CoralCheck from "../../assets/icons/coral-check.svg"
import PeriwinkleCheck from "../../assets/icons/periwinkle-check.svg"
import "./pricing-plans.scss"

const PricingPlans = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const checkCookies = () => {
      document.cookie = "testcookie"
      if (!document.cookie.includes("testcookie")) {
        setModalOpen(true)
      }
    }

    checkCookies()
  }, [])

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const handleModalConfirm = () => {
    window.location.href = "https://calendly.com/hekateknyc"
  }
  const openCalendlyPopup = () => {
    Calendly.initPopupWidget({
      url: "https://calendly.com/hekatek-hekateknyc/30min",
    })
    return false
  }

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleModalConfirm}
      />
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
                  <span className="pricing-plan-cost-sub">/month</span>
                </h3>
                <p>monthly subscription fee</p>
                <div className="pricing-white-line"></div>
                <h3 className="pricing-plan-extra-fee">
                  $350
                  <span className="pricing-plan-extra-sub">
                    &nbsp;/ one time design fee
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
                    onClick={openCalendlyPopup}
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
                <h3 className="pricing-plan-cost">$2000</h3>
                <p style={{marginTop: "6px"}}>one time fee</p>
                <div className="pricing-white-line"></div>
                <h3 className="pricing-plan-extra-fee">
                  $25
                  <span className="pricing-plan-extra-sub">
                    &nbsp;/ monthly hosting fee
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
                    For $50 per month, we provide hosting, 24/7 support,
                    unlimited edits, and updates for life
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
                    onClick={openCalendlyPopup}
                    btnType={"outline"}
                    width={"full"}
                  />
                </div>
              </div>
            </div>
            {/* Ecommerce pricing card */}
            <div className="pricing-card ecomm">
              <div className="pricing-card-header">
                <p className="pricing-plan-title ecomm">E-COMMERCE</p>
                <h3 className="pricing-plan-cost">
                  $6000
                  <span className="pricing-plan-cost-sub">/minimum</span>
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
                    onClick={openCalendlyPopup}
                    btnType={"outline"}
                    width={"full"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PricingPlans
