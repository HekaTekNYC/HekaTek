import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./routes/home/Home"
import Projects from "./routes/projects/Projects"
import About from "./routes/about/About"
import Contact from "./routes/contact/Contact"
import Navigation from "./components/navigation/Navigation"

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  )
}
export default App

// import React from 'react';
// import { useSpring, animated } from 'react-spring';

// import { useSpring } from 'react-spring';

// const YourComponent = () => {
//   const normalBoxShadow = '0 0 5px rgba(0, 0, 0, 0.2)';
//   const hoverBoxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';

//   const springProps = useSpring({
//     transform: 'scale(1)',
//     boxShadow: normalBoxShadow,
//     onHover: {
//       transform: 'scale(1.2)',
//       boxShadow: hoverBoxShadow,
//     },
//   });

//   return (
//     <animated.div style={springProps}>
//       {/* Your component content */}
//     </animated.div>
//   );
// };

// export default YourComponent;
