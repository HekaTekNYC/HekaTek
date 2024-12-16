import {useContext, useState, useEffect} from "react"
import {NavbarContext} from "../../contexts/Navbar.context"
import {NavLink} from "react-router-dom"
import Burger from "./burger/Burger"
import Dropdown from "./dropdown/Dropdown"

import "./navigation.scss"

const Navigation = () => {
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
      <div className="nav-width">
        <div className="navbar-item">
          <NavLink
            to="/"
            className={({isActive}) => (isActive ? "active" : "")}
            end
          >
            <h3>Hekatek</h3>
          </NavLink>
        </div>
        <div className="hamburger-icon">
          <Burger toggleMobileNav={toggleMobileNav} />
        </div>

        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({isActive}) =>
                `nav-links ${isActive ? "active" : ""}`
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/services"
              className={({isActive}) =>
                `nav-links ${isActive ? "active" : ""}`
              }
            >
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/work"
              className={({isActive}) =>
                `nav-links ${isActive ? "active" : ""}`
              }
            >
              Our Work
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/pricing"
              className={({isActive}) =>
                `nav-links ${isActive ? "active" : ""}`
              }
            >
              Pricing
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className={({isActive}) =>
                `nav-links ${isActive ? "active" : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/faq"
              className={({isActive}) =>
                `nav-links ${isActive ? "active" : ""}`
              }
            >
              FAQ
            </NavLink>
          </li>
        </ul>
        {isMobileNavOpen && <Dropdown closeMobileNav={closeMobileNav} />}
      </div>
    </nav>
  )
}

export default Navigation
