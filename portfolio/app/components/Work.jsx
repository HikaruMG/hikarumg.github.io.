import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'



const Work = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1}}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h4 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className='text-center mb-2 text-lg font-Ovo'>My portfolio</motion.h4>

      <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className='text-center text-5xl font-Ovo'>What I’ve Created</motion.h2>

      <motion.p 
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.5, delay: 0.7 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Here are some of the projects I’ve built — from data science and machine learning to web apps and automation bots.</motion.p>

    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 0.6, delay: 0.9 }}
    className='grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-5 my-10 dark:text-black'>
        {workData.map((project, index)=>(
            <motion.div
            whileHover={{scale: 1.05}}
            transition={{duration: 0.3}}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"  key={index} style={{backgroundImage: `url(${project.bgImage})`}}>
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 gruop-hover:-translate-y-1 group-hover:bottom-7'>
                    <div>
                    <h2 className='font-semibold text-black'>{project.title}</h2>
                    <p className='text-sm text-gray-700'>{project.description}</p>
                    </div>

                    {project.button && (
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000]
                     group-hover:bg-lime-300 transition'> {/*'border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'*/}
                        <a href={project.link} target='_blank' rel='noopener noreferrer'>
                        <Image src={assets.send_icon} alt=" send icon" className='w-5'/>
                        </a>
                    </div>)}

                </div>
                
            </motion.div>
        ))}
    </motion.div >
    {/* <motion.a 
    initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.5, delay: 1.1 }}
    href="" className='w-max flex items-center justify-center gap-2 
    text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500
    dark:text-white dark:border-white darkThemehover'>
        Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="Right arrow" className='w-4'/>
    </motion.a> */}
    </motion.div>
  )
}

export default Work
