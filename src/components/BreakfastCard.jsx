import { motion } from 'framer-motion'

const BreakfastCard = ({ name, type, image }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="relative rounded-2xl overflow-hidden shadow-md group h-64"
    >
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <span className="inline-block px-3 py-1 bg-secondary text-text text-sm font-bold rounded-full mb-2">
          {type}
        </span>
        <h3 className="text-2xl font-bold text-white">{name}</h3>
      </div>
    </motion.div>
  )
}

export default BreakfastCard
