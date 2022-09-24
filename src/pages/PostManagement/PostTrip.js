import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import './PostTrip.scss';

import PostLocateArticle from '../../components/Community/PostComponent/PostLocateArticle';
import PostStateBar from '../../components/Community/PostComponent/PostStateBar';
import PostMap from '../../components/Community/PostComponent/PostMap';
import CommentBar from '../../components/Community/PostComponent/CommentBar';
import RecommandProduct from '../../components/Community/PostComponent/RecommandProduct';
import TripOutline from '../../components/Community/PostComponent/TripOutline';

function PostTrip() {
  const [postTrip, setPostTrip] = useState([]);

  // 單獨取行程明細
  useEffect(() => {
    const fetchPostTripEdit = async () => {
      try {
        const result = await axios.get(`${API_URL}/community/tripPostDetail`);
        // 取得後端來的資料
        // const data2 = await result.data;
        if (result) {
          let daysFilter = [];
          // 分組按照日期分組

          for (const [index, item] of result.data.entries()) {
            if (daysFilter.length === 0) {
              daysFilter.push([item]);
            } else if (
              daysFilter[daysFilter.length - 1][0].days !== item.days
            ) {
              daysFilter.push([item]);
            } else {
              daysFilter[daysFilter.length - 1].push(item);
            }
          }
          setPostTrip(daysFilter);
        }
      } catch (err) {
        console.log('setPostTripEdit ', err);
      }
      // 存回 useState 狀態
    };
    fetchPostTripEdit();
  }, []);

  // // return .map((data) => {
  return (
    <>
      {postTrip.length === 0 ? (
        '沒有資料' //* 是否做loading 頁面
      ) : (
        <div key={postTrip.id} className="d-flex justify-content-center">
          <div className="post_bar d-flex flex-column">
            <PostStateBar post={postTrip}></PostStateBar>

            <hr></hr>
            <div className="d-flex align-items-start">
              <PostLocateArticle post={postTrip}></PostLocateArticle>
              <TripOutline post={postTrip}></TripOutline>
            </div>
            <PostMap></PostMap>
            <RecommandProduct></RecommandProduct>
            <hr></hr>
            <CommentBar></CommentBar>
          </div>
        </div>
      )}
    </>
  );
}

export default PostTrip;
