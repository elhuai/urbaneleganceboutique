import React from 'react';
import { useState, useEffect } from 'react';
import './PostWYSIWYG.scss';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import coverPhoto from '../../images/test2.jpg';
import mapPhoto from '../../images/screenshop map_photo.png';
import { Link } from 'react-router-dom';
import { BiLike } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import dogIcon from '../../images/travel_dog_paws.svg';
import PhotoReviewSwiperDefault from '../../components/WYSIWYG/PhotoViewDefault';
// import '../node_modules/reatct-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function PostWYSIWYG() {
  // const postData = [
  //   {
  //     id: 12346,
  //     post_type_id: 1,
  //     "user_id": 2,
  //     "title":
  //       '【食】台北大安┃浪漫歐式氛圍的玻璃屋┃必吃的法式甜點┃寵物友善餐廳┃Bonica Café',
  //     content:

  //     "main_photo": 'dogsuit.png',
  //     travel_id: 1,
  //     "create_time": '2022-09-16 08:26:25',
  //     update_time: '2022-09-16 08:26:25',
  //     status: 1,
  //   },
  // ];

  {
    /* 關聯資料庫 */
  }
  const [post, setPost] = useState([]);
  // const [waterCard, setWaterCard] = useState([]);
  // const [healthCard, setHealthCard] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      // const arrStr = [
      //   { id: '4', text: '飲水機', setState: setFishCard },
      //   { id: '4', text: '小魚乾', setState: setWaterCard },
      //   { id: '4', text: '益生菌', setState: setHealthCard },
      // ];

      const result = await axios.get(
        `http://localhost:3007/api/1.0/community/post`
      );
      console.log(result.data);
      // const data = result.data;
      setPost(result.data);
    };
    // console.log(fishData);
    fetchPost();
  }, []);
  console.log('post', post);

  // return .map((data) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="post_bar d-flex flex-column">
          <div className="post_cover_photo">
            <img className="" alt="" src={coverPhoto}></img>
          </div>
          <div className="post_title d-flex">
            <p className="">{post[0].title}</p>
          </div>
          <div className="post_state_bar d-flex justify-content-between">
            <div className="d-flex  ">
              <div className="post_date pe-4">
                <p></p>
              </div>
              <div className="post_auther d-flex pe-4">
                <Link to="/" className="pe-3">
                  大寶愛睡覺 大寶愛睡覺
                  {/* 關聯資料庫 */}
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
          <div className="article_section"></div>
          <PhotoReviewSwiperDefault></PhotoReviewSwiperDefault>
          <div className="post_map">
            <p>行程地圖</p>
            <div className="map_photo">
              <img alt="" src={mapPhoto} />
            </div>
          </div>
          <div className="recommand_product_list">
            <p>推薦行程/商品</p> {/* 關聯資料庫 */}
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
            <p>回應</p> {/* 關聯資料庫 */}
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
  // });
}

export default PostWYSIWYG;
