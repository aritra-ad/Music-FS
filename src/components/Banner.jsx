import React from 'react';
import bannerimg from '../assets/bannerimg.png';

const Banner = () => {
  return (
    <div className="relative 2xl:h-screen xl:h-[70vh]  lg:h-[50vh]  md:h-[70vh] h-[80vh]   overflow-hidden">  
      {/* Banner Image */}
        <img 
    src={bannerimg} 
    alt="Banner" 
    className="absolute right-[220px] top-[58px] 2xl:h-[74vh] h-[55vh] hidden md:hidden xl:block 2xl:block lg:hidden z-2 
              md:right-[10%] lg:right-[15%] xl:right-[150px] 2xl:right-[220px]" 
    loading="lazy"
        />

      {/* New Release Section */}
      <div className="absolute 2xl:right-[590px] xl:right-[590px] lg:right-[240px] md:right-[153px] sm:right-[10%] top-[50px] xl:top-[130px] sm:top-[100px] md:top-[196px] w-full max-w-[600px] px-4 sm:px-0 sm:w-[600px] transition duration-300 ease-in-out hover:translate-x-2">
        <h2 className="bg-[#ef4230] text-[18px] sm:text-[22px] text-white px-3.5 py-3.5 text-justify">
          New Release
          <span className="block mt-2 text-[14px] sm:text-[15px] 2xl:pr-[30px] xl:pr-[30px] lg:pr-[30px] md:pr-[30px] pr-[0px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </span>
        </h2>  
      </div>

      {/* Quote Section */}
      <div className="absolute 2xl:left-[20px] xl:left-[20px] lg:left-[120px] md:left-[80px] sm:left-[0px] 2xl:top-[530px] xl:top-[400px] lg:top-[500px] md:top-[500px] top-[430px] 2xl:ml-20 xl:ml-20 lg:ml-20 md:ml-20 ml-4 w-full max-w-[500px]  sm:px-0 sm:w-[500px]">
        <h1 className="font-semibold text-[24px] sm:text-[40px] text-[#515155]">
          It’s my break through.
          <span className="block text-[14px] sm:text-[20px] mt-4.5 text-[#ef4230]">
            — Hannah Doe, Rookie Actress
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;

