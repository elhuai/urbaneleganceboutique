import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';
import './_leaderBoardSlide.scss';

const fakeData = [
  {
    rank: 1,
    category: '住宿',
    title: '黃刀鎮秋季極光五天四夜 \u000A 卡梅倫瀑布＆狗狗拉車',
    img: 'https://picsum.photos/id/20/400/600',
  },
  {
    rank: 2,
    category: '住宿',
    title: '黃刀鎮秋季極光五天四夜 \u000A 卡梅倫瀑布＆狗狗拉車',
    img: 'https://picsum.photos/id/22/400/600',
  },
  {
    rank: 3,
    category: '住宿',
    title: '黃刀鎮秋季極光五天四夜 \u000A 卡梅倫瀑布＆狗狗拉車',
    img: 'https://picsum.photos/id/23/400/600',
  },
  {
    rank: 4,
    category: '餐廳',
    title: '黃刀鎮秋季極光五天四夜 \u000A 卡梅倫瀑布＆狗狗拉車',
    img: 'https://picsum.photos/id/24/400/600',
  },
  {
    rank: 5,
    category: '餐廳',
    title: '黃刀鎮秋季極光五天四夜 \u000A 卡梅倫瀑布＆狗狗拉車',
    img: 'https://picsum.photos/id/25/400/600',
  },
  {
    rank: 6,
    category: '餐廳',
    title: '黃刀鎮秋季極光五天四夜 \u000A 卡梅倫瀑布＆狗狗拉車',
    img: 'https://picsum.photos/id/26/400/600',
  },
  {
    rank: 7,
    category: '商品',
    title: '黃刀鎮秋季極光五天四夜 \u000A 卡梅倫瀑布＆狗狗拉車',
    img: 'https://picsum.photos/id/27/400/600',
  },
  {
    rank: 8,
    category: '商品',
    title: '黃刀鎮秋季極光五天四夜 \u000A 卡梅倫瀑布＆狗狗拉車',
    img: 'https://picsum.photos/id/28/400/600',
  },
  {
    rank: 9,
    category: '商品',
    title: '黃刀鎮秋季極光五天四夜 \u000A 卡梅倫瀑布＆狗狗拉車',
    img: 'https://picsum.photos/id/29/400/600',
  },
  {
    rank: 10,
    category: '玩樂',
    title: '黃刀鎮秋季極光五天四夜 \u000A 卡梅倫瀑布＆狗狗拉車',
    img: 'https://picsum.photos/id/30/400/600',
  },
  {
    rank: 11,
    category: '玩樂',
    title: '黃刀鎮秋季極光五天四夜 \u000A 卡梅倫瀑布＆狗狗拉車',
    img: 'https://picsum.photos/id/31/400/600',
  },
  {
    rank: 12,
    category: '玩樂',
    title: '黃刀鎮秋季極光五天四夜 \u000A 卡梅倫瀑布＆狗狗拉車',
    img: 'https://picsum.photos/id/32/400/600',
  },
];

export default function LeaderBoardSlide() {
  const json = JSON.parse(JSON.stringify(fakeData));
  const handleSlideClass = (e) => {
    const slideAll = document.querySelectorAll(
      '.leaderBoardSwiper .swiper-slide'
    );
    const oldPrev2 = document.querySelector(
      '.leaderBoardSwiper .swiper-slide-prev2'
    );
    const oldNext2 = document.querySelector(
      '.leaderBoardSwiper .swiper-slide-next2'
    );
    const oldPrev3 = document.querySelector(
      '.leaderBoardSwiper .swiper-slide-prev3'
    );
    const oldNext3 = document.querySelector(
      '.leaderBoardSwiper .swiper-slide-next3'
    );
    const prev2 = slideAll[e.activeIndex - 2];
    const next2 = slideAll[e.activeIndex + 2];
    const prev3 = slideAll[e.activeIndex - 3];
    const next3 = slideAll[e.activeIndex + 3];
    if (oldPrev2 && oldNext2 && oldPrev3 && oldNext3) {
      oldPrev2.classList.remove('swiper-slide-prev2');
      oldNext2.classList.remove('swiper-slide-next2');
      oldPrev3.classList.remove('swiper-slide-prev3');
      oldNext3.classList.remove('swiper-slide-next3');
    }
    prev2.classList.add('swiper-slide-prev2');
    next2.classList.add('swiper-slide-next2');
    prev3.classList.add('swiper-slide-prev3');
    next3.classList.add('swiper-slide-next3');
  };
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={5}
        spaceBetween={0}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        onSlideChange={handleSlideClass}
        onSwiper={handleSlideClass}
        modules={[Pagination, Autoplay]}
        className="leaderBoardSwiper"
      >
        {json.map((data, index) => {
          return (
            <SwiperSlide key={'slide' + index}>
              {({ isActive }) => {
                return (
                  <>
                    <div className="slide_rank position-absolute">
                      <div className="position-relative w-100 h-100 text-white fw-bold d-flex align-items-center flex-fill">
                        <span className="flex-fill text-center fw-bold">{`${data.category}  No. ${data.rank}`}</span>
                      </div>
                    </div>
                    <div className="slide_card obj-fit  d-flex position-relative">
                      <img
                        className={`slide_card_img position-absolute ${
                          isActive ? '' : 'opacity-75'
                        }`}
                        src={data.img}
                        alt=""
                      />
                      <div className="slide_card_content position-relative w-100">
                        <div className="card-text h-100 d-flex flex-column justify-content-center align-items-center position-relative">
                          <div className="title text-center fw-bold text-white mb-4">
                            {data.title}
                          </div>
                          <Link to="/" className="button fw-bold">
                            出遊 GoGo
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                );
              }}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}