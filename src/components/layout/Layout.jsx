import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import ScrollProgress from '../common/ScrollProgress'
import MeshBackground from '../common/MeshBackground'
import NeelamLoader from '../common/NeelamLoader'

/**
 * Public site shell: scroll bar + grain + navbar + animated outlet + footer.
 */
export default function Layout() {
  const location = useLocation()

  return (
    <div className="grain relative flex min-h-screen flex-col text-white">
      <NeelamLoader />
      <MeshBackground />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
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
