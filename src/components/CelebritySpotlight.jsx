import React from "react";
import celebrityimg1 from "../assets/celebrityimg1.png";
import celebrityimg2 from "../assets/celebrityimg2.png";

const CelebritySpotlight = () => {
  const handleLinkClick = (event) => {
    event.preventDefault();
    console.log('Article link clicked');
  };

  return (
    <div className="p-8 h-auto xl:h-[105vh] lg:h-[70vh]">
      {/* Header */}
      <div className="text-center mb-10">
        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-red-500 mb-3.5">Celebrity Spotlight</h3>
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-bold">Get to know your favorite celebrity!</p>
      </div>

      {/* Content */}
      <div className="space-y-12">
        {/* Hannah Doe Section */}
        <div className="relative">
          {/* Image on the left - Hidden on mobile */}
          <img
            src={celebrityimg1}
            alt="Hannah Doe"
            className="hidden sm:block absolute left-0 top-14 lg:top-[58px] w-[25vw] h-[40vh] sm:h-[55vh] 2xl:h-[55vh] md:h-[40vh] rounded-lg z-2 "
          />

          {/* Text section on the left - Adjusted for mobile */}
          <div className="sm:absolute left-0 md:left-[95px] sm:left-20  sm:top-16 2xl:left-[205px] xl:top-[62px] xl:left-[110px] xl:h-[22vh] 
          lg:top-[60px] lg:left-[60px]  w-full sm:w-[600px] bg-red-500 text-white p-4 sm:p-6  sm:pl-[120px] z-1 md:w-[50%] 2xl:w-[30%]
           md:p-2.5 md:pl-[40px] 2xl-[40%] 2xl:pl-[120px] lg:h-[13vh] lg:pl-[140px]">
            <h4 className="text-xl sm:text-2xl font-bold mb-2">Hannah Doe, Actress</h4>
            <p className="text-xs sm:text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <a
              href="#"
              onClick={handleLinkClick}
              className="text-white font-semibold block text-right"
            >
              Full Article Here →
            </a>
          </div>
        </div>

        {/* John Green Section */}
        <div className="relative">
          {/* Image on the right - Hidden on mobile */}
          <img
            src={celebrityimg2}
            alt="John Green"
            className="hidden sm:block absolute right-0 top-14 lg:top-[142px] w-[25vw] h-[40vh] sm:h-[55vh] 2xl:h-[55vh] md:h-[40vh] rounded-lg z-2"
          />

          {/* Text section on the right - Adjusted for mobile */}
          <div className="sm:absolute right-0 sm:right-20 md:right-[130px] sm:top-64 xl:top-[300px] 2xl:top-[405px]
          2xl:right-[240px] xl:h-[22vh] xl:right-[200px]  lg:top-[275px] lg:right-[84px] 
          w-full sm:w-[600px] bg-red-500 text-white p-4 sm:p-6  sm:pr-[160px] 2xl:w-[30%] z-1 md:w-[50%] md:p-2.5 2xl:pr-[150px]  lg:h-[13vh] ">
            <h4 className="text-xl sm:text-2xl font-bold mb-2">John Green, Singer</h4>
            <p className="text-xs sm:text-sm mb-4 md:pr-[20px] lg:pr-[140px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <a
              href="#"
              onClick={handleLinkClick}
              className="text-white font-semibold block text-left"
            >
              Full Article Here →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CelebritySpotlight;