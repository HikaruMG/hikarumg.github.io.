import React from 'react';
import Image from 'next/image';
import { certificateList } from '@/assets/assets';
import { motion, scale } from 'motion/react'
import { useState } from 'react';



const Certificate = () => {
    const [selectedYear, setSelectedYear] = useState(2024);
    const years = [...new Set(certificateList.map(cert => cert.year))];
    const filteredCerts = certificateList.filter(cert => cert.year === selectedYear);



  return (
    <div id='Certificates'>
        <motion.h3
        
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='text-center mb-2 text-lg font-Ovo'>Certificates</motion.h3>
        <motion.h2 

            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='text-center text-5xl font-Ovo'>What I've Achieved</motion.h2>
        <motion.p
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Courses and certificates I’ve completed to strengthen my expertise.
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-4 mb-10"
            initial={{ opacity: 0}}
              whileInView={{ opacity: 1}}
              transition={{ duration: 0.5, delay: 0.9 }}
        >
        {years.map(year => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-5 py-2 rounded-full border border-gray-500 transition 
              ${selectedYear === year ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
          >
            {year}
          </button>
        ))}
      </motion.div>

        <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.6, delay: 0.9 }}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-10 dark:text-black'>
            {filteredCerts.map((cert, index) =>(
                <motion.div
                whileHover={{scale: 1.15}}
                transition={{duration: 0.3}}
                className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
                key={index}>
                    
                    <div className=' w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 
                    flex items-center justify-between duration-500 gruop-hover:-translate-y-1 group-hover:bottom-7'>
                        
                        <a href={cert.image.src} target="_blank" rel="noopener noreferrer">
                            <Image src={cert.image} alt="" className='w-full h-full'/>
                        </a>
                    </div>
                    
                </motion.div>
            ))}
    </motion.div >
    </div>
  );
};

export default Certificate;
