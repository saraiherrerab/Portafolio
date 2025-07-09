import { serviceData, assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-5 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Lo que ofrezco</h4>
        <h2 className='text-center text-5xl font-Ovo'>Mis Servicios</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            Ofrezco una gama completa de servicios como Desarrolladora Full Stack,
            especializada en la creación de aplicaciones de principio a fin.
        </p>
        <div className='grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-6 my-10'> {/* <-- ¡Aquí el cambio! */}
            {serviceData.map((service, index) => (
                <div key={index} className='border border-gray-400 rounded-lg px-8 py-12
                hover:shadow-black cursor-pointer hover:bg-light-hover
                hover:-translate-y-1 duration-500'>
                    <Image src={service.icon} alt={service.title} className='w-10' width={40} height={40}/>
                    <h3 className='text-lg my-4 text-gray-700'>{service.title}</h3>
                    <p className='text-sm text-gray-600 leading-5'>
                        {service.description}
                    </p>
                    <a href={service.link} className='flex items-center gap-2 text-sm mt-5'>
                        Read more <Image alt='' src={assets.right_arrow} className='w-4' width={16} height={16}/>
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services