import React from 'react';
import './PostTrip.scss';
import coverPhoto from '../../images/test2.jpg';
import mapPhoto from '../../images/screenshop map_photo.png';
import { Link } from 'react-router-dom';
// import { BiLike } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import dogIcon from '../../images/travel_dog_paws.svg';
import PostSwiper from '../../components/WYSIWYG/Swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import '../node_modules/reatct-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function PostTrip() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="post_bar d-flex flex-column">
          <div className="post_cover_photo">
            <img className="" alt="" src={coverPhoto}></img>
          </div>
          <div className=" d-flex justify-content-between">
            <div className="post_title">
              <p>
                花蓮三日遊 好吃又好玩 好吃又好玩 好吃又好吃又好玩
                好吃又好吃又好玩 好吃又
              </p>
            </div>
            <div className="post_state mt-3">
              <p className="ms-5">草稿</p>
            </div>
          </div>
          <div></div>
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
            </div>
            <div className="post_edit_button">
              <button className="btn">編輯</button>
              <button className="btn">刪除</button>
              <button className="btn">發布</button>
            </div>
          </div>
          <hr></hr>
          <div className="d-flex justify-content-between">
            <ul className="article_section">
              <div className="my-2">第一天</div>
              <li className="trip-record-section">
                <div className="post_location_mark">
                  <p>
                    <MdLocationOn className="mb-1 me-1"></MdLocationOn>10分 |
                    台北捷運台北車站
                  </p>
                </div>
                <p>
                  ✍🏻台北到花蓮 開車大約3-4小時 中間可以到蘇澳休息站休息～
                  建議7:00前出發比較不容易塞車
                </p>
                <PostSwiper></PostSwiper>
                <hr></hr>
              </li>
              <li className="trip-record-section">
                <div className="post_location_mark">
                  <p>
                    <MdLocationOn className="mb-1 me-1"></MdLocationOn>2小時 |
                    太魯閣國家公園
                  </p>
                </div>
                <p>
                  ✍🏻天氣太熱～ 真的是車遊太魯閣 從頭到尾沒有下車
                  緩慢的速度欣賞沿途風景
                </p>
                <PostSwiper></PostSwiper>
                <hr></hr>
              </li>
              <li className="trip-record-section">
                <div className="post_location_mark">
                  <p>
                    <MdLocationOn className="mb-1 me-1"></MdLocationOn>1小時 |
                    煙波大飯店花蓮館
                  </p>
                </div>
                <p>
                  ✍🏻這次第一天其實是住親戚家 用前年住過的煙波來替代地點
                  煙波的浴缸也很棒 離市區也很近 有山景跟海景房可以選擇
                  （挑選住宿的條件一定要有大浴缸！）
                </p>
                <PostSwiper></PostSwiper>
                <hr></hr>
              </li>
              <div className="my-2">第二天</div>
              <li className="trip-record-section">
                <div className="post_location_mark">
                  <p>
                    <MdLocationOn className="location_icon mb-1 me-1"></MdLocationOn>
                    1.5小時 | 鹽寮龍蝦海鮮餐廳
                  </p>
                </div>
                <p>
                  ✍🏻原本要吃055龍蝦 剛好遇到店休 所以來吃旁邊的鹽寮龍蝦🦞
                  我覺得差別在景的部分 055可以更近距離看到海
                </p>
                <PostSwiper></PostSwiper>
                <hr></hr>
              </li>
              <li className="trip-record-section">
                <div className="post_location_mark">
                  <p>
                    <MdLocationOn className="mb-1 me-1"></MdLocationOn>1.5小時 |
                    依午山
                  </p>
                </div>
                <p>
                  這次的住宿真的超級滿意！ 很幸運的住到一樓 陽台外可以餵魚
                  特別喜歡它的浴缸！二個人一起泡位置也很大
                  帶了最喜歡的LUSH泡澡球跟白酒 超放鬆～
                  園區也很美很漂亮🌸🌸🌸🌸✨
                </p>
                <PostSwiper></PostSwiper>
                <hr></hr>
              </li>
            </ul>

            <div className="trip_outline">
              <div>
                <p className="post_date_count">第一天</p>
                <Link to="/">
                  <p>｜台北捷運台北火車站</p>
                </Link>
                <Link to="/">
                  <p>｜太魯閣國家公園</p>
                </Link>
              </div>
              <div>
                <p className="post_date_count">第二天</p>
                <Link to="/">
                  <p>｜太魯閣</p>
                  <p>｜依山午</p>
                </Link>
              </div>
              <div>
                <p className="post_date_count">第三天</p>
                <Link to="/">
                  <p>｜鹽寮龍蝦海鮮餐廳</p>
                </Link>
              </div>
            </div>
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
                  maxlength="100"
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

export default PostTrip;
