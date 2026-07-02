import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-black text-white pt-20 pb-8 overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

      {/* Top ornamental wave or border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-[calc(100%+1.3px)] h-[40px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 pt-8">

          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <img src={logo} alt="Janta Mishthan Bhandar" className="h-32 w-32 mb-4 object-cover rounded-full drop-shadow-2xl border-4 border-[#E6C185]/30" />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Shuddh Desi Ghee aur Khoya se bani swadisht mithaiyan. Sherghati, Gaya ka Vishwasniya Mithai Ghar since 1990.
            </p>
            <div className="flex space-x-4">
              <motion.a whileHover={{ y: -5 }} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <FaFacebookF />
              </motion.a>
              <motion.a whileHover={{ y: -5 }} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-pink-600 hover:text-white transition-all duration-300">
                <FaInstagram />
              </motion.a>
              <motion.a whileHover={{ y: -5 }} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-blue-400 hover:text-white transition-all duration-300">
                <FaTwitter />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white inline-block border-b-2 border-primary pb-2">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { title: 'Home', path: '/' },
                { title: 'Our Sweets', path: '/sweets' },
                { title: 'Breakfast & Namkeen', path: '/breakfast' },
                { title: 'About Us', path: '/about' },
                { title: 'Contact Us', path: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-400 hover:text-secondary flex items-center transition-colors group"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white inline-block border-b-2 border-primary pb-2">Contact Us</h4>
            <ul className="space-y-5 text-gray-400">
              <li className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <span>Janta Mishthan Bhandar,<br />Sherghati, Gaya, Bihar 824211</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  <FaPhoneAlt />
                </div>
                <span className="font-medium text-white tracking-wide">8292079260</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  <FaEnvelope />
                </div>
                <span>contact@jantamishthan.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Timings */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white inline-block border-b-2 border-primary pb-2">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get updates on festive offers and new arrivals!</p>
            <form className="relative mb-8" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-white placeholder-gray-500 focus:outline-none focus:border-secondary transition-colors"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 w-12 bg-secondary text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <FaPaperPlane />
              </button>
            </form>

            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <h5 className="font-bold text-secondary mb-2 text-sm">Opening Hours</h5>
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Monday - Sunday</span>
                <span className="font-bold text-white">7:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} <span className="text-gray-300 font-semibold">Janta Mishthan Bhandar</span>. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
