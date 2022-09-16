import React from 'react';
import coverPhoto from '../../../images/test2.jpg';
import { Link } from 'react-router-dom';
import { BiLike } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';

export default function PostStateBar({ post }) {
  return (
    <>
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
              <MdLocationOn className="mb-1"></MdLocationOn>花蓮
            </p>
          </div>
        </div>
        <div className="post_like me-2">
          <p>
            <BiLike className="mb-1 me-2"></BiLike>按讚人數 999
          </p>
        </div>
      </div>
    </>
  );
}
