import React from 'react';
import columnimg1 from '../assets/columnimg1.png';
import columnimg2 from '../assets/columnimg2.png';
import columnimg3 from '../assets/columnimg3.png';

const Column = ({ image, title, text }) => (
  <div className="flex flex-col p-6 relative md:border-l-2 border-red-700 -ml-4 hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden">
    <img 
      src={image} 
      alt={title} 
      className="w-full object-cover transition-all duration-300"
    />
    <h3 className="text-[#ef4230] text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-3.5">
      {title}
    </h3>
    <p className="text-justify mt-3.5 opacity-80 transition-opacity duration-300 hover:opacity-100 text-sm sm:text-base">
      {text}
    </p>
    <a
      href="#"
      className="flex items-center text-blue-500 mt-3 font-semibold hover:text-blue-700 transition-colors duration-300"
    >
      <span className="mr-2 text-xl sm:text-2xl text-[#ef4230]">Full Article</span>
      <span className="text-xl sm:text-2xl text-[#ef4230]">&#8594;</span> 
    </a>
  </div>
);

const TodaysHotTopic = () => {
  const columnData = [
    { 
      image: columnimg1, 
      title: "Today's Hot Topic", 
      text: "The digital transformation in the tech industry has led to some of the most innovative products and services. Companies are rapidly adopting new technologies to stay ahead in the competitive market."
    },
    { 
      image: columnimg2, 
      title: "Today's Hot Topic", 
      text: "Artificial intelligence continues to evolve, providing new solutions in sectors like healthcare, finance, and education. Its potential to revolutionize industries is limitless, but we must be mindful of ethical implications."
    },
    { 
      image: columnimg3, 
      title: "Today's Hot Topic", 
      text: "Sustainability is becoming a critical focus for businesses and governments worldwide. From renewable energy to eco-friendly product development, companies are embracing more sustainable practices to reduce their environmental footprint."
    }
  ];

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 sm:px-8 md:px-12 lg:px-20 py-12">
        {columnData.map((col, index) => (
          <Column
            key={index}
            image={col.image}
            title={col.title}
            text={col.text}
          />
        ))}
      </div>
    </div>
  );
};

export default TodaysHotTopic;