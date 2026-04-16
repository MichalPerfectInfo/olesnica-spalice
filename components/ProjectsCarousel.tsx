// ProjectsCarousel.tsx

import React, { useState, useEffect } from 'react';
import { Award, ChevronLeft, ChevronRight, X, MapPin, Calendar, Home } from 'lucide-react';
import { projects, Project } from '../data/projects';

export const ProjectsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setGalleryIndex(0);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextGalleryImage = () => {
    if (selectedProject) {
      setGalleryIndex((prev) => (prev + 1) % selectedProject.gallery.length);
    }
  };

  const prevGalleryImage = () => {
    if (selectedProject) {
      setGalleryIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalOpen) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') nextGalleryImage();
        if (e.key === 'ArrowLeft') prevGalleryImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, selectedProject]);

  return (
    <>
      <div id="inne-inwestycje" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 scroll-mt-24">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
          {/* Header */}
          <div className="px-6 sm:px-12 lg:px-16 pt-8 pb-4">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/15 backdrop-blur-sm rounded-full mb-4">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-300" />
              <span className="text-primary-100 text-xs sm:text-sm font-semibold tracking-wide">Sprawdzony deweloper</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Poznaj nasze <span className="text-primary-300">inne inwestycje</span>
            </h3>
          </div>

          {/* Carousel */}
          <div className="relative px-6 sm:px-12 lg:px-16 pb-8">
            {/* Carousel container with relative positioning for arrows */}
            <div className="relative">
              <div className="overflow-hidden rounded-xl">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {projects.map((project) => (
                    <div 
                      key={project.id} 
                      className="w-full flex-shrink-0 cursor-pointer group"
                      onClick={() => openModal(project)}
                    >
                      <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-xl">
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-primary-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <p className="text-white font-semibold text-lg">Kliknij, żeby zobaczyć zdjęcia</p>
                            <p className="text-white/70 text-sm mt-1">{project.gallery.length} zdjęć w galerii</p>
                          </div>
                        </div>
                        
                        {/* Project info */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                          <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.title}</h4>
                          <div className="flex flex-wrap gap-3 text-sm text-white/80">
                            <span className="flex items-center gap-1.5">
                              <MapPin className="w-4 h-4" />
                              {project.location}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-4 h-4" />
                              {project.year}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Home className="w-4 h-4" />
                              {project.units}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation arrows - positioned relative to the image container */}
              <button
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-colors z-10"
                aria-label="Poprzedni projekt"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-colors z-10"
                aria-label="Następny projekt"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white w-8' 
                      : 'bg-white/40 hover:bg-white/60 w-2.5'
                  }`}
                  aria-label={`Przejdź do projektu ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Decorative circles */}
          <div className="hidden sm:block absolute top-6 right-6 w-24 h-24 border-2 border-white/10 rounded-full" />
          <div className="hidden sm:block absolute bottom-10 right-20 w-16 h-16 border-2 border-white/10 rounded-full" />
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="text-sm">Zamknij</span>
              <X className="w-6 h-6" />
            </button>

            {/* Main image */}
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black">
              <img
                src={selectedProject.gallery[galleryIndex]}
                alt={`${selectedProject.title} - zdjęcie ${galleryIndex + 1}`}
                className="w-full h-full object-contain"
              />
              
              {/* Gallery navigation */}
              <button
                onClick={prevGalleryImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                aria-label="Poprzednie zdjęcie"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextGalleryImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                aria-label="Następne zdjęcie"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm">
                {galleryIndex + 1} / {selectedProject.gallery.length}
              </div>
            </div>

            {/* Project info */}
            <div className="mt-4 text-center">
              <h4 className="text-xl sm:text-2xl font-bold text-white">{selectedProject.title}</h4>
              <div className="flex justify-center flex-wrap gap-4 mt-2 text-sm text-white/70">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {selectedProject.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {selectedProject.year}
                </span>
                <span className="flex items-center gap-1.5">
                  <Home className="w-4 h-4" />
                  {selectedProject.units}
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-2">
              {selectedProject.gallery.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setGalleryIndex(index)}
                  className={`flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden transition-all duration-200 ${
                    index === galleryIndex 
                      ? 'ring-2 ring-primary-400 ring-offset-2 ring-offset-black' 
                      : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};