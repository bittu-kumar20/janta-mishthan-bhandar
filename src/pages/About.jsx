import PageBanner from '../components/PageBanner'
import { motion } from 'framer-motion'
import { FaAward, FaHeart, FaStar } from 'react-icons/fa'
import about from "../assets/about.png";

import SEO from '../components/SEO'

const About = () => {
  return (
    <div className="bg-background min-h-screen">
      <SEO 
        title="About Us" 
        description="Learn about the legacy of Janta Mishthan Bhandar. Serving pure and authentic Indian sweets in Sherghati for over 30 years." 
        keywords="about Janta Mishthan Bhandar, sweet shop history, best sweet shop in Sherghati"
      />
      <PageBanner
        title="About Janta Mishthan Bhandar"
        description="A legacy of sweetness, purity, and trust since three decades."
        image={about}
      />

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img
                src={about}
                alt="Shop Display"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold text-primary mb-1">30+</p>
                <p className="text-gray-600 font-semibold">Years of Trust</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold text-primary mb-6">Hamari Pehchan: Quality, Safai aur Asli Swad</h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Janta Mishthan Bhandar, Sherghati (Gaya) mein kai varshon se shuddh mithai aur nashta banane ke liye mashhoor hai.
              Under the visionary leadership of our owner, <strong>Mr. Sujit Yadav</strong>, we have maintained a strict zero-compromise policy on quality.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Hamare yahan roz taja mithaiyan, khoya se bani special sweets aur swadisht nashta uplabdh rehta hai.
              Whether it is a daily craving, a festive occasion, or a wedding order, our customers trust us to deliver the best.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-4 rounded-xl shadow-md text-center border-b-4 border-primary">
                <FaAward className="text-3xl text-secondary mx-auto mb-3" />
                <h4 className="font-bold text-primary">Premium Quality</h4>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md text-center border-b-4 border-primary">
                <FaHeart className="text-3xl text-secondary mx-auto mb-3" />
                <h4 className="font-bold text-primary">Made with Love</h4>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md text-center border-b-4 border-primary">
                <FaStar className="text-3xl text-secondary mx-auto mb-3" />
                <h4 className="font-bold text-primary">100% Pure</h4>
              </div>
            </div>

            <div className="bg-accent/30 p-6 rounded-2xl border border-accent">
              <h3 className="text-xl font-bold text-primary mb-2">Message from the Owner</h3>
              <p className="text-gray-700 italic">
                "Our mission is simple - to provide our customers with sweets that taste just like they are made at home, using only the purest ingredients. Your trust is our biggest earning."
              </p>
              <p className="text-right mt-4 font-bold text-primary">- Sujit Yadav</p>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
