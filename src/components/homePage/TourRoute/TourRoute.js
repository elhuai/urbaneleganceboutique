import React from 'react';
import { useNavigate } from 'react-router-dom';
import './_tourRoute.scss';

export default function TourRoute() {
  const navigate = useNavigate();

  const btnText = [
    '漫波星辰叢林冒險',
    '寵物戶外秘探險去',
    '快樂加百二俗俗買',
    '漂釀蝴蝶結銅板價',
    '逗逗貓咪一起玩耍',
    '聰明寵物養成計畫',
    'cp值破表餐廳推薦',
    '甜蜜蜜下午茶餐券',
  ];
  const btnLink = [
    '/ec-productdetail?id=526',
    '/ec-productdetail?id=532',
    '/ec-productdetail?id=2305',
    '/ec-productdetail?id=2610',
    '/ec-productdetail?id=2574',
    '/ec-productdetail?id=2272',
    '/ec-productdetail?id=557',
    '/ec-productdetail?id=545',
  ];
  return (
    <div className="tour_route position-relative">
      {btnText.map((text, index) => {
        return (
          <div
            key={text}
            className={`tour_route_item tour_route_item${
              index + 1
            } position-absolute`}
          >
            <div className="h-100 position-relative"></div>
            <button
              className="position-relative"
              onClick={() => navigate(btnLink[index])}
            >
              {text}
            </button>
          </div>
        );
      })}
    </div>
  );
}
