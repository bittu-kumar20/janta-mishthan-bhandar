import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-lg">
        <motion.h1 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-9xl font-bold text-primary mb-4"
        >
          404
        </motion.h1>
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-gray-800 mb-4"
        >
          Page Not Found
        </motion.h2>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 mb-8 text-lg"
        >
          Oops! The page you are looking for does not exist. It might have been moved or deleted.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link 
            to="/" 
            className="inline-block px-8 py-3 bg-secondary text-primary font-bold rounded-full hover:bg-yellow-500 transition-colors shadow-md hover:shadow-lg"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound
