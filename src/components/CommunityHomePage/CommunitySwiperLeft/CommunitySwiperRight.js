import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { BiLike } from 'react-icons/bi';

import './_communitySwiper.scss';

const fakeData = [
  {
    title: '故事的小黃花',
    img: 'https://picsum.photos/id/157/450/270',
    date: '3022年13月32日',
    like: '1234',
  },
  {
    title: '從出生那年就飄著',
    img: 'https://picsum.photos/id/17/450/270',
    date: '3022年13月32日',
    like: '2234',
  },
  {
    title: '童年的盪鞦韆',
    img: 'https://picsum.photos/id/29/450/270',
    date: '3022年13月32日',
    like: '3234',
  },
  {
    title: '隨記憶一直晃到現在',
    img: 'https://picsum.photos/id/172/450/270',
    date: '3022年13月32日',
    like: '4234',
  },
  {
    title: '吹著前奏望著天空',
    img: 'https://picsum.photos/id/144/450/270',
    date: '3022年13月32日',
    like: '5234',
  },
  {
    title: '我想起花瓣試著掉落',
    img: 'https://picsum.photos/id/87/450/270',
    date: '3022年13月32日',
    like: '6234',
  },
];

export default function communityHomePageCard() {
  return (
    <div className="CommunitySwiperRight">
      <Swiper
        loop={true}
        freeMode={true}
        spaceBetween={300}
        slidesPerView={4}
        className="communitySwiper_Right"
        modules={[Autoplay]}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={11000}
        freeModeMomentum={false}
        onSlideChange={(e) => {}}
        onSwiper={(swiper) => {}}
      >
        {fakeData.map((data, index) => {
          return (
            <SwiperSlide key={'community' + index} className="h-100">
              <Link to="/" className="communitySwiper_card d-flex flex-column">
                <div className="obj-fit">
                  <img src={data.img} alt="" />
                </div>
                <div className="d-flex flex-fill flex-column p-3">
                  <div className="communitySwiper_card_title flex-fill">
                    <h5>{data.title}</h5>
                  </div>
                  <div className="communitySwiper_card_info d-flex align-items-end">
                    <div className="communitySwiper_card_author">
                      {data.date}
                    </div>
                    <div className="communitySwiper_card_like">
                      {data.like}
                      <BiLike />
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
  // });
}
