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

  useEffect(() => {
    const fetchPostTrip = async () => {
      const result = await axios.get(`${API_URL}/community/postTrip`);
      // 取得後端來的資料
      console.log(result.data);
      setPostTrip(result.data);
      // 存回 useState 狀態
    };
    fetchPostTrip();
  }, []);

  // console.log('test', postTrip[0].content);

  // // return .map((data) => {
  return (
    <>
      {postTrip.length === 0 ? (
        '沒有資料' //* 是否做loading 頁面
      ) : (
        <div className="d-flex justify-content-center">
          <div className="post_bar d-flex flex-column">
            <PostStateBar post={postTrip}></PostStateBar>

            <hr></hr>
            <div className="d-flex align-items-start">
              <PostLocateArticle post={postTrip}></PostLocateArticle>
              <TripOutline></TripOutline>
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
