import React from 'react';
import SearchBar from '../../../../components/SearchBar/SearchBar_search';
import EcHomePageSlider from '../../../../components/EC/EC_homePage/EC_HomePageSlider';
import EcHomePageCategory from '../../../../components/EC/EC_homePage/EC_HomePageCategory';
import EcHomePageCard from '../../../../components/EC/EC_homePage/EC_HomePageCard';
import { livingSlider } from '../../../../components/EC/EC_homePage/EC_data/Slider/LivingSlider';
import { livingCategory } from '../../../../components/EC/EC_homePage/EC_data/Category/LivingCategory';

function EcLivingHomepage() {
  return (
    <>
      <div className="EcLivingHomepage_main">
        <SearchBar
          searchBar_title="找一個好地方住吧"
          searchBar_placeholder="住在你心裡好了"
        />
        <EcHomePageSlider ecTypeSlider={livingSlider} />
        <EcHomePageCategory ecTypeCategory={livingCategory} />
        <EcHomePageCard />
        <EcHomePageCard />
        <EcHomePageCard />
      </div>
    </>
  );
}

export default EcLivingHomepage;
