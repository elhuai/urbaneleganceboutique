import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { BiLike } from 'react-icons/bi';
import { IoHeartOutline } from 'react-icons/io5';

import './_communitySwiper.scss';

export default function communityHomePageCard(props) {
  const { comHomePageCard } = props;
  // console.log('props', props);

  return (
    <>
      <div className="CommunitySwiperLeft">
        <Swiper
          loop={true}
          freeMode={true}
          spaceBetween={50}
          slidesPerView={3}
          className="communitySwiper_Left"
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          onSlideChange={(e) => {}}
          onSwiper={(swiper) => {}}
        >
          {comHomePageCard.map((data, index) => {
            return (
              <SwiperSlide key={'comHomePageCard' + index} className="h-100">
                <Link
                  to="/"
                  className="communitySwiper_card d-flex flex-column"
                >
                  <div className="obj-fit">
                    <img
                      src={
                        process.env.REACT_APP_BASE_URL + '/' + data.main_photo
                      }
                      alt="123"
                    />
                  </div>
                  <div className="d-flex flex-fill flex-column p-3">
                    <div className="communitySwiper_card_title flex-fill">
                      <h5>{data.title}</h5>
                    </div>
                    <div className="communitySwiper_card_infoArea d-flex justify-content-between align-items-end">
                      <div className="communitySwiper_card_info d-flex align-items-end">
                        <div className="communitySwiper_card_author">
                          {data.user_name}
                        </div>
                        <div className="communitySwiper_card_like">
                          ｜{data.likes}
                          <BiLike />
                        </div>
                      </div>
                      <div className="communitySwiper_card_heart">
                        <IoHeartOutline />
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
  // });
}
