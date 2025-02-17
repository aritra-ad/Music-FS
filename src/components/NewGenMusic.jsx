import React from 'react';
import genmusic from '../assets/genmusic.png';

const NewGenMusic = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full  px-4 md:px-8">
      {/* Left Section */}
      <div className="w-full 2xl:h-[85vh] xl:h-[55vh]  md:h-[32vh] lg:h-[40vh] h-[45vh] md:w-1/2 p-4 md:p-6 flex justify-center bg-[#ef4230] rounded-lg shadow-lg">
        <div className="text-center md:text-left text-white w-full flex items-center justify-center">
          <div className="text-left space-y-4">
            <h3 className="text-[24px] font-semibold leading-tight">
              Bringing New Gen Music
            </h3>
            <p className="text-[18px] text-gray-100">
              ---- John Green, New & Upcoming Singer
            </p>
            <p className="text-[12px] text-gray-200 max-w-[800px]">
              Experience the sound of tomorrow with John Green. Fresh beats, unforgettable melodies, and a voice that stands out. Join the movement today!
            </p>
            <div className="mt-4 md:mt-6  h-1.5 w-[160px]">
              <a
                href="#"
                className="px-4 py-2 md:px-6 md:py-3 text-[18px] font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition duration-300"
              >
                Listen Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full md:w-1/2  mt-4 md:mt-0">
        <img 
          src={genmusic} 
          alt="New Gen Music" 
          className="w-full 2xl:h-[85vh] xl:h-[55vh] lg:h-[40vh] md:h-[32vh] object-cover md:object-fill grayscale transition-opacity duration-300 ease-in-out hover:opacity-80 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default NewGenMusic;