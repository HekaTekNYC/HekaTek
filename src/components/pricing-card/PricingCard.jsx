import {useLocation} from "react-router-dom"
import {useCalendlyPopup} from "../../hooks/useCalendlyPopup"

import Button from "../button/Button"

import "./pricing-card.scss"

const PricingCard = ({
  id,
  className,
  title,
  cost,
  sale,
  subCost,
  desc,
  fee,
  subFee,
  checkList,
  gem,
}) => {
  const openCalendlyPopup = useCalendlyPopup()
  const location = useLocation()

  const isPricingPage = location.pathname === "/pricing"
  return (
    <>
      <div className={`pricing-card ${className}`}>
        {gem && (
          <div className="pricing-card-image">
            <img
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              src={gem}
              alt="purple gem"
              height="155"
              width="155"
            />
          </div>
        )}
        <div className="pricing-card-header">
          <p className={`pricing-plan-title ${className}`}>{title}</p>
          <h3 className="pricing-plan-cost">
            {sale ? (
              <>
                {sale}
                <span className="pricing-plan-cost-sub">{subCost}</span>
                <span className="strike"> {cost}</span>
              </>
            ) : (
              <>
                {cost}
                <span className="pricing-plan-cost-sub">{subCost}</span>
              </>
            )}
          </h3>
          <p>{desc}</p>
          <div className="pricing-white-line"></div>
          <h3 className="pricing-plan-extra-fee">
            {fee} <span className="pricing-plan-extra-sub">{subFee}</span>
          </h3>
        </div>
        <div className="pricing-half">
          <ul className={`pricing-checklist-items ${className}`}>
            {checkList.map((item, index) => (
              <li key={index} className="checklist">
                <img src={item.img} alt={item.alt} className="checkmark-icon" />
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="pricing-btn-container">
          {isPricingPage ? (
            <Button
              text={"Get Started"}
              onClick={openCalendlyPopup}
              btnType={"outline"}
              width={"full"}
            />
          ) : (
            <Button
              text={"View Plans"}
              to={"/pricing"}
              btnType={"outline"}
              width={"full"}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default PricingCard
