import React from 'react';
import { useEffect, useState } from 'react';
import './_heroSearch.scss';

export default function HeroSearch({ handleHeroActive, handleHeroAnimete }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (active === 0) return;
    handleHeroAnimete(true);
    handleHeroActive(active);
  }, [active]);
  return (
    <div className="hero_search bg-white overflow-hidden">
      <div className="tab_wrap d-flex">
        <button
          className="tab tab-1 flex-fill py-2"
          onClick={() => {
            setActive(1);
          }}
        >
          住宿
        </button>
        <button
          className="tab tab-2 flex-fill py-2"
          onClick={() => {
            setActive(2);
          }}
        >
          景點 & 玩樂
        </button>
        <button
          className="tab tab-3 flex-fill py-2"
          onClick={() => {
            setActive(3);
          }}
        >
          餐廳
        </button>
        <button
          className="tab tab-4 flex-fill py-2"
          onClick={() => {
            setActive(4);
          }}
        >
          寵物商品
        </button>
      </div>

      <form className="input_wrap">
        <div>
          <p className="title mb-2">目的地</p>
          <input
            className="form-control mb-3"
            type="text"
            placeholder="請輸入地點"
          />
        </div>
        <div className="d-flex gap-3 mb-2">
          <div className="w-100">
            <p className="title mb-2">入住時間</p>
            <input
              className="form-control mb-3"
              type="date"
              placeholder="預計入住時間"
            />
          </div>
          <div className="w-100">
            <p className="title mb-2">退房時間</p>
            <input
              className="form-control mb-3"
              type="date"
              placeholder="預計退房時間"
            />
          </div>
          <div className="w-100">
            <p className="title mb-2">人數</p>
            <input
              className="form-control mb-3"
              type="number"
              placeholder="入住人數"
            />
          </div>
        </div>
        <div className="button-wrap">
          <button className="py-2 w-100">找到最適合你的票券</button>
        </div>
      </form>
    </div>
  );
}
