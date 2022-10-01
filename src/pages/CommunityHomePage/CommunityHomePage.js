import './_CommunityHomePage.scss';
import dog3 from '../../images/home_newsList_dog_4.png';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar_community';
import CommunityKOLSwiper from '../../components/Community/CommunitySwiper/CommunityKOLSwiper';
import CommunitySwiperRight from '../../components/Community/CommunitySwiper/CommunityNormalPostSwiper';
import HomePageMasonry from '../../components/Community/HomePageMasonry/HomePageMasonry';
import RWDMasonry from '../../components/Community/HomePageMasonry/RWDMasonry';
// import { BiLike } from 'react-icons/bi';
import { IoHeartOutline } from 'react-icons/io5';
import { RiEditFill } from 'react-icons/ri';
import { MdOutlineClose } from 'react-icons/md';
import { useLocation } from 'react-router-dom';

// import CommunitySwiperRight from '../../components/Community/CommunitySwiper/CommunitySwiperRight';

import { API_URL } from '../../utils/config';

const CommunityHomePage = () => {
  //  搜尋用
  const [search, setSearch] = useState('');
  const [keywordSearch, setKeywordSearch] = useState('');

  //  網紅、熱門資料用
  const [kolCard, setKolCard] = useState([]);
  const [hotCard, setHotCard] = useState([]);

  // 寵物網紅貼文
  useEffect(() => {
    const fetchPost = async () => {
      const result = await axios.get(`${API_URL}/communityHomePage/kolPost`);
      setKolCard(result.data);
    };
    fetchPost();
  }, []);

  // 熱門貼文
  useEffect(() => {
    const fetchPost = async () => {
      const result = await axios.get(`${API_URL}/communityHomePage/hotPost`);
      setHotCard(result.data);
    };
    fetchPost();
  }, []);

  return (
    <>
      <div className="CommunityHomePage">
        <div className="searchBarSection">
          <SearchBar
            searchBar_title="是不是在找我呢"
            searchBar_placeholder="我無處安放的可愛呀"
          />
          <p className="mainSlogan1 disappear">Sharing the life,</p>
          <p className="mainSlogan2 disappear">Follow the paws!</p>
          <p className="slogan disappear" disappear>
            也想分享你跟毛孩的大小事嗎？
          </p>
          <img className="SloganImg disappear" src={dog3} alt="" />
          <div className="BGCircle1 disappear"></div>
          <div className="BGCircle2 disappear"></div>
          <div className="BGCircle3 disappear"></div>
          <div className="BGCircle4 disappear"></div>
          <div className="BGCircle5 disappear"></div>
          <div className="BGCircle6 disappear"></div>
          <div className="btnSection disappear">
            <button>一般貼文</button>
            <button>行程貼文</button>
          </div>
        </div>
        <div className="CommunityHomePage_main">
          {/* <h2 className="comHomeKOL_title">最夯寵物網美底家</h2>
          <CommunityKOLSwiper /> */}
          {/* 
          <h2 className="comHomeKOL_title">最夯寵物網美</h2>
          <CommunitySwiperRight comHomePageCard={kolCard} /> */}
          <div className="masonrySection disappear">
            <HomePageMasonry />
          </div>
          <div className="masonrySection appear">
            <RWDMasonry />
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityHomePage;
