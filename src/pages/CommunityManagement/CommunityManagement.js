import FollowerPhoto from '../../images/logo_dog_body1.svg';
import React from 'react';
import './CommunityManagement.scss';
import { Tabs, Tab } from 'react-bootstrap';
import dogIcon from '../../images/travel_dog_paws.svg';
import { Link } from 'react-router-dom';
import { RiEditFill } from 'react-icons/ri';
// import ConfirmBox from './ConfirmBox';
import { MdOutlineClose } from 'react-icons/md';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';

function CommunityManagement() {
  //roll 全部貼文資料
  const [myPost, setMyPost] = useState([]);

  // 我的貼文ＩＤ點擊編輯查看內容跳轉
  const [myPostID, setMyPostID] = useState('');

  // 點擊按鈕狀態改變
  const [showCFBox, setShowCFBox] = useState(0);
  const [ifDelete, setIfDelete] = useState(false);

  //匯入我的行程
  const [tripImport, setTripImport] = useState([]);
  // 回傳新增貼文預設欄位
  const [tripID, setTripID] = useState('');

  useEffect(() => {
    const fetchMyPost = async () => {
      const result = await axios.get(`${API_URL}/community`, {
        withCredentials: true,
      });
      // 取得後端來的資料
      console.log(result.data);
      setMyPost(result.data);
      // 存回 useState 狀態
    };
    fetchMyPost();
  }, []);

  const ConfirmHandle = (e) => {
    setShowCFBox(e);
    // console.log(showCFBox);
  };

  const handleEdit = (e) => {
    console.log('click', e.target.value);
  };

  return (
    <>
      <div className="d-flex flex-fill">
        <div className="flex-fill position-relative">
          <div className="post_new_button mt-5">
            <button className="post_new" onClick={() => ConfirmHandle(2)}>
              <RiEditFill
                color="#FFC715"
                className="edit-icon me-2"
              ></RiEditFill>
              新增貼文
            </button>
          </div>
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
                  {myPost.map((data, index) => {
                    return (
                      <>
                        <li
                          key={data.index}
                          className="d-flex justify-content-between align-items-center px-5"
                        >
                          <div className="post_description d-flex flex-column">
                            <div className="post_title">
                              <p className="">{data.title}</p>
                            </div>
                            <div className="post_date">
                              <p>發布日期：{data.create_time}</p>
                            </div>
                            <div className="post_edit_button d-flex">
                              <Link
                                to={
                                  data.post_type_id === 2
                                    ? `/postTripEdit?postID=${data.id}`
                                    : `/postWYSIWYGedit?postID=${data.id}`
                                }
                              >
                                <button
                                  value={data.id}
                                  className="btn post_edit my-1"
                                  onClick={(e) => {
                                    setMyPostID(e.target.value);
                                  }}
                                >
                                  編輯
                                </button>
                              </Link>
                              <button
                                key={data.id}
                                className="btn post_delete my-1"
                                onClick={(e) => {
                                  ConfirmHandle(1);
                                  setMyPostID(data.id);
                                }}
                              >
                                刪除
                              </button>
                              <Link
                                to={
                                  data.post_type_id === 2
                                    ? `/postTrip?postID=${data.id}`
                                    : `/postWYSIWYG?postID=${data.id}`
                                }
                              >
                                <button
                                  className="btn check_post my-1"
                                  onClick={() => {
                                    setMyPostID(data.id);
                                  }}
                                >
                                  {data.status === 1 ? '查看內容' : '預覽'}
                                </button>
                              </Link>
                            </div>
                          </div>
                          <div className="post_status">草稿{data.status}</div>
                        </li>
                      </>
                    );
                  })}
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
                            愛罐罐 愛睡覺 愛旅遊愛罐罐 愛睡覺 愛 愛睡覺
                            愛旅遊愛罐罐 愛睡覺 愛 愛睡覺 愛旅遊愛罐罐 愛睡覺
                            愛旅遊愛罐罐 愛睡覺 愛旅遊愛罐罐 愛睡覺 愛旅遊愛罐罐
                            愛睡覺 愛旅遊愛罐罐 愛睡覺 愛旅遊
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="follower_button d-flex flex-column">
                      <button
                        className="btn remove_follow my-1 "
                        onClick={() => ConfirmHandle(3)}
                      >
                        取消追蹤
                      </button>
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
                          <p className="follower_user_name">
                            阿尼基愛旅遊111!!!!
                          </p>
                        </div>
                        <div className="follower_description_text">
                          <p>愛罐罐 愛睡覺 愛旅遊</p>
                        </div>
                      </div>
                    </div>
                    <div className="follower_button d-flex flex-column">
                      <button
                        className="btn remove_follow my-1 "
                        onClick={() => ConfirmHandle(3)}
                      >
                        取消追蹤
                      </button>
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
                      <button
                        className="btn remove_follow my-1 "
                        onClick={() => ConfirmHandle(3)}
                      >
                        取消追蹤
                      </button>
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
                      <button
                        className="btn remove_follow my-1 "
                        onClick={() => ConfirmHandle(3)}
                      >
                        取消追蹤
                      </button>
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
                      <button
                        className="btn remove_follow my-1 "
                        onClick={() => ConfirmHandle(3)}
                      >
                        取消追蹤
                      </button>
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
                      <button
                        className="btn remove_follow my-1 "
                        onClick={() => ConfirmHandle(3)}
                      >
                        解除追蹤
                      </button>
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
                  <p className="my-2 tab_text_size">按讚貼文列表</p>
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
                        <button
                          className="btn remove_follow my-1 "
                          onClick={() => ConfirmHandle(3)}
                        >
                          取消按讚
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
                        <button
                          className="btn remove_follow my-1 "
                          onClick={() => ConfirmHandle(3)}
                        >
                          取消按讚
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

        <div
          className={
            showCFBox === 2
              ? 'confirmBox_background d-flex justify-content-center d-block'
              : 'd-none'
          }
          // onClick={() => {
          //   ConfirmHandle(0);
          // }}
        >
          <div
            className={
              showCFBox === 2
                ? 'create_post_confirm_box d-flex flex-column align-items-center justify-content-center d-block'
                : 'd-none'
            }
          >
            <p>
              請選擇貼文形式
              <MdOutlineClose
                className="close_icon"
                onClick={() => {
                  ConfirmHandle(0);
                }}
              ></MdOutlineClose>
            </p>
            <Link to="/PostWYSIWYGEdit">
              <button className="confirm_button">一般貼文</button>
            </Link>
            <button
              className="confirm_button"
              onClick={() => {
                ConfirmHandle(4);
              }}
            >
              行程貼文<br></br>（需匯入行程）
            </button>
          </div>
        </div>
        <div
          className={
            showCFBox === 1
              ? 'confirmBox_background d-flex justify-content-center d-block'
              : 'd-none'
          }
          // onClick={(e) => ConfirmHandle(0)}
        >
          <div
            className={
              showCFBox === 1
                ? 'delete_confirm_box d-flex flex-column align-items-center justify-content-center d-block'
                : 'd-none'
            }
          >
            <p>
              是否確認刪除？
              <MdOutlineClose
                className="close_icon"
                onClick={() => {
                  ConfirmHandle(0);
                }}
              ></MdOutlineClose>
            </p>
            <Link to="/">
              <button className="confirm_button">確認</button>
            </Link>
          </div>
        </div>
        <div
          className={
            showCFBox === 3
              ? 'confirmBox_background d-flex justify-content-center d-block'
              : 'd-none'
          }
          // onClick={(e) => {
          //   ConfirmHandle(0);
          // }}
        >
          <div
            className={
              showCFBox === 3
                ? 'delete_follow_box d-flex flex-column align-items-center justify-content-center d-block'
                : 'd-none'
            }
          >
            <p>
              是否確認取消追蹤/按讚？
              <MdOutlineClose
                className="close_icon"
                onClick={() => {
                  ConfirmHandle(0);
                }}
              ></MdOutlineClose>
            </p>
            <Link to="/">
              <button className="confirm_button">確認</button>
            </Link>
          </div>
        </div>
        {/* TODO: 跑不出來！！ 事件聆聽功能 */}
        <div
          className={
            showCFBox === 4
              ? 'confirmBox_background d-flex justify-content-center d-block'
              : 'd-none'
          }
          // onClick={(e) => {
          //   ConfirmHandle(0);
          // }}
        >
          <div className="trip-sample ">
            <div className="d-block d-flex flex-column align-items-center my-2 container">
              <p className="mb-2">
                請下拉選擇{' '}
                <MdOutlineClose
                  className="close_icon"
                  onClick={() => {
                    ConfirmHandle(0);
                  }}
                ></MdOutlineClose>
              </p>
              <select
                className="form-control mb-2"
                placeholder="請選擇我的行程"
              >
                <option>花蓮自由行</option>
                <option>好想去台南</option>
                <option>澎湖好像也很不錯</option>
              </select>
              <Link to="/">
                <button className="confirm_button">確認</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommunityManagement;
