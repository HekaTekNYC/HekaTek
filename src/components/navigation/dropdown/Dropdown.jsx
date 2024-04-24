import React, { useContext } from "react"

import { Link } from "react-router-dom"
import { NavbarContext } from "../../../contexts/Navbar.context"

import "./dropdown.scss"

const Dropdown = () => {
  const { isMobileNavOpen, setIsMobileNavOpen, toggleMobileNav } =
    useContext(NavbarContext)

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      closeMobileNav()
    }
  }

  return (
    <>
      <div className={`dropdown-container ${isMobileNavOpen ? "active" : ""}`}>
        <Link
          to="/#about"
          onClick={() => {
            toggleMobileNav()
            scrollToSection("about")
          }}
          className="nav-link"
        >
          About
        </Link>
        <Link
          to="/#services"
          onClick={() => {
            toggleMobileNav()
            scrollToSection("services")
          }}
          className="nav-link"
        >
          Services
        </Link>
        <Link
          to="/#our-work"
          onClick={() => {
            toggleMobileNav()
            scrollToSection("our-work")
          }}
          className="nav-link"
        >
          Our Work
        </Link>
        <Link
          to="/#pricing"
          onClick={() => {
            toggleMobileNav()
            scrollToSection("pricing")
          }}
          className="nav-link"
        >
          Pricing
        </Link>
        <Link
          to="/#contact"
          onClick={() => {
            toggleMobileNav()
            scrollToSection("contact")
          }}
          className="nav-link"
        >
          Contact
        </Link>
      </div>
    </>
  )
}

export default Dropdown
