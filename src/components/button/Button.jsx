import React from "react"
import "./button.scss"

const Button = ({ text, link, type }) => {
  const buttonProps = {}

  if (type) {
    buttonProps.type = type
  }

  if (link) {
    buttonProps.href = link
  }
  return (
    <div className="button-33">
      <a {...buttonProps} target="_blank">
        {text}
      </a>
    </div>
  )
}

export default Button
