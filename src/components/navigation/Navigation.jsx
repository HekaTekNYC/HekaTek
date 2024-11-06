import React, {useContext, useState, useEffect} from "react"
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
      <div className="nav-width">
        <div className="navbar-item">
          <Link to="/">
            <h3>HEKATEK</h3>
          </Link>
        </div>
        <div className="hamburger-icon">
          <Burger toggleMobileNav={toggleMobileNav} />
        </div>

        <ul className="nav-menu">
          <li className="nav-item">
            <div
              onClick={() => onNavigate(refs.aboutRef)}
              className="nav-links"
            >
              About
            </div>
          </li>
          <li className="nav-item">
            <div
              onClick={() => onNavigate(refs.servicesRef)}
              className="nav-links"
            >
              Services
            </div>
          </li>
          <li className="nav-item">
            <div
              onClick={() => onNavigate(refs.productsRef)}
              className="nav-links"
            >
              Our Work
            </div>
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
      </div>
    </nav>
  )
}

export default Navigation

// import React, {useContext, useState, useEffect} from "react"
// import {NavbarContext} from "../../contexts/Navbar.context"
// import {Link} from "react-router-dom"
// import Burger from "./burger/Burger"
// import Dropdown from "./dropdown/Dropdown"
// import "./navigation.scss"

// const Navigation = ({onNavigate, refs}) => {
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
//     <>
//       <nav
//         className={`navigation-container ${
//           hasScrolledPastHero ? "glassmorphism" : ""
//         }`}
//       >
//         <div className="nav-width">
//           <div className="navbar-item">
//             <h3 onClick={() => onNavigate(refs.homeRef)}>HEKATEK</h3>
//           </div>
//           <div className="hamburger-icon">
//             <Burger toggleMobileNav={toggleMobileNav} />
//           </div>

//           <ul className="nav-menu">
//             <li className="nav-item">
//               <div
//                 onClick={() => onNavigate(refs.aboutRef)}
//                 className="nav-links"
//               >
//                 About
//               </div>
//             </li>
//             <li className="nav-item">
//               <div
//                 onClick={() => onNavigate(refs.servicesRef)}
//                 className="nav-links"
//               >
//                 Services
//               </div>
//             </li>
//             <li className="nav-item">
//               <div
//                 onClick={() => onNavigate(refs.productsRef)}
//                 className="nav-links"
//               >
//                 Our Work
//               </div>
//             </li>
//             <li className="nav-item">
//               <div
//                 onClick={() => onNavigate(refs.pricingPlansRef)}
//                 className="nav-links"
//               >
//                 Pricing
//               </div>
//             </li>
//             <li className="nav-item">
//               <div
//                 onClick={() => onNavigate(refs.contactRef)}
//                 className="nav-links"
//               >
//                 Contact
//               </div>
//             </li>
//           </ul>
//           {isMobileNavOpen && (
//             <Dropdown
//               closeMobileNav={closeMobileNav}
//               refs={refs}
//               onNavigate={onNavigate}
//             />
//           )}
//         </div>
//       </nav>
//     </>
//   )
// }

// export default Navigation
