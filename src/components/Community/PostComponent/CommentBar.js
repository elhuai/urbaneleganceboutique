import React from 'react';
import './CommentBar.scss';

function CommentBar({ comment }) {
  return (
    <div className="post_comment_list">
      <p>回應</p> {/* 關聯資料庫 */}
      <div className=" d-flex flex-column align-items-center">
        {comment.map((data) => {
          return (
            <li
              key={data.id}
              className="d-flex justify-content-between comment_descript_list align-items-start"
            >
              <div className="d-flex justify-content-center">
                <div className="user_comment_photo">
                  <img alt="" src="https://picsum.photos/200/300?random9"></img>
                </div>
                <div className="user_comment_detail mx-5">
                  <div className="user_comment_name">{data.id}</div>
                  <div className="user_comment_text">{data.comment}</div>
                </div>
              </div>
              <div className="user_comment_datetime d-flex align-items-start">
                <p className="d-block">留言時間： {data.time}</p>
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default CommentBar;
