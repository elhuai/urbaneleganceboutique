import React from 'react';
import './PostWYSIWYG.scss';
import coverPhoto from '../../images/test2.jpg';
import mapPhoto from '../../images/screenshop map_photo.png';
import { Link } from 'react-router-dom';
import { BiLike } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import dogIcon from '../../images/travel_dog_paws.svg';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import '../node_modules/reatct-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function PostWYSIWYG() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="post_bar d-flex flex-column">
          <div className="post_cover_photo">
            <img className="" alt="" src={coverPhoto}></img>
          </div>
          <div className="post_title d-flex">
            <p className="">
              花蓮三日遊 好吃又好玩 好吃又好玩 好吃又好吃又好玩 好吃又好吃又好玩
              好吃又
            </p>
          </div>
          <div className="post_state_bar d-flex justify-content-between">
            <div className="d-flex  ">
              <div className="post_date pe-4">
                <p>2022.07.18</p>
              </div>
              <div className="post_auther d-flex pe-4">
                <Link to="/" className="pe-3">
                  大寶愛睡覺 大寶愛睡覺
                </Link>
                <Link to="/" className="follow_link">
                  追蹤
                </Link>
              </div>
              <div className="post_location pe-4">
                <p>
                  <MdLocationOn className="mb-1"></MdLocationOn>花蓮
                </p>
              </div>
            </div>
            <div className="post_like me-2">
              <p>
                <BiLike className="mb-1 me-2"></BiLike>按讚人數 999
              </p>
            </div>
          </div>
          <hr></hr>
          <p>所見及所得區</p>
          <div className="article_section">
            <h5>
              一年一度的大稻埕煙火秀即將登場！因應七夕情人節，每年夏天的大稻埕煙火總吸引大批民眾前往，精彩的花火倒映在水面上的絕美畫面真的不容錯過，接下來就來看看今年的大稻埕煙火時間、觀賞地點、活動內容，趕快跟著好朋友、伴侶一起籌劃一下如何度過難忘的浪漫夜晚吧！
            </h5>
            <h3>大稻埕情人節煙火</h3>
            <h5>
              2022大稻埕煙火以「愛，一直都在」為主題，包含480秒煙火秀、復古市集、以及抽獎活動，這次的煙火不僅引進「日本花火大會的變色花柱」，更將首次推出震撼的「水上爆破秀」！
            </h5>
            <img src="https://picsum.photos/200/300?random8" alt=""></img>
          </div>
          <div className="post_map">
            <p>行程地圖</p>
            <div className="map_photo">
              <img alt="" src={mapPhoto} />
            </div>
          </div>
          <div className="recommand_product_list">
            <p>推薦行程/商品</p>
            <div className="d-flex justify-content-between">
            <Link to="/">
                <div className="rec_product_card">
                  <div className="product_photo">
                    <img
                      alt=""
                      src="https://picsum.photos/200/300?random1"
                    ></img>
                  </div>
                  <div className="product_title d-flex aligin-items-center ">
                    <p>
                      澎湖自由行 | 吉貝島來回船票機車 住宿 | 入住新港景亞泰民宿
                    </p>
                  </div>
                  <div className="rec_product_state d-flex justify-content-between align-items-end ">
                    <div className="rec_product_rank mb-1 ms-1">
                      <img
                        className="rank_paws mb-1 me-2"
                        alt=""
                        src={dogIcon}
                      ></img>
                      5.0
                    </div>
                    <div className="rec_product_price">NT$2020</div>
                  </div>
                </div>
              </Link>
              <Link to="/">
                <div className="rec_product_card">
                  <div className="product_photo">
                    <img
                      alt=""
                      src="https://picsum.photos/200/300?random2"
                    ></img>
                  </div>
                  <div className="product_title d-flex aligin-items-center ">
                    <p>
                      澎湖自由行 | 吉貝島來回船票機車 住宿 | 入住新港景亞泰民宿
                    </p>
                  </div>
                  <div className="rec_product_state d-flex justify-content-between align-items-end ">
                    <div className="rec_product_rank mb-1 ms-1">
                      <img
                        className="rank_paws mb-1 me-2"
                        alt=""
                        src={dogIcon}
                      ></img>
                      5.0
                    </div>
                    <div className="rec_product_price">NT$1020</div>
                  </div>
                </div>
              </Link>
              <Link to="/">
                <div className="rec_product_card">
                  <div className="product_photo">
                    <img
                      alt=""
                      src="https://picsum.photos/200/300?random3"
                    ></img>
                  </div>
                  <div className="product_title d-flex aligin-items-center ">
                    <p>
                      澎湖自由行 | 吉貝島來回船票機車 住宿 | 入住新港景亞泰民宿
                    </p>
                  </div>
                  <div className="rec_product_state d-flex justify-content-between align-items-end ">
                    <div className="rec_product_rank mb-1 ms-1">
                      <img
                        className="rank_paws mb-1 me-2"
                        alt=""
                        src={dogIcon}
                      ></img>
                      5.0
                    </div>
                    <div className="rec_product_price">NT$220</div>
                  </div>
                </div>
              </Link>
              <Link to="/">
                <div className="rec_product_card">
                  <div className="product_photo">
                    <img
                      alt=""
                      src="https://picsum.photos/200/300?random6"
                    ></img>
                  </div>
                  <div className="product_title d-flex aligin-items-center ">
                    <p>
                      澎湖自由行 | 吉貝島來回船票機車 住宿 | 入住新港景亞泰民宿
                    </p>
                  </div>
                  <div className="rec_product_state d-flex justify-content-between align-items-end ">
                    <div className="rec_product_rank mb-1 ms-1">
                      <img
                        className="rank_paws mb-1 me-2"
                        alt=""
                        src={dogIcon}
                      ></img>
                      5.0
                    </div>
                    <div className="rec_product_price">NT$100</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <hr></hr>
          <div className="post_comment_list">
            <p>回應</p>
            <div className=" d-flex flex-column align-items-center">
              <li className="d-flex justify-content-between comment_descript_list align-items-start">
                <div className="d-flex justify-content-center">
                  <div className="user_comment_photo">
                    <img
                      alt=""
                      src="https://picsum.photos/200/300?random9"
                    ></img>
                  </div>
                  <div className="user_comment_detail mx-5">
                    <div className="user_comment_name">阿寶愛睡覺</div>
                    <div className="user_comment_text">
                      你這個貼文給過 但構圖實在是...c8 8c c8 8c 8c
                      djfidjfdijfdijfdijd
                      dfdfdfdfddfffffjijijdijfijdfjfjdjfkdjkdjfkjdkfjdkfjdkfjdskjfaldkjfkldjsaljdfskfdkfjdkfj
                    </div>
                  </div>
                </div>
                <div className="user_comment_datetime d-flex align-items-start">
                  <p className="d-block">留言時間： 2022/08/06 23:15</p>
                </div>
              </li>
              <li className="d-flex justify-content-between comment_descript_list align-items-start">
                <div className="d-flex justify-content-center">
                  <div className="user_comment_photo">
                    <img
                      alt=""
                      src="https://picsum.photos/200/300?random2"
                    ></img>
                  </div>
                  <div className="user_comment_detail mx-5">
                    <div className="user_comment_name">啊喵</div>
                    <div className="user_comment_text">
                      你這個貼文給過 但構圖實在是...c8 8c c8 8c 8c
                      djfidjfdijfdijfdijd
                      dfdfdfdfddfffffjijijdijfijdfjfjdjfkdjkdjfkjdkfjdkfjdkfjdskjfaldkjfkldjsaljdfskfdkfjdkfj
                    </div>
                  </div>
                </div>
                <div className="user_comment_datetime d-flex align-items-start">
                  <p className="d-block">留言時間： 2022/08/06 23:15</p>
                </div>
              </li>
            </div>
            <div className="leave_comment">
              <p>我要留言</p>
              <form className="d-flex flex-column align-items-center">
                <textarea
                  type="textarea"
                  className="form-control comment_input"
                  placeholder="有什麼想說的呢？"
                  rows="4"
                  maxLength="100"
                />
              </form>
              <div className="d-flex justify-content-end my-3  post_edit_button ">
                <button className="btn">清除</button>
                <button className="btn">送出</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostWYSIWYG;
