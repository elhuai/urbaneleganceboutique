import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { Pagination } from 'swiper';

import './_EC_homePages_slider.scss';

const fakeData = [
  {
    img: 'https://cms.cdn.91app.com/images/original/2443/239777ee-2454-463f-979f-58e76f373d76-1660289570-5wokisx7j8_m_1200x469_800x313_400x156.jpg',
  },
  {
    img: 'https://cms.cdn.91app.com/images/original/2443/239777ee-2454-463f-979f-58e76f373d76-1657002131-nva3vtbazh_m_1200x469_800x313_400x156.jpg',
  },
  {
    img: 'https://cms.cdn.91app.com/images/original/2443/239777ee-2454-463f-979f-58e76f373d76-1642062123-1irk257tgf_m_1200x469_800x313_400x156.jpg',
  },
  {
    img: 'https://cms.cdn.91app.com/images/original/2443/239777ee-2454-463f-979f-58e76f373d76-1641279304-d7s6vn0a10_m_1200x469_800x313_400x156.jpg',
  },
  {
    img: 'https://cms.cdn.91app.com/images/original/2443/239777ee-2454-463f-979f-58e76f373d76-1659690158-9fwcnhwozs_m_1200x469_800x313_400x156.jpg',
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
