import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import dogIcon from '../../images/travel_dog_paws.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
const tripData = [
  // {
  //   id: 1,
  //   name: '蘭嶼五日遊油油油油去去去',
  //   start_time: 20220823,
  //   end_time: 20220830,
  //   img: 'https://picsum.photos/200/300?random1',
  // },
  {
    id: 2,
    name: '台北五日遊玩玩玩玩玩玩玩玩玩',
    start_time: 20220820,
    end_time: 20220825,
    img: 'https://picsum.photos/200/300?random21',
  },
  {
    id: 3,
    name: '澎湖五日遊',
    start_time: 20220819,
    end_time: 20220820,
    img: 'https://picsum.photos/200/300?random36',
  },
  {
    id: 4,
    name: '澎湖五日遊',
    start_time: 20220819,
    end_time: 20220820,
    img: 'https://picsum.photos/200/300?random32',
  },
  {
    id: 5,
    name: '澎湖五日遊',
    start_time: 20220819,
    end_time: 20220820,
    img: 'https://picsum.photos/200/300?random31',
  },
];
const collectTrip = [
  // {
  //   id: 1,
  //   name: '高雄一日遊一天天天天天天',
  //   start_time: 20220823,
  //   end_time: 20220830,
  //   img: 'https://picsum.photos/200/300?random10',
  // },
  // {
  //   id: 2,
  //   name: '台中二日遊',
  //   start_time: 20220820,
  //   end_time: 20220825,
  //   img: 'https://picsum.photos/200/300?random87',
  // },
  // {
  //   id: 3,
  //   name: '基隆一日遊',
  //   start_time: 20220823,
  //   end_time: 20220830,
  //   img: 'https://picsum.photos/200/300?random50',
  // },
  // {
  //   id: 4,
  //   name: '台北二日遊',
  //   start_time: 20220820,
  //   end_time: 20220825,
  //   img: 'https://picsum.photos/200/300?random73',
  // },
  // {
  //   id: 5,
  //   name: '花東一日遊',
  //   start_time: 20220823,
  //   end_time: 20220830,
  //   img: 'https://picsum.photos/200/300?random40',
  // },
  // {
  //   id: 2,
  //   name: '台中二日遊',
  //   start_time: 20220820,
  //   end_time: 20220825,
  //   img: 'https://picsum.photos/200/300?random7',
  // },
];

const Travel_Tab = () => {
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
              <img className="travel_nav_mytrip me-2" src={dogIcon} alt="" />
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
              onSwiper={(swiper) => console.log(swiper)}
            >
              {tripData.length === 0 ? (
                <SwiperSlide>
                  <div>
                    <h1 className="fw-bold travel_noidea"> 還沒有想法嗎</h1>
                  </div>
                </SwiperSlide>
              ) : (
                tripData.map((vaule) => {
                  return (
                    <SwiperSlide className="travel_Tab_Swiper me-md-5 travel_Tab_Link text-dark  mt-3 text-decoration-none">
                      <Link to="/" className="" key={vaule.id}>
                        <div>
                          <img
                            className="travel_Tab_Img "
                            src={vaule.img}
                            alt="123"
                          />
                          <div className="travel_Tab_tittleDiv">
                            <p className="travel_Tab_tittleName px-3">
                              {vaule.name}
                            </p>
                          </div>
                          <div className="travel_Tab_tittleDate mb-md-4 px-3">
                            {vaule.start_time}~{vaule.end_time}
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
        <Tab eventKey="與我分享的行程" title="收藏的行程" className="">
          <div className="d-flex ">
            <Swiper
              className="travel_Tab_Swiper-wrapper "
              spaceBetween={20}
              height={500}
              // autoHeight={false}
              slidesPerView={'auto'} //顯示幾個
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {collectTrip.length === 0 ? (
                <SwiperSlide>
                  <div>
                    <h1 className="fw-bold  travel_noidea ">還沒有想法嗎</h1>
                  </div>
                </SwiperSlide>
              ) : (
                collectTrip.map((vaule) => {
                  return (
                    <SwiperSlide className="travel_Tab_Swiper me-5 travel_Tab_Link text-dark  mt-3 text-decoration-none">
                      <Link to="/" className="" key={vaule.id}>
                        <div>
                          <img
                            className="travel_Tab_Img "
                            src={vaule.img}
                            alt="123"
                          />
                          <p className="travel_Tab_tittleName px-3">
                            {vaule.name}
                          </p>
                          <div className="travel_Tab_tittleDate mb-md-4  px-3">
                            {vaule.start_time}~{vaule.end_time}
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
      </Tabs>
    </>
  );
};

export default Travel_Tab;
