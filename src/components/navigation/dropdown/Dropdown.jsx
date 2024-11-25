import React, {useContext} from "react"
import {Link} from "react-router-dom" // Import Link
import {NavbarContext} from "../../../contexts/Navbar.context"
import "./dropdown.scss"

const Dropdown = ({refs}) => {
  const {isMobileNavOpen, toggleMobileNav} = useContext(NavbarContext)

  const closeMobileNav = () => {
    toggleMobileNav()
  }

  return (
    <div className={`dropdown-container ${isMobileNavOpen ? "active" : ""}`}>
      <Link to="/" onClick={closeMobileNav} className="nav-link">
        Home
      </Link>
      <Link to="/about" onClick={closeMobileNav} className="nav-link">
        About
      </Link>
      <Link to="/services" onClick={closeMobileNav} className="nav-link">
        Services
      </Link>
      <Link to="/our-work" onClick={closeMobileNav} className="nav-link">
        Our Work
      </Link>
      <Link to="/pricing" onClick={closeMobileNav} className="nav-link">
        Pricing
      </Link>
      <Link to="/contact" onClick={closeMobileNav} className="nav-link">
        Contact
      </Link>
      <Link to="/faq" onClick={closeMobileNav} className="nav-link">
        FAQ
      </Link>
    </div>
  )
}

export default Dropdown
