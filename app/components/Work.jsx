import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';

const Work = ({isDarkMode}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

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

  const openModal = (project) => {
    setSelectedProject(project);
    setModalImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalImageIndex(0);
  };

  const nextModalImage = () => {
    if (selectedProject?.images) {
      setModalImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevModalImage = () => {
    if (selectedProject?.images) {
      setModalImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <div id='work' className='w-full px-[5%] sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Mi portafolio</h4>
      <h2 className='text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo'>Mis últimos trabajos</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base px-4'>
        Bienvenido a mi portafolio, explora mi colección de proyectos
      </p>
      {/* Added responsive grid with autofit here */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-6 my-10 dark:text-black'>
        {workData.map((project, index) => {
          const hasMultipleImages = project.images && project.images.length > 1;
          const currentIndex = currentImageIndex[index] || 0;
          const displayImage = hasMultipleImages ? project.images[currentIndex] : project.bgImage;
          
          console.log(`Project ${index}:`, { hasMultipleImages, currentIndex, displayImage, images: project.images });

          return (
            <div key={index} className='flex flex-col gap-3'>
              <div 
                className='aspect-square rounded-lg relative cursor-pointer group overflow-hidden'
                onClick={() => openModal(project)}
              >
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
                <div className='absolute inset-0 flex items-end justify-center z-10 p-2 sm:p-4'>
                  <div className='bg-white w-11/12 sm:w-10/12 rounded-md py-2 sm:py-3 px-3 sm:px-5 flex items-center justify-between duration-500 group-hover:translate-y-[-0.5rem]'>
                    <div className='flex-1 min-w-0'>
                      <h3 className='text-sm sm:text-lg lg:text-xl font-semibold truncate'>{project.title}</h3>
                      <p className='text-gray-600 text-xs sm:text-sm'>{project.description}</p>
                    </div>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='ml-2 text-gray-600 hover:text-black transition-colors flex-shrink-0'
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className='w-4 h-4 sm:w-5 sm:h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' strokeWidth={2}>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                        </svg>
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

      {/* Modal */}
      {selectedProject && (
        <div 
          className='fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4'
          onClick={closeModal}
        >
          <div 
            className='bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className='absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10'
            >
              <svg className='w-6 h-6 text-gray-700 dark:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>

            {/* Image carousel */}
            <div className='relative aspect-video bg-gray-100 dark:bg-gray-800'>
              <Image
                src={selectedProject.images ? selectedProject.images[modalImageIndex] : selectedProject.bgImage}
                alt={selectedProject.title}
                fill
                className='object-contain'
              />
              
              {/* Navigation arrows for modal */}
              {selectedProject.images && selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevModalImage}
                    className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 transition-all'
                  >
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                    </svg>
                  </button>
                  <button
                    onClick={nextModalImage}
                    className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 transition-all'
                  >
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                  </button>
                  
                  {/* Image indicators */}
                  <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
                    {selectedProject.images.map((_, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`h-2 rounded-full transition-all ${
                          imgIndex === modalImageIndex 
                            ? 'bg-gray-700 w-6' 
                            : 'bg-gray-400 w-2'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Content */}
            <div className='p-6'>
              <h2 className='text-2xl font-semibold mb-2 text-gray-900 dark:text-white'>{selectedProject.title}</h2>
              <p className='text-sm text-gray-500 dark:text-gray-400 mb-4'>{selectedProject.description}</p>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-6'>{selectedProject.fullDescription}</p>
              
              {/* Link button in modal */}
              {selectedProject.link && (
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='inline-flex items-center gap-2 px-6 py-3 bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black rounded-full transition-colors font-medium'
                >
                  Visitar sitio web
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' strokeWidth={2}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Work;