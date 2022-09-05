import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

const gotoTrip = [
  {
    id: 1,
    name: '桃園一日遊',
    start_time: 20220823,
    end_time: 20220830,
    img: 'https://picsum.photos/200/300?random11',
  },

  {
    id: 2,
    name: '花蓮二日遊',
    start_time: 20220820,
    end_time: 20220825,
    img: 'https://picsum.photos/200/300?random6',
  },
  {
    id: 3,
    name: '南投頭七遊',
    start_time: 20220820,
    end_time: 20220825,
    img: 'https://picsum.photos/200/300?random5',
  },
  {
    id: 4,
    name: '雲林三日遊',
    start_time: 20220820,
    end_time: 20220825,
    img: 'https://picsum.photos/200/300?random9',
  },
  {
    id: 5,
    name: '屏東三日遊',
    start_time: 20220820,
    end_time: 20220825,
    img: 'https://picsum.photos/200/300?random29',
  },
  {
    id: 6,
    name: '北京三日遊',
    start_time: 20220820,
    end_time: 20220825,
    img: 'https://picsum.photos/200/300?random49',
  },
  {
    id: 7,
    name: '東京三日遊',
    start_time: 20220820,
    end_time: 20220825,
    img: 'https://picsum.photos/200/300?random90',
  },
];
const TravelSecondSwiper = () => {
  return (
    <>
      <Swiper
        className=""
        spaceBetween={20}
        height={500}
        // autoHeight={true}
        slidesPerView={'auto'}
        onSlideChange={() => console.log()}
        onSwiper={(swiper) => console.log()}
      >
        <ul className="travel_goPlay_ul d-flex text-dark">
          {gotoTrip.map((data) => {
            return (
              <SwiperSlide
                key={data.id}
                className="travel_Swiper_goPlay_Swiper me-md-5 "
              >
                <li>
                  <Link to="/">
                    <div className="travel_goPlay_collection_AllDiv me-5 ">
                      <div>
                        <img
                          className="travel_goPlay_collection_img "
                          src={data.img}
                          alt="#/"
                        />
                      </div>
                      <div className="travel_goPlay_collection_tittleDiv">
                        <h3 className="travel_goPlay_collection_title px-3 ">
                          {data.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </li>
              </SwiperSlide>
            );
          })}
        </ul>
      </Swiper>
    </>
  );
};

export default TravelSecondSwiper;
