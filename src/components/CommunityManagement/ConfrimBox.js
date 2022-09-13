import React from 'react';
import { Link } from 'react-router-dom';
import './ConfirmBox.scss';

function ConfrimBox() {
  return (
    <div className="confirmBox_background d-flex justify-content-center">
      <div className="create_post_confirm_box d-flex flex-column align-items-center justify-content-center">
        <p>請選擇貼文形式</p>
        <Link to="/PostWYSIWYGEdit">
          <button className="confirm_button">一般貼文</button>
        </Link>
        <Link to="/PostTripEdit">
          <button className="confirm_button">
            行程貼文<br></br>（需匯入行程）
          </button>
        </Link>
      </div>
      <div className="delete_confirm_box d-flex flex-column align-items-center justify-content-center">
        <p>是否確認刪除？</p>
        <Link to="/">
          <button className="confirm_button">確認</button>
        </Link>
      </div>
    </div>
  );
}

export default ConfrimBox;
