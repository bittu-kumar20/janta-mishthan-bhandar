import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/918292079260"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-36 right-6 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors z-40"
      aria-label="WhatsApp Us"
    >
      <FaWhatsapp size={28} />
    </motion.a>
  )
}

export default WhatsAppButton
