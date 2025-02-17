import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen text-[#ef4230] py-16 px-8">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Welcome to our music world! We’re passionate about bringing you the hottest tracks, curated playlists, and an unforgettable listening experience. Dive in and discover the rhythm of your life.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
        <p className="text-lg text-gray-500 text-center">
          Our mission is to connect music lovers with the beats that move them. Whether you're into pop, rock, hip-hop, or something in between, we’ve got you covered. Let’s make every moment musical!
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-[#2c2c2c] rounded-2xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2">Massive Music Library</h3>
            <p className="text-gray-200">
              Explore over 1 million tracks across all genres. From classics to the latest hits, we’ve got it all.
            </p>
          </div>

          <div className="bg-[#2c2c2c] rounded-2xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2">Global Reach</h3>
            <p className="text-gray-200">
              We’re listened to in over 150 countries. Music truly knows no borders!
            </p>
          </div>

          <div className="bg-[#2c2c2c] rounded-2xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2">Curated Playlists</h3>
            <p className="text-gray-200">
              Discover handpicked playlists for every mood, occasion, and genre.
            </p>
          </div>

          <div className="bg-[#2c2c2c] rounded-2xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2">Seamless Experience</h3>
            <p className="text-gray-200">
              Enjoy a smooth, ad-free listening experience on any device.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
        <p className="text-lg text-gray-500 mb-6">
          Ready to explore the world of music? Start your journey with us today.
        </p>
        <button className="px-8 py-3 bg-[#1abc9c] text-white rounded-full hover:bg-[#16a085] transition duration-300 focus:outline-none">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default About;