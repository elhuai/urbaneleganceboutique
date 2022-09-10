import FollowerPhoto from '../../images/logo_dog_body1.svg';
import React from 'react';
import './CommunityManagement.scss';
import { Tabs, Tab } from 'react-bootstrap';
import dogIcon from '../../images/travel_dog_paws.svg';

function CommunityManagement() {
  return (
    <div className="">
      <Tabs
        defaultActiveKey="article_list"
        id="uncontrolled-tab-example"
        className="communityManagementTab"
      >
        <Tab
          eventKey="article_list"
          title={
            <div className="d-flex">
              <img className="tab_claw me-2 " src={dogIcon} alt="" />
              <p className="my-2 tab_text_size">我的貼文</p>
            </div>
          }
        >
          <div className="post_list">
            <ul className="post_detail ">
              <div className="d-flex justify-content-end post_new_button">
                <button className="btn post_new ">新增貼文</button>
              </div>
              <li className="d-flex justify-content-between align-items-center px-5">
                <div className="post_description d-flex flex-column">
                  <div className="post_title">
                    <p className="">花蓮三日遊（草稿）</p>
                  </div>
                  <div className="post_date">
                    <p>發布日期：2022/09/02</p>
                  </div>
                  <div className="post_edit_button d-flex">
                    <button className="btn post_edit my-1 ">編輯</button>
                    <button className="btn post_delete my-1">刪除</button>
                    <button className="btn check_post my-1">預覽</button>
                  </div>
                </div>
                <div className="post_status">草稿</div>
              </li>
              <li className="d-flex justify-content-between align-items-center px-5">
                <div className="post_description d-flex flex-column">
                  <div className="post_title">
                    <p className="">花蓮五日遊YOYOYOYOYOYOYOY</p>
                  </div>
                  <div className="post_date">
                    <p>發布日期：2022/09/02</p>
                  </div>
                  <div className="post_edit_button d-flex">
                    <button className="btn post_edit my-1 ">編輯</button>
                    <button className="btn post_delete my-1">刪除</button>
                    <button className="btn check_post my-1">查看貼文</button>
                  </div>
                </div>
                <div className="post_status">發布中</div>
              </li>
            </ul>
          </div>
        </Tab>
        <Tab
          eventKey="follower_list"
          title={
            <div className="d-flex">
              <img className=" tab_claw me-2" src={dogIcon} alt="" />
              <p className="my-2 tab_text_size">追蹤者列表</p>
            </div>
          }
        >
          <div className="follower_list">
            <ul className="follower_detail">
              <li className="d-flex justify-content-between align-items-center px-5">
                <div className="follower_description d-flex">
                  <div className="follower_photo ">
                    <img
                      src="https://picsum.photos/200/300?random11"
                      alt=""
                    ></img>
                  </div>
                  <div className="ps-3 m-1">
                    <div>
                      <p className="follower_user_name">阿尼基愛旅遊</p>
                    </div>
                    <div className="follower_description_text">
                      <p>
                        愛罐罐 愛睡覺 愛旅遊愛罐罐 愛睡覺 愛 愛睡覺 愛旅遊愛罐罐
                        愛睡覺 愛 愛睡覺 愛旅遊愛罐罐 愛睡覺 愛旅遊愛罐罐 愛睡覺
                        愛旅遊愛罐罐 愛睡覺 愛旅遊愛罐罐 愛睡覺 愛旅遊愛罐罐
                        愛睡覺 愛旅遊
                      </p>
                    </div>
                  </div>
                </div>
                <div className="follower_button d-flex flex-column">
                  <button className="btn remove_follow my-1 ">解除追蹤</button>
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
                  <div className="ps-3 m-1">
                    <div>
                      <p className="follower_user_name">阿尼基愛旅遊111!!!!</p>
                    </div>
                    <div className="follower_description_text">
                      <p>愛罐罐 愛睡覺 愛旅遊</p>
                    </div>
                  </div>
                </div>
                <div className="follower_button d-flex flex-column">
                  <button className="btn remove_follow my-1 ">解除追蹤</button>
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
                  <div className="ps-3 m-1">
                    <div>
                      <p className="follower_user_name">阿尼基愛旅遊</p>
                    </div>
                    <div className="follower_description_text">
                      <p>愛罐罐 愛睡覺 愛旅遊</p>
                    </div>
                  </div>
                </div>
                <div className="follower_button d-flex flex-column">
                  <button className="btn remove_follow my-1 ">解除追蹤</button>
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
                  <div className="ps-3 m-1">
                    <div>
                      <p className="follower_user_name">阿尼基愛旅遊</p>
                    </div>
                    <div className="follower_description_text">
                      <p>愛罐罐 愛睡覺 愛旅遊</p>
                    </div>
                  </div>
                </div>
                <div className="follower_button d-flex flex-column">
                  <button className="btn remove_follow my-1 ">解除追蹤</button>
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
                  <div className="ps-3 m-1">
                    <div>
                      <p className="follower_user_name">阿尼基愛旅遊</p>
                    </div>
                    <div className="follower_description_text">
                      <p>愛罐罐 愛睡覺 愛旅遊</p>
                    </div>
                  </div>
                </div>
                <div className="follower_button d-flex flex-column">
                  <button className="btn remove_follow my-1 ">解除追蹤</button>
                  <button className="btn follower_checked_detail my-1">
                    查看內容
                  </button>
                </div>
              </li>{' '}
              <li className="d-flex justify-content-between align-items-center px-5">
                <div className="follower_description d-flex">
                  <div className="follower_photo ">
                    <img src={FollowerPhoto} alt=""></img>
                  </div>
                  <div className="ps-3 m-1">
                    <div>
                      <p className="follower_user_name">阿尼基愛旅遊</p>
                    </div>
                    <div className="follower_description_text">
                      <p>愛罐罐 愛睡覺 愛旅遊</p>
                    </div>
                  </div>
                </div>
                <div className="follower_button d-flex flex-column">
                  <button className="btn remove_follow my-1 ">解除追蹤</button>
                  <button className="btn follower_checked_detail my-1">
                    查看內容
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </Tab>
        <Tab
          eventKey="follow_post_list"
          title={
            <div className="d-flex">
              <img className=" tab_claw me-2" src={dogIcon} alt="" />
              <p className="my-2 tab_text_size">追蹤貼文列表</p>
            </div>
          }
        >
          <div className="follow_post_list">
            <ul className="follow_post_detail">
              <li className="d-flex flex-column ">
                <div className="d-flex  justify-content-between ">
                  <div className="d-flex flex-column">
                    <div className="post_title ps-4 py-3">
                      <p className="">花蓮五日遊YOYOYOYOYOYOYOY必逛景點</p>
                    </div>
                  </div>
                  <div className="post_edit_button d-flex ps-4 py-2 ">
                    <button className="btn remove_follow my-1 ">
                      解除追蹤
                    </button>
                    <button className="btn follower_checked_detail my-1">
                      查看內容
                    </button>
                  </div>
                </div>
              </li>
              <li className="d-flex flex-column">
                <div className="d-flex  justify-content-between">
                  <div className="d-flex flex-column">
                    <div className="post_title ps-4 py-3">
                      <p className="">花蓮五日遊YOYOYOYOYOYOYOY必逛景點</p>
                    </div>
                  </div>
                  <div className="post_edit_button d-flex ps-4 py-2 ">
                    <button className="btn remove_follow my-1 ">
                      解除追蹤
                    </button>
                    <button className="btn follower_checked_detail my-1">
                      查看內容
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default CommunityManagement;
