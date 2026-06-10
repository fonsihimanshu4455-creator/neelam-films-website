import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import ScrollProgress from '../common/ScrollProgress'
import MeshBackground from '../common/MeshBackground'
import Preloader from '../common/Preloader'

/**
 * Public site shell: intro + grain + scroll bar + navbar + animated outlet + footer.
 */
export default function Layout() {
  const location = useLocation()

  return (
    <div className="grain relative flex min-h-screen flex-col text-cream-100">
      <Preloader />
      <MeshBackground />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
