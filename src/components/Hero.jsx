import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import heroBg from '../assets/hero.png'

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] md:min-h-screen w-full flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-[center_top] sm:bg-[center_20%] md:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Mobile gradient from bottom to top for readability, leaving the top logo visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2B080A]/90 via-[#2B080A]/60 to-transparent md:bg-gradient-to-r md:from-black/40 md:via-black/10 md:to-transparent" />

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 h-full flex flex-col justify-end md:justify-center">
        <div className="max-w-lg pb-6 pt-[55vh] md:pb-12 md:pt-0 md:mt-32">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[#E6C185] font-serif uppercase tracking-wider mb-3 md:mb-6 leading-tight">
              <span className="block text-base md:text-2xl mb-1 md:mb-2">Shuddh Desi Ghee</span>
              <span className="block text-sm md:text-xl mb-2 md:mb-4">Aur Khoya Ki</span>
              <span className="block text-3xl md:text-6xl font-black text-white drop-shadow-lg mb-0 md:mb-2">Vishwasniya</span>
              <span className="block text-3xl md:text-6xl font-black text-white drop-shadow-lg">Mithai</span>
            </h1>
            
            {/* Divider element */}
            <div className="flex items-center gap-2 mb-6 md:mb-8">
              <div className="h-[1px] w-8 md:w-12 bg-[#E6C185]"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rotate-45 bg-[#E6C185]"></div>
              <div className="h-[1px] w-8 md:w-12 bg-[#E6C185]"></div>
            </div>

            <p className="text-gray-300 text-xs md:text-lg mb-6 md:mb-10 max-w-[250px] md:max-w-sm leading-relaxed">
              Har bite mein parampara ka swaad, har mithai mein shuddhata ka vaada.
            </p>

            <Link 
              to="/sweets" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#E6C185] text-[#380B0F] font-bold text-sm tracking-widest uppercase rounded hover:bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Shop Now <span>&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
