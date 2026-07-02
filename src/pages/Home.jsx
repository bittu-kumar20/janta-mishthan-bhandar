import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import SweetCard from '../components/SweetCard'
import SectionTitle from '../components/SectionTitle'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import rasgulla from "../assets/rasgulla.png"
import gulabjamun from '../assets/gulab.png'
import kajukatli from '../assets/kajukatli.png'
import sweets from "../assets/sweet.png"

const featuredSweets = [
  {
    name: 'Rasgulla',
    description: 'Soft, spongy, and dripping with sweet syrup. Made fresh daily.',
    image: rasgulla,
  },
  {
    name: 'Gulab Jamun',
    description: 'Rich, melt-in-the-mouth khoya dumplings soaked in rose-flavored sugar syrup.',
    image: gulabjamun,
  },
  {
    name: 'Kaju Katli',
    description: 'Premium cashew fudge made with pure desi ghee and adorned with silver leaf.',
    image: kajukatli,
  }
]

import SEO from '../components/SEO'

const Home = () => {
  return (
    <div>
      <SEO 
        title="Best Sweet Shop Near You" 
        description="Looking for near by sweets? Visit Janta Mishthan Bhandar for the best, most authentic Indian sweets and snacks." 
        keywords="near by sweets, sweet shop near me, best sweet shop, Indian sweets, Janta Mishthan Bhandar"
      />
      <Hero />
      <Stats />

      {/* Featured Sweets Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Signature Sweets"
            subtitle="Taste the purity of tradition with our most loved delicacies."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {featuredSweets.map((sweet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <SweetCard {...sweet} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/sweets"
              className="inline-block px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              View All Sweets
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src={sweets}
                alt="Sweet Shop"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-primary mb-6">Why Choose Janta Mishthan Bhandar?</h2>
              <p className="text-gray-600 mb-8 text-lg">
                For over 30 years, we have been serving the people of Sherghati with unmatched taste and quality. Our commitment to purity is what makes us special.
              </p>
              <ul className="space-y-4">
                {[
                  '100% Pure Desi Ghee & Fresh Khoya',
                  'Hygienic Preparation Environment',
                  'Authentic Traditional Recipes',
                  'Freshness Guaranteed Everyday'
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-lg font-medium text-gray-800"
                  >
                    <FaCheckCircle className="text-secondary" /> {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />

      {/* Call to Action */}
      <section className="py-12 md:py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10" />
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Taste the Magic?</h2>
          <p className="text-xl text-accent mb-10 max-w-2xl mx-auto">
            Visit our shop in Sherghati or call us to place your order today.
          </p>
          <a
            href="tel:8292079260"
            className="inline-block px-10 py-4 bg-secondary text-primary font-bold text-lg rounded-full hover:bg-yellow-500 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Call 8292079260
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
