import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./routes/home/Home"
import Products from "./routes/products/Products"
import Services from "./routes/services/Services"
import ContactForm from "./components/contact-form/ContactForm"
import Navigation from "./components/navigation/Navigation"
import Footer from "./components/footer/Footer"
import "./assets/fonts/BeVietnamPro-Regular.ttf"
import "./assets/fonts/GothicA1-Regular.ttf"
import "./assets/fonts/GothicA1-Bold.ttf"
import "./assets/fonts/GothicA1-ExtraBold.ttf"
import "./index.scss"

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-work" element={<Products />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App
