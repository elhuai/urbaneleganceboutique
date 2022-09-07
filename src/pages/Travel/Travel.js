import React from 'react';
import caricon from '../../images/Travel_input_car.svg';
import mapicon from '../../images/Travel_input_location.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import './_Travelhome.scss';

import {
  Container,
  Tabs,
  Tab,
  Form,
  Button,
  InputGroup,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const tripData = [
  {
    id: 1,
    name: '蘭嶼五日遊油油油油去去去',
    start_time: 20220823,
    end_time: 20220830,
    img: 'https://picsum.photos/200/300?random1',
  },

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
  {
    id: 1,
    name: '高雄一日遊一天天天天天天',
    start_time: 20220823,
    end_time: 20220830,
    img: 'https://picsum.photos/200/300?random10',
  },
  {
    id: 2,
    name: '台中二日遊',
    start_time: 20220820,
    end_time: 20220825,
    img: 'https://picsum.photos/200/300?random87',
  },
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

const Travel = () => {
  return (
    <>
      <Container className="container travel_container mt-3">
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="travel_Nav mb-4  "
        >
          <Tab
            eventKey="home"
            title={<div className="Travel_nav_mytrip ">我的行程</div>}
            className="travel_Mytrip"
          >
            <div className="d-flex ">
              <Swiper
                className="Travel_Tab_Swiper-wrapper"
                spaceBetween={20}
                height={500}
                // autoHeight={false}
                slidesPerView={'auto'} //顯示幾個
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {tripData.map((vaule) => {
                  return (
                    <SwiperSlide className="Travel_Tab_Swiper me-5 Travel_Tab_Link text-dark  mt-3 text-decoration-none">
                      <Link to="/" className="" key={vaule.id}>
                        <div>
                          <img
                            className="Travel_Tab_Img "
                            src={vaule.img}
                            alt="123"
                          />
                          <div className="Travel_Tab_tittleDiv">
                            <p className="Travel_Tab_tittleName px-3">
                              {vaule.name}
                            </p>
                          </div>
                          <div className="Travel_Tab_tittleDate mb-4 px-3">
                            {vaule.start_time}~{vaule.end_time}
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </Tab>
          <Tab eventKey="與我分享的行程" title="收藏的行程" className="">
            <div className="d-flex ">
              <Swiper
                className="Travel_Tab_Swiper-wrapper"
                spaceBetween={20}
                height={500}
                // autoHeight={false}
                slidesPerView={'auto'} //顯示幾個
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {collectTrip.map((vaule) => {
                  return (
                    <SwiperSlide className="Travel_Tab_Swiper me-5 Travel_Tab_Link text-dark  mt-3 text-decoration-none">
                      <Link to="/" className="" key={vaule.id}>
                        <div>
                          <img
                            className="Travel_Tab_Img "
                            src={vaule.img}
                            alt="123"
                          />
                          <p className="Travel_Tab_tittleName px-3">
                            {vaule.name}
                          </p>
                          <div className="Travel_Tab_tittleDate mb-4  px-3">
                            {vaule.start_time}~{vaule.end_time}
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </Tab>
        </Tabs>
        <Form className="Travel_form_Container">
          <div>
            <h2 className="Travel_form_creat_tittle  user-select-none">
              新增行程 :
            </h2>
          </div>
          <div className="Travel_input_searchBar">
            <InputGroup className="Travel_input_Allinput mb-3">
              {/* as="form" */}
              <div className="Travel_input_searchBar_sum d-flex ">
                <div className="Travel_input_icondiv">
                  <img
                    src={mapicon}
                    alt="#/"
                    className="Travel_input_mapicon "
                  />
                </div>
                <Form.Control
                  className="Travel_input_Area "
                  placeholder="請輸入城市、地區"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
              <div className="Travel_input_searchBar_sum d-flex">
                <div className="Travel_input_icondiv">
                  <img
                    src={caricon}
                    alt="#/"
                    className="Travel_input_mapicon "
                  />
                </div>
                <Form.Control
                  className=""
                  placeholder="請輸入景點關鍵字"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>

              <Button
                className="Travel_input_button "
                variant="outline-secondary"
                id="button-addon2"
              >
                新增
              </Button>
            </InputGroup>
          </div>
        </Form>
        <div>
          <div>
            <h2 className="Travel_goPlay_tittle user-select-none">
              看看大家都去哪玩 :
            </h2>
          </div>
          <Swiper
            className="swiper-slide"
            spaceBetween={20}
            height={300}
            autoHeight={true}
            slidesPerView={'auto'} //顯示幾個
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <ul className="Travel_goPlay_ul d-flex text-dark">
              {gotoTrip.map((data) => {
                return (
                  <SwiperSlide
                    className="Travel_Swiper_goPlay_Swiper me-5 "
                    // style={{ width: '410px', marginRight: '10px' }}
                  >
                    <li key={data.id}>
                      <Link to="/">
                        <div className="Travel_goPlay_collection_AllDiv me-5 ">
                          <div>
                            <img
                              className="Travel_goPlay_collection_img "
                              src={data.img}
                              alt="#/"
                            />
                          </div>
                          <div className="Travel_goPlay_collection_tittleDiv">
                            <h3 className="Travel_goPlay_collection_title px-3 ">
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
        </div>
        <div>
          <h2 className="Travel_Swiper_EveryOnetrip_lookH2 mb-3 mt-3 user-select-none">
            路克路克大家的行程 :
          </h2>

          <Swiper
            spaceBetween={20}
            height={300}
            autoHeight={true}
            slidesPerView={'auto'} //顯示幾個
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {swiperImage.map((vaule) => {
              return (
                <SwiperSlide
                  className="Travel_Swiper_EveryOnetrip me-5"
                  // style={{ width: '410px', marginRight: '10px' }}
                >
                  <Link
                    to="/#"
                    className="Travel_Tab_Link text-dark me-5 mt-3 text-decoration-none "
                    key={vaule.id}
                  >
                    <div className="">
                      <img
                        className="Travel_Swiper_EveryOnetrip_Img "
                        src={vaule.img}
                        alt="123"
                      />
                    </div>
                  </Link>
                  <div className="d-flex  justify-content-between ">
                    <div className="Travel_Swiper_EveryOnetrip_tittle_div">
                      <p className="Travel_Swiper_EveryOnetrip_tittle user-select-none">
                        {vaule.tittle}
                      </p>
                    </div>
                    <div className="">
                      <p className="Travel_Swiper_EveryOnetrip_day pe-3 user-select-none">
                        {vaule.days}天
                      </p>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div>
                      <img
                        className="Travel_Swiper_EveryOnetrip_userImage"
                        src={vaule.userphoto}
                        alt="#/"
                      />
                    </div>
                    <div className="d-flex align-items-center">
                      <h4 className="Travel_Swiper_EveryOnetrip_username mx-3 user-select-none">
                        {vaule.userid}
                      </h4>
                      <div>
                        <h4 className="Travel_Swiper_EveryOnetrip_follow  ps-2">
                          追蹤
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="Travel_Swiper_EveryOnetrip_date mt-4 user-select-none">
                    {vaule.start_time}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Container>
    </>
  );
};

export default Travel;
