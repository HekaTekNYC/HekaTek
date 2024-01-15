import React from "react"
import { Link } from "react-router-dom"
import "./navigation.scss"

const Navigation = () => {
  return (
    <div className="navigation-container navbar">
      <div className="logo">
        <Link className="text-shadow" to="/">
          HekaTek{" "}
        </Link>
      </div>
      <div className="nav-links">
        <a className="nav-link">
          <Link className="text-shadow" to="/">
            Home
          </Link>
        </a>
        <a className="nav-link">
          <Link className="text-shadow" to="/#projects">
            Projects
          </Link>
        </a>

        <a className="nav-link">
          <Link className="text-shadow" to="/#about">
            About
          </Link>
        </a>
        <a className="nav-link">
          <Link className="text-shadow" to="/#contact">
            Contact
          </Link>
        </a>
      </div>
    </div>
  )
}

export default Navigation
