import React from "react"
import "./button.scss"

const Button = ({ text, href, type, btnType, width }) => {
  const buttonProps = {}
  const buttonClass = `btn-${btnType === "solid" ? "solid" : "outline"}`
  const btnWidth = `btn-${width === "full" ? "full" : "short"}`
  if (type) {
    buttonProps.type = type
  }
  if (href) {
    buttonProps.href = href
  }

  return (
    <div className={`${buttonClass} ${btnWidth}`}>
      <a {...buttonProps} target="_blank">
        {text}
      </a>
    </div>
  )
}

export default Button
