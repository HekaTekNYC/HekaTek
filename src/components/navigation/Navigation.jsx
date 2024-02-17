import React from "react"
import "./navigation.scss"

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="logo">
        <a className="text-shadow" href="#hero">
          {" "}
          HekaTek
        </a>
      </div>
      <div className="nav-links">
        <a className="nav-link text-shadow" href="#hero">
          Home
        </a>
        <a className="nav-link text-shadow" href="#our-work">
          Our Work
        </a>
        <a className="nav-link text-shadow" href="#services">
          Services
        </a>

        <a className="nav-link text-shadow" href="#about">
          About
        </a>
        <a className="nav-link text-shadow" href="#contact">
          Contact
        </a>
      </div>
    </div>
  )
}

export default Navigation


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './navigation.scss';

// const Navigation = () => {
//   const [activeSection, setActiveSection] = useState('');
  
//   useEffect(() => {
//     const sections = ['hero', 'our-work', 'about', 'contact'];
//     const observers = sections.map((id) => {
//       const el = document.getElementById(id);
//       const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(id);
//           }
//         });
//       }, { threshold: 0.5 }); // Adjust threshold as needed

//       if (el) observer.observe(el);
//       return observer;
//     });

//     return () => {
//       observers.forEach((observer) => observer.disconnect());
//     };
//   }, []);

//   return (
//     <div className="navigation-container">
//       <div className="logo">
//         <Link className={activeSection === 'hero' ? 'active text-shadow' : 'text-shadow'} to="/hero id='#hero'>
//           HekaTek
//         </Link>
//       </div>
//       <div className="nav-links">
     
//         <Link className={activeSection === 'our-work' ? 'nav-link active text-shadow' : 'nav-link text-shadow'} to="/our-work">
//           Our Work
//         </Link>
//         <Link className={activeSection === 'our-work' ? 'nav-link active text-shadow' : 'nav-link text-shadow'} to="/services">
//           Services
//         </Link>
//         <Link className={activeSection === 'about' ? 'nav-link active text-shadow' : 'nav-link text-shadow'} to="/about">
//           About
//         </Link>
//         <Link className={activeSection === 'contact' ? 'nav-link active text-shadow' : 'nav-link text-shadow'} to="/contact">
//           Contact
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navigation;

