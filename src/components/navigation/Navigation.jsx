import React from "react"
import "./navigation.scss"

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="logo">
        <a className="text-shadow" href="#hero">
          {" "}
          HekaTek
        </a>
      </div>
      <div className="nav-links">
        <a className="nav-link text-shadow" href="#hero">
          Home
        </a>
        <a className="nav-link text-shadow" href="#our-work">
          Our Work
        </a>

        <a className="nav-link text-shadow" href="#about">
          About
        </a>
        <a className="nav-link text-shadow" href="#contact">
          Contact
        </a>
      </div>
    </div>
  )
}

export default Navigation
