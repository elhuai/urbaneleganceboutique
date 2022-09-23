import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import { TiLocation } from 'react-icons/ti';
import PhotoReviewSwiper from '../../WYSIWYG/PhotoView';
import './PostLocateArticle.scss';
import TripOutline from './TripOutline';

export default function PostLocateArticle({ post }) {
  // const [tripDetail, setTripDetail] = useState([]);

  // useEffect(() => {
  //   const fetchTripDetail = async () => {
  //     const result = await axios.get(`${API_URL}/tripfetch/trip`);
  //     // 取得後端來的資料
  //     console.log(result.data);
  //     setTripDetail(result.data);
  //     // 存回 useState 狀態
  //   };
  //   fetchTripDetail();
  // }, []);

  return (
    <>
      <ul className="article_section">
        {post.map((data, index) => {
          return (
            <>
              <div className="my-2 post_dayCount">Day {data.days}</div>
              <li
                className="trip_record_section"
                id={`day${data.days}locate${index}`}
              >
                <div>
                  <div className="post_location_mark d-flex align-items-center">
                    <p>
                      <TiLocation className="mb-1 me-1 h5"></TiLocation>
                      <strong className="ms-1 h5">{data.locate_name}</strong>
                    </p>
                    <p className="ms-1 post_location_duration small">
                      {data.locate_duration}
                    </p>
                  </div>
                  <p>{data.locate_context}</p>
                  {/* <PhotoReviewSwiper list={data}></PhotoReviewSwiper> */}
                  <hr></hr>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
