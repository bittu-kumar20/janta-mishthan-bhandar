import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

const galleryImages = [
  { id: 1, category: 'Fresh Sweets', src: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=600&h=800&fit=crop' },
  { id: 2, category: 'Sweet Counter', src: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&h=600&fit=crop' },
  { id: 3, category: 'Namkeen', src: 'https://images.unsplash.com/photo-1601050690597-df0568a70950?w=600&h=600&fit=crop' },
  { id: 4, category: 'Fresh Sweets', src: 'https://images.unsplash.com/photo-1599785209707-a456fac0b8fc?w=600&h=800&fit=crop' },
  { id: 5, category: 'Kitchen', src: 'https://images.unsplash.com/photo-1557925923-33b251d5b9d5?w=800&h=600&fit=crop' },
  { id: 6, category: 'Fresh Sweets', src: 'https://images.unsplash.com/photo-1582560475093-ba66cefeca8e?w=600&h=600&fit=crop' },
]

const categories = ['All', 'Sweet Counter', 'Fresh Sweets', 'Kitchen', 'Namkeen']

import SEO from '../components/SEO'

const Gallery = () => {
  const [filter, setFilter] = useState('All')
  const [selectedImg, setSelectedImg] = useState(null)

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter)

  return (
    <div className="bg-background min-h-screen">
      <SEO 
        title="Gallery" 
        description="Take a look at the fresh sweets, snacks, and hygienic kitchen of Janta Mishthan Bhandar." 
        keywords="sweet shop gallery, Indian sweets pictures, fresh sweets, Janta Mishthan Bhandar photos"
      />
      <PageBanner 
        title="Our Gallery" 
        description="A visual treat of our shop, kitchen, and mouth-watering delicacies."
      />

      <div className="container mx-auto px-4 py-12">
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === cat 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={img.id}
                className="relative cursor-pointer group rounded-2xl overflow-hidden shadow-md"
                onClick={() => setSelectedImg(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.category} 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-lg border-2 border-white px-4 py-2 rounded-full">
                    View Image
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white text-3xl hover:text-secondary transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <FaTimes />
            </button>
            <motion.img
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              src={selectedImg}
              alt="Full size"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Gallery
