import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
const swiperImage = [
  {
    id: 144,
    tittle: '瓦甘達五日遊',
    start_time: 20220823,
    end_time: 20220830,
    img: 'https://i.pravatar.cc/300',
    userid: '瓦甘納佛欸ㄇ',
    days: 5,
    userphoto: 'https://i.pravatar.cc/200?img=2',
  },

  {
    id: 122,
    tittle: '外太空五日遊混混混混天天天天天水',
    start_time: 20220820,
    end_time: 20220825,
    img: 'https://picsum.photos/200/300?random21',
    userid: 'I am Iron man',
    days: 5,
    userphoto: 'https://i.pravatar.cc/200?img=4',
  },
  {
    id: 313,
    tittle: '日本五日遊',
    start_time: 20220819,
    end_time: 20220820,
    img: 'https://picsum.photos/200/300?random30',
    userid: '摳擬機挖',
    days: 5,
    userphoto: 'https://i.pravatar.cc/200?img=1',
  },
  {
    id: 54,
    tittle: '北極五日遊',
    start_time: 20220819,
    end_time: 20220820,
    img: 'https://picsum.photos/200/300?random32',
    userid: '旋風特風龍捲風',
    days: 5,
    userphoto: 'https://i.pravatar.cc/200?img=5',
  },
  {
    id: 5,
    tittle: '海底五日遊',
    start_time: 20220819,
    end_time: 20220820,
    img: 'https://picsum.photos/200/300?random36',
    userid: '阿扣麵',
    days: 5,
    userphoto: 'https://i.pravatar.cc/200?img=7',
  },
];
const TravelFooterSwiper = () => {
  return (
    <>
      <Swiper
        className="travel_Swiper_EveryOnetrip_AllSwiper"
        spaceBetween={20}
        height={500}
        // autoHeight={false}
        slidesPerView={'auto'} //顯示幾個
        onSlideChange={() => console.log()}
        onSwiper={(swiper) => console.log()}
      >
        {swiperImage.map((vaule) => {
          return (
            <SwiperSlide
              key={vaule.id}
              className="travel_Swiper_EveryOnetrip me-5"
            >
              <Link to="/#" className="mt-3">
                <div className="">
                  <img
                    className="travel_Swiper_EveryOnetrip_Img "
                    src={vaule.img}
                    alt="123"
                  />
                </div>
              </Link>
              <div className="d-flex  justify-content-between ">
                <div className="travel_Swiper_EveryOnetrip_tittle_div">
                  <p className="travel_Swiper_EveryOnetrip_tittle user-select-none mt-3">
                    {vaule.tittle}
                  </p>
                </div>
                <div className="">
                  <p className="travel_Swiper_EveryOnetrip_day pe-md-3 user-select-none mt-3">
                    {vaule.days}天
                  </p>
                </div>
              </div>

              <div className="d-flex">
                <div>
                  <img
                    className="travel_Swiper_EveryOnetrip_userImage"
                    src={vaule.userphoto}
                    alt="#/"
                  />
                </div>
                <div className="d-flex align-items-center">
                  <h4 className="travel_Swiper_EveryOnetrip_username mx-md-3 user-select-none">
                    {vaule.userid}
                  </h4>
                  <div>
                    <h4 className="travel_Swiper_EveryOnetrip_follow  ps-2">
                      追蹤
                    </h4>
                  </div>
                </div>
              </div>
              <div className="travel_Swiper_EveryOnetrip_date mt-3  user-select-none">
                {vaule.start_time}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TravelFooterSwiper;
