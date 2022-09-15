import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { Pagination } from 'swiper';

import './_EC_homePages_slider.scss';

export default function EC_HomePageSlider(props) {
  const { ecTypeSlider } = props;

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
      {ecTypeSlider.map((data, index) => {
        return (
          <SwiperSlide
            key={'ecHomePageSlider' + index}
            className="h-100 d-flex justify-content-center"
          >
            <Link to="/" className="ecHomePage_slider d-flex flex-column">
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
