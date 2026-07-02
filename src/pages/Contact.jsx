import PageBanner from '../components/PageBanner'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

import SEO from '../components/SEO'

const Contact = () => {
  return (
    <div className="bg-background min-h-screen">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Janta Mishthan Bhandar for bulk orders, party bookings, or inquiries. Located in Sherghati, Gaya." 
        keywords="contact sweet shop, order sweets online, bulk sweets order, Janta Mishthan Bhandar contact"
      />
      <PageBanner
        title="Contact Us"
        description="We'd love to hear from you. Visit our shop or reach out to us for orders and inquiries."
      />

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/3 space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8 text-lg">
                For bulk orders, party bookings, or any general queries, please contact us using the details below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:border-secondary transition-colors group">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors shrink-0">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-1">Our Address</h4>
                  <p className="text-gray-600">Janta Mishthan Bhandar<br />Sherghati, Gaya<br />Bihar - 824211</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:border-secondary transition-colors group">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors shrink-0">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-1">Phone Number</h4>
                  <p className="text-gray-600">8292079260</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:border-secondary transition-colors group">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors shrink-0">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-1">WhatsApp</h4>
                  <p className="text-gray-600">8292079260</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:w-2/3"
          >
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-gray-50 focus:bg-white"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-gray-50 focus:bg-white"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-gray-50 focus:bg-white resize-none"
                    placeholder="Tell us what you need..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-red-800 transition-colors shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

        </div>

        {/* Google Maps Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 h-[400px] w-full rounded-3xl overflow-hidden shadow-lg border-4 border-white"
        >
          {/* Using a placeholder image for map as requested. In production, embed iframe here */}
          <div className="w-full h-full bg-gray-200 flex flex-col items-center justify-center relative">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=400&fit=crop"
              alt="Map Placeholder"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="relative z-10 text-center bg-white p-6 rounded-2xl shadow-xl">
              <FaMapMarkerAlt className="text-secondary text-5xl mx-auto mb-2" />
              <h3 className="text-xl font-bold text-primary">Janta Mishthan Bhandar</h3>
              <p className="text-gray-600">Sherghati, Gaya, Bihar</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Contact
