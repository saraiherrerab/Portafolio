import Image from 'next/image'; // Add this line
import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'


const About = (isDarkMode) => {
  return (
    <div id='about' className='w-full px-[12%] py-5 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About me</h2>
      <div className='flex w-full flex-col lg:flex-row 
      items-center gap-20 my-5'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='user' className='w-full
            rounded-3xl width={500} height={300}'/>
        </div>
        <div className='flex-l'>
            <p className='mb-10 max-w-2xl font-Ovo'
            >Soy Desarrolladora Full Stack, con experticia en React, TypeScript y Next.js para el frontend, y
                 con las habilidades necesarias para trabajar en el backend y asegurar la operatividad total de
                  las aplicaciones.</p>
            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6
             max-w-2xl'>
                {infoList.map(({icon, iconDark, title, description},
                    index)=>(
                    <li className='border-[0.5px] border-gray-400
                    rounded-xl p-6 cursor-pointer hover:bg-light-hover
                    hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white'
                    key={index}>
                        <Image src={isDarkMode? iconDark : icon} alt={title} className='w-7
                        mt-3'/>
                        <h3 className='my-4 font-semibold
                         text-gray-700 dark:text-white'>{title}</h3>
                        <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>

                    </li>
                )) }
            </ul>
            <h4 className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I use</h4>
            <ul className='flex items-center gap-3 sm:gap-5'>
                {toolsData.map((tool, index )=>(
                    <li className='flex items-center justify-center w-12 sm:w-14 aspect-square
                    border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                        <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
