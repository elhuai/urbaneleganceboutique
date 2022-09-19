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
];

export default function PhotoReviewSwiper({ datay }) {
  // console.log('photo',datay);
  let photoList = datay.split(',').filter((item)=>item);
  console.log('photolist', photoList);
  const ShowSwiper = ({ data }) => {
   

    return (
      <Swiper
        slidesPerView={5}
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
      <ShowSwiper data={photoList} />
    </>
  );
}
