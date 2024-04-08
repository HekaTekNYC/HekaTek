import React from "react"
import "./button.scss"

const Button = ({ text, href, type }) => {
  const buttonProps = {}

  if (type) {
    buttonProps.type = type
  }

  if (href) {
    buttonProps.href = href
  }

  return (
    <div className="button-33">
      {" "}
      <a {...buttonProps} target="_blank">
        {" "}
        {text}
      </a>{" "}
    </div>
  )
}

export default Button
