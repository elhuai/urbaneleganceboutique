import './_CommunityHomePage.scss';

import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar_community';
import CommunitySwiperLeft from '../../components/Community/CommunitySwiper/CommunitySwiperLeft';
// import { BiLike } from 'react-icons/bi';
import { IoHeartOutline } from 'react-icons/io5';
import { RiEditFill } from 'react-icons/ri';
import { MdOutlineClose } from 'react-icons/md';

// import CommunitySwiperRight from '../../components/Community/CommunitySwiper/CommunitySwiperRight';

import { API_URL } from '../../utils/config';

const CommunityHomePage = () => {
  const [showCFBox, setShowCFBox] = useState(0);

  const ConfirmHandle = (e) => {
    setShowCFBox(e);
    console.log(showCFBox);
  };

  const [kolCard, setKolCard] = useState([]);
  const [hotCard, setHotCard] = useState([]);

  // 寵物網紅貼文
  // useEffect(() => {
  //   const fetchPost = async () => {
  //     const result = await axios.get(`${API_URL}/communityHomePage/kolPost`);
  //     setKolCard(result.data);
  //     console.log(result.data);
  //   };
  //   fetchPost();
  // }, []);

  // 熱門貼文
  useEffect(() => {
    const fetchPost = async () => {
      const result = await axios.get(`${API_URL}/communityHomePage/hotPost`);
      setHotCard(result.data);
    };
    fetchPost();
  }, []);
  // TODO: 新增文章 按鈕調整，功能要加上
  // TODO: 最新貼文的card 要改成component 並帶入資料，瀑布流型式
  // TODO: RWD版面切版，瀑布流顯示
  // TODO: 社群分享記得換成此頁
  return (
    <>
      <div className="CommunityHomePage">
        <SearchBar
          searchBar_title="是不是在找我呢"
          searchBar_placeholder="我無處安放的可愛呀"
        />
        <div className="CommunityHomePage_main">
          <div className="masonry">
            <div className="item">
              <img src="https://picsum.photos/360/480?random=1" alt="" />
            </div>
            <div className="item">
              <img src="https://picsum.photos/360/420?random=1" alt="" />
            </div>
            <div className="item">
              <img src="https://picsum.photos/360/460?random=1" alt="" />
            </div>
            <div className="item">
              <img src="https://picsum.photos/360/450?random=1" alt="" />
            </div>
            <div className="item">
              <img src="https://picsum.photos/360/520?random=1" alt="" />
            </div>
            <div className="item">
              <img src="https://picsum.photos/360/460?random=1" alt="" />
            </div>
            <div className="item">
              <img src="https://picsum.photos/360/440?random=1" alt="" />
            </div>
            <div className="item">
              <img src="https://picsum.photos/360/480?random=1" alt="" />
            </div>
            <div className="item">
              <img src="https://picsum.photos/360/460?random=1" alt="" />
            </div>
            <div className="item">
              <img src="https://picsum.photos/360/540?random=1" alt="" />
            </div>
            <div className="item">
              <img src="https://picsum.photos/360/500?random=1" alt="" />
            </div>
            <div className="item">
              <img src="https://picsum.photos/360/460?random=1" alt="" />
            </div>
            <div className="item">
              <img src="https://picsum.photos/360/460?random=1" alt="" />
            </div>
            <div className="item">
              <img src="https://picsum.photos/360/460?random=1" alt="" />
            </div>
            <div className="item">
              <img src="https://picsum.photos/360/490?random=1" alt="" />
            </div>
            <div className="item">
              <img src="https://picsum.photos/360/460?random=1" alt="" />
            </div>
            <div className="item">
              <img src="https://picsum.photos/360/450?random=1" alt="" />
            </div>
            <div className="item">
              <img src="https://picsum.photos/360/460?random=1" alt="" />
            </div>
            <div className="item">
              <img src="https://picsum.photos/360/460?random=1" alt="" />
            </div>
          </div>

          <div className="comHome_title flex-shrink-0">
            <h2 className="comHomeKOL_title">最夯寵物網美</h2>
            <CommunitySwiperLeft comHomePageCard={kolCard} />
          </div>
          <div className="comHome_title flex-shrink-0">
            <h2 className="comHomeHot_title">熱門貼文</h2>
            <CommunitySwiperLeft comHomePageCard={hotCard} />
          </div>
          <div className="comHome_section_newPost">
            <div className="comHome_title flex-shrink-0">
              <h2 className="comHomeNew_title">最新貼文</h2>
            </div>
            {/* TODO: 要改成component */}
            <div className="row g-5">
              <div className="col-4">
                <div className="comHome_main_card card">
                  <img
                    src="https://picsum.photos/390/270"
                    className="comHome-card-img"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">風箏在陰天擱淺</h5>
                    <div className="comHome-card-content d-flex justify-content-between align-items-center">
                      <div className="comHome-card-content-first d-flex justify-content-between align-items-center">
                        <p>2022年13月32日</p>
                        <p> 7799 人氣</p>
                      </div>
                      <IoHeartOutline />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className="comHome_main_card card">
                  <img
                    src="https://picsum.photos/390/270"
                    className="comHome-card-img"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {/*  因為第一次渲染抓到的初始值是空值，會報錯(undefine)，所以寫判斷式 */}
                      {hotCard[0] ? hotCard[0].title : ''}
                    </h5>
                    <div className="comHome-card-content d-flex justify-content-between align-items-center">
                      <div className="comHome-card-content-first d-flex justify-content-between align-items-center">
                        <p>2022年13月32日</p>
                        <p> 7799 人氣</p>
                      </div>
                      <IoHeartOutline />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className="comHome_newPost_card card">
                  <img
                    src="https://picsum.photos/390/270"
                    className="comHome-card-img"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">風箏在陰天擱淺</h5>
                    <div className="comHome-card-content d-flex justify-content-between align-items-center">
                      <div className="comHome-card-content-first d-flex justify-content-between align-items-center">
                        <p>2022年13月32日</p>
                        <p> 7799 人氣</p>
                      </div>
                      <IoHeartOutline />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityHomePage;
