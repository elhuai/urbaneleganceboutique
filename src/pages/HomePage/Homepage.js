import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import HeroSearch from '../../components/homePage/HeroSearch';
import NewsList from '../../components/homePage/NewsList';
import TourRoute from '../../components/homePage/TourRoute';
import LeaderBoardSlide from '../../components/homePage/LeaderBoardSlide';
import SocialBubble from '../../components/homePage/SocialBubble';
import TravelCard from '../../components/homePage/TravelCard/';
import Loading from '../../components/layout/Loading';
import FakeMap from '../../images/home_travel_map.png';
import { useUserInfo } from '../../hooks/useUserInfo';
import { callLineLoginApi } from '../../api/authApi';
import { handleFailed } from '../../utils/handler/handleStatusCard';
import { API_URL } from '../../utils/config';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

import './_homepage.scss';

const Homepage = () => {
  const { user, setUser } = useUserInfo();
  const [heroAnimete, setHeroAnimete] = useState(false);
  const [heroActive, setHeroActive] = useState(false);
  const [newsActive, setNewsActive] = useState(1);
  const [searchParam] = useSearchParams();

  const handleHeroActive = (num) => {
    setHeroActive(num);
  };
  const handleHeroAnimete = () => {
    setHeroAnimete(true);
  };
  const redirectPath = window.localStorage.getItem('last_page');
  if (
    searchParam.get('line_login') &&
    searchParam.get('code') &&
    searchParam.get('state') === 'ohdogcat_Line_Login' &&
    window.localStorage.getItem('line_login')
  ) {
    console.log('code');
    const lineVerifyCode = searchParam.get('code');
    console.log('first', user.firstVertify, 'user.auth', user.auth);
    if (user.firstVertify && !user.auth) {
      callLineLoginApi(lineVerifyCode, setUser, redirectPath);
    }
  } else {
    if (searchParam.get('line_login') === 'false') {
      handleFailed('LINE 連動登入失敗');
    }
  }

  useEffect(() => {
    if (!heroAnimete) return;
    setTimeout(() => {
      setHeroAnimete(false);
    }, 1500);
  }, [heroAnimete]);

  return searchParam.get('line_login') && user.data.social_name == '' ? (
    <Loading />
  ) : (
    <div className="home_main">
      <div className="home_section_hero">
        <div className="section_container">
          <div
            className={`hero_text_wrap hero_text_animation${heroActive}`}
          ></div>
          <div className="hero_search_wrap">
            <HeroSearch
              handleHeroAnimete={handleHeroAnimete}
              handleHeroActive={handleHeroActive}
            />
          </div>
          <div
            className={`hero_animation ${heroAnimete ? 'active' : ''}`}
          ></div>
        </div>
      </div>
      <div className="home_section_news">
        <div className="section_container justify-content-between d-flex">
          <div className="news_sidebar">
            <div className="news_sidebar_title">
              <p>走在時尚最尖端</p>
              <h2>最新情報</h2>
            </div>
            <div className="news_sidebar_nav">
              <ul className="list-unstyled m-0">
                <li className={newsActive === 1 ? 'active' : ''}>
                  <button
                    onClick={() => {
                      setNewsActive(1);
                    }}
                  >
                    旅遊必備商品
                  </button>
                </li>
                <li className={newsActive === 2 ? 'active' : ''}>
                  <button
                    onClick={() => {
                      setNewsActive(2);
                    }}
                  >
                    頭好壯壯買罐罐
                  </button>
                </li>
                <li className={newsActive === 3 ? 'active' : ''}>
                  <button
                    onClick={() => {
                      setNewsActive(3);
                    }}
                  >
                    點了狗狗會換動作
                  </button>
                </li>
                <li className={newsActive === 4 ? 'active' : ''}>
                  <button
                    onClick={() => {
                      setNewsActive(4);
                    }}
                  >
                    圖片還沒畫嗚嗚
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="news_dog_img align-self-center">
            <div className="dog"></div>
          </div>
          <div className="news_list">
            <NewsList active={newsActive} />
          </div>
        </div>
      </div>
      <div className="home_section_tour">
        <div className="section_container">
          <div className="tour_title">
            <p>跟著小編一起玩</p>
            <h2>小道消息報你知</h2>
          </div>
          <TourRoute />
        </div>
      </div>
      <div className="home_section_leaderboard">
        <div className="section_container">
          <div className="leaderboard_title">
            <p>銷售排行榜癡心推薦</p>
            <h2>排行榜</h2>
          </div>
        </div>
        <div className="leaderboard_slide">
          <LeaderBoardSlide />
        </div>
      </div>
      <div className="home_section_community">
        <div className="section_container position-relative d-flex">
          <div className="community_title flex-shrink-0">
            <p>社群分享最新消息</p>
            <h2>最夯寵物網美</h2>
            <span>
              揭曉近一個月的 TOP 50 寵物 KOL
              <br />
              現在最流行的「寵物網紅」你追蹤了嗎？
            </span>
            <br />
            <div>
              <button className="w-100">來去看看</button>
            </div>
          </div>
          <SocialBubble />
        </div>
      </div>
      <div className="home_section_travel">
        <div className="home_section_travel_bg">
          <div className="section_container">
            <div className="travel_header_wrap d-flex gap-5">
              <div className="travel_title">
                <p>哪裡好玩報給你</p>
                <h2>行程規劃</h2>
              </div>
              <div className="travel_search flex-fill align-self-end">
                <input
                  className="form-control"
                  type="text"
                  placeholder="請輸入地點"
                />
              </div>
            </div>
            <div className="travel_body_wrap d-flex gap-4 w-100">
              <div className="travel_map">
                <div className="obj-fit">
                  <img src={FakeMap} alt="" />
                </div>
              </div>
              <div className="travel_content d-flex flex-column">
                <div className="travel_content_card flex-fill">
                  <TravelCard />
                </div>
                <button className="w-100">開始規劃你的行程</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
