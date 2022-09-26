import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './_ItemImage.scss';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';

export default function ItemsImage(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { mainURL, productData, photo } = props;

  return (
    <div className="d-flex flex-column img_bar">
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 d-block mb-2"
      >
        <SwiperSlide>
          <img
            src={`http://localhost:3007${mainURL}/${productData.main_photo}`}
            alt=""
          />
        </SwiperSlide>
        {photo.map((data, index) => {
          return (
            <SwiperSlide>
              <div key={index} className="h-100 w-100">
                <img
                  src={`http://localhost:3007${mainURL}/${data['file_name']}`}
                  alt=""
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={`http://localhost:3007${mainURL}/${productData.main_photo}`}
            alt=""
          />
        </SwiperSlide>
        {photo.map((data, index) => {
          return (
            <SwiperSlide>
              <div className="h-100 w-100" key={index}>
                <img
                  src={`http://localhost:3007${mainURL}/${data['file_name']}`}
                  alt=""
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
