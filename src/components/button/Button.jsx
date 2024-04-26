import React from "react"
import { Link } from "react-router-dom" // Importing Link for internal navigation
import "./button.scss"

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

const Button = ({ text, href, type, scrollToId, btnType, width }) => {
  const buttonClass = `btn-${btnType === "solid" ? "solid" : "outline"}`
  const btnWidth = `btn-${width === "full" ? "full" : "short"}`

  if (scrollToId) {
    return (
      <div className={`${buttonClass} ${btnWidth}`}>
        <Link
          to={`/#${scrollToId}`}
          onClick={() => scrollToSection(scrollToId)}
        >
          {text}
        </Link>
      </div>
    )
  }

  if (href) {
    return (
      <div className={`${buttonClass} ${btnWidth}`}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      </div>
    )
  } else {
    const buttonType = type || "button"
    return (
      <button
        type={buttonType}
        className={`${buttonClass} ${btnWidth} btn-over`}
      >
        {text}
      </button>
    )
  }
}

// throw new Error("Button requires 'href', 'scrollToId', or 'type=\"submit\"'.")

export default Button
