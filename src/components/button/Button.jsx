import React from "react"
import "./button.scss"

const Button = ({ text, href, btnType }) => {
  const buttonClass = `btn-${btnType === "solid" ? "solid" : "outline"} `

  return (
    <div className={buttonClass}>
      <a href={href} target="_blank">
        {text}
      </a>
    </div>
  )
}

export default Button
