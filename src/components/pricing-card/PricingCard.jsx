import React, {useState, useEffect} from "react"
import Button from "../button/Button"
import Modal from "../../components/calendly-modal/Modal"
import "./pricing-card.scss"

const PricingCard = ({
  id,
  className,
  title,
  cost,
  subCost,
  desc,
  fee,
  subFee,
  checkList,
  gem,
}) => {
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
      <div className={`pricing-card ${className}`}>
        {gem && (
          <div className="pricing-card-image">
            <img src={gem} alt="purple gem" />
          </div>
        )}
        <div className="pricing-card-header">
          <p className={`pricing-plan-title ${className}`}>{title}</p>
          <h3 className="pricing-plan-cost">
            {cost} <span className="pricing-plan-cost-sub">{subCost}</span>
          </h3>
          <p>{desc}</p>
          <div className="pricing-white-line"></div>
          <h3 className="pricing-plan-extra-fee">
            {fee} <span className="pricing-plan-extra-sub">{subFee}</span>
          </h3>
        </div>
        <div className="pricing-half">
          <ul className="pricing-checklist-items">
            {checkList.map((item, index) => (
              <li key={index} className="checklist">
                <img src={item.img} alt={item.alt} className="checkmark-icon" />
                {item.text}
              </li>
            ))}
          </ul>
        </div>
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
    </>
  )
}

export default PricingCard
