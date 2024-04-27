import React, { useContext, useState, useEffect } from "react"
import { Outlet, Link } from "react-router-dom"

import Burger from "./burger/Burger"
import Dropdown from "./dropdown/Dropdown"

import { NavbarContext } from "../../contexts/Navbar.context"

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

// import React, { useState, useEffect, useRef } from "react"
// import Dropdown from "./dropdown/Dropdown"
// import { Link } from "react-router-dom"

// import "./navigation.scss"

// const Navigation = () => {
//   // const [isMenuOpen, setIsMenuOpen] = useState(false)
//   // const navRef = useRef(null)
//   const [click, setClick] = useState(false)

//   const handleClick = () => setClick(!click)
//   const closeMobileMenu = () => setClick(false)

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id)
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" })
//       closeMobileMenu()
//     }
//   }

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" })
//     closeMobileMenu()
//   }

//   // useEffect(() => {
//   //   const handleClickOutside = (event) => {
//   //     if (navRef.current && !navRef.current.contains(event.target)) {
//   //       setIsMenuOpen(false)
//   //     }
//   //   }

//   //   document.addEventListener("mousedown", handleClickOutside)
//   //   return () => {
//   //     document.removeEventListener("mousedown", handleClickOutside)
//   //   }
//   // }, [navRef])

//   return (
//     <nav className={`navigation-container`}>
//       <Link to="/" className="navbar-logo" onClick={scrollToTop}>
//         HEKATEK
//       </Link>
//       <div className="hamburger-container" onClick={handleClick}>
//         <svg
//           id="hamburger"
//           className={`burger-svg ${click ? "active" : ""}`}
//           viewBox="0 0 45 45"
//         >
//           <g
//             stroke="#444d82"
//             strokeWidth="1"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path id="top-line" d="M10,10 L35,10 Z"></path>
//             <path id="middle-line" d="M10,20 L35,20 Z"></path>
//             <path id="bottom-line" d="M10,30 L35,30 Z"></path>
//           </g>
//         </svg>
//       </div>

//       <ul className={click ? "dropdown active nav-menu" : "dropdown nav-menu"}>
//         <li className="nav-item drop-item">
//           <Link
//             to="/#about"
//             onClick={() => scrollToSection("about")}
//             className="nav-links drop-links"
//           >
//             About
//           </Link>
//         </li>
//         <li className="nav-item drop-item">
//           <Link
//             to="/#services"
//             onClick={() => scrollToSection("services")}
//             className="nav-links drop-links"
//           >
//             Services
//           </Link>
//         </li>
//         <li className="nav-item drop-item">
//           <Link
//             to="/#our-work"
//             onClick={() => scrollToSection("our-work")}
//             className="nav-links drop-links"
//           >
//             Our Work
//           </Link>
//         </li>
//         <li className="nav-item drop-item">
//           <Link
//             to="/#pricing"
//             onClick={() => scrollToSection("pricing")}
//             className="nav-links drop-links"
//           >
//             Pricing
//           </Link>
//         </li>
//         <li className="nav-item drop-item">
//           <Link
//             to="/#contact"
//             onClick={() => scrollToSection("contact")}
//             className="nav-links drop-links"
//           >
//             Contact
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   )
// }

// export default Navigation
