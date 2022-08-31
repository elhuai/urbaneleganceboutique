import "./FollowerManagement.css";

import FollowerPhoto from "../../../images/logo_dog_body1.svg";
import React from "react";

function FollowerManagement() {
  return (
    <div className="follower_list">
      <div className="follower_title">
        <p>追蹤者管理</p>
      </div>
      <ul className="follower_detail">
        <li className="d-flex justify-content-between align-items-center px-5">
          <div className="follower_description d-flex">
            <div className="follower_photo ">
              <img src={FollowerPhoto} alt=""></img>
            </div>
            <div className="ps-5 m-1">
              <div>
                <p className="follower_user_name">阿尼基愛旅遊</p>
              </div>
              <div className="follower_description_text">
                <p>愛罐罐 愛睡覺 愛旅遊</p>
              </div>
            </div>
          </div>
          <div className="follower_button d-flex flex-column">
            <button className="btn remove_follow my-1 borderd">解除追蹤</button>
            <button className="btn follower_checked_detail my-1">
              查看內容
            </button>
          </div>
        </li>
        <li className="d-flex justify-content-between align-items-center px-5">
          <div className="follower_description d-flex">
            <div className="follower_photo ">
              <img src={FollowerPhoto} alt=""></img>
            </div>
            <div className="ps-5 m-1">
              <div>
                <p className="follower_user_name">阿尼基愛旅遊</p>
              </div>
              <div className="follower_description_text">
                <p>愛罐罐 愛睡覺 愛旅遊</p>
              </div>
            </div>
          </div>
          <div className="follower_button d-flex flex-column">
            <button className="btn remove_follow my-1 borderd">解除追蹤</button>
            <button className="btn follower_checked_detail my-1">
              查看內容
            </button>
          </div>
        </li>
        <li className="d-flex justify-content-between align-items-center px-5">
          <div className="follower_description d-flex">
            <div className="follower_photo ">
              <img src={FollowerPhoto} alt=""></img>
            </div>
            <div className="ps-5 m-1">
              <div>
                <p className="follower_user_name">阿尼基愛旅遊</p>
              </div>
              <div className="follower_description_text">
                <p>愛罐罐 愛睡覺 愛旅遊</p>
              </div>
            </div>
          </div>
          <div className="follower_button d-flex flex-column">
            <button className="btn remove_follow my-1 borderd">解除追蹤</button>
            <button className="btn follower_checked_detail my-1">
              查看內容
            </button>
          </div>
        </li>
        <li className="d-flex justify-content-between align-items-center px-5">
          <div className="follower_description d-flex">
            <div className="follower_photo ">
              <img src={FollowerPhoto} alt=""></img>
            </div>
            <div className="ps-5 m-1">
              <div>
                <p className="follower_user_name">阿尼基愛旅遊</p>
              </div>
              <div className="follower_description_text">
                <p>愛罐罐 愛睡覺 愛旅遊</p>
              </div>
            </div>
          </div>
          <div className="follower_button d-flex flex-column">
            <button className="btn remove_follow my-1 borderd">解除追蹤</button>
            <button className="btn follower_checked_detail my-1">
              查看內容
            </button>
          </div>
        </li>
        <li className="d-flex justify-content-between align-items-center px-5">
          <div className="follower_description d-flex">
            <div className="follower_photo ">
              <img src={FollowerPhoto} alt=""></img>
            </div>
            <div className="ps-5 m-1">
              <div>
                <p className="follower_user_name">阿尼基愛旅遊</p>
              </div>
              <div className="follower_description_text">
                <p>愛罐罐 愛睡覺 愛旅遊</p>
              </div>
            </div>
          </div>
          <div className="follower_button d-flex flex-column">
            <button className="btn remove_follow my-1 borderd">解除追蹤</button>
            <button className="btn follower_checked_detail my-1">
              查看內容
            </button>
          </div>
        </li> <li className="d-flex justify-content-between align-items-center px-5">
          <div className="follower_description d-flex">
            <div className="follower_photo ">
              <img src={FollowerPhoto} alt=""></img>
            </div>
            <div className="ps-5 m-1">
              <div>
                <p className="follower_user_name">阿尼基愛旅遊</p>
              </div>
              <div className="follower_description_text">
                <p>愛罐罐 愛睡覺 愛旅遊</p>
              </div>
            </div>
          </div>
          <div className="follower_button d-flex flex-column">
            <button className="btn remove_follow my-1 borderd">解除追蹤</button>
            <button className="btn follower_checked_detail my-1">
              查看內容
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default FollowerManagement;
