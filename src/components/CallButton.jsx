import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const CallButton = () => {
  return (
    <motion.a
      href="tel:8292079260"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-20 right-6 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-red-800 transition-colors z-40"
      aria-label="Call Us"
    >
      <FaPhoneAlt size={16} />
    </motion.a>
  );
};

export default CallButton;
