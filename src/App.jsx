import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./routes/home/Home"
import Projects from "./routes/projects/Projects"
import About from "./routes/about/About"
import ContactForm from "./components/contact-form/ContactForm"
import Navigation from "./components/navigation/Navigation"

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  )
}
export default App
