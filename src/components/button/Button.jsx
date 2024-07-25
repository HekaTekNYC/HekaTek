import React from "react"
import {Link} from "react-router-dom"
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

  console.log("Button Props:", {
    text,
    href,
    type,
    scrollToId,
    onClick,
    btnType,
    width,
    active,
  })
  console.log("Button Class:", buttonClass)
  console.log("Button Width Class:", btnWidth)

  if (scrollToId) {
    return (
      <div className={`${buttonClass} ${btnWidth}`}>
        <Link
          to={`/#${scrollToId}`}
          onClick={onClick || (() => scrollToSection(scrollToId))}
        >
          {text}
        </Link>
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
