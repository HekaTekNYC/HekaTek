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
        About
      </NavLink>

      <NavLink
        to="/work"
        onClick={closeMobileNav}
        className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}
      >
        Our Work
      </NavLink>

      <NavLink
        to="/work-with-us"
        onClick={closeMobileNav}
        className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}
      >
        Services
      </NavLink>

      <NavLink
        to="/contact"
        onClick={closeMobileNav}
        className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}
      >
        Contact
      </NavLink>

      <div className="nav-btn-drop">
        <Button
          text={"Free Site Review"}
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
