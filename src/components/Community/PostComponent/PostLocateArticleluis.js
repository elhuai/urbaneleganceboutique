import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import { MdLocationOn } from 'react-icons/md';
import PhotoReviewSwiper from '../../WYSIWYG/PhotoView';
import './PostLocateArticle.scss';

export default function PostLocateArticle() {
  const [tripDetail, setTripDetail] = useState([]);

  useEffect(() => {
    const fetchTripDetail = async () => {
      const result = await axios.get(`${API_URL}/community/Trip`);
      // 取得後端來的資料
      console.log(result.data);
      setTripDetail(result.data);
      // 存回 useState 狀態
    };
    fetchTripDetail();
  }, []);

  return (
    <>
      <ul className="article_section">
        {tripDetail.map((data, index) => {
          console.log(data);
          return (
            <>
              <div className="my-2">Day 1 </div>
              
              <li className="trip_record_section" id="locate1">
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
                <PhotoReviewSwiper></PhotoReviewSwiper>
                <hr></hr>
              </li>
              <li className="trip_record_section" id="locate2">
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
                <PhotoReviewSwiper></PhotoReviewSwiper>
                <hr></hr>
              </li>
              <li className="trip_record_section" id="locate3">
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
                <PhotoReviewSwiper></PhotoReviewSwiper>
                <hr></hr>
              </li>
              <div className="my-2">Day 2</div>
              <li className="trip_record_section" id="locate4">
                <div className="post_location_mark">
                  <p>
                    <MdLocationOn className="location_icon mb-1 me-1"></MdLocationOn>
                    1.5小時 | 花蓮七星潭
                  </p>
                </div>
                <p>花蓮七星潭風景也太美了 美到我不知道該說什麼</p>
                <PhotoReviewSwiper></PhotoReviewSwiper>
                <hr></hr>
              </li>
              <li className="trip_record_section" id="locate5">
                <div className="post_location_mark">
                  <p>
                    <MdLocationOn className="mb-1 me-1"></MdLocationOn>1.5小時 |
                    依山午
                  </p>
                </div>
                <p>
                  這次的住宿真的超級滿意！ 很幸運的住到一樓 陽台外可以餵魚
                  特別喜歡它的浴缸！二個人一起泡位置也很大
                  帶了最喜歡的LUSH泡澡球跟白酒 超放鬆～
                  園區也很美很漂亮🌸🌸🌸🌸✨
                </p>
                <PhotoReviewSwiper></PhotoReviewSwiper>
                <hr></hr>
              </li>
              <div className="my-2">Day 3</div>
              <li className="trip_record_section" id="locate6">
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
                <PhotoReviewSwiper></PhotoReviewSwiper>
                <hr></hr>
              </li>
              <li className="trip_record_section" id="locate7">
                <div className="post_location_mark">
                  <p>
                    <MdLocationOn className="mb-1 me-1"></MdLocationOn>1.5小時 |
                    花蓮南濱公園
                  </p>
                </div>
                <p>
                  顆顆顆 南濱公園這次去沒什麼人 海景很漂亮但是風很大
                  這是最後的行程 再來就要回台北囉～
                </p>
                <PhotoReviewSwiper></PhotoReviewSwiper>
                <hr></hr>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
