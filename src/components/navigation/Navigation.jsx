import React, {useContext, useState, useEffect} from "react"
import ReactDOM from "react-dom"
import {NavbarContext} from "../../contexts/Navbar.context"
import {Link} from "react-router-dom"
import Burger from "./burger/Burger"
import Dropdown from "./dropdown/Dropdown"
import "./navigation.scss"

const Navigation = ({refs, onNavigate}) => {
  const {isMobileNavOpen, toggleMobileNav} = useContext(NavbarContext)

  const closeMobileNav = () => {
    toggleMobileNav()
  }

  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const hasScrolled = window.scrollY > 0
      setHasScrolledPastHero(hasScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`navigation-container ${
        hasScrolledPastHero ? "glassmorphism" : ""
      }`}
    >
      <Link className="nav-width">
        <Link className="navbar-item">
          <Link to="/">
            <h3>Hekatek</h3>
          </Link>
        </Link>
        <Link className="hamburger-icon">
          <Burger toggleMobileNav={toggleMobileNav} />
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/#about" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/#services" className="nav-links">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/#our-work" className="nav-links">
              Our Work
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pricing" className="nav-links">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
        </ul>
        {isMobileNavOpen && <Dropdown closeMobileNav={closeMobileNav} />}
      </Link>
    </nav>
  )
}

export default Navigation
