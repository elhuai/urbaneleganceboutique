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

  const [post, setPost] = useState([]);

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
              <PhotoReviewSwiperDefault></PhotoReviewSwiperDefault>
              <PostMap></PostMap>
              <RecommandProduct></RecommandProduct>
              <hr></hr>
              <CommentBar></CommentBar>
            </div>
          </div>
        </>
      )}
    </>
  );
  // });
}

export default Post;
