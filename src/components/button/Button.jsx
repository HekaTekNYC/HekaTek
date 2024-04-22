import React from "react"
import "./button.scss"

const Button = ({ text, href, type, btnType }) => {
  const buttonProps = {}
  const buttonClass = `btn-${btnType === "solid" ? "solid" : "outline"} `
  if (type) {
    buttonProps.type = type
  }
  if (href) {
    buttonProps.href = href
  }

  return (
    <div className={buttonClass}>
      <a {...buttonProps} target="_blank">
        {text}
      </a>
    </div>
  )
}

export default Button
