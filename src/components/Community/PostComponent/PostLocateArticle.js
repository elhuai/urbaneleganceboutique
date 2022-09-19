import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import { MdLocationOn } from 'react-icons/md';
import PhotoReviewSwiper from '../../WYSIWYG/PhotoView';
import './PostLocateArticle.scss';

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
          let name = data.locate_name.split(/[,]/);
          let duration = data.locate_duration.split(/[,]/);
          let coordinate = data.locate_coordinate
            .split(/[#]/)
            .filter((item) => item);
          let context = data.locate_context
            .split(/[###,＃＃＃]/)
            .filter((item) => item);
          let locatePhoto = data.locate_photo
            .split(/[|]/)
            .filter((item) => item);
          {
            /* console.log('lphoto', locatePhoto); */
          }
          {/* let photoList = { locatePhoto }; */}
          {/* console.log('photo list', photoList); */}

          let tripOutline = {
            name,
            duration,
            coordinate,
            context,
            locatePhoto,
          };
          {/* console.log('tripOutline', tripOutline); */}

          return (
            <>
              <div className="my-2 post_dayCount">Day {data.days}</div>

              {tripOutline.name.map((locate, index) => {
                return (
                  <>
                    <li className="trip_record_section" id={`locate${index}`}>
                      <div>
                        <div className="post_location_mark d-flex align-items-center">
                          <p>
                            <MdLocationOn className="mb-1 me-1 h5"></MdLocationOn>
                            <strong className="ms-1 h5">{locate}</strong>
                          </p>
                          <p className="ms-1 post_location_duration small">
                            {tripOutline.duration[index]}
                          </p>
                        </div>
                        <p>{tripOutline.context[index]}</p>
                        <PhotoReviewSwiper datay={tripOutline.locatePhoto[index]}></PhotoReviewSwiper>
                        {/* {tripOutline.locatePhoto[index]}
                        {tripOutline.coordinate[index]} */}
                        <hr></hr>
                      </div>
                    </li>
                  </>
                );
              })}
            </>
          );
        })}
      </ul>
    </>
  );
}
