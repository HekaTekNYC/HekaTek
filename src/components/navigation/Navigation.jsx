import React, { useState, useEffect } from "react"
import HamburgerIcon from "../../assets/icons/hamburger.svg"
import "./navigation.scss"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    console.log("Menu open state: ", isMenuOpen)
  }, [isMenuOpen])

  return (
    <div
      className={`navigation-container ${
        isMenuOpen ? "no-shadow" : "nav-shadow"
      }`}
    >
      <a href="#hero" className="logo">
        HEKATEK
      </a>
      <div className="hamburger" onClick={toggleMenu}>
        {/* <img src={HamburgerIcon} alt="Menu" loading="lazy" decoding="async" /> */}
        <svg viewBox="0 0 45 45">
          <g
            stroke="#38373c"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path id="top-line" d="M10,10 L35,10 Z"></path>
            <path id="middle-line" d="M10,20 L35,20 Z"></path>
            <path id="bottom-line" d="M10,30 L35,30 Z"></path>
          </g>
        </svg>
      </div>

      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <a className="nav-link" href="#services">
          SERVICES
        </a>
        <a className="nav-link" href="#our-work">
          OUR WORK
        </a>

        <a className="nav-link" href="#contact">
          CONTACT
        </a>
      </div>
    </div>
  )
}

export default Navigation
