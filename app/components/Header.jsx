import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"


const Header = () => {
  return (
   <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-8">
      <motion.div
      initial={{y:-20, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.8, delay:0.3}}>
        <Image src={assets.profile_img} alt="" className="rounded-full w-40" />
      </motion.div>
        <motion.h3 initial={{scale:0}}
          whileInView={{scale:1}}
          transition={{duration:0.8, type:'spring', stiffness:100}} className="flex items-end gap-2 text-xl md:text-2xl mb-3 -mt-10 font-Ovo">

        ¡Hola!, soy Saraí Herrera
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo leading-tight">
        Full stack developer 
      </h1>

      <p className="max-w-2xl mx-auto mt-6 text-lg text-center font-Ovo">
        Soy ingeniero en informática y tengo 3 años de experiencia trabajando
        como desarrolladora en múltiples proyectos, también doy clases de 
        robótica y programación.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-sm mb-8">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contáctame
          <Image src={assets.right_arrow_white} alt="" className="rounded-full w-4" />
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:bg-white dark:text-black "
        >
          Mi currículum
          <Image src={assets.download_icon} alt="" className="rounded-full w-4" />
        </a>
      </div>
    </div>
  )
}

export default Header
