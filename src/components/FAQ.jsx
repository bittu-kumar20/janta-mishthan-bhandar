import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import SectionTitle from './SectionTitle'

const faqs = [
  {
    question: 'Do you take bulk orders for marriages and parties?',
    answer: 'Yes, we take bulk orders for all kinds of functions. Please contact us at least 2-3 days in advance.',
  },
  {
    question: 'Are your sweets made of pure Desi Ghee?',
    answer: 'Absolutely. We pride ourselves on using 100% pure Desi Ghee and high-quality Khoya for our premium sweets.',
  },
  {
    question: 'Do you offer home delivery?',
    answer: 'Currently, we offer delivery for large bulk orders within Sherghati and nearby areas. For smaller orders, please visit our shop.',
  },
  {
    question: 'What is your morning breakfast timing?',
    answer: 'Our fresh morning breakfast (Puri Sabji, Jalebi) is available from 7:00 AM to 10:00 AM daily.',
  }
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Frequently Asked Questions" />
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-lg text-left text-primary">{faq.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-secondary"
                >
                  <FaChevronDown />
                </motion.span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-white"
                  >
                    <p className="p-6 text-gray-600 border-t border-gray-100">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
