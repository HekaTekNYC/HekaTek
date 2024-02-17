import React, { useState, useEffect } from "react"; // Import useEffect
import "./navigation.scss";
import HamburgerIcon from '../../assets/icons/hamburger.svg';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Use useEffect to log the state change
  useEffect(() => {
    console.log("Menu open state: ", isMenuOpen);
  }, [isMenuOpen]); // Dependency array ensures this runs only when isMenuOpen changes
 
  return (
    <div className="navigation-container">
      <div className="logo">
        <a href="#hero">HekaTek</a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <img src={HamburgerIcon} alt="Menu" />
      </div>

      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <a className="nav-link" href="#hero">Home</a>
        <a className="nav-link" href="#our-work">Our Work</a>
        <a className="nav-link" href="#services">Services</a>
        <a className="nav-link" href="#about">About</a>
        <a className="nav-link" href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navigation;




// const Navigation = () => {
//   return (
//     <div className="navigation-container">
//       <div className="logo">
//         <a className="text-shadow" href="#hero">
//           {" "}
//           HekaTek
//         </a>
//       </div>
//       <div className="nav-links">
//         <a className="nav-link text-shadow" href="#hero">
//           Home
//         </a>
//         <a className="nav-link text-shadow" href="#our-work">
//           Our Work
//         </a>
//         <a className="nav-link text-shadow" href="#services">
//           Services
//         </a>

//         <a className="nav-link text-shadow" href="#about">
//           About
//         </a>
//         <a className="nav-link text-shadow" href="#contact">
//           Contact
//         </a>
//       </div>
//     </div>
//   )
// }

// export default Navigation

