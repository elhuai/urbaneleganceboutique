import React from 'react';
import { useNavigate } from 'react-router-dom';
import './_tourRoute.scss';

export default function TourRoute() {
  const navigate = useNavigate();

  const btnText = [
    '天才狗狗訓練工具',
    '寵物戶外秘境',
    '變漂亮只要銅板價',
    '漂釀新衣俗俗買',
    '罐罐好吃一直買',
    '今天來點買一送一',
    'cp值破表飯店推薦',
    '單身狗相親活動',
  ];
  // TODO: 照順序放上網址
  const btnLink = ['/網址', '', '', '', '', '', '', ''];
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
