import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../../../../components/SearchBar/SearchBar_search';
import EcHomePageSlider from '../../../../components/EC/EC_homePage/EC_HomePageSlider';
import EcHomePageCategory from '../../../../components/EC/EC_homePage/EC_HomePageCategory';
import EcHomePageCard from '../../../../components/EC/EC_homePage/EC_HomePageCard';
import '../_ECHomepage.scss';
import { enjoySlider } from '../../../../components/EC/EC_homePage/EC_data/Slider/EnjoySlider';
import { enjoyCategory } from '../../../../components/EC/EC_homePage/EC_data/Category/EnjoyCategory';
import { API_URL } from '../../../../utils/config';

function EcEnjoyHomepage() {
  // 推薦標題
  const cardTitle = [
    {
      name: '海派出遊',
      img: 'https://img.freepik.com/free-photo/little-terrier-dog-playing-sea_53876-94775.jpg?w=740&t=st=1663244690~exp=1663245290~hmac=040682012ba7e69a8d923017729d16983533bb08eb105512b0127b50be81ba56',
    },
    {
      name: '山派出遊',
      img: 'https://img.freepik.com/free-photo/vertical-closeup-shot-german-shepherd-dog-standing-stone-sunny-day_181624-30529.jpg?w=740&t=st=1663244783~exp=1663245383~hmac=62eb3445184fc65138690b78c22cf9a7f0a7247e541e0d017f1f6fb9b7f384fc',
    },
    {
      name: '寵物益生菌推薦',
      img: 'https://img.freepik.com/free-photo/spaniel-puppy-playing-studio-cute-doggy-pet-is-sitting-isolated-blue-background-cavalier-king-charles-negative-space-insert-your-text-image-concept-movement-animal-rights_155003-33840.jpg',
    },
  ];
  // 推薦區域商品
  const [coffeeCard, setCoffeeCard] = useState([]);
  const [cakeCard, setCakeCard] = useState([]);
  const [healthCard, setHealthCard] = useState([]);

  // 搜尋==========
  const [search, setSearch] = useState('');
  const [titleSearch, setTitleSearch] = useState('');

  useEffect(() => {
    const fetchFishProducts = async () => {
      const arrStr = [
        { id: '2', text: '水', setState: setCoffeeCard },
        { id: '2', text: '山', setState: setCakeCard },
        // { text: '益生菌', setState: setHealthCard },
      ];

      for (let index = 0; index < arrStr.length; index++) {
        const result = await axios.get(
          `${API_URL}/product/recommendProduct?id=${arrStr[index].id}&name=${arrStr[index].text}`
        );
        const data = result.data;
        arrStr[index].setState(data);
      }
    };
    fetchFishProducts();
    console.log(cakeCard);
  }, []);
  return (
    <div className="ecHomePage">
      <div className="EcEnjoyHomepage_main">
        <SearchBar
          searchBar_title="想去哪裡玩呢"
          searchBar_placeholder="來去你心裡玩耍吧"
          search={search}
          setSearch={setSearch}
          titleSearch={titleSearch}
          setTitleSearch={setTitleSearch}
          typeId={2}
        />
        <EcHomePageSlider ecTypeSlider={enjoySlider} />
        <EcHomePageCategory ecTypeCategory={enjoyCategory} />
        <EcHomePageCard
          ecTypeCardTitle={cardTitle[0]}
          ecTypeCard={coffeeCard}
        />
        <EcHomePageCard ecTypeCardTitle={cardTitle[1]} ecTypeCard={cakeCard} />
      </div>
    </div>
  );
}

export default EcEnjoyHomepage;
