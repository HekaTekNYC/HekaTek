import React, {useState, useRef} from "react"
// import ReactDOM from "react-dom"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navigation from "./components/navigation/Navigation"
import HomePage from "./routes/home/HomePage"
import ServicesPage from "./routes/services/ServicesPage"
import ProductsPage from "./routes/products/ProductsPage"
import PricingPage from "./routes/pricing/PricingPage"
import AboutPage from "./routes/about/AboutPage"
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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/our-work" element={<ProductsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
