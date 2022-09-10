import React from 'react';
import SearchBar from '../../../components/SearchBar/SearchList_search';
import EcHomePageSlider from '../../../components/EC/EC_homePage/EC_HomePageSlider';
import EcHomePageCategory from '../../../components/EC/EC_homePage/EC_HomePageCategory';
import EcHomePageCard from '../../../components/EC/EC_homePage/EC_HomePageCard';

function EcLivingHomepage() {
  return (
    <>
      <div className="EcLivingHomepage_main">
        <SearchBar />
        <EcHomePageSlider />
        <EcHomePageCategory />
        <EcHomePageCard />
      </div>
    </>
  );
}

export default EcLivingHomepage;
