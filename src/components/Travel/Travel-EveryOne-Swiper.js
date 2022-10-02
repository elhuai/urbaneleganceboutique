import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper';
import userphoto from '../../images/travels/user-3296.svg';

const moment = require('moment');

const TravelFooterSwiper = ({ travelCommunity }) => {
  console.log('travelCommunity===============', travelCommunity);

  const newArr = travelCommunity.map((data) => {
    const startDate = moment(data.start_time);
    const endDate = moment(data.end_time);
    const differentDate = endDate.diff(startDate, 'days');
    // console.log(startDate + '跟' + endDate + '相差' + differentDate + '天');
    // console.log('differentDate', differentDate);
    for (let i = 0; i < travelCommunity.length; i++) {
      travelCommunity[i].differentDays = differentDate;
    }
    return differentDate;
    //Demo的時候盡量天數一樣 顯示總共幾天小有bug
  });
  // console.log('newArr', newArr);
  console.log('travelCommunity======================', travelCommunity);
  return (
    <>
      <Swiper
        className="travel_Swiper_EveryOnetrip_AllSwiper"
        loop={true}
        freeMode={true}
        spaceBetween={30}
        slidesPerView={3}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChange={(e) => {}}
        onSwiper={(swiper) => {}}
      >
        {travelCommunity.map((data) => {
          return (
            <SwiperSlide
              key={data.id}
              className="travel_Swiper_EveryOnetrip me-5"
            >
              <Link
                to={`/Travel_map?travelid=${data.travelId}`}
                className="mt-3"
              >
                <div className="">
                  <img
                    className="travel_Swiper_EveryOnetrip_Img "
                    src={
                      process.env.REACT_APP_BASE_API_URL + '/' + data.main_photo
                    }
                    alt="123"
                  />
                </div>
              </Link>
              <div className="d-flex  justify-content-between ">
                <div className="travel_Swiper_EveryOnetrip_tittle_div">
                  <p className="travel_Swiper_EveryOnetrip_tittle user-select-none mt-3">
                    {data.title}
                  </p>
                </div>
                <div className="">
                  <p className="travel_Swiper_EveryOnetrip_day pe-md-3 user-select-none mt-3">
                    {/* TODO: Demo的時候盡量天數一樣 顯示總共幾天小有bug */}
                    {data.differentDays}天
                  </p>
                </div>
              </div>

              <div className="d-flex">
                <div>
                  {travelCommunity.length === '' ? (
                    <img
                      className="travel_Swiper_EveryOnetrip_userImage"
                      src={userphoto}
                      alt="#/"
                    />
                  ) : (
                    <img
                      className="travel_Swiper_EveryOnetrip_userImage"
                      src={
                        process.env.REACT_APP_BASE_API_URL + '/' + data.photo
                      }
                      alt="#/"
                    />
                  )}
                </div>
                <div className="d-flex align-items-center travel_titlename">
                  <h4 className="travel_Swiper_EveryOnetrip_username mx-md-3 user-select-none">
                    {data.social_name}
                  </h4>
                  <div>
                    <h4 className="travel_Swiper_EveryOnetrip_follow  ps-2">
                      追蹤
                    </h4>
                  </div>
                </div>
              </div>
              <div className="travel_Swiper_EveryOnetrip_date mt-3  user-select-none">
                {data.start_time}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TravelFooterSwiper;
