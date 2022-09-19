import './_CommunityHomePage.scss';

import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar_search';
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

  useEffect(() => {
    const fetchPost = async () => {
      const result = await axios.get(`${API_URL}/communityHomePage/kolPost`);
      setKolCard(result.data);
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = async () => {
      const result = await axios.get(`${API_URL}/communityHomePage/hotPost`);
      setHotCard(result.data);
    };
    fetchPost();
  }, []);
  // TODO: 新增文章 功能要加上
  return (
    <>
      <div className="CommunityHomePage">
        <SearchBar
          searchBar_title="最可愛的萌寵都在這"
          searchBar_placeholder="阿部柯基頂呱呱"
        />
        <div className='post_new_button'>
          <div className="post_new_button mt-5">
            <button className="post_new" onClick={() => ConfirmHandle(2)}>
              <RiEditFill
                color="#FFC715"
                className="edit-icon me-2"
              ></RiEditFill>
              新增貼文
            </button>
          </div>
          <div
            className={
              showCFBox === 2
                ? 'confirmBox_background d-flex justify-content-center d-block'
                : 'd-none'
            }
            // onClick={() => {
            //   ConfirmHandle(0);
            // }}
          >
            <div
              className={
                showCFBox === 2
                  ? 'create_post_confirm_box d-flex flex-column align-items-center justify-content-center d-block'
                  : 'd-none'
              }
            >
              <p>
                請選擇貼文形式
                <MdOutlineClose
                  className="close_icon"
                  onClick={() => {
                    ConfirmHandle(0);
                  }}
                ></MdOutlineClose>
              </p>
              <Link to="/PostWYSIWYGEdit">
                <button className="confirm_button">一般貼文</button>
              </Link>
              <button
                className="confirm_button"
                onClick={() => {
                  ConfirmHandle(4);
                }}
              >
                行程貼文<br></br>（需匯入行程）
              </button>
            </div>
          </div>
          <div
            className={
              showCFBox === 1
                ? 'confirmBox_background d-flex justify-content-center d-block'
                : 'd-none'
            }
            // onClick={(e) => ConfirmHandle(0)}
          >
            <div
              className={
                showCFBox === 1
                  ? 'delete_confirm_box d-flex flex-column align-items-center justify-content-center d-block'
                  : 'd-none'
              }
            >
              <p>
                是否確認刪除？
                <MdOutlineClose
                  className="close_icon"
                  onClick={() => {
                    ConfirmHandle(0);
                  }}
                ></MdOutlineClose>
              </p>
              <Link to="/">
                <button className="confirm_button">確認</button>
              </Link>
            </div>
          </div>
          <div
            className={
              showCFBox === 3
                ? 'confirmBox_background d-flex justify-content-center d-block'
                : 'd-none'
            }
            // onClick={(e) => {
            //   ConfirmHandle(0);
            // }}
          >
            <div
              className={
                showCFBox === 3
                  ? 'delete_follow_box d-flex flex-column align-items-center justify-content-center d-block'
                  : 'd-none'
              }
            >
              <p>
                是否確認取消追蹤/按讚？
                <MdOutlineClose
                  className="close_icon"
                  onClick={() => {
                    ConfirmHandle(0);
                  }}
                ></MdOutlineClose>
              </p>
              <Link to="/">
                <button className="confirm_button">確認</button>
              </Link>
            </div>
          </div>
          {/* TODO: 跑不出來！！ 事件聆聽功能 */}
          <div
            className={
              showCFBox === 4
                ? 'confirmBox_background d-flex justify-content-center d-block'
                : 'd-none'
            }
            // onClick={(e) => {
            //   ConfirmHandle(0);
            // }}
          >
            <div className="trip-sample ">
              <div className="d-block d-flex flex-column align-items-center my-2 container">
                <p className="mb-2">
                  請下拉選擇{' '}
                  <MdOutlineClose
                    className="close_icon"
                    onClick={() => {
                      ConfirmHandle(0);
                    }}
                  ></MdOutlineClose>
                </p>
                <select
                  className="form-control mb-2"
                  placeholder="請選擇我的行程"
                >
                  <option>花蓮自由行</option>
                  <option>好想去台南</option>
                  <option>澎湖好像也很不錯</option>
                </select>
                <Link to="/">
                  <button className="confirm_button">確認</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="comHome_container">
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
