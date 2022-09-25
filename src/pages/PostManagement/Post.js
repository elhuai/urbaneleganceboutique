import React from 'react';
import { useState, useEffect } from 'react';
import './Post.scss';
import axios from 'axios';
import { API_URL } from '../../utils/config';

import PostMap from '../../components/Community/PostComponent/PostMap';
import RecommandProduct from '../../components/Community/PostComponent/RecommandProduct';
import PhotoReviewSwiperDefault from '../../components/WYSIWYG/PhotoViewDefault';
import CommentBar from '../../components/Community/PostComponent/CommentBar';
import PostStateBar from '../../components/Community/PostComponent/PostStateBar';
import TextSection from '../../components/Community/PostComponent/TextSection';

function Post() {
  const [post, setPost] = useState([])
  const [comment, setComment] = useState([
    {
      id:1,
      user_id:1,
      comment:'來過好幾次了！還是很喜歡動物園',
      time:'2022/03/28 12:22',
    },
    {
      id:2,
      user_id:2,
      comment:'老少咸宜的場所，從幼稚園、青少年、成人到老人都有！童年的回憶',
      time:'2022/04/09 20:56',
    },
    {
      id:3,
      user_id:3,
      comment:'大人、小孩都愛去的地方，如果天氣涼爽，動物更是不吝嗇的讓你看得夠XD；交通也方便，開車前往、搭乘大眾運輸都很可以。',
      time:'2022/07/13 23:15',
    },
    {
      id:4,
      user_id:4,
      comment:'園區廣大，生物種類繁多，規劃友善且票價親民，兼具休閒娛樂與教育意義，不論大人小孩皆是值得一推的好去處。',
      time:'2022/08/29 17:15',
    },
  ]);

  useEffect(() => {
    const fetchPost = async () => {
      const result = await axios.get(`${API_URL}/community/post`);
      // 取得後端來的資料
      console.log(result.data);
      setPost(result.data);
      // 存回 useState 狀態
    };
    fetchPost();
  }, []);
  // console.log('post', post);

  // return .map((data) => {
  return (
    <>
      {post.length === 0 ? (
        '沒有資料' //* 是否做loading 頁面
      ) : (
        <>
          <div className="d-flex justify-content-center">
            <div className="post_bar d-flex flex-column">
              <PostStateBar post={post}></PostStateBar>
              <hr></hr>
              <TextSection post={post}></TextSection>
              {/* <PhotoReviewSwiperDefault></PhotoReviewSwiperDefault> */}
              <PostMap></PostMap>
              <RecommandProduct></RecommandProduct>
              <hr></hr>
              <CommentBar comment={comment}></CommentBar>
            </div>
          </div>
        </>
      )}
    </>
  );
  // });
}

export default Post;
