import './_CommunityHomePage.scss';
import React from 'react';
import SearchBar from '../../components/SearchBar/SearchList_search';
import CommunitySwiperLeft from '../../components/CommunityHomePage/CommunitySwiperLeft/CommunitySwiperLeft';
import CommunitySwiperRight from '../../components/CommunityHomePage/CommunitySwiperLeft/CommunitySwiperRight';

const CommunityHomePage = () => {
  return (
    <>
      <SearchBar />
      <div className="comHome_container">
        <CommunitySwiperRight />
        <CommunitySwiperLeft />
        <CommunitySwiperRight />
        <CommunitySwiperLeft />
      </div>
    </>
  );
};

export default CommunityHomePage;
