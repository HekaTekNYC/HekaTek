import React from "react"
import { Link } from "react-router-dom"
import "./navigation.scss"

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="logo">HekaTek</div>
      <div className="nav-links">
        <a className="nav-link">
          <Link to="/">Home</Link>
        </a>
        <a className="nav-link">
          <Link to="/#projects">Projects</Link>
        </a>

        <a className="nav-link">
          <Link to="/#about">About</Link>
        </a>
        <a className="nav-link">
          <Link to="/#contact">Contact</Link>
        </a>
      </div>
    </div>
  )
}

export default Navigation
