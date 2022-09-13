import './_CommunityHomePage.scss';
import React from 'react';
import SearchBar from '../../components/SearchBar/SearchList_search';
import CommunitySwiperLeft from '../../components/CommunityHomePage/CommunitySwiperLeft/CommunitySwiperLeft';


const CommunityHomePage = () => {
  return (
    <>
      <SearchBar />
      <div className="comHome_container">
        <CommunitySwiperLeft />
      </div>
    </>
  );
};

export default CommunityHomePage;
