import React from 'react';
import './PostManagement.scss';
import coverPhoto from '../../images/test2.jpg';
import mapPhoto from '../../images/screenshop map_photo.png';
import { Link } from 'react-router-dom';
import { BiLike } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import dogIcon from '../../images/travel_dog_paws.svg';
import WYSIWYG from '../../components/WYSIWYG/WYSIWYG';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function PostManagement() {
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
          <WYSIWYG></WYSIWYG>

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
                      src="https://picsum.photos/200/300?random6"
                    ></img>
                  </div>
                  <div className="product_title d-flex aligin-items-center ">
                    <p>
                      澎湖自由行 | 吉貝島來回船票機車 住宿 | 入住新港景亞泰民宿
                    </p>
                  </div>
                  <div className="rec_product_state d-flex justify-content-between ">
                    <div className="rec_product_rank">
                      <img
                        className="rank_paws mb-1 me-2"
                        alt=""
                        src={dogIcon}
                      ></img>
                      5.0
                    </div>
                    <div className="rec_product_price">NT$9220</div>
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
                  <div className="rec_product_state d-flex justify-content-between ">
                    <div className="rec_product_rank">
                      <img
                        className="rank_paws mb-1 me-2"
                        alt=""
                        src={dogIcon}
                      ></img>
                      5.0
                    </div>
                    <div className="rec_product_price">NT$620</div>
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
                  <div className="rec_product_state d-flex justify-content-between ">
                    <div className="rec_product_rank">
                      <img
                        className="rank_paws mb-1 me-2"
                        alt=""
                        src={dogIcon}
                      ></img>
                      5.0
                    </div>
                    <div className="rec_product_price">NT$1120</div>
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
                    <div className="rec_product_rank">
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
                      src="https://picsum.photos/200/300?random10"
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
              <li className="d-flex justify-content-between comment_descript_list align-items-start">
                <div className="d-flex justify-content-center">
                  <div className="user_comment_photo">
                    <img
                      alt=""
                      src="https://picsum.photos/200/300?random7"
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
                  maxlength="80"
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

export default PostManagement;