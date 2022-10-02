import React from 'react';
import { useState, useEffect } from 'react';
import './Post.scss';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import CyrilkeGooglemap from '../../components/Community/PostComponent/CyrilkeGooglemap';
import RecommandProduct from '../../components/Community/PostComponent/RecommandProduct';
// import PhotoReviewSwiperDefault from '../../components/WYSIWYG/PhotoViewDefault';
import CommentBar from '../../components/Community/PostComponent/CommentBar';
import PostStateBar from '../../components/Community/PostComponent/PostStateBar';
import TextSection from '../../components/Community/PostComponent/TextSection';
import { useUserInfo } from '../../hooks/useUserInfo';
import { useParams, useLocation } from 'react-router-dom';

function Post() {
  // 登入狀態驗證
  const { user, setUser } = useUserInfo();
  // const [userId, setUserId] = useState();

  // 貼文內容
  const [post, setPost] = useState([]);

  // 網址postID 顯示該筆資料
  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const postID = urlSearchParams.get('postID');
  console.log('postID', postID);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        let user_id = user.data.id;
        console.log(user_id);
        const result = await axios.get(
          // `${API_URL}/post/postDetail?postID=${postID}`,
          // {
          //   withCredentials: true,
          // }
          `${API_URL}/post/postDetail?postID=${postID}`
        );
        // 取得後端來的資料
        console.log('result.data', result.data);
        setPost(result.data);
      } catch (err) {
        console.log('setPost', err);
      }
      // 存回 useState 狀態
    };
    fetchPost();
  }, []);
  console.log('POST', post);
  return (
    <>
      {post.length === 0 ? (
        '沒有資料' //* 是否做loading 頁面
      ) : (
        <>
          <div className="community_post_main">
            <div className="d-flex justify-content-center">
              <div className="post_bar d-flex flex-column">
                <PostStateBar post={post}></PostStateBar>
                <hr></hr>
                <TextSection post={post}></TextSection>
                <CyrilkeGooglemap />
                <RecommandProduct></RecommandProduct>
                <CommentBar></CommentBar>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
  // });
}

export default Post;
