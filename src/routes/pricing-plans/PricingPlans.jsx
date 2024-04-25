import React from "react"
import Button from "../../components/button/Button"
import BackgroundShape from "../../assets/images/background-shape.png"
import PurpleCheck from "../../assets/icons/purple-check.svg"
import CoralCheck from "../../assets/icons/coral-check.svg"
import PeriwinkleCheck from "../../assets/icons/periwinkle-check.svg"
import "./pricing-plans.scss"

const PricingPlans = () => {
  const backgroundStyle = {
    backgroundImage: `url(${BackgroundShape})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center center",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "100%",
    zIndex: "-1",
  }

  return (
    <div>
      <div className="pricing-container ">
        <div className="pricing-header">
          <div className="pricing-text">
            <h2>Pricing Plans</h2>
          </div>
          <div className="pricing-text">
            <p>
              We offer a monthly subscription, lump sum, and e-commerce pricing.
              Please contact us for price inuqiries on our E-Comm models.
            </p>
          </div>
        </div>
      </div>
      <div
        className="pricing-cards-container"
        // style={backgroundStyle}
      >
        <div className="background-style">
          <img src={BackgroundShape} alt="colored gradient shape" />
        </div>
        <div className="pricing-card">
          <div className="pricing-sub-title">
            <p>SUBSCRIPTION</p>
          </div>

          <div className="pricing-sub-amount">
            <p>
              $175
              <span className="pricing-sub-amount-reg">/month</span>
            </p>
          </div>
          <div className="pricing-sub-design-amount">
            <p>
              $350
              <span className="pricing-sub-amount-reg">
                {" "}
                * One time design fee
              </span>
            </p>
            <div className="white-line-purple"></div>
          </div>
          <div className="pricing-checklist-items">
            <ul>
              <li>
                <img
                  src={PurpleCheck}
                  alt="Purple Checkmark"
                  className="checkmark-icon"
                />
                5 fully responsive pages.
              </li>
              <li>
                <img
                  src={PurpleCheck}
                  alt="Purple Checkmark"
                  className="checkmark-icon"
                />
                Hosting, 24/7 support, unlimited edits, lifetime updates.
              </li>
              <li>
                <img
                  src={PurpleCheck}
                  alt="Purple Checkmark"
                  className="checkmark-icon"
                />
                6 month minimum contract.
              </li>
            </ul>
          </div>

          <div className="btn-container">
            <Button
              href="mailto:hekateknyc@gmail.com"
              text={"Get Started"}
            ></Button>
          </div>
        </div>
        <div className="pricing-card lump-sum-card">
          <img
            src="../../assets/images/pricing-gem.png"
            alt="Gem Image"
            className="card-image"
          />
          <div className="pricing-lump-title">
            <p>LUMP SUM</p>
          </div>
          <div className="pricing-lump-amount">
            <p>$1800</p>
          </div>
          <div className="white-line-peri"></div>

          <div className="pricing-sub-design-amount">
            {/* <p>$25/month hosting</p> */}
            {/* <p>$25</p>
                        <span className='pricing-design-amount-reg'>/month hosting</span> */}
          </div>
          <div className="pricing-checklist-items">
            <ul>
              <li>
                <img
                  src={PeriwinkleCheck}
                  alt="Periwinkle Checkmark"
                  className="checkmark-icon"
                />
                5 fully responsive pages.
              </li>
              <li>
                <img
                  src={PeriwinkleCheck}
                  alt="Periwinkle Checkmark"
                  className="checkmark-icon"
                />
                12 month minimum commitment.
              </li>
              {/* <li><img src={PeriwinkleCheck} alt="Periwinkle Checkmark" className="checkmark-icon" />On cancellation you own and keep your domain, but the code and design retain their proprietary status.</li> */}
              <li>
                <img
                  src={PeriwinkleCheck}
                  alt="Periwinkle Checkmark"
                  className="checkmark-icon"
                />
                For $75 per month, we provide hosting, 24/7support, unlimited
                edits, and updates for life.
              </li>
              {/* <li><img src={PeriwinkleCheck} alt="Periwinkle Checkmark" className="checkmark-icon" />12 month commitment, after which you may opt for cancellation at any point.</li>
                            <li><img src={PeriwinkleCheck} alt="Periwinkle Checkmark" className="checkmark-icon" />On cancellation you own and keep your domain, but the code and design retain their proprietary status.</li>
                            <li><img src={PeriwinkleCheck} alt="Periwinkle Checkmark" className="checkmark-icon" />For just $75 per month, which includes hosting, 24/7support, unlimited edits, and updates for life.</li> */}
            </ul>
          </div>
          <div className="btn-container">
            <Button
              href="mailto:hekateknyc@gmail.com"
              text={"Get Started"}
            ></Button>
          </div>
        </div>
        <div className="pricing-card">
          <div className="pricing-ecomm-title">
            <p>ECOMM MODEL</p>
          </div>
          <div className="pricing-ecomm-amount">
            <p>INQUIRE BELOW</p>
          </div>
          <div className="white-line-coral"></div>
          <div className="pricing-checklist-items">
            <ul>
              <li>
                <img
                  src={CoralCheck}
                  alt="Checkmark"
                  className="checkmark-icon"
                />
                Optional custom-built CRM to streamline your business
                operations, starting at $500.
              </li>
              <li>
                <img
                  src={CoralCheck}
                  alt="Checkmark"
                  className="checkmark-icon"
                />
                For just $75 per month, which includes hosting, 24/7support,
                unlimited edits, and updates for life.
              </li>
              <li>
                <img
                  src={CoralCheck}
                  alt="Checkmark"
                  className="checkmark-icon"
                />
                Upon cancellation you own your domain and CRM, but the code and
                design retain their proprietary status.
              </li>
            </ul>
          </div>
          <div className="btn-container">
            <Button
              href="mailto:hekateknyc@gmail.com"
              text={"Get Started"}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingPlans
