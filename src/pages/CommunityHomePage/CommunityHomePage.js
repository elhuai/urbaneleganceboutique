import './_CommunityHomePage.scss';
import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar_search';
import CommunitySwiperLeft from '../../components/Community/CommunitySwiper/CommunitySwiperLeft';
import CommunitySwiperRight from '../../components/Community/CommunitySwiper/CommunitySwiperRight';

const CommunityHomePage = () => {
  return (
    <>
    <div className='CommunityHomePage'>
      <SearchBar
        searchBar_title="想要什麼商品呢"
        searchBar_placeholder="好吃的狗罐罐"
      />
      <div className="comHome_container">
        <CommunitySwiperRight />
        <CommunitySwiperLeft />
        <CommunitySwiperRight />
        <CommunitySwiperLeft />
      </div>
      </div>
    </>
  );
};

export default CommunityHomePage;
