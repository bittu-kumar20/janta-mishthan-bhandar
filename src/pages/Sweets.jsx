import PageBanner from '../components/PageBanner'
import SweetCard from '../components/SweetCard'
import { motion } from 'framer-motion'
import kaju from "../assets/kaju.png";
import rasgulla from "../assets/rasgul.png";
import gulabjamun from "../assets/gulabjamun.png";
import khoya from "../assets/khoya.png";
import milkbarfi from "../assets/milk.png";
import kalakand from "../assets/kalakand.png";
import peda from "../assets/peda.png";
import rajbhog from "../assets/rajbhog.png"
import lie from "../assets/lie.png"
import laddu from "../assets/laddu.png";
import rasmalai from "../assets/rasmalai.png";
import tilkut from "../assets/tilku.png";
import anarsa from "../assets/anarsa.png";




const allSweets = [
  { name: 'Rasgulla', description: 'Soft, spongy, dripping with sweet syrup.', image: rasgulla },
  { name: 'Gulab Jamun', description: 'Rich, melt-in-the-mouth khoya dumplings.', image: gulabjamun },
  { name: 'Rajbhog', description: 'Soft yellow rasgulla filled with dry fruits and soaked in fragrant sugar syrup.', image: rajbhog },
  { name: 'Khoya Barfi', description: 'Traditional barfi made with pure fresh khoya.', image: khoya },
  { name: 'Milk Barfi', description: 'Rich and creamy milk-based sweet.', image: milkbarfi },
  { name: 'Kaju Barfi', description: 'Premium cashew fudge with silver leaf.', image: kaju },
  { name: 'Kalakand', description: 'Moist and granular milk cake sweet.', image: kalakand },
  { name: 'Peda', description: 'Traditional Mathura style soft peda.', image: peda },
  { name: 'Rasmalai', description: 'Soft paneer discs in creamy saffron milk.', image: rasmalai },
  { name: 'Anarsa', description: 'Khoya Special Anarsa, crisp outside soft inside.', image: anarsa },
  { name: 'Khoya Lie', description: 'Rich mawa laddu coated with sugar pearls and garnished with raisins.', image: lie },
  { name: 'Tilkut', description: 'Special seasonal tilkut made of sesame and jaggery/sugar.', image: tilkut }
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
