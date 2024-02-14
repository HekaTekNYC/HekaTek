// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./routes/home/Home";
// import Products from "./routes/products/Products";
// import Services from "./routes/services/Services";
// import About from "./routes/about/About";
// import ContactForm from "./components/contact-form/ContactForm";
// import Navigation from "./components/navigation/Navigation";

// const App = () => {
//   const [showSections, setShowSections] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const lastSectionPosition = document.getElementById("last-section").offsetTop;

//       // Check if scrolled past last section
//       if (scrollPosition + windowHeight >= lastSectionPosition) {
//         setShowSections(true);
//       } else {
//         setShowSections(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <Router>
//       <Navigation />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/our-work"
//           element={showSections ? <Products /> : null} // Render Products only if showSections is true
//         />
//         <Route
//           path="/services"
//           element={showSections ? <Services /> : null} // Render Services only if showSections is true
//         />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<ContactForm />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./routes/home/Home"
import Products from "./routes/products/Products"
import Services from "./routes/services/Services"
import About from "./routes/about/About"
import ContactForm from "./components/contact-form/ContactForm"
import Navigation from "./components/navigation/Navigation"

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-work" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  )
}
export default App
