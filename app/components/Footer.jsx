import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20 px-4'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-28 sm:w-36 mx-auto
        mb-2'/>
        <div className='w-max flex items-center gap-2 mx-auto text-xs sm:text-sm break-all max-w-full px-4'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-5 sm:w-6 flex-shrink-0'/>
            <span className='break-all'>saraigabrieladeveloper@gmail.com</span>
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t
      border-gray-400 mx-[5%] sm:mx-[10%] mt-12 py-6 text-xs sm:text-sm'>
        <p className='mb-4 sm:mb-0'>© 2026 Saraí Herrera. Todos los derechos reservados.</p>
        <ul className='flex items-center gap-6 sm:gap-10 justify-center flex-wrap'>
            <li><a target='_blank' href='https://github.com/saraiherrerab?tab=overview&from=2026-07-01&to=2026-07-09'>GitHub</a></li>
            <li><a target='_blank' href='https://www.linkedin.com/in/sara%C3%AD-herrera-5413012b8/'>LinkedIn</a></li>
            <li><a target='_blank' href='https://www.instagram.com/saraiherrerab/'>Instagram</a></li>
            
        </ul>
      </div>
    </div>
  )
}

export default Footer
