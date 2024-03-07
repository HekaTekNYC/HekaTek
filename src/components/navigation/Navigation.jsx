import React, { useState, useEffect, useRef } from "react"
import "./navigation.scss"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [navRef])

  useEffect(() => {}, [isMenuOpen])

  return (
    <div
      className={`navigation-container ${
        isMenuOpen ? "no-shadow" : "nav-shadow"
      }`}
      ref={navRef}
    >
      <a href="#home" className="logo">
        HEKATEK
      </a>
      <div
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <svg viewBox="0 0 45 45">
          <g
            stroke="#38373c"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              className={`line top-line ${isMenuOpen ? "inactive" : ""}`}
              d="M10,10 L35,10"
            ></path>
            <path
              className={`line middle-line ${isMenuOpen ? "inactive" : ""}`}
              d="M10,20 L35,20"
            ></path>
            <path
              className={`line bottom-line ${isMenuOpen ? "inactive" : ""}`}
              d="M10,30 L35,30"
            ></path>

            {isMenuOpen && (
              <>
                <path className="line top-x" d="M7,10 L33,30"></path>
                <path className="line bottom-x" d="M7,30 L33,10"></path>
              </>
            )}
          </g>
        </svg>
      </div>

      <div className={`nav-links ${isMenuOpen ? "dropdown" : ""}`}>
        <a href="#services" onClick={closeMenu}>
          SERVICES
        </a>

        <a href="#our-work" onClick={closeMenu}>
          OUR WORK
        </a>

        <a href="#contact" onClick={closeMenu}>
          CONTACT
        </a>
      </div>
    </div>
  )
}

export default Navigation
