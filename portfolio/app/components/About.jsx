import React from 'react'
import Image from 'next/image'
import { assets, Databases, infoList, Languages, LibrariesAndFrameworks, toolsData } from '@/assets/assets'
import { motion, scale } from 'motion/react'
const About = ({isDarkMode}) => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }} 
      className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
      <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className='text-center text-5xl font-Ovo'>About me</motion.h2>

      <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.8}}
      className='flex w-full flex-col lg:flex-row gap-20 my-20'> {/*'flex w-full flex-col lg:flex-row items-center gap-20 my-20'*/}
        <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6}}
        className='w-64 sm:w-85 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt="user" className="w-full
            rounded-3xl"/>
        </motion.div>
        <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className='flex-1'>
            <p className='mb-10 max-w-2xl font-Ovo'>
              Hello, I'm a Computer Engineering student at Kasetsart University with a strong focus 
              on data-driven software engineering. I specialize in building scalable software solutions 
              by transforming data into actionable insights, with hands-on experience in Python, C++, 
              and data-centric image processing. I am seeking a co-operative education opportunity 
              where I can apply data-informed decision-making to real-world systems, 
              strengthen my software architecture skills, and contribute effectively in collaborative, 
              fast-paced environments.
            </p>

            <motion.ul
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.8, delay: 1 }}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon, iconDark, title, description}, index) => (
                    <motion.li
                    whileHover={{scale: 1.05}}
                    className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                    hover:bg-lightHover hover:-translate-y-1 hover:shadow-black duration-500 dark:border-white custom-hover'
                    key={index}>
                        <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'/>
                        <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                        <p className='text-gray-600 text-sm dark:text-white/50'>{description}</p>
                    </motion.li>
                ))}
            </motion.ul>

            <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='my-3 text-gr font-Ovo dark:text-white/80'>Languages:</motion.h4>

            {/* <motion.ul 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 1.5, delay: 0.6 }}
            className='flex items-center gap-3 sm:gap-5'>
              {toolsData.map((tool, index) => (
                <motion.li
                whileHover={{scale: 1.1}}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer
                hover:bg-lightHover hover:-translate-y-1 hover:shadow-black duration-500' key={index}>
                  <Image src={tool} alt="tool" className="w-5 sm:w-7" />
                </motion.li>
              ))}
            </motion.ul> */}

            <motion.ul 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 1.5, delay: 0.6 }}
            className='flex items-center gap-3 sm:gap-5'>
              {Languages.map((tool, index) => (
                <motion.li
                whileHover={{scale: 1.1}}
                className='flex items-center justify-center w-12 sm:w-10 aspect-square border border-gray-400 rounded-lg cursor-pointer
                hover:bg-lightHover hover:-translate-y-1 hover:shadow-black duration-500' key={index}>
                  <Image src={tool} alt="tool" className="w-5 sm:w-7" />
                </motion.li>
              ))}
            </motion.ul>

            <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='my-3 text-gr font-Ovo dark:text-white/80'>Libraries & Frameworks:</motion.h4>

            <motion.ul 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 1.5, delay: 0.6 }}
            className='flex items-center gap-3 sm:gap-5'>
              {LibrariesAndFrameworks.map((tool, index) => (
                <motion.li
                whileHover={{scale: 1.1}}
                className='flex items-center justify-center w-12 sm:w-10 aspect-square border border-gray-400 rounded-lg cursor-pointer
                hover:bg-lightHover hover:-translate-y-1 hover:shadow-black duration-500' key={index}>
                  <Image src={tool} alt="tool" className="w-5 sm:w-7" />
                </motion.li>
              ))}
            </motion.ul>

            <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='my-3 text-gr font-Ovo dark:text-white/80'>Databases & Visualization Tools:</motion.h4>

            <motion.ul 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 1.5, delay: 0.6 }}
            className='flex items-center gap-3 sm:gap-5'>
              {Databases.map((tool, index) => (
                <motion.li
                whileHover={{scale: 1.1}}
                className='flex items-center justify-center w-12 sm:w-10 aspect-square border border-gray-400 rounded-lg cursor-pointer
                hover:bg-lightHover hover:-translate-y-1 hover:shadow-black duration-500' key={index}>
                  <Image src={tool} alt="tool" className="w-5 sm:w-7" />
                </motion.li>
              ))}
            </motion.ul>

        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
