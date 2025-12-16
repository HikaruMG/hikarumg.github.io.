'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { assets, slidepicture } from '@/assets/assets'
import { motion } from "motion/react"

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Use selected slides from slidepicture
  const slides = slidepicture

  useEffect(() => {
    // Auto-advance slides every 4 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToWork = () => {
    const el = document.getElementById('work')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className='w-full text-center mx-auto py-20 pt-32 sm:pt-40 flex flex-col items-center gap-4'>
      <div className='w-11/12 max-w-3xl flex flex-col items-center gap-4'>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type:'spring', stiffness: 100 }}
        >
          <Image src={assets.profile_img} alt="" className='rounded-full w-32'/>
        </motion.div>
      <motion.h3
      initial={{ y: -20, opacity: 0 }}
      whileInView={{y: 0, opacity: 1}}
      transition={{ duration: 0.6, delay: 0.3 }}
      className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
            Hi! I'm Jiraphat <Image src={assets.hand_icon} alt="" 
            className='w-6'/></motion.h3>
    <motion.h1
      initial={{ y: -30, opacity: 0 }}
      whileInView={{y: 0, opacity: 1}}
      transition={{ duration: 0.8, delay: 0.5 }}
      className='text-3xl sm:text-6xl lg:text-[45px] font-Ovo'>
        Software & Data Scientist specializing in Machine Learning and Image Processing </motion.h1>
        <motion.p 
          initial={{opacity: 0 }}
          whileInView={{opacity: 1}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className='max-w-2xl mx-auto font-Ovo'>
        🌱 I’m currently learning AI Deep Learning, Algorithm, Software Engineer <br></br>
        👯 I am a researcher at DASTAR & ISAAC Laboratory. <br></br>
        {/* 👨‍🎓 A Student in Kasetsart University   */}
        </motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            {/* <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{y: 0, opacity: 1}}
            transition={{ duration: 0.6, delay: 1 }}
            href="#contact"
            className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
            >Contact me <Image src={assets.right_arrow_white} alt="" 
            className='w-4'/></motion.a> */}

            <motion.a 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{y: 0, opacity: 1}}
            transition={{ duration: 0.6, delay: 1.2 }}
            // href="/resume-resume.pdf" download 
            href="#contact"
            className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:text-black bg-white'
            >Request Resume <Image src={assets.download_icon} alt="" 
            className='w-4'/></motion.a>
        </div>
      </div>

      {/* Slide carousel section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='w-full mt-16 px-4 flex flex-col items-center'
      >
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-2xl sm:text-3xl font-Ovo mb-8 text-center'
        >
          Recent Highlights
        </motion.h2>

        <div className='relative w-full max-w-4xl rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-xl'>
          {/* Slide counter */}
          <div className='absolute top-4 right-4 z-10 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-md'>
            {currentSlide + 1} / {slides.length}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className='absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white w-9 h-9 sm:w-11 sm:h-11 rounded-full text-lg sm:text-xl font-bold shadow-lg hover:scale-110 transition-all duration-200 flex items-center justify-center'
            aria-label='Previous slide'
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className='absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white w-9 h-9 sm:w-11 sm:h-11 rounded-full text-lg sm:text-xl font-bold shadow-lg hover:scale-110 transition-all duration-200 flex items-center justify-center'
            aria-label='Next slide'
          >
            ›
          </button>
          
          {/* Image container */}
          <div className='relative w-full flex items-center justify-center bg-gray-100 dark:bg-gray-800'>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className='w-full relative h-[45vh] sm:h-[55vh]'
            >
              {slides[currentSlide].isFeatured ? (
                <Image
                  src={slides[currentSlide].bgImage}
                  alt={slides[currentSlide].title}
                  fill
                  className='object-contain cursor-pointer transition-transform duration-300'
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 900px'
                  onClick={goToWork}
                />
              ) : (
                <div 
                  className='w-full h-full bg-cover bg-center cursor-pointer transition-transform duration-300'
                  style={{ backgroundImage: `url(${slides[currentSlide].bgImage})` }}
                  onClick={goToWork}
                />
              )}
            </motion.div>
          </div>
          
          {/* Bottom info bar */}
          <div className='bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-4 sm:p-6'>
            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
              <div className='flex flex-col gap-1.5 flex-1'>
                <h3 className='text-base sm:text-lg md:text-xl font-Ovo font-bold text-gray-900 dark:text-white'>
                  {slides[currentSlide].title}
                </h3>
                {slides[currentSlide].description && (
                  <p className='text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2 font-Ovo'>
                    {slides[currentSlide].description}
                  </p>
                )}
              </div>
              <button
                onClick={goToWork}
                className='px-5 sm:px-7 py-2.5 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full text-sm hover:scale-105 hover:shadow-lg transition-all duration-200 whitespace-nowrap font-Ovo'
              >
                View Portfolio
              </button>
            </div>
            
            {/* Slide indicators */}
            <div className='flex justify-center gap-2 mt-5'>
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'w-8 bg-gray-900 dark:bg-white' 
                      : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

    </div>
    
  )
}

export default Header
