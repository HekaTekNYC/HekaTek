import Button from "../button/Button"
import {useCalendlyPopup} from "../../hooks/useCalendlyPopup"
import "./add-on-card.scss"

const AddOnCard = ({id, className, title, cost, subCost, costDesc, desc}) => {
  const openCalendlyPopup = useCalendlyPopup()
  return (
    <>
      <div className={`add-on-card ${className}`}>
        <div className="add-on-card-header header-text">
          <p className={`add-on-title ${className}`}>{title}</p>
          <h3 className="add-on-cost">
            {cost} <span className="add-on-cost-sub">{subCost}</span>
          </h3>
          <p>{costDesc}</p>
          <div className="add-on-white-line"></div>
          <p className="add-on-desc">{desc}</p>
        </div>

        <div className="add-on-btn-container">
          <Button
            text={"Get Started"}
            scrollToId={"contact"}
            onClick={openCalendlyPopup}
            btnType={"reverse"}
            width={"full"}
          />
        </div>
      </div>
    </>
  )
}

export default AddOnCard
