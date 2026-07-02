import PageBanner from '../components/PageBanner'
import SweetCard from '../components/SweetCard'
import { motion } from 'framer-motion'

const allSweets = [
  { name: 'Rasgulla', description: 'Soft, spongy, dripping with sweet syrup.', image: 'https://images.unsplash.com/photo-1605807646983-377bc5a76493?w=500&h=400&fit=crop' },
  { name: 'Gulab Jamun', description: 'Rich, melt-in-the-mouth khoya dumplings.', image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=500&h=400&fit=crop' },
  { name: 'Khoya Barfi', description: 'Traditional barfi made with pure fresh khoya.', image: 'https://images.unsplash.com/photo-1599785209707-a456fac0b8fc?w=500&h=400&fit=crop' },
  { name: 'Milk Barfi', description: 'Rich and creamy milk-based sweet.', image: 'https://images.unsplash.com/photo-1582560475093-ba66cefeca8e?w=500&h=400&fit=crop' },
  { name: 'Kaju Barfi', description: 'Premium cashew fudge with silver leaf.', image: 'https://images.unsplash.com/photo-1624371414361-e670edf4898d?w=500&h=400&fit=crop' },
  { name: 'Kalakand', description: 'Moist and granular milk cake sweet.', image: 'https://images.unsplash.com/photo-1599785209707-a456fac0b8fc?w=500&h=400&fit=crop' },
  { name: 'Peda', description: 'Traditional Mathura style soft peda.', image: 'https://images.unsplash.com/photo-1582560475093-ba66cefeca8e?w=500&h=400&fit=crop' },
  { name: 'Cham Cham', description: 'Bengali delicacy garnished with coconut.', image: 'https://images.unsplash.com/photo-1605807646983-377bc5a76493?w=500&h=400&fit=crop' },
  { name: 'Laddu', description: 'Besan and motichoor laddu made in pure ghee.', image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=500&h=400&fit=crop' },
  { name: 'Rasmalai', description: 'Soft paneer discs in creamy saffron milk.', image: 'https://images.unsplash.com/photo-1624371414361-e670edf4898d?w=500&h=400&fit=crop' },
  { name: 'Anarsa', description: 'Khoya Special Anarsa, crisp outside soft inside.', image: 'https://images.unsplash.com/photo-1599785209707-a456fac0b8fc?w=500&h=400&fit=crop' },
  { name: 'Tilkut', description: 'Special seasonal tilkut made of sesame and jaggery/sugar.', image: 'https://images.unsplash.com/photo-1582560475093-ba66cefeca8e?w=500&h=400&fit=crop' }
]

import SEO from '../components/SEO'

const Sweets = () => {
  return (
    <div className="bg-background min-h-screen">
      <SEO 
        title="Our Sweets Menu" 
        description="Explore our wide variety of traditional Indian sweets like Rasgulla, Gulab Jamun, and Kaju Katli made with pure desi ghee." 
        keywords="Indian sweets menu, buy sweets online, traditional sweets, pure desi ghee sweets"
      />
      <PageBanner 
        title="Our Sweets" 
        description="Explore our wide variety of traditional Indian sweets made with pure love and desi ghee."
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allSweets.map((sweet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <SweetCard {...sweet} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sweets
