import {useContext} from "react"
import {NavLink} from "react-router-dom"
import {NavbarContext} from "../../../contexts/Navbar.context"
import Button from "../../button/Button"

import "./dropdown.scss"

const Dropdown = () => {
  const {isMobileNavOpen, toggleMobileNav} = useContext(NavbarContext)

  const closeMobileNav = () => {
    toggleMobileNav()
  }

  return (
    <div className={`dropdown-container ${isMobileNavOpen ? "active" : ""}`}>
      <NavLink
        to="/"
        onClick={closeMobileNav}
        className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}
      >
        Home
      </NavLink>

      <NavLink
        to="/services"
        onClick={closeMobileNav}
        className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}
      >
        Services
      </NavLink>

      <NavLink
        to="/work"
        onClick={closeMobileNav}
        className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}
      >
        Our Work
      </NavLink>

      <NavLink
        to="/pricing"
        onClick={closeMobileNav}
        className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}
      >
        Pricing
      </NavLink>

      <NavLink
        to="/contact"
        onClick={closeMobileNav}
        className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}
      >
        Contact
      </NavLink>

      <NavLink
        to="/faq"
        onClick={closeMobileNav}
        className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}
      >
        FAQ
      </NavLink>
      <div className="nav-btn-drop">
        <Button
          text={"Free Site Audit"}
          to={"/free-audit"}
          btnType={"solid"}
          width={"short"}
          onClick={closeMobileNav}
        />
      </div>
    </div>
  )
}

export default Dropdown
