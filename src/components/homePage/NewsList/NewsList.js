import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import './_newsList.scss';

const fakeData = [
  [
    {
      id: 1,
      title: '【特價850元】IRIS 犬貓外出提籃 BL-460【3色可選，附背帶】',
      img: 'https://picsum.photos/id/237/400/300',
      score: '4.8',
      evaluate: '199',
      oldPrice: '1050',
      currentPrice: '850',
    },
    {
      id: 2,
      title: '【出清價80元】QQ 寵物時尚墨鏡 (WA40025)【不挑色】',
      img: 'https://picsum.photos/id/200/400/300',
      score: '4.6',
      evaluate: '365',
      oldPrice: '120',
      currentPrice: '65',
    },
    {
      id: 3,
      title:
        '【出清價65元】易堆 繽粉雙耳 折疊外出碗 矽膠碗 寵物碗【隨機出貨，恕不挑色】',
      img: 'https://picsum.photos/id/100/400/300',
      score: '4.9',
      evaluate: '698',
      oldPrice: '150',
      currentPrice: '80',
    },
  ],
  [
    {
      id: 4,
      title: '第二區商品',
      img: 'https://picsum.photos/id/87/400/300',
      score: '4.8',
      evaluate: '199',
      oldPrice: '1050',
      currentPrice: '850',
    },
    {
      id: 5,
      title: '第二區商品',
      img: 'https://picsum.photos/id/34/400/300',
      score: '4.6',
      evaluate: '365',
      oldPrice: '120',
      currentPrice: '65',
    },
    {
      id: 6,
      title: '第二區商品',
      img: 'https://picsum.photos/id/35/400/300',
      score: '4.9',
      evaluate: '698',
      oldPrice: '150',
      currentPrice: '80',
    },
  ],
  [
    {
      id: 7,
      title: '第三區商品',
      img: 'https://picsum.photos/id/51/400/300',
      score: '4.8',
      evaluate: '199',
      oldPrice: '1050',
      currentPrice: '850',
    },
    {
      id: 8,
      title: '第三區商品',
      img: 'https://picsum.photos/id/25/400/300',
      score: '4.6',
      evaluate: '365',
      oldPrice: '120',
      currentPrice: '65',
    },
    {
      id: 9,
      title: '第三區商品',
      img: 'https://picsum.photos/id/63/400/300',
      score: '4.9',
      evaluate: '698',
      oldPrice: '150',
      currentPrice: '80',
    },
  ],
  [
    {
      id: 10,
      title: '第四區商品',
      img: 'https://picsum.photos/id/23/400/300',
      score: '4.8',
      evaluate: '199',
      oldPrice: '1050',
      currentPrice: '850',
    },
    {
      id: 11,
      title: '第四區商品',
      img: 'https://picsum.photos/id/123/400/300',
      score: '4.6',
      evaluate: '365',
      oldPrice: '120',
      currentPrice: '65',
    },
    {
      id: 12,
      title: '第四區商品',
      img: 'https://picsum.photos/id/42/400/300',
      score: '4.9',
      evaluate: '698',
      oldPrice: '150',
      currentPrice: '80',
    },
  ],
];

function items(index, active) {
  let result = fakeData[index].map((data, dataIndex) => {
    return (
      <Link
        to="/"
        key={'id' + data.id}
        className={`news_list_item  flex-fill w-100 p-2 ${
          index === active ? 'd-flex' : 'd-none'
        }`}
        style={{ animationDelay: `${((dataIndex + 1) * 100) / 1000}s` }}
      >
        <div className="obj-fit flex-shrink-0 overflow-hidden">
          <img src={data.img} alt="" />
        </div>
        <div className="flex-fill flex-shrink-1 d-flex flex-column px-2">
          <div className="title flex-fill">{data.title}</div>
          <div className="d-flex justify-content-between px-2">
            <div className="score">
              {`${data.score}`}
              <span> {`(${data.evaluate})`}</span>
            </div>
            <div className="price d-flex gap-2 align-items-end">
              <div className="old">TWD {data.oldPrice}</div>
              <div className="current">TWD {data.currentPrice}</div>
            </div>
          </div>
        </div>
      </Link>
    );
  });
  return result;
}

function mobileItems(index, active) {
  let result = fakeData[index].map((data, dataIndex) => {
    return (
      <SwiperSlide key={'newsCard' + data.id} className="h-100">
        <Link to="/" className="news_list_card d-flex flex-column">
          <div
            className={`news_list_item ${
              index === active ? 'd-block' : 'd-none'
            }`}
          >
            <div className="obj-fit">
              <img src={data.img} alt="" />
            </div>
            <div className="d-flex flex-fill flex-column p-3">
              <div className="news_list_card_title flex-fill">
                <h5>{data.title}</h5>
              </div>
              <div className="news_list_card_info d-flex justify-content-between align-items-end">
                <div className="news_list_card_score">
                  {`${data.score}`}
                  <span> {`(${data.evaluate})`}</span>
                </div>
                <div className="news_list_card_price">
                  <div className="old">TWD {data.oldPrice}</div>
                  <div className="current">TWD {data.currentPrice}</div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
    );
  });
  return result;
}

export default function NewsList({ active }) {
  return fakeData.map((v, index) => {
    return (
      <Fragment key={'list' + index}>
        <div className="desktop">{items(index, active - 1)}</div>
        <div className="mobile">
          <Swiper
            loop={false}
            slidesPerView={1}
            spaceBetween={12}
            className="newsListSwiper"
            // modules={[Autoplay]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
          >
            {mobileItems(index, active - 1)}
          </Swiper>
        </div>
      </Fragment>
    );
  });
}
