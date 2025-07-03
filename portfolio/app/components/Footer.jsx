import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/>
        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
            Jiraphat.srit@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-500 mx-[10%] mt-12 py-6'>
        <p>© 2025 Jiraphat Srit. All rights reserved</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/HikaruMG">GitHub</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/jiraphat-sritawee-91abbb2a2">LinkedIn</a></li>
            <li><a target='_blank' href="https://www.facebook.com/jiraphat.sri/">Facebook</a></li>
        </ul>

        {/* <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://www.flaticon.com/free-icons/big-data">Big data icons</a></li>
            <li><a target='_blank' href="https://www.flaticon.com/free-icons/robot">Robot icons</a></li>
            <li><a target='_blank' href="https://www.facebook.com/jiraphat.sri/">Development icons</a></li>
            <li><a target='_blank' href="https://www.flaticon.com/free-icons/programmer">Programmer icons</a></li>
        </ul> */}

        {/* <a href="https://www.flaticon.com/free-icons/big-data" title="big data icons">Big data icons created by xnimrodx - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/robot" title="robot icons">Robot icons created by FACH - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/development" title="development icons">Development icons created by Design Circle - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/programmer" title="programmer icons">Programmer icons created by Flowicon - Flaticon</a>
         */}

         
      </div>
    </div>
  )
}

export default Footer
