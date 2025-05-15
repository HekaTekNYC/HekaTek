import ScrollToTop from "./components/scrollToTop/ScrollToTop"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Layout from "./components/layout/Layout"
import HomePage from "./routes/home/HomePage"
import ServicesPage from "./routes/services/ServicesPage"
import ProductsPage from "./routes/products/ProductsPage"
import PricingPage from "./routes/pricing/PricingPage"
import ContactPage from "./routes/contact/ContactPage"
import FaqPage from "./routes/faq/FaqPage"
import AuditPage from "./routes/audit-page/AuditPage"

import "./index.scss"

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<ProductsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/free-audit" element={<AuditPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
