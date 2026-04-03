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

import { AuthProvider } from "./contexts/auth.context"
import ProtectedRoute from "./components/portal/protected-route/ProtectedRoute"
import RoleRoute from "./components/portal/role-route/RoleRoute"
import LoginPage from "./routes/login/LoginPage"
import AdminLayout from "./routes/admin/AdminLayout"
import AdminDashboard from "./routes/admin/AdminDashboard"
import AdminClients from "./routes/admin/AdminClients"
import ClientLayout from "./routes/portal/ClientLayout"
import ClientDashboard from "./routes/portal/ClientDashboard"
import ClientTimeline from "./routes/portal/ClientTimeline"
import ClientMessages from "./routes/portal/ClientMessages"
import ClientApprovals from "./routes/portal/ClientApprovals"
import ClientAssets from "./routes/portal/ClientAssets"
import ClientOnboarding from "./routes/portal/ClientOnboarding"
import InviteAcceptPage from "./routes/invite/InviteAcceptPage"
import ForgotPasswordPage from "./routes/forgot-password/ForgotPasswordPage"

import "./index.scss"
import "./styles/portal.scss"

// Wrap marketing pages in the existing Layout (nav + footer)
function MarketingPage({ children }) {
  return <Layout>{children}</Layout>
}

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Public marketing site */}
          <Route path="/" element={<MarketingPage><HomePage /></MarketingPage>} />
          <Route path="/services" element={<MarketingPage><ServicesPage /></MarketingPage>} />
          <Route path="/work" element={<MarketingPage><ProductsPage /></MarketingPage>} />
          <Route path="/pricing" element={<MarketingPage><PricingPage /></MarketingPage>} />
          <Route path="/contact" element={<MarketingPage><ContactPage /></MarketingPage>} />
          <Route path="/faq" element={<MarketingPage><FaqPage /></MarketingPage>} />
          <Route path="/free-audit" element={<MarketingPage><AuditPage /></MarketingPage>} />

          {/* Auth pages (no nav/footer) */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/invite/accept" element={<InviteAcceptPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          {/* Admin routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <RoleRoute allowedRole="admin">
                  <AdminLayout />
                </RoleRoute>
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="clients" element={<AdminClients />} />
            <Route path="messages" element={<PlaceholderPage title="Messages" />} />
            <Route path="billing" element={<PlaceholderPage title="Billing" />} />
          </Route>

          {/* Client portal routes */}
          <Route
            path="/portal"
            element={
              <ProtectedRoute>
                <RoleRoute allowedRole="client">
                  <ClientLayout />
                </RoleRoute>
              </ProtectedRoute>
            }
          >
            <Route index element={<ClientDashboard />} />
            <Route path="onboarding" element={<ClientOnboarding />} />
            <Route path="assets" element={<ClientAssets />} />
            <Route path="timeline" element={<ClientTimeline />} />
            <Route path="approvals" element={<ClientApprovals />} />
            <Route path="messages" element={<ClientMessages />} />
            <Route path="billing" element={<PlaceholderPage title="Billing" />} />
            <Route path="resources" element={<PlaceholderPage title="Resources" />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

// Temporary placeholder for pages not yet built
function PlaceholderPage({ title }) {
  return (
    <div>
      <h2>{title}</h2>
      <p style={{ marginTop: '1rem' }}>This page is coming soon.</p>
    </div>
  )
}

export default App
