import React, { useState, useEffect } from 'react';
import './PostTripEdit.scss';
import CoverBackground from '../../images/post_edit_background_banner.png';
// import { Link } from 'react-router-dom';
import { TiLocation } from 'react-icons/ti';
import { AiFillTag } from 'react-icons/ai';
import dogIcon from '../../images/travel_dog_paws.svg';
import { MdTitle } from 'react-icons/md';
// import PostSwiper from '../../components/WYSIWYG/Swiper';
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import { RiEditFill } from 'react-icons/ri';
import { MdOutlineClose } from 'react-icons/md';
import PostMap from '../../components/Community/PostComponent/PostMap';
import TripOutlineEdit from '../../components/Community/PostComponent/TripOutlineEdit';
import { IoMdAdd } from 'react-icons/io';
import axios from 'axios';
import { API_URL } from '../../utils/config';

function PostTripEdit() {
  //預覽照片！
  const [selectedFile, setSelectedFile] = useState('');
  const [preview, setPreview] = useState('');
  useEffect(() => {
    if (!selectedFile) {
      setPreview('');
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    // console.log(objectUrl);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const changeHandler = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  // 單獨取行程明細

  const [postTripEdit, setPostTripEdit] = useState([]);

  useEffect(() => {
    const fetchPostTripEdit = async () => {
      // const result = await axios.get(`http://localhost:3007/api/1.0/community/posttripedit`);
      const result = await axios.get(`${API_URL}/community/posttripedit`);
      // 取得後端來的資料
      console.log(result.data);
      setPostTripEdit(result.data);
      // 存回 useState 狀態
    };
    fetchPostTripEdit();
  }, []);
  // console.log(postTripEdit[0]);

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
                <button className="btn">清空</button>
                <button className="btn">儲存</button>
                <button className="btn">發布</button>
              </div>
            </div>
            <div className="post_cover_photo d-flex flex-column justify-content-end align-items-end">
              <img src={preview ? preview : CoverBackground} alt=""></img>
              <label className="cover_photo_upload d-flex flex-column justify-content-center align-items-center">
                <MdPhotoSizeSelectActual className="cover_photo_upload_icon"></MdPhotoSizeSelectActual>
                <div>封面照片上傳</div>
                <input
                  type="file"
                  className="form-control mt-2"
                  accept="image/*"
                  onChange={changeHandler}
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
              maxlength="50"
              value={postTripEdit[0].title}
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
                ></input>
              </div>
              <div className="col-6">
                <label className="mt-3">
                  <AiFillTag className="mb-1 me-1"></AiFillTag>標籤
                  (請輸入＃區分標籤)
                </label>
                <input
                  type="loaction"
                  className="form-control mt-2"
                  value=""
                  placeholder="輸入標籤分類貼文類型"
                ></input>
              </div>
            </div>
            <hr></hr>
            <div className="d-flex align-items-start justify-content-around">
              <div className="article_edit">
                <div className="date_count mt-1">
                  <p>Day 1</p>
                </div>
                <li className="trip_location mt-3" id="locate1">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <div className="trip_location_title">
                      <TiLocation className="mb-1" />{' '}
                      1.5小時｜台北捷運台北火車站
                      <RiEditFill className="ms-1 mb-1 "></RiEditFill>
                    </div>
                    <div className="d-flex trip_locate_edit">
                      <button className="mx-2">
                        插入行程
                        <IoMdAdd className="close_icon mb-1"></IoMdAdd>
                      </button>
                      <button className="mx-2">
                        刪除
                        <MdOutlineClose className="close_icon mb-1"></MdOutlineClose>
                      </button>
                    </div>
                  </div>
                  <textarea
                    type="textarea"
                    className="form-control"
                    rows="4"
                    maxlength="100"
                    placeholder="為旅途留下回憶"
                  ></textarea>

                  <label
                    className="photo_upload d-flex align-items-center
              justify-content-center"
                  >
                    上傳照片
                    <input
                      type="file"
                      accept="images/*"
                      hidden
                      onChange={changeHandler}
                      multiple
                      className="form-control"
                    ></input>
                  </label>
                </li>
                <li className="trip_location mt-3" id="locate2">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <div className="trip_location_title">
                      <TiLocation className="mb-1 " /> 1.5小時｜太魯閣國家公園
                      <RiEditFill className="ms-1 mb-1 "></RiEditFill>
                    </div>
                    <div>
                      刪除
                      <MdOutlineClose className="close_icon mb-1"></MdOutlineClose>
                    </div>
                  </div>
                  <textarea
                    type="textarea"
                    className="form-control"
                    rows="4"
                    maxlength="100"
                    placeholder="為旅途留下回憶"
                  ></textarea>
                  <label
                    className="photo_upload d-flex align-items-center
              justify-content-center"
                  >
                    上傳照片
                    <input
                      type="file"
                      accept="images/*"
                      hidden
                      onChange={changeHandler}
                      multiple
                      className="form-control"
                    ></input>
                  </label>
                </li>

                <li className="trip_location mt-3" id="locate3">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <div className="trip_location_title">
                      <TiLocation className="mb-1 " /> 1.5小時｜煙波大飯店花蓮館
                      <RiEditFill className="ms-1 mb-1 "></RiEditFill>
                    </div>
                    <div>
                      刪除
                      <MdOutlineClose className="close_icon mb-1"></MdOutlineClose>
                    </div>
                  </div>
                  <textarea
                    type="textarea"
                    className="form-control"
                    rows="4"
                    maxlength="100"
                    placeholder="為旅途留下回憶"
                  ></textarea>
                  <label
                    className="photo_upload d-flex align-items-center
              justify-content-center"
                  >
                    上傳照片
                    <input
                      type="file"
                      accept="images/*"
                      hidden
                      onChange={changeHandler}
                      multiple
                      className="form-control"
                    ></input>
                  </label>
                </li>
                <div className="date_count mt-1">
                  <p>Day 2</p>
                </div>
                <li className="trip_location mt-3" id="locate4">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <div className="trip_location_title">
                      <TiLocation className="mb-1 " /> 1.5小時｜花蓮七星潭
                      <RiEditFill className="ms-1 mb-1 "></RiEditFill>
                    </div>
                    <div>
                      刪除
                      <MdOutlineClose className="close_icon mb-1"></MdOutlineClose>
                    </div>
                  </div>
                  <textarea
                    type="textarea"
                    className="form-control"
                    rows="4"
                    maxlength="100"
                    placeholder="為旅途留下回憶"
                  ></textarea>
                  <label
                    className="photo_upload d-flex align-items-center
              justify-content-center"
                  >
                    上傳照片
                    <input
                      type="file"
                      accept="images/*"
                      hidden
                      onChange={changeHandler}
                      multiple
                      className="form-control"
                    ></input>
                  </label>
                </li>

                <li className="trip_location mt-3" id="locate5">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <div className="trip_location_title">
                      <TiLocation className="mb-1 " /> 1.5小時｜依午山
                      <RiEditFill className="ms-1 mb-1 "></RiEditFill>
                    </div>
                    <div>
                      刪除
                      <MdOutlineClose className="close_icon mb-1"></MdOutlineClose>
                    </div>
                  </div>
                  <textarea
                    type="textarea"
                    className="form-control"
                    rows="4"
                    maxlength="100"
                    placeholder="為旅途留下回憶"
                  ></textarea>
                  <label
                    className="photo_upload d-flex align-items-center
              justify-content-center"
                  >
                    上傳照片
                    <input
                      type="file"
                      accept="images/*"
                      hidden
                      onChange={changeHandler}
                      multiple
                      className="form-control"
                    ></input>
                  </label>
                </li>
                <div className="date_count mt-1">
                  <p>Day 3</p>{' '}
                </div>

                <li className="trip_location mt-3" id="locate6">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <div className="trip_location_title">
                      <TiLocation className="mb-1 " /> 1.5小時｜鹽寮龍蝦海鮮餐廳
                      <RiEditFill className="ms-1 mb-1 "></RiEditFill>
                    </div>
                    <div>
                      刪除
                      <MdOutlineClose className="close_icon mb-1"></MdOutlineClose>
                    </div>
                  </div>
                  <textarea
                    type="textarea"
                    className="form-control"
                    rows="4"
                    maxlength="100"
                    placeholder="為旅途留下回憶"
                  ></textarea>
                  <label
                    className="photo_upload d-flex align-items-center
              justify-content-center"
                  >
                    上傳照片
                    <input
                      type="file"
                      accept="images/*"
                      hidden
                      onChange={changeHandler}
                      multiple
                      className="form-control"
                    ></input>
                  </label>
                </li>
                <li className="trip_location mt-3" id="locate7">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <div className="trip_location_title">
                      <TiLocation className="mb-1 " /> 1.5小時｜花蓮南濱公園
                      <RiEditFill className="ms-1 mb-1 "></RiEditFill>
                    </div>
                    <div>
                      刪除
                      <MdOutlineClose className="close_icon mb-1"></MdOutlineClose>
                    </div>
                  </div>
                  <textarea
                    type="textarea"
                    className="form-control"
                    rows="4"
                    maxlength="100"
                    placeholder="為旅途留下回憶"
                  ></textarea>
                  <label
                    className="photo_upload d-flex align-items-center
              justify-content-center"
                  >
                    上傳照片
                    <input
                      type="file"
                      accept="images/*"
                      hidden
                      onChange={changeHandler}
                      multiple
                      className="form-control"
                    ></input>
                  </label>
                </li>
              </div>
              <TripOutlineEdit className=""></TripOutlineEdit>
            </div>
            <div className="d-flex justify-content-end my-2 me-4 post_edit_button ">
              <button className="btn">清除</button>
              <button className="btn" type="submit">
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
