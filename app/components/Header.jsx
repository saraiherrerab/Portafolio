import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"


const Header = () => {
  return (
   <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 py-20 px-4">
      <motion.div
      initial={{y:-20, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.8, delay:0.3}}>
        <Image src={assets.foto_cv} alt="" className="rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover" />
      </motion.div>
        <motion.h3 initial={{scale:0}}
          whileInView={{scale:1}}
          transition={{duration:0.8, type:'spring', stiffness:100}} className="flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl mb-3 font-Ovo flex-wrap">

        ¡Hola!, soy Saraí Herrera
        <Image src={assets.hand_icon} alt="" className="w-5 sm:w-6" />
      </motion.h3>

      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[66px] font-Ovo leading-tight">
        Full stack developer 
      </h1>

      <p className="max-w-2xl mx-auto mt-6 text-sm sm:text-base lg:text-lg text-center font-Ovo px-4">
        Soy ingeniero en informática y tengo 3 años de experiencia trabajando
        como desarrolladora en múltiples proyectos, también doy clases de 
        robótica y programación.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-xs sm:text-sm mb-8 w-full sm:w-auto px-4">
        <a
          href="#contact"
          className="w-full sm:w-auto px-8 sm:px-10 py-3 border border-white rounded-full bg-black text-white flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
        >
          Contáctame
          <Image src={assets.right_arrow_white} alt="" className="rounded-full w-4" />
        </a>

        <a
          href="/Currículum Saraí Herrera Updated (2).pdf"
          download
          className="w-full sm:w-auto px-8 sm:px-10 py-3 border rounded-full border-gray-500 flex items-center justify-center gap-2 dark:bg-white dark:text-black hover:bg-gray-50 transition-colors"
        >
          Mi currículum
          <Image src={assets.download_icon} alt="" className="rounded-full w-4" />
        </a>
      </div>
    </div>
  )
}

export default Header
