import React, {useContext} from "react"
import {NavbarContext} from "../../../contexts/Navbar.context"
import "./dropdown.scss"

const Dropdown = ({onNavigate, refs}) => {
  const {isMobileNavOpen, toggleMobileNav} = useContext(NavbarContext)

  const closeMobileNav = () => {
    toggleMobileNav()
  }

  return (
    <div className={`dropdown-container ${isMobileNavOpen ? "active" : ""}`}>
      <div
        onClick={() => {
          onNavigate(refs.aboutRef)
          closeMobileNav()
        }}
        className="nav-link"
      >
        About
      </div>
      <div
        onClick={() => {
          onNavigate(refs.servicesRef)
          closeMobileNav()
        }}
        className="nav-link"
      >
        Services
      </div>
      <div
        onClick={() => {
          onNavigate(refs.productsRef)
          closeMobileNav()
        }}
        className="nav-link"
      >
        Our Work
      </div>
      <div
        onClick={() => {
          onNavigate(refs.pricingPlansRef)
          closeMobileNav()
        }}
        className="nav-link"
      >
        Pricing
      </div>
      <div
        onClick={() => {
          onNavigate(refs.contactRef)
          closeMobileNav()
        }}
        className="nav-link"
      >
        Contact
      </div>
    </div>
  )
}

export default Dropdown
