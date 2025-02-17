import React, { useState } from "react";

const LatestVideos = () => {
  const videos = [
    { id: 1, title: "New Video 1 To Watch" },
    { id: 2, title: "New Video 2 To Watch" },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNavigation = (direction) => {
    setCurrentVideoIndex((prevIndex) => {
      if (direction === "next" && prevIndex < videos.length - 1) {
        return prevIndex + 1; // Move to next video
      }
      if (direction === "prev" && prevIndex > 0) {
        return prevIndex - 1; // Move to previous video
      }
      return prevIndex; // No change if already at the edges
    });
  };

  return (
    <div className="relative mx-auto min-h-[60vh] py-3.5">
      {/* Heading */}
      <div className="mb-8 px-4 sm:px-8 md:px-12 lg:px-18">
        <h3 className="text-[#ef4230] text-3xl sm:text-4xl md:text-[50px] font-extrabold">
          Latest Videos
        </h3>
        <p className="text-xl sm:text-2xl font-bold text-black">
          Watch important news and be up to date<span>!</span>
        </p>
      </div>

      {/* Videos and Text Content */}
      <div className="flex flex-col md:flex-row space-y-8 2xl:space-x-4 xl:space-x-4 lg:space-x-4 md:space-y-0 md:space-x-8 pr-4 sm:pr-8 md:pr-8 lg:pr-8 2xl:pr-0 pl-3">
        {/* First Video */}
        <div
          className={`w-full md:w-[100%] lg:w-[900px] xl:w-[900px] 2xl:w-[900px] h-[200px] sm:h-[250px] md:h-[290px] border border-black relative ${
            currentVideoIndex === 0 ? "ring-4 ring-[#ef4230]" : ""
          }`}
        >
          <div className="w-full h-full bg-black flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              width="48"
              height="48"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Second Video and Text Content */}
        <div className="flex flex-col md:flex-row w-full md:w-auto space-y-8 md:space-y-0 md:space-x-8">
          {/* Second Video */}
          <div
            className={`w-full md:w-[80%] lg:w-[400px] xl:w-[500px] 2xl:w-[900px] h-[200px] sm:h-[250px] md:h-[290px] border border-black relative ${
              currentVideoIndex === 1 ? "ring-4 ring-[#ef4230]" : ""
            }`}
          >
            <div className="w-full h-full bg-black flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                width="48"
                height="48"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Text Content and Button */}
          <div className=" md:items-center md:justify-between w-full space-y-4 md:space-y-0">
            {/* Text Content */}
            <div className="flex flex-col space-y-4 w-full md:w-[80%] ">
              <h4 className="text-[#ef4230] text-2xl sm:text-3xl md:text-4xl font-extrabold">
                {videos[currentVideoIndex].title}
              </h4>
              <p className="text-sm text-black text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
                reprehenderit in voluptate velit esse cillum dolore
              </p>
            </div>

            {/* Button */}
            <button className="bg-[#ef4230] text-white py-2 px-4 rounded hover:scale-105 transform transition w-[200px] mt-4">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-4 mt-8 px-4 sm:px-8 md:px-12 lg:px-18 ">
        {/* Previous Button */}
        <button
          onClick={() => handleNavigation("prev")}
          className={`p-2 border border-black rounded-full ${
            currentVideoIndex === 0 ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={() => handleNavigation("next")}
          className={`p-2 border border-black rounded-full ${
            currentVideoIndex === videos.length - 1 ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LatestVideos;