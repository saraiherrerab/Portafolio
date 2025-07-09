import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-5 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Mi portafolio</h4>
      <h2 className='text-center text-5xl font-Ovo'>Mis últimos trabajos</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Bienvenido a mi portafolio, explora mi colección de proyectos
      </p>
      {/* Added responsive grid with autofit here */}
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-6 my-10'>
        {workData.map((project, index) => (
          <div
            key={index}
            className='aspect-square rounded-lg relative cursor-pointer group overflow-hidden'
             style={{backgroundImage:`url(${project.bgImage})`}}
          >
            {/* Use Next.js Image component for the background image */}
             <Image
              src={project.bgImage}
              alt={project.title || 'Project image'} // Always provide a meaningful alt text
              fill // This makes the image fill its parent div
              className="object-cover transition-transform duration-500 group-hover:scale-105" // Stretches to cover, adds hover effect
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Helps Next.js optimize image size
            />

            {/* Content overlaying the image */}
            <div className='absolute inset-0 flex items-end justify-center z-10 p-4'>
              <div className='bg-white w-10/12 rounded-md py-3 px-5 flex items-center justify-between duration-500 group-hover:translate-y-[-0.5rem]'>
                <div>
                  <h3 className='text-xl font-semibold'>{project.title}</h3>
                  <p className='text-gray-600 text-sm'>{project.description}</p>
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Image src={assets.send_icon} alt='Ver proyecto' width={24} height={24} className="ml-4"/>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

        <a href="" className='w-max flex items-center justify-center gap-2
        text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 
        mx-auto my-20 duration-500'>
            Ver más <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
        </a>

    </div>
  );
};

export default Work;