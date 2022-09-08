import React from 'react';
import './_tourRoute.scss';

export default function TourRoute() {
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
            <button className="position-relative">{text}</button>
          </div>
        );
      })}
    </div>
  );
}
