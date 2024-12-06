import React from "react"
import {useNavigate} from "react-router-dom"
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
  active = false,
  to = "",
}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (onClick) {
      onClick()
    }

    if (scrollToId) {
      scrollToSection(scrollToId)
    } else if (to) {
      navigate(to)
    }
  }
  const buttonClass = `btn-${btnType}  ${active ? "active" : ""}`
  const btnWidth = `btn-${width === "full" ? "full" : "short"}`

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

  // Standard button or scroll/navigation button
  return (
    <button
      type={type}
      className={`${buttonClass} ${btnWidth}`}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default Button
