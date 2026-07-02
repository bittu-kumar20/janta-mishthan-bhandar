import { motion } from 'framer-motion'

const PageBanner = ({ title, description, image = 'https://images.unsplash.com/photo-1557925923-33b251d5b9d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' }) => {
  return (
    <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-secondary mb-4"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  )
}

export default PageBanner
