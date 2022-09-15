import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../../../../components/SearchBar/SearchBar_search';
import EcHomePageSlider from '../../../../components/EC/EC_homePage/EC_HomePageSlider';
import EcHomePageCategory from '../../../../components/EC/EC_homePage/EC_HomePageCategory';
import EcHomePageCard from '../../../../components/EC/EC_homePage/EC_HomePageCard';

import { restaurantSlider } from '../../../../components/EC/EC_homePage/EC_data/Slider/RestaurantSlider';
import { restaurantCategory } from '../../../../components/EC/EC_homePage/EC_data/Category/RestaurantCategory';
function EcRestaurantHomepage() {
  // 推薦標題
  const cardTitle = [
    {
      name: '咖啡廳推薦',
      img: 'https://img.freepik.com/free-photo/cocker-spaniel-eating-birthday-cake-home_1303-27275.jpg?w=740&t=st=1663238986~exp=1663239586~hmac=5e8361aa3b9c9c56ce72b1379ca5f4f164eb18805bc7bfed3defb487090b5fb6',
    },
    {
      name: '寵物甜點推薦',
      img: 'https://img.freepik.com/premium-photo/cute-ginger-kitten-peeks-out-from-edge-white-board-copy-space_96064-788.jpg?w=826',
    },
    {
      name: '寵物益生菌推薦',
      img: 'https://img.freepik.com/free-photo/spaniel-puppy-playing-studio-cute-doggy-pet-is-sitting-isolated-blue-background-cavalier-king-charles-negative-space-insert-your-text-image-concept-movement-animal-rights_155003-33840.jpg',
    },
  ];
  // 推薦區域商品
  const [coffeeCard, setCoffeeCard] = useState([]);
  const [cakeCard, setCakeCard] = useState([]);
  // const [healthCard, setHealthCard] = useState([]);

  useEffect(() => {
    const fetchFishProducts = async () => {
      const arrStr = [
        { id: '3', text: '咖啡', setState: setCoffeeCard },
        { id: '3', text: '蛋糕', setState: setCakeCard },
        // { text: '益生菌', setState: setHealthCard },
      ];

      for (let index = 0; index < arrStr.length; index++) {
        const result = await axios.get(
          `http://localhost:3007/api/1.0/product/recommendProduct?id=${arrStr[index].id}&name=${arrStr[index].text}`
        );
        const data = result.data;
        arrStr[index].setState(data);
      }
    };
    fetchFishProducts();
    // console.log(cakeCard);
  }, []);
  return (
    <>
      <div className="EcRestaurantHomepage_main">
        <SearchBar
          searchBar_title="哪裡有好吃的餐廳？"
          searchBar_placeholder="尚好吃的攏底家"
        />
        <EcHomePageSlider ecTypeSlider={restaurantSlider} />
        <EcHomePageCategory ecTypeCategory={restaurantCategory} />
        <EcHomePageCard
          ecTypeCardTitle={cardTitle[0]}
          ecTypeCard={coffeeCard}
        />
        <EcHomePageCard ecTypeCardTitle={cardTitle[1]} ecTypeCard={cakeCard} />
        {/* <EcHomePageCard
          ecTypeCardTitle={cardTitle[2]}
          ecTypeCard={healthCard}
        /> */}
      </div>
    </>
  );
}

export default EcRestaurantHomepage;
