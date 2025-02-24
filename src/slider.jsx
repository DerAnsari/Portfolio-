import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal, faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';

const DivSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const slides = [
    <div key="1" className=" md:min-h-[80vh] h-[50vh] w-full bg-white flex flex-col md:flex-row items-end md:items-center justify-end rounded-lg "style={{ 
        backgroundImage: "url('./public/form.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className='bg-[#BCD8C1] flex flex-col rounded-sm w-full md:w-1/2 p-4 opacity-90 md:h-[70vh] md:mr-8 md:p-8'>
        <h1 className='my-4 md:my-10 text-xl text-center md:text-4xl'>Multi Stage Form</h1>
        <p className="text-sm md:text-3xl">
            This project is a multi-stage form built using React Hooks to handle form state, validation, and navigation between steps efficiently. The form is designed to collect user input in multiple steps.
        </p>
        
        <div className='flex flex-row gap-3 md:gap-5 justify-around my-4 md:my-10'>
            <span className='flex items-center gap-2'>
                <a href="https://multi-form-weld.vercel.app/" className="text-sm md:text-3xl">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                  <span className="ml-2">Visit</span>
                </a>
            </span>
            <span className='flex items-center gap-2'>
                <a href="https://github.com/DerAnsari/Multi-Form" className="text-sm md:text-3xl">
                  <FontAwesomeIcon icon={faCode} />
                  <span className="ml-2">Code</span>
                </a>
            </span>
        </div>
      </div>
    </div>,
    <div key="2" className=" md:min-h-[80vh] h-[50vh] w-full bg-white flex flex-col md:flex-row items-end md:items-center justify-end rounded-lg "style={{ 
        backgroundImage: "url('./public/foodwow.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className='bg-[#BCD8C1] flex flex-col rounded-sm opacity-90 w-full md:w-1/2 p-4 md:h-[70vh] md:mr-8 md:p-8'>
        <h1 className='my-4 md:my-10 text-xl md:text-4xl text-center '>Recipe Generator</h1>
        <p className="text-sm md:text-3xl">
          This recipe generator website, powered by the Spoonacular API, makes cooking easy and fun. Enter the name, and instantly get associated recipes with step-by-step instructions and nutritional info.
        </p>
        
        <div className='flex flex-row gap-3 md:gap-5 justify-around my-4 md:my-10'>
            <span className='flex items-center gap-2'>
                <a href="https://recipe-generator-eight-fawn.vercel.app/" className="text-sm md:text-3xl">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                  <span className="ml-2">Visit</span>
                </a>
            </span>
            <span className='flex items-center gap-2'>
                <a href="https://github.com/DerAnsari/Recipe-Generator-" className="text-sm md:text-3xl">
                  <FontAwesomeIcon icon={faCode} />
                  <span className="ml-2">Code</span>
                </a>
            </span>
        </div>
      </div>
    </div>
  ];

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % slides.length);
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, slides.length]);

  const goToPrevious = () => {
    setCurrentIndex(prev => prev === 0 ? slides.length - 1 : prev - 1);
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % slides.length);
  };

  return (
    <div 
      className="w-full text-[#003844] overflow-hidden"
      id='Project'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className='my-5 md:my-15 text-[#E6E1C5] text-2xl md:text-6xl text-center'>My Projects</h1>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Navigation Arrows */}
        <button 
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/30"
        >
          <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Slides Container */}
        <div className="overflow-hidden rounded-lg">
          <div 
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                {slide}
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/30"
        >
          <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-gray-700' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default DivSlider;