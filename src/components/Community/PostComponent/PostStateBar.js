import React from 'react';
import coverPhoto from '../../../images/test2.jpg';
import { BE_URL } from '../../../utils/config';
import { Link } from 'react-router-dom';
import { BiLike } from 'react-icons/bi';
import { AiTwotoneLike } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import './PostStateBar.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import { handleSuccess } from '../../../utils/handler/card/handleStatusCard';

export default function PostStateBar({ post, postID }) {
  console.log('post', post);
  console.log('此貼文ＩＤ', postID);
  // 資料按讚數
  const [likes, setLikes] = useState(post[0][0].likes);
  const [likesState, setLikeState] = useState(0);

  console.log('poststatebar', post);

  // 按讚按鈕
  const LikeHandle = async (e) => {
    e.preventDefault();

    if (!likesState) {
      setLikes(likes + 1);

      let likesData = await axios.post(`${API_URL}/community/likes`, {
        postID,
        likesState,
      });
      console.log('按讚成功', likesData);
      handleSuccess('讚讚！');
      setLikeState(1);
      // TODO:傳值給資料庫做加減
      console.log(likes);
      console.log(likesState);
    } else {
      setLikes(likes - 1);

      let likesData = await axios.post(`${API_URL}/community/likes`, {
        postID,
        likesState,
      });
      console.log('收回讚', likesData);
      handleSuccess('讚還來');
      setLikeState(0);
      console.log(likes);
      console.log(likesState);
    }
  };


  const time = post[0][0].create_time.split(' ');
  const tags = post[0][0].tags.split(/[#,＃]/).filter((item) => item);

  return (
    <>
      <div className="postStateBar">
        <div className="post_cover_photo">
          <img
            className=""
            alt=""
            src={
              post[0][0].main_photo.length === 0
                ? coverPhoto
<<<<<<< HEAD
                : post[0][0].main_photo
=======
                :  BE_URL + post[0].main_photo
>>>>>>> d554f1dfebc36e53111af4bd2da5aebf4a9dd624
            }
          ></img>
        </div>
        <div className="post_title d-flex">
          <p className="">{post[0][0].post_title}</p>
        </div>
        <div className="post_state_bar d-flex justify-content-between">
          <div className="d-flex">
            <div className="post_date px-2">
              <p>{time[0]}</p>
            </div>
            <div className="post_auther d-flex pe-4">
              <Link to="/" className="pe-3">
                {post[0][0].social_name}
                {/* 關聯資料庫 */}
              </Link>
              <Link to="/" className="follow_link">
                追蹤
              </Link>
            </div>
            <div className="post_location pe-4">
              <p>
                <MdLocationOn className="mb-1"></MdLocationOn>
                {post[0][0].coordinate}
              </p>
            </div>
            <div className="d-flex ">
              {tags.map((data, index) => {
                return (
                  <div key={tags.index} className="post_tags">
                    <p className="mx-1">{data}</p>
                  </div>
                );
              })}
              x
            </div>
          </div>
          <div className="post_like me-2">
            {likesState === 0 ? (
              <p>
                <BiLike className="mb-1 me-2" onClick={LikeHandle}></BiLike>
                按讚人數：{likes}
              </p>
            ) : (
              <p>
                {' '}
                <AiTwotoneLike
                  className="mb-1 me-2"
                  onClick={LikeHandle}
                ></AiTwotoneLike>
                按讚人數：{likes}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
