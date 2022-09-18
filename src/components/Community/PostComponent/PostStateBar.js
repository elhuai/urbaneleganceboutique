import React from 'react';
import coverPhoto from '../../../images/test2.jpg';
import { Link } from 'react-router-dom';
import { BiLike } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import './PostStateBar.scss';
import { useState } from 'react';

export default function PostStateBar({ post }) {
  const [likes, setLikes] = useState(post[0].likes);
  const [likesState, setLikeState] = useState(false);

  const LikeHandle = () => {
    if (!likesState) {
      setLikes(likes + 1);
      setLikeState(true);
      console.log(likes);
      console.log(likesState);
    } else {
      setLikes(likes - 1);
      setLikeState(false);
      console.log(likes);
      console.log(likesState);
    }
  };

  return (
    <>
      <div className="postStateBar">
        <div className="post_cover_photo">
          <img
            className=""
            alt=""
            src={
              post[0].main_photo.length === 0 ? coverPhoto : post[0].main_photo
            }
          ></img>
        </div>
        <div className="post_title d-flex">
          <p className="">{post[0].title}</p>
        </div>
        <div className="post_state_bar d-flex justify-content-between">
          <div className="d-flex  ">
            <div className="post_date px-2">
              <p>{post[0].create_time}</p>
            </div>
            <div className="post_auther d-flex pe-4">
              <Link to="/" className="pe-3">
                大寶愛睡覺 大寶愛睡覺 {post[0].user_id}
                {/* 關聯資料庫 */}
              </Link>
              <Link to="/" className="follow_link">
                追蹤
              </Link>
            </div>
            <div className="post_location pe-4">
              <p>
                <MdLocationOn className="mb-1"></MdLocationOn>{post[0].coordinate}
              </p>
            </div>
          </div>
          <div className="post_like me-2">
            <p>
              <BiLike
                className="mb-1 me-2"
                onClick={LikeHandle}
              ></BiLike>
              按讚人數：{likes}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
