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
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/work" className="nav-links">
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
          <li className="nav-item">
            <Link to="/faq" className="nav-links">
              FAQ
            </Link>
          </li>
        </ul>
        {isMobileNavOpen && <Dropdown closeMobileNav={closeMobileNav} />}
      </Link>
    </nav>
  )
}

export default Navigation

// import React, {useContext, useState, useEffect} from "react"
// import {Link} from "react-router-dom"
// import {NavbarContext} from "../../contexts/Navbar.context"
// import Burger from "./burger/Burger"
// import Dropdown from "./dropdown/Dropdown"
// import "./navigation.scss"

// const Navigation = ({refs, onNavigate}) => {
//   const {isMobileNavOpen, toggleMobileNav} = useContext(NavbarContext)

//   const closeMobileNav = () => {
//     toggleMobileNav()
//   }

//   const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       const hasScrolled = window.scrollY > 0
//       setHasScrolledPastHero(hasScrolled)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <nav
//       className={`navigation-container ${
//         hasScrolledPastHero ? "glassmorphism" : ""
//       }`}
//     >
//       <div className="nav-width">
//         <Link to="/" className="navbar-item">
//           <h3>Hekatek</h3>
//         </Link>
//         <div className="hamburger-icon">
//           <Burger toggleMobileNav={toggleMobileNav} />
//         </div>
//         <ul className="nav-menu">
//           {[
//             "Home",
//             "About",
//             "Services",
//             "Our Work",
//             "Pricing",
//             "Contact",
//             "FAQ",
//           ].map(item => (
//             <li className="nav-item" key={item}>
//               <Link
//                 to={`/${item.toLowerCase()}`}
//                 className="nav-links"
//                 onClick={closeMobileNav}
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </ul>
//         {isMobileNavOpen && <Dropdown closeMobileNav={closeMobileNav} />}
//       </div>
//     </nav>
//   )
// }

// export default Navigation
