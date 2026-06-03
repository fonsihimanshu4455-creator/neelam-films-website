import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useData } from '../../context/DataContext'

/**
 * Floating WhatsApp button (bottom-right) with a pulse ring.
 */
export default function WhatsAppButton() {
  const { data } = useData()
  const number = data.contact.whatsapp
  const url = `https://wa.me/${number}?text=Hi%20Neelam%20Films`

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/40"
    >
      {/* Pulse ring */}
      <span className="absolute inline-flex h-full w-full animate-pulseRing rounded-full bg-[#25D366]" />
      <MessageCircle size={28} className="relative z-10" fill="white" />
    </motion.a>
  )
}
