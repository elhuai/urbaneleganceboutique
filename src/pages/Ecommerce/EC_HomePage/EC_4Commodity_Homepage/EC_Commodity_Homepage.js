import React from 'react';
import SearchBar from '../../../../components/SearchBar/SearchBar_search';
import EcHomePageSlider from '../../../../components/EC/EC_homePage/EC_HomePageSlider';
import EcHomePageCategory from '../../../../components/EC/EC_homePage/EC_HomePageCategory';
import EcHomePageCard from '../../../../components/EC/EC_homePage/EC_HomePageCard';

import { commoditySlider } from '../../../../components/EC/EC_homePage/EC_data/Slider/CommoditySlider';
import { commodityCategory } from '../../../../components/EC/EC_homePage/EC_data/Category/CommodityCategory';

function EcCommodityHomepage() {
  return (
    <>
      <div className="EcCommodityHomepage_main">
        <SearchBar
          searchBar_title="想要什麼商品呢"
          searchBar_placeholder="好吃的狗罐罐"
        />
        <EcHomePageSlider ecTypeSlider={commoditySlider} />
        <EcHomePageCategory ecTypeCategory={commodityCategory} />
        <EcHomePageCard />
        <EcHomePageCard />
        <EcHomePageCard />
      </div>
    </>
  );
}

export default EcCommodityHomepage;
