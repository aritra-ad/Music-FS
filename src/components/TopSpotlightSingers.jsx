import React, { useState } from 'react';
import spotlightsinger from '../assets/spotlightsinger.png';

const TopSpotlightSingers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const singers = [
    {
      name: 'Kiara Watson',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde enim ad dolores recusandae culpa dolor vitae? Sapiente doloribus, sed nulla, ipsam illum obcaecati quos eius quae accusantium dolores praesentium? Eveniet?',
      date: 'Nov. 08, 2024',
      image: spotlightsinger,
    },
    {
      name: 'Millie Strife',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde enim ad dolores recusandae culpa dolor vitae? Sapiente doloribus, sed nulla, ipsam illum obcaecati quos eius quae accusantium dolores praesentium?',
      date: 'Nov. 08, 2024',
      image: spotlightsinger,
    },
    {
      name: 'Selen Heartlock',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde enim ad dolores recusandae culpa dolor vitae? Sapiente doloribus, sed nulla, ipsam illum obcaecati quos eius quae accusantium dolores praesentium?',
      date: 'Nov. 08, 2024',
      image: spotlightsinger,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % singers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + singers.length) % singers.length);
  };

  return (
    <div className='bg-[#ef4230] py-2.5 grid grid-rows-[auto, 1fr] gap-8 justify-items-center pt-[50px] pb-[50px] px-8 md:px-30 relative 2xl:mt-[0px] xl:mt-[] lg:mt-[0px] md:mt-[500px] mt-[0px]'>
      {/* Main Content */}
      <div className='relative w-full overflow-hidden'>
        {/* Mobile and Tablet Layout (Single Slide) */}
        <div className='lg:hidden'>
          <div key={currentSlide} className='transition-transform duration-500 ease-in-out transform translate-x-0'>
            <div className='text-center justify-center items-center relative z-10 mb-8'>
              <img src={singers[currentSlide].image} alt="spotlightsinger" className="mx-auto rounded-full grayscale border-2 border-solid border-black w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 2xl:h-32 2xl:w-32 xl:h-32 xl:w-32" />
              <h3 className='text-white text-center font-extrabold text-2xl md:text-4xl mt-3'>{singers[currentSlide].name}</h3>
              <p className='text-white mt-3.5 text-sm md:text-base mx-4'>{singers[currentSlide].description}</p>
              <div className="flex justify-between items-center mt-4 mx-4">
                <h4 className='text-white font-extrabold text-xl md:text-3xl'>{singers[currentSlide].date}</h4>
                <span className='text-white text-xl md:text-2xl'>&#9734;&#9734;&#9734;&#9734;&#9734;</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop and Laptop Layout (Multiple Slides) */}
        <div className='hidden lg:block'>
          <div key={currentSlide} className='transition-transform duration-500 ease-in-out transform translate-x-0'>
            <div className='text-center justify-center items-center relative z-10 mb-8'>
              <img src={singers[currentSlide].image} alt="spotlightsinger" className="mx-auto rounded-full grayscale border-2 border-solid border-black w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 2xl:h-32 2xl:w-32 xl:h-32 xl:w-32" />
              <div className='text-justify w-full md:w-[800px] mx-auto mt-3.5'>
                <h3 className='text-white text-center font-extrabold text-2xl md:text-4xl'>{singers[currentSlide].name}</h3>
                <p className='text-white mt-3.5 text-sm md:text-base'>
                  {singers[currentSlide].description}
                </p>
                <div className='flex justify-between items-center mt-3'>
                  <h4 className='text-white font-extrabold text-xl md:text-3xl'>{singers[currentSlide].date}</h4>
                  <span className='text-white text-xl md:text-2xl'>&#9734;&#9734;&#9734;&#9734;&#9734;</span>
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full relative z-10 items-center justify-center mt-8 md:mt-0'>
            <div className='text-center flex flex-col items-center justify-center'>
              <div className='text-justify pl-0 md:pl-10'>
                <h3 className='text-white text-center font-extrabold text-2xl md:text-4xl'>{singers[(currentSlide + 1) % singers.length].name}</h3>
                <p className='text-white mt-3.5 text-sm md:text-base'>
                  {singers[(currentSlide + 1) % singers.length].description}
                </p>
                <div className='flex justify-between items-center mt-3'>
                  <h4 className='text-white font-extrabold text-xl md:text-3xl'>{singers[(currentSlide + 1) % singers.length].date}</h4>
                  <span className='text-white text-xl md:text-2xl'>&#9734;&#9734;&#9734;&#9734;&#9734;</span>
                </div>
              </div>
            </div>

            <div className='text-center flex flex-col items-center justify-center'>
              <div className='text-justify pl-0 md:pl-10'>
                <h3 className='text-white text-center font-extrabold text-2xl md:text-4xl'>{singers[(currentSlide + 2) % singers.length].name}</h3>
                <p className='text-white mt-3.5 text-sm md:text-base'>
                  {singers[(currentSlide + 2) % singers.length].description}
                </p>
                <div className='flex justify-between items-center mt-3'>
                  <h4 className='text-white font-extrabold text-xl md:text-3xl'>{singers[(currentSlide + 2) % singers.length].date}</h4>
                  <span className='text-white text-xl md:text-2xl'>&#9734;&#9734;&#9734;&#9734;&#9734;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows for Mobile and Tablet */}
      <div className='flex justify-center items-center space-x-4 mt-8 lg:hidden'>
        <button 
          className="text-white text-4xl p-2 rounded-full absolute left-4 top-1/2 transform -translate-y-1/2"
          onClick={prevSlide}
        >
          &#8592;
        </button>
        <button 
          className="text-white text-4xl p-2 rounded-full absolute right-4 top-1/2 transform -translate-y-1/2"
          onClick={nextSlide}
        >
          &#8594;
        </button>
      </div>

      {/* Arrows for Desktop and Laptop */}
      <button 
        className="hidden lg:flex absolute left-[50px] top-1/2 transform -translate-y-1/2 items-center justify-center text-white text-6xl p-2 rounded-full"
        onClick={prevSlide}
      >
        &#8592;
      </button>
      <button 
        className="hidden lg:flex absolute right-[50px] top-1/2 transform -translate-y-1/2 items-center justify-center text-white text-6xl p-2 rounded-full"
        onClick={nextSlide}
      >
        &#8594;
      </button>
    </div>
  );
};

export default TopSpotlightSingers;
