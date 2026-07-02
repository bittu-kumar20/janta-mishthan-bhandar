import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { FaQuoteLeft } from 'react-icons/fa'
import SectionTitle from './SectionTitle'

const testimonials = [
  {
    name: 'Rahul Kumar',
    review: 'Best Rasgulla in Gaya! The taste is authentic and you can feel the purity of ingredients.',
  },
  {
    name: 'Priya Singh',
    review: 'We always order sweets from Janta Mishthan Bhandar for our family functions. Never disappointed.',
  },
  {
    name: 'Amit Sharma',
    review: 'Their morning Puri Sabji and Jalebi is a must-try if you are in Sherghati.',
  }
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <SectionTitle title="What Our Customers Say" subtitle="Read testimonials from our happy customers" />
        
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              }
            }}
            className="pb-12"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                  <FaQuoteLeft className="text-secondary text-4xl mb-4 opacity-50" />
                  <p className="text-gray-700 italic mb-6 text-lg">{t.review}</p>
                  <h4 className="font-bold text-primary">- {t.name}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
