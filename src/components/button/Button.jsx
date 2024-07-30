import React from "react"
import "./button.scss"

const scrollToSection = id => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({behavior: "smooth"})
  }
}

const Button = ({
  text = "",
  href = "",
  type = "button",
  scrollToId,
  onClick,
  btnType = "outline",
  width = "short",
  active = "",
}) => {
  const buttonClass = `btn-${
    btnType === "solid" ? "solid" : "outline"
  } btn-${width} ${active}`
  const btnWidth = `btn-${width === "full" ? "full" : "short"}`

  if (scrollToId) {
    return (
      <div
        className={`${buttonClass} ${btnWidth}`}
        onClick={onClick || (() => scrollToSection(scrollToId))}
      >
        {text}
      </div>
    )
  }

  if (href) {
    return (
      <div className={`${buttonClass} ${btnWidth}`}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {text}
        </a>
      </div>
    )
  }

  // Standard button
  const buttonType = type || "button"
  return (
    <button
      type={buttonType}
      className={`${buttonClass} ${btnWidth}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
