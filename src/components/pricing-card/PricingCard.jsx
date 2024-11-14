import React, {useState, useEffect} from "react"
import Button from "../button/Button"
import {useCalendlyPopup} from "../../hooks/useCalendlyPopup"
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
  const openCalendlyPopup = useCalendlyPopup()
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
