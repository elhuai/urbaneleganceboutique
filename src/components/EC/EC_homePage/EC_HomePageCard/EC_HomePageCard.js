import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { FaPaw } from 'react-icons/fa';
import './_EC_HomePageCard.scss';

const foodRecommend = [
  {
    title: '【BEST 倍思特】純淨原粹 寒天 機能犬罐 80g 超大罐 大型犬 中型犬',
    img: 'https://picsum.photos/id/129/600/300',
    comment: '4',
    price: '1110',
  },
  {
    title: '【Hug 哈格】 狗罐頭 700g x 12罐【3種口味任選】超大罐 大型犬 中型犬',
    img: 'https://picsum.photos/id/229/600/300',
    comment: '3',
    price: '870',
  },
  {
    title: 'CatGlory 驕傲貓 無穀頂級主食罐 黑罐 85g 超大罐 大型犬 中型犬',
    img: 'https://picsum.photos/id/219/600/300',
    comment: '4',
    price: '1880',
  },
  {
    title: 'M’DARYN 喵樂 貓罐80g 單罐賣場【8種口味可選】超大罐 大型犬 中型犬',
    img: 'https://picsum.photos/id/20/600/300',
    comment: '5',
    price: '1010',
  },
];

export default function EC_HomePageCard() {
  return (
    <div className="ec_card_pc d-flex">
      {/* 分類標題區 */}
      <div className="ec_card_pc_main_left">
        <h4 className="ec_card_pc_main_title m-3 d-flex justify-content-right position-absolute">
          寵物主食推薦
        </h4>
        <img
          className="ec_card_pc_main_img"
          alt=""
          src="https://img.freepik.com/free-photo/spaniel-puppy-playing-studio-cute-doggy-pet-is-sitting-isolated-blue-background-cavalier-king-charles-negative-space-insert-your-text-image-concept-movement-animal-rights_155003-33840.jpg?w=1380&t=st=1662832183~exp=1662832783~hmac=1e85bc9cb5256dcfd0620abd74fc678f4694a0f0eea66ecb3fe405d94df693f6"
        ></img>
      </div>
      {/*輪播商品區  */}
      <div className="ec_card_pc_recommend_list align-items-end">
        <Swiper
          loop={true}
          slidesPerView={4}
          spaceBetween={1}
          className="ec_card_pc_swiper"
          // modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={(e) => {}}
          onSwiper={(swiper) => {}}
        >
          {/* <div className="ec_card_pc_right_card"></div> */}
          {foodRecommend.map((data, index) => {
            return (
              <div className="">
                <SwiperSlide
                  key={'recommend' + index}
                  className="ec_card_pc_recommend_swiper "
                >
                  <Link to="/" className=" d-flex flex-column">
                    {/* <div className="d-flex justify-content-between"> */}
                    <Link to="/">
                      <div className="ec_card_pc_card d-flex flex-col">
                        <div className="ec_card_pc_product_photo">
                          <img alt="" src={data.img}></img>
                        </div>
                        <div className="ec_card_pc_content_title d-flex ">
                          <p>{data.title}</p>
                        </div>
                        <div className="ec_card_state d-flex justify-content-between align-items-end ">
                          <div className="ec_card_rank d-flex flex-row align-items-center pb-1">
                            <FaPaw />
                            {data.comment}
                          </div>
                          <div className="ec_card_price">NT${data.price}</div>
                        </div>
                      </div>
                    </Link>
                    {/* </div> */}
                  </Link>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>

      {/*RWD輪播商品區  */}
      <div className="ec_card_rwd_recommend_list align-items-end">
        <Swiper
          loop={true}
          slidesPerView={2}
          spaceBetween={1}
          className="ec_card_rwd_swiper"
          // modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={(e) => {}}
          onSwiper={(swiper) => {}}
        >
          {/* <div className="ec_card_rwd_right_card"></div> */}
          {foodRecommend.map((data, index) => {
            return (
              <div className="">
                <SwiperSlide
                  key={'recommend' + index}
                  className="ec_card_rwd_recommend_swiper "
                >
                  <Link to="/" className=" d-flex flex-column">
                    {/* <div className="d-flex justify-content-between"> */}
                    <Link to="/">
                      <div className="ec_card_rwd_card d-flex flex-col">
                        <div className="ec_card_rwd_product_photo">
                          <img alt="" src={data.img}></img>
                        </div>
                        <div className="ec_card_rwd_content_title d-flex ">
                          <p>{data.title}</p>
                        </div>
                        <div className="ec_card_state d-flex justify-content-between align-items-end ">
                          <div className="ec_card_rank d-flex flex-row align-items-center pb-1">
                            <FaPaw />
                            {data.comment}
                          </div>
                          <div className="ec_card_price">NT${data.price}</div>
                        </div>
                      </div>
                    </Link>
                    {/* </div> */}
                  </Link>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
