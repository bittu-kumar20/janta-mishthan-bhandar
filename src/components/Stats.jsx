import { useEffect, useRef, useState } from 'react'
import { motion, animate } from 'framer-motion'
import { FaSmile, FaHistory, FaLeaf } from 'react-icons/fa'

const Counter = ({ to, suffix, isActive }) => {
  const nodeRef = useRef(null)

  useEffect(() => {
    if (isActive) {
      const controls = animate(0, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (value) => {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value) + suffix
          }
        }
      })
      return () => controls.stop()
    } else {
      if (nodeRef.current) {
        nodeRef.current.textContent = "0" + suffix
      }
    }
  }, [isActive, to, suffix])

  return (
    <h3 
      ref={nodeRef} 
      className="text-3xl md:text-4xl font-serif font-bold text-white"
    >
      0{suffix}
    </h3>
  )
}

const statsData = [
  {
    icon: <FaHistory size={28} />,
    count: 30,
    suffix: '+',
    label: 'Years Experience',
  },
  {
    icon: <FaSmile size={28} />,
    count: 5000,
    suffix: '+',
    label: 'Happy Customers',
  },
  {
    icon: <FaLeaf size={28} />,
    count: 100,
    suffix: '%',
    label: 'Fresh Everyday',
  }
]

const Stats = () => {
  const [isInView, setIsInView] = useState(false)

  return (
    <div className="bg-[#831F25] py-16 border-y border-[#380B0F]/10">
      <motion.div 
        className="container mx-auto px-4 md:px-20"
        onViewportEnter={() => setIsInView(true)}
        onViewportLeave={() => setIsInView(false)}
        viewport={{ amount: 0.3, once: false }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statsData.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center py-8 px-4 rounded-xl bg-[#DCB6B7]"
            >
              <div className="text-[#DE9B25] mb-4">
                {stat.icon}
              </div>
              <Counter to={stat.count} suffix={stat.suffix} isActive={isInView} />
              <p className="text-sm md:text-base font-normal text-white mt-1 tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Stats
