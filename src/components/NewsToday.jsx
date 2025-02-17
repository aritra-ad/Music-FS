import React from 'react';
import newslatest from '../assets/newslatest.png';

const NewsToday = () => {
  return (
    <div className='bg-[#ef4230] min-h-[55vh] flex flex-col md:flex-row items-center justify-center p-6 md:p-12 gap-6 md:gap-12'>
      {/* Text content */}
      <div className='w-full md:w-[45%] lg:w-[40%] xl:w-[35%] 2xl:w-[30%] text-center md:text-left'>
        <h3 className='text-white text-xl sm:text-2xl font-bold mb-4'>
          Exclusive News Today
        </h3>
        <p className='text-white text-justify text-xs sm:text-sm mb-4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        </p>
        <button className='bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out text-sm sm:text-base'>
          Learn More
        </button>
      </div>

      {/* Image */}
      <div className='w-full md:w-[50%] lg:w-[55%] xl:w-[50%] 2xl:w-[55%] border-2 border-black rounded-tl-[50%] rounded-br-[50%] overflow-hidden'>
        <img src={newslatest} alt="News" className='w-full h-full object-cover grayscale' />
      </div>
    </div>
  );
};

export default NewsToday;