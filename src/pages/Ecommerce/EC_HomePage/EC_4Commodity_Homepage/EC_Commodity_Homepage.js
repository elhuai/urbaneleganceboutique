import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../../../../components/SearchBar/SearchBar_search';
import EcHomePageSlider from '../../../../components/EC/EC_homePage/EC_HomePageSlider';
import EcHomePageCategory from '../../../../components/EC/EC_homePage/EC_HomePageCategory';
import EcHomePageCard from '../../../../components/EC/EC_homePage/EC_HomePageCard';

import { commoditySlider } from '../../../../components/EC/EC_homePage/EC_data/Slider/CommoditySlider';
import { commodityCategory } from '../../../../components/EC/EC_homePage/EC_data/Category/CommodityCategory';

const EcCommodityHomepage = () => {
  // 推薦標題
  const cardTitle = [
    {
      name: '飲水機推薦',
      img: 'https://img.freepik.com/free-photo/beautiful-pet-portrait-cat_23-2149218504.jpg?w=1060&t=st=1663212101~exp=1663212701~hmac=96e24d0679d878817239e68b62104c238c8d4dd3b9ab4699c4c37e96e52e60d7',
    },
    {
      name: '小魚乾推薦',
      img: 'https://img.freepik.com/premium-photo/cute-ginger-kitten-peeks-out-from-edge-white-board-copy-space_96064-788.jpg?w=826',
    },
    {
      name: '寵物益生菌推薦',
      img: 'https://img.freepik.com/free-photo/spaniel-puppy-playing-studio-cute-doggy-pet-is-sitting-isolated-blue-background-cavalier-king-charles-negative-space-insert-your-text-image-concept-movement-animal-rights_155003-33840.jpg',
    },
  ];
  // 推薦區域商品
  const [fishCard, setFishCard] = useState([]);
  const [waterCard, setWaterCard] = useState([]);
  const [healthCard, setHealthCard] = useState([]);

  useEffect(() => {
    const fetchFishProducts = async () => {
      const arrStr = [
        { id: '4', text: '飲水機', setState: setFishCard },
        { id: '4', text: '小魚乾', setState: setWaterCard },
        { id: '4', text: '益生菌', setState: setHealthCard },
      ];

      for (let index = 0; index < arrStr.length; index++) {
        const result = await axios.get(
          `http://localhost:3007/api/1.0/product/recommendProduct?id=${arrStr[index].id}&name=${arrStr[index].text}`
        );
        const data = result.data;
        arrStr[index].setState(data);
      }
      // console.log(fishData);
    };
    fetchFishProducts();
  }, []);
  return (
    <>
      <div className="EcCommodityHomepage_main">
        <SearchBar
          searchBar_title="想要什麼商品呢"
          searchBar_placeholder="好吃的狗罐罐"
        />
        <EcHomePageSlider ecTypeSlider={commoditySlider} />
        <EcHomePageCategory ecTypeCategory={commodityCategory} />
        <EcHomePageCard ecTypeCardTitle={cardTitle[0]} ecTypeCard={fishCard} />
        <EcHomePageCard ecTypeCardTitle={cardTitle[1]} ecTypeCard={waterCard} />
        <EcHomePageCard
          ecTypeCardTitle={cardTitle[2]}
          ecTypeCard={healthCard}
        />
      </div>
    </>
  );
};

export default EcCommodityHomepage;
