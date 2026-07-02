import PageBanner from '../components/PageBanner'
import BreakfastCard from '../components/BreakfastCard'
import SectionTitle from '../components/SectionTitle'
import { motion } from 'framer-motion';
import puri from "../assets/puri.png"
import jalebi from "../assets/jalebi.png"
import samosa from "../assets/samosa.png"
import chola from "../assets/chola.png"
import kachori from "../assets/kachori.png"
import namkeen from "../assets/chat.png"

const morningSpecials = [
  { name: 'Puri Sabji', type: 'Morning Special', image: puri },
  { name: 'Jalebi', type: 'Morning Special', image: jalebi },
]

const allDaySnacks = [
  { name: 'Samosa', type: 'After 10 AM', image: samosa },
  { name: 'Chhola', type: 'After 10 AM', image: chola },
  { name: 'Kachori', type: 'After 10 AM', image: kachori },
  { name: 'Mix Namkeen', type: 'All Day', image: namkeen },
]

const Breakfast = () => {
  return (
    <div className="bg-background min-h-screen">
      <PageBanner
        title="Breakfast & Namkeen"
        description="Start your day right with our fresh and hot morning specials, or grab a quick snack anytime."
        image="https://images.unsplash.com/photo-1601050690597-df0568a70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <div className="container mx-auto px-4 py-16">

        <SectionTitle title="Morning Specials (7 AM - 10 AM)" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {morningSpecials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <BreakfastCard {...item} />
            </motion.div>
          ))}
        </div>

        <SectionTitle title="Snacks & Namkeen" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {allDaySnacks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <BreakfastCard {...item} />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Breakfast
