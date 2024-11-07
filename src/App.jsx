import React, {useState, useRef} from "react"
// import ReactDOM from "react-dom"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navigation from "./components/navigation/Navigation"
import HomePage from "./routes/home/HomePage"
import AboutSection from "./sections/about-section/AboutSection"
import ServicesSection from "./sections/services-section/ServicesSection"
import ProductsSection from "./sections/products-section/ProductsSection"
import WhyUsSection from "./sections/why-us-section/WhyUsSection"
import PricingPage from "./routes/pricing/PricingPage"
import ContactPage from "./routes/contact/ContactPage"
import Footer from "./components/footer/Footer"
import "./index.scss"

const App = () => {
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const productsRef = useRef(null)

  const handleNavigation = ref => {
    if (ref.current) {
      const yOffset = -70
      const y =
        ref.current.getBoundingClientRect().top + window.scrollY + yOffset

      window.scrollTo({top: y, behavior: "smooth"})

      setHistory(prevHistory => {
        const updatedHistory = updateNavigationHistory(
          prevHistory,
          ref.current.id
        )
        return updatedHistory
      })
    }
  }

  return (
    <Router>
      <Navigation onNavigate={handleNavigation} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/our-work" element={<ProductsSection />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App

// import React, {useState, useRef} from "react"
// import ReactDOM from "react-dom"
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import Navigation from "./components/navigation/Navigation"
// import Home from "./routes/home/Home"
// import About from "./routes/about/About"
// import Services from "./routes/services/Services"
// import Products from "./routes/products/Products"
// import WhyUs from "./routes/why-us/WhyUs"
// import PricingPlans from "./routes/pricing-plans/PricingPlans"
// import Contact from "./routes/contact/Contact"
// import ContactPage from "./routes/contact/ContactPage"
// import Footer from "./components/footer/Footer"
// import {updateNavigationHistory} from "./components/history/historyTracker"
// import "./index.scss"

// const App = () => {
//   const [history, setHistory] = useState([])
//   const homeRef = useRef(null)
//   const aboutRef = useRef(null)
//   const servicesRef = useRef(null)
//   const productsRef = useRef(null)
//   const whyUsRef = useRef(null)
//   const pricingPlansRef = useRef(null)
//   const contactRef = useRef(null)

//   const handleNavigation = ref => {
//     if (ref.current) {
//       const yOffset = -70
//       const y =
//         ref.current.getBoundingClientRect().top + window.scrollY + yOffset

//       window.scrollTo({top: y, behavior: "smooth"})

//       setHistory(prevHistory => {
//         const updatedHistory = updateNavigationHistory(
//           prevHistory,
//           ref.current.id
//         )
//         return updatedHistory
//       })
//     }
//   }

//   return (
//     <>

//       <Navigation
//         onNavigate={handleNavigation}
//         refs={{
//           homeRef,
//           aboutRef,
//           servicesRef,
//           productsRef,
//           whyUsRef,
//           pricingPlansRef,
//           contactRef,
//         }}
//       />
//       <main>
//         <div ref={homeRef} id="home">
//           <Home />
//         </div>
//         <div ref={aboutRef} id="about" className="about-section">
//           <About />
//         </div>
//         <div ref={servicesRef} id="services" className="services-section">
//           <Services />
//         </div>
//         <div ref={productsRef} id="our-work" className="product-section">
//           <Products />
//         </div>
//         <div id="why-us" className="why-us-section">
//           <WhyUs />
//         </div>
//         <div
//           ref={pricingPlansRef}
//           id="pricing-plans"
//           className="pricing-section"
//         >
//           <PricingPlans />
//         </div>
//         <div ref={contactRef} id="contact" className="contact-section">
//           <Contact />
//         </div>
//       </main>
//       <Footer />
//     </>
//   )
// }

// export default App
