import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import { TiLocation } from 'react-icons/ti';
import './PostLocateArticle.scss';
import PhotoReviewSwiper from '../../WYSIWYG/PhotoView';

export default function PostLocateArticle({ post }) {
  // let daycount = post.days
  // console.log('tew',daycount);
  // const [tripDetail, setTripDetail] = useState([]);

  return (
    <>
      {post.length === 0 ? (
        '沒有資料'
      ) : (
        <ul className="article_section">
          {post.map((data, index) => {
            return (
              <>
                <div className="my-2 post_dayCount">Day {data[index].days}</div>
                {data.map((data, i) => {
                  return (
                    <>
                      <li
                        className="trip_record_section"
                        id={`day${data.days}locate${i}`}
                      >
                        <div>
                          <div className="post_location_mark d-flex align-items-center">
                            <p>
                              <TiLocation className="mb-1 me-1 h5"></TiLocation>
                              <strong className="ms-1 h5">
                                {data.locate_name}
                              </strong>
                            </p>
                            <p className="ms-1 post_location_duration small">
                              {data.locate_duration}
                            </p>
                          </div>
                          <p>{data.locate_context}</p>
                          <PhotoReviewSwiper list={data}></PhotoReviewSwiper>
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
      )}
    </>
  );
}
