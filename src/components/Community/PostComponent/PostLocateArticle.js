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
      const result = await axios.get(`${API_URL}/tripfetch/trip`);
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
          let name = data.locate_name.split(/[,]/);
          let duration = data.locate_duration.split(/[,]/);

          let tripOutline = { name, duration };
          console.log('tripOutline', tripOutline);

          return (
            <>
              <div className="my-2">Day {data.days}</div>
              <li className="trip_record_section" id="locate1">
                <div>
                  {tripOutline.name.map((locate, index) => {
                    {
                      /* console.log('locate',locate) */
                    }
                    return (
                      <>
                        <div className="post_location_mark d-flex flex-row ">
                          <p>
                            <MdLocationOn className="mb-1 me-1 h5"></MdLocationOn>
                            |<strong className="me-1 h5">{locate}</strong>
                          </p>
                          <p className="post_location_duration small align-items-end">
                            {tripOutline.duration[index]}
                          </p>
                        </div>
                        <p>
                          ✍🏻台北到花蓮 開車大約3-4小時
                          中間可以到蘇澳休息站休息～
                          建議7:00前出發比較不容易塞車
                        </p>
                        <PhotoReviewSwiper></PhotoReviewSwiper>
                        <hr></hr>
                      </>
                    );
                  })}
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
