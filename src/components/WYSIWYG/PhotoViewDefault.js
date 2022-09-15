import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
//
import './swiper.scss';

// import required modules
import { Navigation } from 'swiper';
const imgArr = [
  'https://picsum.photos/200/300?random1',
  'https://picsum.photos/200/300?random2',
  'https://picsum.photos/200/300?random3',
  'https://picsum.photos/200/300?random4',
  'https://picsum.photos/200/300?random5',
  'https://picsum.photos/200/300?random6',
  'https://picsum.photos/200/300?random7',
  'https://picsum.photos/200/300?random8',
  'https://picsum.photos/200/300?random9',
  'https://picsum.photos/200/300?random10',
  'https://picsum.photos/200/300?random11',
  'https://picsum.photos/200/300?random12',
];

const imgArr2 = [
  'https://picsum.photos/200/300?random1',
  'https://picsum.photos/200/300?random2',
  'https://picsum.photos/200/300?random3',
];

export default function PhotoReviewSwiperDefault() {
 
  const ShowSwiper = ({ data }) => {
    return (
      <Swiper
        slidesPerView={6}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="post_mySwiper"
      >
        {data.map((v, index) => {
          return (
            <SwiperSlide key={'swiper' + index}>
              <PhotoProvider>
                {data.map((img, imgIndex) => {
                  return index === imgIndex ? (
                    <PhotoView key={'img' + imgIndex} src={img}>
                      <img src={img} alt="" />
                    </PhotoView>
                  ) : (
                    <PhotoView src={img}></PhotoView>
                  );
                })}
              </PhotoProvider>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  };
  return (
    <>
      <ShowSwiper data={imgArr} />
      {/*       
      <SwiperSlide>
      
        <img src="https://picsum.photos/200/300?random2" alt="" />
        
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/200/300?random3" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/200/300?random4" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <button onClick={ReviewHandle}>點我看更多</button>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/200/300?random1" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/200/300?random1" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/200/300?random1" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/200/300?random1" alt="" />
      </SwiperSlide>

      <PhotoProvider>
        <PhotoView src="https://picsum.photos/200/300?random2">
          <img src="https://picsum.photos/200/300?random2" alt="" />
        </PhotoView>
      </PhotoProvider>
      <PhotoView src="https://picsum.photos/200/300?random3"></PhotoView>
      <PhotoView src="https://picsum.photos/200/300?random1"></PhotoView>
      <PhotoView src="https://picsum.photos/200/300?random4"></PhotoView>
      <PhotoView src="https://picsum.photos/200/300?random5"></PhotoView>
      <PhotoView src="https://picsum.photos/200/300?random6"></PhotoView>
      <PhotoView src="https://picsum.photos/200/300?random7"></PhotoView>
      <PhotoView src="https://picsum.photos/200/300?random8"></PhotoView>
      <PhotoView src="https://picsum.photos/200/300?random19"></PhotoView>
      <PhotoView src="https://picsum.photos/200/300?random10"></PhotoView>
      <PhotoView src="https://picsum.photos/200/300?random11"></PhotoView>
      <PhotoView src="https://picsum.photos/200/300?random12"></PhotoView> */}
    </>
  );
}
