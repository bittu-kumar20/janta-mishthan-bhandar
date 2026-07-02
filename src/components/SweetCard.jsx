import { motion } from 'framer-motion'

const SweetCard = ({ name, description, image }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-premium border border-secondary/20 group relative"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 relative bg-white">
        <div className="bg-pattern" />
        <h3 className="text-2xl font-bold text-primary mb-2 relative z-10">{name}</h3>
        <p className="text-gray-600 line-clamp-2 relative z-10">{description}</p>
        <button className="mt-4 px-4 py-2 bg-primary text-accent rounded-lg font-bold hover:bg-secondary hover:text-primary transition-colors w-full relative z-10 shadow-md">
          Order Now
        </button>
      </div>
    </motion.div>
  )
}

export default SweetCard
