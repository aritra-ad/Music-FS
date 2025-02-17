import React from 'react';
import Banner from '../components/Banner'; 
import NewsToday from '../components/NewsToday'; 
import TodaysHotTopic from '../components/TodaysHotTopic';
import LatestVideos from '../components/LatestVideos';
import NewGenMusic from '../components/NewGenMusic';
import NewsLetters from '../components/NewsLetters';
import CelebritySpotlight from '../components/CelebritySpotlight';
import TopSpotlightSingers from '../components/TopSpotlightSingers';
const Home = () => {
  return (
    <div >
      <Banner />
      <NewsToday /> 
      <TodaysHotTopic />
      <LatestVideos />
      <NewGenMusic />
      <CelebritySpotlight />
      <TopSpotlightSingers />
      <NewsLetters />
    </div>
  );
};

export default Home;
