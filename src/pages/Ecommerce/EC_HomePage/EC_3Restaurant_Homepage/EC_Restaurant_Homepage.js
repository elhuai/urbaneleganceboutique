import React from 'react';
import SearchBar from '../../../../components/SearchBar/SearchBar_search';
import EcHomePageSlider from '../../../../components/EC/EC_homePage/EC_HomePageSlider';
import EcHomePageCategory from '../../../../components/EC/EC_homePage/EC_HomePageCategory';
import EcHomePageCard from '../../../../components/EC/EC_homePage/EC_HomePageCard';

import { restaurantSlider } from '../../../../components/EC/EC_homePage/EC_data/Slider/RestaurantSlider';
import { restaurantCategory } from '../../../../components/EC/EC_homePage/EC_data/Category/RestaurantCategory';
function EcRestaurantHomepage() {
  return (
    <>
      <div className="EcRestaurantHomepage_main">
        <SearchBar
          searchBar_title="哪裡有好吃的餐廳？"
          searchBar_placeholder="尚好吃的攏底家"
        />
        <EcHomePageSlider ecTypeSlider={restaurantSlider} />
        <EcHomePageCategory ecTypeCategory={restaurantCategory} />
        <EcHomePageCard />
        {/* <EcHomePageCard />
        <EcHomePageCard /> */}
      </div>
    </>
  );
}

export default EcRestaurantHomepage;
