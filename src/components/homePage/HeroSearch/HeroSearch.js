import React from 'react';
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './_heroSearch.scss';

export default function HeroSearch({ handleHeroActive, handleHeroAnimete }) {
  const [active, setActive] = useState(0);
  const [keywords, setKeywords] = useState('initialState');
  const navigate = useNavigate();
  // TODO: active state 用戶目前點選的分館 tab , 依序是 0, 1, 2
  const handleKeywords = (e) => {
    setKeywords(e.target.value);
  };

  // TODO: 跳轉
  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/網址路徑');
  };

  useEffect(() => {
    handleHeroAnimete(true);
    handleHeroActive(active);
    console.log(active);
  }, [active]);
  return (
    <div className="hero_search bg-white overflow-hidden">
      <div className="tab_wrap d-flex position-relative">
        {/* <button
          className="tab tab-1 flex-fill py-2"
          onClick={() => {
            setActive(1);
          }}
        >
          住宿
        </button> */}
        <button
          className="tab tab-2 flex-fill py-2 active"
          onClick={() => {
            setActive(0);
          }}
        >
          景點 & 玩樂
        </button>
        <button
          className="tab tab-3 flex-fill py-2"
          onClick={() => {
            setActive(1);
          }}
        >
          餐廳
        </button>
        <button
          className="tab tab-4 flex-fill py-2"
          onClick={() => {
            setActive(2);
          }}
        >
          寵物商品
        </button>
        <div
          className={`underline_effect`}
          style={{ transform: `translateX(${active}00%)` }}
        ></div>
      </div>

      <form className="input_wrap">
        <div className="d-none d-lg-block">
          <p className="title mb-2">請輸入想查找的票券</p>
          <input
            className="form-control mb-3"
            type="text"
            placeholder="請輸入關鍵字"
            onChange={handleKeywords}
          />
        </div>
        <div className="input-group  d-flex d-lg-none">
          <input
            type="text"
            className="form-control"
            placeholder="搜尋關鍵字"
          />
          <button
            className="btn flex-shrink-0"
            type="button"
            onClick={handleSearch}
          >
            <AiOutlineSearch />
          </button>
        </div>
        <div className="button-wrap d-none d-lg-block">
          <button className="py-2 w-100" onClick={handleSearch}>
            找到最適合你的票券
          </button>
        </div>
      </form>
    </div>
  );
}
