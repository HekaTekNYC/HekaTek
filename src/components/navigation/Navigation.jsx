import React, { useContext, useState, useEffect } from "react"
import { Outlet, Link } from "react-router-dom"

import { NavbarContext } from "../../contexts/Navbar.context"
import Burger from "./burger/Burger"
import Dropdown from "./dropdown/Dropdown"

import "./navigation.scss"

const Navigation = () => {
  const { isMobileNavOpen, toggleMobileNav, setMobileNavOpen } =
    useContext(NavbarContext)

  const closeMobileNav = () => {
    toggleMobileNav()
  }

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      closeMobileNav()
    }
  }

  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false)

  useEffect(() => {
    const navbar = document.querySelector(".navigation-container")
    navbar.classList.add("scrolled-past-hero")

    const handleScroll = () => {
      const hasScrolled = window.pageYOffset > 0
      setHasScrolledPastHero(hasScrolled)

      if (hasScrolled) {
        navbar.classList.add("scrolled-past-hero")
      } else {
        navbar.classList.remove("scrolled-past-hero")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <nav
        className={`navigation-container ${
          hasScrolledPastHero ? "glassmorphism" : ""
        }`}
      >
        <Link to="/" className="navbar-logo">
          <h3>HEKATEK</h3>
        </Link>
        <div className="hamburger-icon">
          <Burger toggleMobileNav={toggleMobileNav} />
        </div>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link
              to="/#about"
              onClick={() => scrollToSection("about")}
              className="nav-links"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/#services"
              onClick={() => scrollToSection("services")}
              className="nav-links"
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/#our-work"
              onClick={() => scrollToSection("our-work")}
              className="nav-links"
            >
              Our Work
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/#pricing"
              onClick={() => scrollToSection("pricing")}
              className="nav-links"
            >
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/#contact"
              onClick={() => scrollToSection("contact")}
              className="nav-links"
            >
              Contact
            </Link>
          </li>
        </ul>
        {isMobileNavOpen && <Dropdown closeMobileNav={closeMobileNav} />}
      </nav>
      <Outlet />
    </>
  )
}

export default Navigation
