import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { BiLike } from 'react-icons/bi';
import { IoHeartOutline } from 'react-icons/io5';

import './_communitySwiper.scss';

const fakeData = [
  {
    title: '故事的小黃花',
    img: 'https://picsum.photos/id/123/450/270',
    author: '黑松沙士比亞',
    like: '1234',
  },
  {
    title: '從出生那年就飄著',
    img: 'https://picsum.photos/id/223/450/270',
    author: '雪碧不見面',
    like: '2234',
  },
  {
    title: '童年的盪鞦韆',
    img: 'https://picsum.photos/id/323/450/270',
    author: '可口可樂果尚酥',
    like: '3234',
  },
  {
    title: '隨記憶一直晃到現在',
    img: 'https://picsum.photos/id/43/450/270',
    author: '蘋果西打咩唷',
    like: '4234',
  },
  {
    title: '吹著前奏望著天空',
    img: 'https://picsum.photos/id/54/450/270',
    author: '七喜咧哈囉',
    like: '5234',
  },
  {
    title: '我想起花瓣試著掉落',
    img: 'https://picsum.photos/id/26/450/270',
    author: '分達美樂披薩',
    like: '6234',
  },
];

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
                        process.env.REACT_APP_BASE_API_URL +
                        '/' +
                        data.main_photo
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
