import React from 'react';
import './CommentBar.scss';

function CommentBar() {
  return (
    <div className="post_comment_list">
      <p>回應</p> {/* 關聯資料庫 */}
      <div className=" d-flex flex-column align-items-center">
        <li className="d-flex justify-content-between comment_descript_list align-items-start">
          <div className="d-flex justify-content-center">
            <div className="user_comment_photo">
              <img alt="" src="https://picsum.photos/200/300?random9"></img>
            </div>
            <div className="user_comment_detail mx-5">
              <div className="user_comment_name">阿寶愛睡覺</div>
              <div className="user_comment_text">
                你這個貼文給過 但構圖實在是...c8 8c c8 8c 8c djfidjfdijfdijfdijd
                dfdfdfdfddfffffjijijdijfijdfjfjdjfkdjkdjfkjdkfjdkfjdkfjdskjfaldkjfkldjsaljdfskfdkfjdkfj
              </div>
            </div>
          </div>
          <div className="user_comment_datetime d-flex align-items-start">
            <p className="d-block">留言時間： 2022/08/06 23:15</p>
          </div>
        </li>
        <li className="d-flex justify-content-between comment_descript_list align-items-start">
          <div className="d-flex justify-content-center">
            <div className="user_comment_photo">
              <img alt="" src="https://picsum.photos/200/300?random2"></img>
            </div>
            <div className="user_comment_detail mx-5">
              <div className="user_comment_name">啊喵</div>
              <div className="user_comment_text">
                你這個貼文給過 但構圖實在是...c8 8c c8 8c 8c djfidjfdijfdijfdijd
                dfdfdfdfddfffffjijijdijfijdfjfjdjfkdjkdjfkjdkfjdkfjdkfjdskjfaldkjfkldjsaljdfskfdkfjdkfj
              </div>
            </div>
          </div>
          <div className="user_comment_datetime d-flex align-items-start">
            <p className="d-block">留言時間： 2022/08/06 23:15</p>
          </div>
        </li>
      </div>
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
  );
}

export default CommentBar;
