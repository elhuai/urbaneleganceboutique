import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPaw } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import CoverBackground from '../../images/travels/travel_community.png';

const collectTrip = [
  // {
  //   id: 1,
  //   name: '高雄一日遊一天天天天天天',
  //   start_time: 20220823,
  //   end_time: 20220830,
  //   img: 'https://picsum.photos/200/300?random10',
  // },
];

const Travel_Tab = ({ travelUser }) => {
  console.log('travelUser', travelUser);
  return (
    <>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="travel_Nav mb-4 "
      >
        <Tab
          eventKey="home"
          title={
            <div>
              <FaPaw className="travel_nav_mytrip me-2" />
              我的行程
            </div>
          }
          className="travel_Mytrip"
        >
          <div className="d-flex ">
            <Swiper
              className="travel_Tab_Swiper-wrapper"
              spaceBetween={20}
              height={500}
              // autoHeight={false}
              slidesPerView={'auto'} //顯示幾個
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log()}
            >
              {travelUser.length === 0 ? (
                <SwiperSlide>
                  <div>
                    <h1 className="fw-bold travel_noidea"> 還沒有想法嗎？</h1>
                  </div>
                </SwiperSlide>
              ) : (
                travelUser.map((data) => {
                  return (
                    <SwiperSlide
                      key={data.id}
                      className="travel_Tab_Swiper me-md-5 travel_Tab_Link text-dark  mt-3 text-decoration-none"
                    >
                      <Link to={`/Travel_map?travelid=${data.id}`} className="">
                        <div>
                          <img
                            className="travel_Tab_Img "
                            src={
                              data.main_photo === ''
                                ? CoverBackground
                                : process.env.REACT_APP_BASE_API_URL +
                                  '/' +
                                  data.main_photo
                            }
                            alt="123456"
                          />
                          <div className="travel_Tab_tittleDiv">
                            <p className="travel_Tab_tittleName px-3">
                              {data.title}
                            </p>
                          </div>
                          <div className="travel_Tab_tittleDate mb-md-4 px-3">
                            {data.start_time}~{data.end_time}
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })
              )}
            </Swiper>
          </div>
        </Tab>
        {/* <Tab eventKey="與我分享的行程" title="收藏的行程" className="">
          <div className="d-flex ">
            <Swiper
              className="travel_Tab_Swiper-wrapper "
              spaceBetween={20}
              height={500}
              // autoHeight={false}
              slidesPerView={'auto'} //顯示幾個
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log()}
            >
              {collectTrip.length === 0 ? (
                <SwiperSlide>
                  <div>
                    <h1 className="fw-bold  travel_noidea ">還沒有想法嗎</h1>
                  </div>
                </SwiperSlide>
              ) : (
                collectTrip.map((data) => {
                  return (
                    <SwiperSlide
                      key={data.id}
                      className="travel_Tab_Swiper me-5 travel_Tab_Link text-dark  mt-3 text-decoration-none"
                    >
                      <Link to="/Travel_map" className="">
                        <div>
                          <img
                            className="travel_Tab_Img "
                            src={
                              process.env.REACT_APP_BASE_API_URL +
                              '/' +
                              data.main_photo
                            }
                            alt="123"
                          />
                          <p className="travel_Tab_tittleName px-3">
                            {data.title}
                          </p>
                          <div className="travel_Tab_tittleDate mb-md-4  px-3">
                            {data.start_time}~{data.end_time}
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })
              )}
            </Swiper>
          </div>
        </Tab> */}
      </Tabs>
    </>
  );
};

export default Travel_Tab;
