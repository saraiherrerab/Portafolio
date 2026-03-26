import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';

const Work = ({isDarkMode}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const handleNextImage = (projectIndex, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % totalImages
    }));
  };

  const handlePrevImage = (projectIndex, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + totalImages) % totalImages
    }));
  };

  return (
    <div id='work' className='w-full px-[12%] py-5 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Mi portafolio</h4>
      <h2 className='text-center text-5xl font-Ovo'>Mis últimos trabajos</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Bienvenido a mi portafolio, explora mi colección de proyectos
      </p>
      {/* Added responsive grid with autofit here */}
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-6 my-10 dark:text-black'>
        {workData.map((project, index) => {
          const hasMultipleImages = project.images && project.images.length > 1;
          const currentIndex = currentImageIndex[index] || 0;
          const displayImage = hasMultipleImages ? project.images[currentIndex] : project.bgImage;
          
          console.log(`Project ${index}:`, { hasMultipleImages, currentIndex, displayImage, images: project.images });

          return (
            <div key={index} className='flex flex-col gap-3'>
              <div className='aspect-square rounded-lg relative cursor-pointer group overflow-hidden'>
                {/* Use Next.js Image component for the background image */}
                <Image
                  src={displayImage}
                  alt={project.title || 'Project image'}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Navigation arrows for multiple images */}
                {hasMultipleImages && (
                  <>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handlePrevImage(index, project.images.length);
                      }}
                      className='absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 transition-all'
                    >
                      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleNextImage(index, project.images.length);
                      }}
                      className='absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 transition-all'
                    >
                      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                      </svg>
                    </button>
                  </>
                )}

                {/* Content overlaying the image */}
                <div className='absolute inset-0 flex items-end justify-center z-10 p-4'>
                  <div className='bg-white w-10/12 rounded-md py-3 px-5 flex items-center justify-between duration-500 group-hover:translate-y-[-0.5rem]'>
                    <div>
                      <h3 className='text-xl font-semibold'>{project.title}</h3>
                      <p className='text-gray-600 text-sm'>{project.description}</p>
                    </div>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Image src={assets.send_icon} alt='Ver proyecto' width={24} height={24} className="ml-4"/>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Image indicators below the card */}
              {hasMultipleImages && (
                <div className='flex justify-center gap-2'>
                  {project.images.map((_, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`h-2 rounded-full transition-all ${
                        imgIndex === currentIndex 
                          ? 'bg-gray-700 dark:bg-gray-300 w-6' 
                          : 'bg-gray-400 dark:bg-gray-500 w-2'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

        <a href="" className='w-max flex items-center justify-center gap-2
        text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 
        mx-auto my-20 duration-500 dark:text-white dark:border-white '>
            Ver más <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
        </a>

    </div>
  );
};

export default Work;