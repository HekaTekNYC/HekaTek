import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navigation from "./components/navigation/Navigation"
import Home from "./routes/home/Home"
import About from "./routes/about/About"
import Services from "./routes/services/Services"
import Products from "./routes/products/Products"
import WhyUs from "./routes/why-us/WhyUs"
import PricingPlans from "./routes/pricing-plans/PricingPlans"
import ContactForm from "./components/contact-form/ContactForm"
import Footer from "./components/footer/Footer"
import "./assets/fonts/bebas-neue.woff2"
import "./index.scss"

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" id="hero-section" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-work" element={<Products />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/pricing-plans" element={<PricingPlans />} />
        <Route path="/contact" id="contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App
