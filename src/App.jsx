import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./routes/home/Home"
import About from "./routes/about/About"
import Products from "./routes/products/Products"
import PricingPlans from "./routes/pricing-plans/PricingPlans"
import Services from "./routes/services/Services"
// import WhyUs from './routes/why-us/WhyUs'
import ContactForm from "./components/contact-form/ContactForm"
import Navigation from "./components/navigation/Navigation"
import Footer from "./components/footer/Footer"

import "./index.scss"
import WhyUs from "./routes/why-us/WhyUs"

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-work" element={<Products />} />
        {/* <Route path="/why-us" element={<WhyUs />} /> */}
        <Route path="/pricing-plans" element={<PricingPlans />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App
