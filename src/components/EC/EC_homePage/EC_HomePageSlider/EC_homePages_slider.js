import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { Pagination } from 'swiper';

import './_EC_homePages_slider.scss';

const fakeData = [
  {
    title:
      '花東二日遊part2｜激似紐西蘭牧場、太魯閣國家公園、大坡池、伯朗大道～一次玩好玩滿',
    img: 'https://picsum.photos/id/129/1440/400',
    author: '姓阿名尼基',
    like: '5487',
  },
  {
    title: '新北｜瑞芳 大地寶藏在這裡-探索黃金山城',
    img: 'https://picsum.photos/id/229/1440/400',
    author: 'RainOuO',
    like: '5487',
  },
  {
    title: '苗栗露營兩天一夜行程分享',
    img: 'https://picsum.photos/id/219/1440/400',
    author: '老鐵給個雙基',
    like: '5487',
  },
  {
    title:
      '花東二日遊part2｜激似紐西蘭牧場、太魯閣國家公園、大坡池、伯朗大道～一次玩好玩滿',
    img: 'https://picsum.photos/id/20/1440/400',
    author: 'RainOuO',
    like: '5487',
  },
  {
    title: '新北｜瑞芳 大地寶藏在這裡-探索黃金山城',
    img: 'https://picsum.photos/id/29/1440/400',
    author: '老鐵給個雙基',
    like: '5487',
  },
];

export default function EC_HomePageCard() {
  return (
    <Swiper
      pagination={true}
      loop={true}
      slidesPerView={1}
      // spaceBetween={3}
      className="ecHomePageSwiper"
      modules={[Autoplay, Pagination]}
      // modules={[Pagination]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      onSlideChange={(e) => {}}
      onSwiper={(swiper) => {}}
    >
      {fakeData.map((data, index) => {
        return (
          <SwiperSlide
            key={'ecHomePage' + index}
            className="h-100 d-flex justify-content-center"
          >
            <Link to="/" className="ecHomePage_card d-flex flex-column">
              <div className="ecHomePage_img d-flex justify-content-center">
                <img src={data.img} alt="" />
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
  // });
}
