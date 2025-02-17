import React from 'react';

const Hot = () => {
  const trendingTracks = [
    {
      id: 1,
      title: 'Levitating',
      artist: 'Dua Lipa',
      album: 'Future Nostalgia',
      genre: 'Pop',
      color: '#FF9AA2', 
    },
    {
      id: 2,
      title: 'Smells Like Teen Spirit',
      artist: 'Nirvana',
      album: 'Nevermind',
      genre: 'Rock',
      color: '#FFB347',
    },
    {
      id: 3,
      title: 'Sicko Mode',
      artist: 'Travis Scott',
      album: 'Astroworld',
      genre: 'Hip-Hop',
      color: '#B19CD9', 
    },
    {
      id: 4,
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      album: 'After Hours',
      genre: 'Pop',
      color: '#77DD77', 
    },
    {
      id: 5,
      title: 'Hotel California',
      artist: 'Eagles',
      album: 'Hotel California',
      genre: 'Rock',
      color: '#AEC6CF', 
    },
  ];

  return (
    <div className="min-h-screen py-16 px-8 ">
      <h1 className="text-5xl font-extrabold text-[#ef4230] text-center mb-12 tracking-wide">
        Trending Hot Tracks 
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {trendingTracks.map((track) => (
          <div
            key={track.id}
            className="group relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105"
            style={{ backgroundColor: track.color }}
          >
           
            <div
              className="h-48 flex items-center justify-center bg-gradient-to-br from-black/20 to-black/50"
            >
              <span className="text-white text-6xl font-bold animate-pulse">🎵</span>
            </div>

            {/* Track Info */}
            <div className="p-6 text-white">
              <h2 className="text-2xl font-bold mb-2 truncate">{track.title}</h2>
              <p className="text-gray-200 text-lg mb-1 truncate">{track.artist}</p>
              <p className="text-sm text-gray-300 truncate">{track.album}</p>
            </div>

            {/* Hover Actions with Slide-In Animation */}
            <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="px-6 py-2 bg-[#1abc9c] text-white rounded-full mb-4 hover:bg-[#16a085] transition duration-300 focus:outline-none transform translate-y-4 group-hover:translate-y-0">
                Play ▶️
              </button>
              <button className="px-6 py-2 bg-[#3498db] text-white rounded-full hover:bg-[#2980b9] transition duration-300 focus:outline-none transform translate-y-4 group-hover:translate-y-0">
                Add to Playlist ➕
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hot;