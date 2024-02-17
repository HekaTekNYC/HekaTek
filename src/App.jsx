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
