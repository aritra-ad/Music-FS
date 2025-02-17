import React from 'react';
import news1 from '../assets/news1.jpg';
import news2 from '../assets/news2.jpg';
import news3 from '../assets/news3.jpg';
import news4 from '../assets/news4.jpg';

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'New Album Release: Artist Drops Highly Anticipated Record',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien nec nisi tincidunt tincidunt.',
      image: news1,
      date: 'October 10, 2024',
      category: 'Releases',
    },
    {
      id: 2,
      title: 'Music Festival 2023: Lineup Announced',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      image: news2,
      date: 'October 9, 2024',
      category: 'Events',
    },
    {
      id: 3,
      title: 'Behind the Scenes: How This Hit Song Was Made',
      description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque.',
      image: news3,
      date: 'October 8, 2024',
      category: 'Stories',
    },
    {
      id: 4,
      title: 'Top 10 Songs of the Week',
      description: 'Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
      image: news4,
      date: 'October 7, 2024',
      category: 'Charts',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#ef4230]">Music News</h1>
        <p className="mt-2 text-lg text-gray-400">Stay updated with the latest in the music world.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsArticles.map((article) => (
          <div
            key={article.id}
            className="rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-[250px] object-cover"
            />

            <div className="p-4 bg-[#ef4230]">
              <span className="inline-block bg-[#ef4230] text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">
                {article.category}
              </span>

              <h2 className="text-lg font-bold text-white mb-2">{article.title}</h2>

              <p className="text-white mb-4">{article.description}</p>

              <p className="text-sm text-white">{article.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-[#ef4230] text-white px-6 py-2 rounded-lg hover:bg-[#d13828] transition-colors duration-300">
          Load More
        </button>
      </div>
    </div>
  );
};

export default News;
