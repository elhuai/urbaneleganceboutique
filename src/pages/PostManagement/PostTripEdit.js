import React, { useState, useEffect } from 'react';
import './PostTripEdit.scss';
import CoverBackground from '../../images/post_edit_background_banner.png';
// import { Link } from 'react-router-dom';
import { TiLocation } from 'react-icons/ti';
import { AiFillTag, AiOutlineConsoleSql } from 'react-icons/ai';
import dogIcon from '../../images/travel_dog_paws.svg';
import { MdTitle } from 'react-icons/md';
// import PostSwiper from '../../components/WYSIWYG/Swiper';
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import { MdOutlineClose } from 'react-icons/md';
import PostMap from '../../components/Community/PostComponent/PostMap';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import TripOutline from '../../components/Community/PostComponent/TripOutline';
import PhotoReviewSwiper from '../../components/WYSIWYG/PhotoView';
import { useParams, useLocation } from 'react-router-dom';
import { handleSuccess } from '../../utils/handler/handleStatusCard';

// 驗證登入
import { useUserInfo } from '../../hooks/useUserInfo';

// const { user, setUser } = useUserInfo();

function PostTripEdit() {
  //原始資料
  const [postTripEdit, setPostTripEdit] = useState([]);
  // 單一頁面ＩＤ

  // 景點資料存取狀態：
  // 景點ＩＤ
  const [locateID, setLocateID] = useState('');
  // 行程ＩＤ
  const [travelID, setTravelID] = useState('');
  // 貼文標題
  const [tripPostTitle, setTripPostTitle] = useState('');
  // 貼文封面照片
  const [tripPostCover, setTripPostCover] = useState('');
  // 行程地點
  const [tripPostLocMark, setTripPostLocMark] = useState('');
  // 行程標籤
  const [tripPostTags, setTripPostTags] = useState('');
  // 景點內文
  const [tripPostLocContext, setTripPostLocContext] = useState([]);
  // 景點照片
  const [tripPostLocPhoto, setTripPostLocPhoto] = useState([]);
  // 景點停留時間
  const [tripPostLocTime, setTripPostLocTime] = useState('');

  //預覽照片 (封面照片)
  const [selectedCoverFile, setSelectedCoverFile] = useState('');
  const [preview, setPreview] = useState('');

  // 貼文ＩＤ從網址字串抓
  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const postID = urlSearchParams.get('postID');

  //預計打回後端資料庫的物件 (新增)
  // 打包整筆資料可編輯更新
  const updateObject = {
    travel_id: travelID,
    title: tripPostTitle,
    coordinate: tripPostLocMark,
    tags: tripPostTags,
  };

  //拆景點明細更新
  const locateDetail = {
    id: locateID,
    locate_context: tripPostLocContext,
    locate_duration: tripPostLocTime,
  };

  //拆分圖片更新 TODO:
  const updataPhoto = {
    main_photo: tripPostCover,
    locate_photo: tripPostLocPhoto, //how to retreive the data
  };

  // 單獨取行程明細
  useEffect(() => {
    const fetchPostTripEdit = async () => {
      try {
        const result = await axios.get(
          `${API_URL}/community/tripPostDetail?postID=${postID}`
        );
        // 取得後端來的資料
        console.log('result,data', result.data);
        if (result) {
          let daysFilter = [];
          // 分組按照日期分組
          let locateIDData = [];
          let contextData = [];
          let photoData = [];
          let timeData = [];

          for (const [index, item] of result.data.entries()) {
            if (daysFilter.length === 0) {
              daysFilter.push([item]);
              locateIDData.push([item.id]);
              contextData.push([item.locate_context]);
              photoData.push([item.locate_photo]);
              timeData.push([item.locate_duration]);
            } else if (
              daysFilter[daysFilter.length - 1][0].days !== item.days
            ) {
              daysFilter.push([item]);
              locateIDData.push([item.id]);
              contextData.push([item.locate_context]);
              photoData.push([item.locate_photo]);
              timeData.push([item.locate_duration]);
            } else {
              daysFilter[daysFilter.length - 1].push(item);
              locateIDData[daysFilter.length - 1].push(item.id);
              contextData[daysFilter.length - 1].push(item.locate_context);
              photoData[daysFilter.length - 1].push(item.locate_photo);
              timeData[daysFilter.length - 1].push(item.locate_duration);
            }
          }
          // console.log('dayfileter', daysFilter);
          setPostTripEdit(daysFilter);

          setLocateID(locateIDData);
          setTripPostLocContext(contextData);
          setTripPostLocPhoto(photoData);
          setTripPostLocTime(timeData);
          setTravelID(result.data[0].travel_id);
          setTripPostTitle(result.data[0].post_title);
          setTripPostCover(result.data[0].main_photo);
          setTripPostLocMark(result.data[0].coordinate);
          setTripPostTags(result.data[0].tags);
        }
      } catch (err) {
        console.log('setPostTripEdit ', err);
      }
      // 存回 useState 狀態
    };
    fetchPostTripEdit();
  }, []);
  //TODO: 問題：已經有按照分組整理好 但在map的時候只有index 2筆資料 但實際應該是要有3筆
  // postTripEdit.map((data, qe) => {
  //   console.log('map', data, qe);
  //   return <></>;
  // });

  //回傳資料庫
  //儲存
  const handleSubmit = async (e) => {
    e.preventDefault();
    let responseData = await axios.post(
      `${API_URL}/community/tripPostDetailEdit`,
      { updateObject, locateDetail }
    );
    console.log('回傳編輯資料', responseData);
    handleSuccess('貼文儲存成功', '/admin');
  };
  //清空
  const resetForm = () => {
    setTripPostLocContext('');
    setTripPostLocPhoto('');
    setTripPostLocTime('');
    setTripPostTitle('');
    setTripPostLocMark('');
    setTripPostTags('');
  };

  //預覽照片 (封面照片)
  useEffect(() => {
    if (!selectedCoverFile) {
      setPreview('');
      return;
    }
    const objectUrl = URL.createObjectURL(selectedCoverFile);
    console.log(objectUrl);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedCoverFile]);

  const changeCoverHandler = (e) => {
    const file = e.target.files[0];

    if (file) {
      setTripPostCover(e.target.value);
      setSelectedCoverFile(file);
    } else {
      setTripPostCover(e.target.value);
      setSelectedCoverFile(null);
    }
  };
  console.log('整理好的資料', postTripEdit);
  // const [selectedPhotoFile, setSelectedPhotoFile] = useState('');
  // const changePhotoHandler = (e) => {
  //   const files = e.target.files;
  //   console.log(files);
  //   const photoGroup = [];
  //   for (let i = 0; i < files.length; i++) {
  //     // console.log(files[i]['name']);
  //     photoGroup.push(files[i]['name']);
  //   }
  //   console.log('Newphotogroup', photoGroup);
  //   let a = photoGroup.toString();
  //   console.log(a);

  //TODO:轉換成字串存放在對應陣列

  // if (files) {
  //   // setTripPostLocPhoto(photoGroup);
  //   setSelectedPhotoFile(files);
  // } else {
  //   // setTripPostLocPhoto(photoGroup);
  //   setSelectedPhotoFile(null);
  // }

  // reset the form input value

  return (
    <>
      {postTripEdit.length === 0 ? (
        '沒有資料' //* 是否做loading 頁面
      ) : (
        <div className="post_trip_edit_bar d-flex flex-column">
          <form className="post_edit_bar d-flex flex-column">
            <div className="d-flex justify-content-between">
              <div className="mt-2 edit_title d-flex align-items-center">
                <img alt="" src={dogIcon} className="dog_paw_icon me-2"></img>
                <p className="mt-3">貼文編輯：行程貼文</p>
              </div>
              <div className="d-flex justify-content-end mt-4 post_edit_button ">
                <button className="btn" onClick={resetForm}>
                  清空
                </button>
                <button className="btn" onClick={handleSubmit}>
                  儲存
                </button>
                <button className="btn">發布</button>
              </div>
            </div>
            <div className="post_cover_photo d-flex flex-column justify-content-end align-items-end">
              <img
                src={preview ? preview : postTripEdit[0][0].main_photo}
                alt=""
              ></img>
              <label className="cover_photo_upload d-flex flex-column justify-content-center align-items-center">
                <MdPhotoSizeSelectActual className="cover_photo_upload_icon"></MdPhotoSizeSelectActual>
                <div>封面照片上傳</div>
                <input
                  type="file"
                  className="form-control mt-2"
                  accept="image/*"
                  onChange={changeCoverHandler}
                  hidden
                />
              </label>
            </div>
            <label className="mt-2">
              <MdTitle className="mb-1 me-1"></MdTitle>貼文標題
            </label>
            <input
              type="text"
              className="form-control mt-2"
              maxLength="50"
              defaultValue={postTripEdit[0][0].post_title}
              //TODO:預設值直接設tripPostTitle
              onChange={(e) => {
                setTripPostTitle(e.target.value);
              }}
            />
            <div className="d-flex row">
              <div className="col-6">
                <label className="mt-3">
                  <TiLocation className="mb-1 me-1"></TiLocation>地點
                </label>
                <input
                  type="loaction"
                  className="form-control mt-2"
                  placeholder="請輸入城市地區"
                  defaultValue={tripPostLocMark}
                  onChange={(e) => {
                    setTripPostLocMark(e.target.value);
                  }}
                ></input>
              </div>
              <div className="col-6">
                <label className="mt-3">
                  <AiFillTag className="mb-1 me-1"></AiFillTag>標籤
                  (請輸入＃區分標籤)
                </label>
                <input
                  name="id"
                  type="location"
                  className="form-control mt-2"
                  placeholder="輸入標籤分類貼文類型"
                  defaultValue={tripPostTags}
                  onChange={(e) => {
                    setTripPostTags(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <hr></hr>
            <div className="d-flex align-items-start justify-content-around">
              <div className="article_edit">
                {postTripEdit.map((data, index) => {
                  {
                    /* console.log('該天陣列', data);
                  console.log('該天為第幾天', data[index].days);
                  console.log('索引', index); */
                  }

                  return (
                    <>
                      <div>
                        <div className="date_count mt-1">
                          <p>Day {data[index].days} </p>
                        </div>
                        {data.map((data, i) => {
                          return (
                            <>
                              <li
                                className="trip_location mt-3"
                                id={`day${data.days}locate${i}`}
                                key={data.i}
                              >
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="trip_location_title d-flex align-items-center">
                                    <div className="d-flex my-1">
                                      <div className="post_location_name mb-1 mx-1">
                                        <TiLocation className="mb-1 me-2"></TiLocation>{' '}
                                        {data.locate_name}
                                      </div>
                                      <input
                                        type="text"
                                        className="post_location_duration mx-1 mt-1 small"
                                        defaultValue={data.locate_duration}
                                        onChange={(e) => {
                                          setTripPostLocTime((time) => {
                                            let newTime = JSON.parse(
                                              JSON.stringify([...time])
                                            );
                                            newTime[index][i] = e.target.value;
                                            return newTime;
                                          });
                                        }}
                                        //TODO:樣式太醜
                                      ></input>
                                    </div>
                                  </div>
                                </div>
                                <textarea
                                  type="textarea"
                                  className="form-control"
                                  rows="4"
                                  maxLength="100"
                                  placeholder="為旅途留下回憶"
                                  defaultValue={data.locate_context}
                                  onChange={(e) => {
                                    setTripPostLocContext((context) => {
                                      let newState = JSON.parse(
                                        JSON.stringify([...context])
                                      );
                                      newState[index][i] = e.target.value;
                                      return newState;
                                    });
                                  }}
                                ></textarea>
                                {/* <label className="photo_upload d-flex align-items-center justify-content-center">
                                  上傳照片
                                  <input
                                    type="file"
                                    accept="images/*"
                                    hidden
                                    multiple
                                    className="form-control"
                                    onChange={changePhotoHandler}
                                    //TODO:如何存取？
                                    // onChange={(e) => {
                                    //   setTripPostLocPhoto((photoGroup) => {
                                    //     let newPic = JSON.stringify([
                                    //       ...photoGroup,
                                    //     ]);
                                    //     newPic[index][i] = e.target.value;
                                    //     console.log(newPic);
                                    //     return newPic;
                                    //   });
                                    // }}
                                    // defaultValue={data.locate_photo}
                                  ></input>
                                </label> */}
                                <PhotoReviewSwiper
                                  list={data}
                                ></PhotoReviewSwiper>
                              </li>
                            </>
                          );
                        })}
                      </div>
                    </>
                  );
                })}
              </div>
              <TripOutline post={postTripEdit}></TripOutline>
            </div>
            <div className="d-flex justify-content-end my-2 me-4 post_edit_button ">
              <button className="btn" onClick={resetForm} value="清除">
                {/* TODO:無法更新到input的value */}
                清空
              </button>
              <button className="btn" onClick={handleSubmit}>
                儲存
              </button>
            </div>
            <PostMap></PostMap>
          </form>
        </div>
      )}
    </>
  );
}

export default PostTripEdit;
