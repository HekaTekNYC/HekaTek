import React from "react"
import { Link } from "react-router-dom"
import "./navigation.scss"

const Navigation = () => {
  return (
    <div className="navigation-container navbar">
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
        <a className="nav-link text-shadow" href="#projects">
          Projects
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
