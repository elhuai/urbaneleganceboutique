import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './_heroSearch.scss';

export default function HeroSearch({ handleHeroActive, handleHeroAnimation }) {
  const [active, setActive] = useState(2);
  const [keywords, setKeywords] = useState('');
  const navigate = useNavigate();
  let count = useRef(0);

  const handleKeywords = (e) => {
    let textValue = e.target.value.replace(/[, ]/g, '');
    setKeywords(textValue);
  };
  // 館別
  const typeIdParams = active + 2;

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/ec-productfilter?typeId=${typeIdParams}&searchword=${keywords}`);
  };

  useEffect(() => {
    if (count.current > 0) {
      handleHeroAnimation(true);
      handleHeroActive(active);
    }
    count.current += 1;
  }, [active]);
  function animationNum(active) {
    switch (active) {
      case 0:
        return 2;
      case 1:
        return 1;
      case 2:
        return 0;
      default:
        break;
    }
  }
  return (
    <div className="hero_search bg-white overflow-hidden">
      <div className="tab_wrap d-flex position-relative">
        <button
          className="tab tab-4 flex-fill py-2"
          onClick={() => {
            setActive(2);
          }}
        >
          寵物商品
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
          className="tab tab-2 flex-fill py-2 active"
          onClick={() => {
            setActive(0);
          }}
        >
          景點 & 玩樂
        </button>
        <div
          className={`underline_effect`}
          style={{ transform: `translateX(${animationNum(active)}00%)` }}
        ></div>
      </div>

      <form className="input_wrap">
        <div className="d-none d-lg-block">
          <p className="title mb-2">請輸入想查找的票券</p>
          <input
            className="form-control mb-3"
            type="text"
            placeholder="請輸入關鍵字"
            value={keywords}
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
