import Image from 'next/image'; // Add this line
import { assets, infoList, toolsData, certifications } from '@/assets/assets'
import React from 'react'


const About = (isDarkMode) => {
  return (
    <div id='about' className='w-full px-[5%] sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Introducción</h4>
      <h2 className='text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo'>Acerca de mí</h2>
      <p className='text-center mb-10 mt-8 max-w-4xl mx-auto font-Ovo text-sm sm:text-base px-4'
      >Ingeniera en Informática, mi experiencia abarca el desarrollo de soluciones web y móviles, combinada con sólidos conocimientos en robótica y automatización. Domino el desarrollo web con tecnologías modernas como React, VueJS y Next.js, así como el diseño con Figma. En el ámbito móvil, cuento con experiencia en desarrollo nativo (Kotlin) y React Native, con diversos manejadores de base de datos (PostgreSQL, Firebase, MariaDB). Además, aplico mis conocimientos en C/C++ y Python para dar vida a proyectos con Arduino.</p>
      <div className='flex w-full flex-col lg:flex-row 
      items-center lg:items-start gap-10 lg:gap-20 my-5'>
        <div className='flex flex-col items-center w-full lg:w-auto'>
            <div className='w-48 sm:w-64 md:w-80 rounded-3xl max-w-none'>
                <Image src={assets.foto_cv} alt='user' className='w-full
                rounded-3xl width={500} height={300}'/>
            </div>
        </div>
        <div className='flex-1 w-full'>
            <div className='mb-6 w-full'>
                <h4 className='mb-4 text-gray-700 font-Ovo dark:text-white/80 text-center lg:text-left'>Herramientas que uso</h4>
                <ul className='flex items-center justify-center lg:justify-start gap-3 sm:gap-5 flex-wrap'>
                    {toolsData.map((tool, index )=>(
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square
                        border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                            <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                        </li>
                    ))}
                </ul>
            </div>
            <ul className='grid grid-cols-1 gap-6
             max-w-2xl'>
                {infoList.map(({icon, iconDark, title, description, isHtml},
                    index)=>(
                    <li className='border-[0.5px] border-gray-400
                    rounded-xl p-6 cursor-pointer hover:bg-light-hover
                    hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white'
                    key={index}>
                        <h3 className='mb-2 font-semibold
                         text-gray-700 dark:text-white'>{title}</h3>
                        {isHtml ? (
                            <div className='text-gray-600 text-sm dark:text-white/80' dangerouslySetInnerHTML={{__html: description}} />
                        ) : (
                            <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                        )}

                    </li>
                )) }
            </ul>
        </div>
      </div>

      {/* Certificaciones Section */}
      <div className='mt-12 w-full px-4'>
        <h3 className='text-xl sm:text-2xl font-semibold mb-6 text-gray-700 dark:text-white font-Ovo text-center lg:text-left'>Certificaciones</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {certifications.map((cert, index) => (
            <div key={index} className='border-[0.5px] border-gray-400 rounded-lg p-4 hover:bg-light-hover hover:-translate-y-1 duration-300 dark:border-white dark:hover:bg-dark-hover'>
              <div className='flex items-center justify-between gap-3'>
                <div className='flex-1'>
                  <p className='text-gray-700 text-sm font-medium dark:text-white'>{cert.name}</p>
                  <p className='text-gray-500 text-xs mt-1 dark:text-white/60'>{cert.org}</p>
                </div>
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='px-3 py-1.5 text-xs border border-gray-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors whitespace-nowrap dark:text-white'
                  >
                    Ver credencial
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
