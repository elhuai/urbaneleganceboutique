import React from 'react';
import { useState, useEffect } from 'react';
import './Post.scss';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import PostMap from '../../components/Community/PostComponent/PostMap';
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
  const [userId, setUserId] = useState();

  // 貼文內容
  const [post, setPost] = useState([]);

  // 留言內容
  const [comment, setComment] = useState([
    {
      id: 1,
      user_id: 1,
      comment: '來過好幾次了！還是很喜歡動物園',
      time: '2022/03/28 12:22',
    },
    {
      id: 2,
      user_id: 2,
      comment: '老少咸宜的場所，從幼稚園、青少年、成人到老人都有！童年的回憶',
      time: '2022/04/09 20:56',
    },
    {
      id: 3,
      user_id: 3,
      comment:
        '大人、小孩都愛去的地方，如果天氣涼爽，動物更是不吝嗇的讓你看得夠XD；交通也方便，開車前往、搭乘大眾運輸都很可以。',
      time: '2022/07/13 23:15',
    },
    {
      id: 4,
      user_id: 4,
      comment:
        '園區廣大，生物種類繁多，規劃友善且票價親民，兼具休閒娛樂與教育意義，不論大人小孩皆是值得一推的好去處。',
      time: '2022/08/29 17:15',
    },
  ]);

  // 網址postID 顯示該筆資料
  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const postID = urlSearchParams.get('postID');
  console.log('postID', postID);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const result = await axios.get(
          `${API_URL}/post/postDetail?postID=${postID}`,
          {
            withCredentials: true,
          }
        );
        // 取得後端來的資料
        console.log('result,data', result.data);
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
          <div className="d-flex justify-content-center">
            <div className="post_bar d-flex flex-column">
              <PostStateBar post={post}></PostStateBar>
              <hr></hr>
              <TextSection post={post}></TextSection>
              <PostMap></PostMap>
              <RecommandProduct></RecommandProduct>
              <hr></hr>
              <CommentBar comment={comment}></CommentBar>
              <div className="leave_comment">
                <p>我要留言</p>
                <form className="d-flex flex-column align-items-center">
                  <textarea
                    type="textarea"
                    className="form-control comment_input"
                    placeholder="有什麼想說的呢？"
                    rows="4"
                    maxLength="100"
                  />
                </form>
                <div className="d-flex justify-content-end my-3  post_edit_button ">
                  <button className="btn">清除</button>
                  <button className="btn">送出</button>
                </div>
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
