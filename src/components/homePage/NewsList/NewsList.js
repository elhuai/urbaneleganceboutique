import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import './_newsList.scss';
import axios from 'axios';
import { API_URL } from '../../../utils/config';

const BASE_URL = process.env.REACT_APP_BASE_API_URL;

function items(index, active, data) {
  let result = data[index].map((data, dataIndex) => {
    return (
      <Link
        to={`ec-productdetail?id=${data.id}`}
        key={'id' + data.id}
        className={`news_list_item  flex-fill w-100 p-2 ${
          index === active ? 'd-flex' : 'd-none'
        }`}
        style={{ animationDelay: `${((dataIndex + 1) * 100) / 1000}s` }}
      >
        <div className="obj-fit flex-shrink-0 overflow-hidden">
          <img
            src={`${BASE_URL}${data.photo_path}/${data.main_photo}`}
            alt=""
          />
        </div>
        <div className="flex-fill flex-shrink-1 d-flex flex-column px-2">
          <div className="title flex-fill">{data.name}</div>
          <div className="d-flex justify-content-between px-2">
            <div className="score">
              {`${data.per_score.toFixed(1)}`}
              <span> {`(${(data.per_score * 19).toFixed(0)})`}</span>
            </div>
            <div className="price d-flex gap-2 align-items-end">
              <div className="old">TWD{`${(data.price * 1.9).toFixed(0)}`}</div>
              <div className="current">TWD {`${data.price}`}</div>
            </div>
          </div>
        </div>
      </Link>
    );
  });
  return result;
}

function mobileItems(index, active, data) {
  let result = data[index].map((data, dataIndex) => {
    return (
      <SwiperSlide key={'newsCard' + data.id} className="h-100">
        <Link to="/" className="news_list_card d-flex flex-column">
          <div
            className={`news_list_item ${
              index === active ? 'd-block' : 'd-none'
            }`}
          >
            <div className="obj-fit">
              <img
                src={`${BASE_URL}${data.photo_path}/${data.main_photo}`}
                alt=""
              />
            </div>
            <div className="d-flex flex-fill flex-column p-3">
              <div className="news_list_card_title flex-fill">
                <h5>{data.name}</h5>
              </div>
              <div className="news_list_card_info d-flex justify-content-between align-items-end">
                <div className="news_list_card_score">
                  {`${data.per_score.toFixed(1)}`}
                  <span> {`(${(data.per_score * 19).toFixed(0)})`}</span>
                </div>
                <div className="news_list_card_price">
                  <div className="old">
                    TWD{`${(data.per_score * 19).toFixed(0)}`}
                  </div>
                  <div className="current">TWD {`${data.price}`}</div>
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
  const [data, setData] = useState([]);

  useEffect(() => {
    const newsProducts = async () => {
      // 取得原始資料
      const result = await axios.get(`${API_URL}/product/news`);
      setData(result.data);
    };
    newsProducts();
  }, []);
  // TODO: 實際渲染元件，不用更動 (應該啦)，只要把 fakeData 換掉就好
  return data.length > 0
    ? data.map((v, index) => {
        return (
          <Fragment key={'list' + index}>
            <div className="desktop">{items(index, active - 1, data)}</div>
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
                {mobileItems(index, active - 1, data)}
              </Swiper>
            </div>
          </Fragment>
        );
      })
    : '';
}
