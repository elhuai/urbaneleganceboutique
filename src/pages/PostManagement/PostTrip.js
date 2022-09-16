import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {API_URL} from '../../utils/config';
import './PostTrip.scss';
import { Link } from 'react-router-dom';
// import { BiLike } from 'react-icons/bi';

import PostLocateArticle from '../../components/Community/PostComponent/PostLocateArticle';
import PostStateBar from '../../components/Community/PostComponent/PostStateBar';
import PostMap from '../../components/Community/PostComponent/PostMap';
import CommentBar from '../../components/Community/PostComponent/CommentBar';
import RecommandProduct from '../../components/Community/PostComponent/RecommandProduct';
import TripOutline from '../../components/Community/PostComponent/TripOutline';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import '../node_modules/reatct-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function PostTrip() {
  // const [post, setPost] = useState([]);

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     const result = await axios.get(`${API_URL}/community/post`);
  //     // 取得後端來的資料
  //     console.log(result.data);
  //     setPost(result.data);
  //     // 存回 useState 狀態
  //   };
  //   fetchPost();
  // }, []);
  // // console.log('post', post);

  // // return .map((data) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="post_bar d-flex flex-column">
          {/* <PostStateBar></PostStateBar> */}
          <hr></hr>
          <div className="d-flex justify-content-between align-items-start">
            <PostLocateArticle></PostLocateArticle>
            <TripOutline></TripOutline>
          </div>
          <PostMap></PostMap>
          <RecommandProduct></RecommandProduct>
          <hr></hr>
          <CommentBar></CommentBar>
        </div>
      </div>
    </>
  );
}

export default PostTrip;
