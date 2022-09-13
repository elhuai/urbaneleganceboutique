import React from 'react';
import SearchBar from '../../../../components/SearchBar/SearchBar_search';
import EcHomePageSlider from '../../../../components/EC/EC_homePage/EC_HomePageSlider';
import EcHomePageCategory from '../../../../components/EC/EC_homePage/EC_HomePageCategory';
import EcHomePageCard from '../../../../components/EC/EC_homePage/EC_HomePageCard';

import { enjoySlider } from '../../../../components/EC/EC_homePage/EC_data/Slider/EnjoySlider';
import { enjoyCategory } from '../../../../components/EC/EC_homePage/EC_data/Category/EnjoyCategory';
function EcEnjoyHomepage() {
  return (
    <>
      <div className="EcEnjoyHomepage_main">
        <SearchBar
          searchBar_title="想去哪裡玩呢"
          searchBar_placeholder="來去你心裡玩耍吧"
        />
        <EcHomePageSlider ecTypeSlider={enjoySlider} />
        <EcHomePageCategory ecTypeCategory={enjoyCategory} />
        <EcHomePageCard />
        <EcHomePageCard />
        <EcHomePageCard />
      </div>
    </>
  );
}

export default EcEnjoyHomepage;
