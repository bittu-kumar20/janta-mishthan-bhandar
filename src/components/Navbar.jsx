import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaSearch, FaRegUser, FaShoppingBag } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'

const navLinks = [
  { title: 'HOME', path: '/' },
  { title: 'ABOUT US', path: '/about' },
  { title: 'OUR SWEETS', path: '/sweets' },
  { title: 'BREAKFAST & NAMKEEN', path: '/breakfast' },
  { title: 'CONTACT US', path: '/contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navClass = `fixed w-full z-50 transition-all duration-500 ease-in-out ${scrolled || !isHomePage
    ? 'bg-[#380B0F] shadow-2xl py-2 md:py-3'
    : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 md:py-6'
    }`

  const linkTextClass = scrolled || !isHomePage ? 'text-[#E6C185]' : 'text-gray-100'

  return (
    <header className="fixed w-full z-50">
      <nav className={navClass}>
        <div className="container mx-auto px-4 lg:px-12">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img 
                src={logo} 
                alt="Janta Mishthan Bhandar" 
                className={`${scrolled ? 'h-12 w-12 md:h-16 md:w-16' : 'h-16 w-16 md:h-24 md:w-24'} object-cover rounded-full drop-shadow-2xl transition-all duration-300 group-hover:scale-105`} 
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center text-xs md:text-sm tracking-widest font-medium">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path
                return (
                  <div key={link.title} className="flex items-center">
                    <Link
                      to={link.path}
                      className={`transition-colors duration-300 hover:text-[#E6C185] ${isActive ? 'text-[#E6C185]' : linkTextClass}`}
                    >
                      {link.title}
                    </Link>
                    {index < navLinks.length - 1 && (
                      <span className="mx-4 lg:mx-8 text-gray-400/50 font-thin">|</span>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Desktop Icons */}
            <div className="hidden lg:flex items-center space-x-6 text-gray-100">
              <button className="hover:text-[#E6C185] transition-colors"><FaSearch size={18} /></button>
              <button className="hover:text-[#E6C185] transition-colors"><FaRegUser size={18} /></button>
              <button className="hover:text-[#E6C185] transition-colors relative">
                <FaShoppingBag size={18} />
                <span className="absolute -top-2 -right-2 bg-[#E6C185] text-[#380B0F] text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg transition-colors text-[#E6C185]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 top-0 bg-[#380B0F] z-40 overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <div className="flex items-center">
                  <img src={logo} alt="Janta Mishthan Bhandar" className="h-16 w-16 object-cover rounded-full drop-shadow-md" />
                </div>
                <button
                  className="p-2 text-[#E6C185] transition-colors rounded-full bg-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  <FaTimes size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-10 px-6">
                <div className="flex flex-col space-y-8 text-center">
                  {navLinks.map((link, i) => {
                    const isActive = location.pathname === link.path
                    return (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={link.title}
                      >
                        <Link
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className={`block font-serif text-2xl tracking-widest uppercase transition-colors ${isActive
                            ? 'text-[#E6C185]'
                            : 'text-gray-300 hover:text-[#E6C185]'
                            }`}
                        >
                          {link.title}
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>

                <div className="mt-16 flex justify-center space-x-10 text-[#E6C185]">
                  <button><FaSearch size={28} /></button>
                  <button><FaRegUser size={28} /></button>
                  <button className="relative">
                    <FaShoppingBag size={28} />
                    <span className="absolute -top-2 -right-2 bg-[#E6C185] text-[#3D0C11] text-xs font-bold h-5 w-5 rounded-full flex items-center justify-center">0</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Navbar
