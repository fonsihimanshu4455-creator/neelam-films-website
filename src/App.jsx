import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { DataProvider } from './context/DataContext'
import { AuthProvider } from './context/AuthContext'

import ScrollToTop from './components/common/ScrollToTop'
import Layout from './components/layout/Layout'
import ProtectedRoute from './components/admin/ProtectedRoute'
import AdminLayout from './components/admin/AdminLayout'

// Public pages
import Home from './pages/Home'
import About from './pages/About'
import ServicePage from './pages/ServicePage'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// Admin pages
import AdminLogin from './pages/admin/AdminLogin'
import Dashboard from './pages/admin/Dashboard'
import HeroEditor from './pages/admin/HeroEditor'
import ServicesEditor from './pages/admin/ServicesEditor'
import PortfolioEditor from './pages/admin/PortfolioEditor'
import ClientsEditor from './pages/admin/ClientsEditor'
import TestimonialsEditor from './pages/admin/TestimonialsEditor'
import EquipmentEditor from './pages/admin/EquipmentEditor'
import ContactEditor from './pages/admin/ContactEditor'

export default function App() {
  return (
    <DataProvider>
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Public site */}
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services/production" element={<ServicePage serviceId="production" />} />
              <Route path="/services/live-events" element={<ServicePage serviceId="live-events" />} />
              <Route path="/services/live-streaming" element={<ServicePage serviceId="live-streaming" />} />
              <Route path="/services/recording-studio" element={<ServicePage serviceId="recording-studio" />} />
              <Route path="/services/equipment-rental" element={<ServicePage serviceId="equipment-rental" />} />
              <Route path="/services/digital-growth" element={<ServicePage serviceId="digital-growth" />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            {/* Admin login (public) */}
            <Route path="/admin" element={<AdminLogin />} />

            {/* Admin protected area */}
            <Route
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/hero" element={<HeroEditor />} />
              <Route path="/admin/services" element={<ServicesEditor />} />
              <Route path="/admin/portfolio" element={<PortfolioEditor />} />
              <Route path="/admin/clients" element={<ClientsEditor />} />
              <Route path="/admin/testimonials" element={<TestimonialsEditor />} />
              <Route path="/admin/equipment" element={<EquipmentEditor />} />
              <Route path="/admin/contact" element={<ContactEditor />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </DataProvider>
  )
}
