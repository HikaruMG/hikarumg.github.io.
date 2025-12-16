'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { assets, workData } from '@/assets/assets'
import { motion } from 'framer-motion'

const Work = ({ isDarkMode }) => {
  const [selectedType, setSelectedType] = useState('competition')
  const filteredData = workData.filter(item => item.type === selectedType)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work'
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        My portfolio
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        What I’ve Created
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        Here are some of the projects I’ve built — from data science and machine learning to web apps and automation bots.
      </motion.p>

      {/* ปุ่มเลือกประเภท */}
      <div className="flex justify-center gap-6 mb-8">
        <button
          onClick={() => setSelectedType('project')}
          className={`px-6 py-2 rounded-full border font-semibold transition ${
            selectedType === 'project'
              ? 'bg-black text-white'
              : 'bg-white text-black border-black'
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => setSelectedType('competition')}
          className={`px-6 py-2 rounded-full border font-semibold transition ${
            selectedType === 'competition'
              ? 'bg-black text-white'
              : 'bg-white text-black border-black'
          }`}
        >
          Competitions
        </button>
      </div>

      {/* แสดงเฉพาะตามที่เลือก */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-5 my-10 dark:text-black'
      >
        {filteredData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="aspect-square rounded-lg relative cursor-pointer group overflow-hidden bg-gray-200"
          >
            {/* Image layer (supports isFeatured for object-contain) */}
            <div className='absolute inset-0'>
              {project.isFeatured ? (
                <Image
                  src={project.bgImage}
                  alt={project.title}
                  fill
                  className='object-contain'
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px'
                />
              ) : (
                <div 
                  className='absolute inset-0 bg-cover bg-center'
                  style={{ backgroundImage: `url(${project.bgImage})` }}
                />
              )}
            </div>

            {/* Hover hint - subtle badge in corner */}
            <div className='absolute inset-0 flex items-end justify-end p-3 pointer-events-none'>
              <div className='opacity-100 group-hover:opacity-0 transition-opacity duration-300 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-full'>
                <p className='text-xs sm:text-sm font-semibold text-black dark:text-white whitespace-nowrap font-Ovo'>
                  Hover for details ✨
                </p>
              </div>
            </div>

            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <div>
                <h2 className='font-semibold text-black'>{project.title}</h2>
                <p className='text-sm text-gray-700'>{project.description}</p>
              </div>
              {project.button && (
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                  <a href={project.link} target='_blank' rel='noopener noreferrer'>
                    <Image src={assets.send_icon} alt="send icon" className='w-5' />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Work
