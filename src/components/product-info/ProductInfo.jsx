import React from "react"
import Button from "../button/Button"
import "./product-info.scss"

const ProductInfo = ({ name, desc, info, aLink, btn }) => {
  return (
    <div className="product-info-container">
      <h3 className="product-info-header">{name}</h3>
      <h5 className="product-info-subheader">{desc}</h5>
      <p>{info}</p>
      <div className="product-info-btn">
        <Button text={btn} href={aLink} btnType={"outline"} />
      </div>
    </div>
  )
}

export default ProductInfo
