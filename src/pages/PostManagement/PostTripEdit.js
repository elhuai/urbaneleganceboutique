import React, { useState, useEffect } from 'react';
import './PostTripEdit.scss';
import CoverBackground from '../../images/post_edit_background_banner.png';
import mapPhoto from '../../images/screenshop map_photo.png';
import { Link } from 'react-router-dom';
// import { BiLike } from 'react-icons/bi';
import { TiLocation } from 'react-icons/ti';
import { AiFillTag } from 'react-icons/ai';
import dogIcon from '../../images/travel_dog_paws.svg';
import { MdTitle } from 'react-icons/md';
// import PostSwiper from '../../components/WYSIWYG/Swiper';
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import { RiEditFill } from 'react-icons/ri';
import { MdOutlineClose } from 'react-icons/md';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import '../node_modules/reatct-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function PostTripEdit() {
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

  return (
    <>
      <div className="post_trip_edit_bar d-flex flex-column">
        <form className="post_edit_bar d-flex flex-column">
          <div className="d-flex justify-content-between">
            <div className="mt-2 edit_title d-flex align-items-center">
              <img alt="" src={dogIcon} className="dog_paw_icon me-2"></img>
              <p className="mt-3">貼文編輯：行程貼文</p>
            </div>
            <div className="d-flex justify-content-end mt-4 post_edit_button ">
              <button className="btn">清空</button>
              <button className="btn">儲存草稿</button>
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
          <input type="text" className="form-control mt-2" maxlength="50" />
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
              </label>
              <input type="loaction" className="form-control mt-2"></input>
            </div>
          </div>
        </form>

        <hr></hr>
        <form className="d-flex justify-content-between align-items-start row mx-1">
          <ul className="article_edit col-9">
            <div className="date_count mt-1">
              <p>Day 1</p>
            </div>
            <li className="trip_location mt-3" id="locate1">
              <div className="d-flex justify-content-between align-items-center">
                <div className="trip_location_title">
                  <TiLocation className="mb-1 ms-1" />{' '}
                  1.5小時｜台北捷運台北火車站
                  <RiEditFill className="ms-1 mb-1 "></RiEditFill>
                </div>
                <div>刪除此景點<MdOutlineClose className="close_icon mb-1"></MdOutlineClose></div>
             
              </div>
              <textarea
                type="textarea"
                className="form-control"
                rows="4"
                maxlength="100"
                placeholder="為旅途留下回憶"
              ></textarea>
              <label>
                上傳照片
                <input
                  type="file"
                  accept="images/*"
                  hidden
                  onChange={changeHandler}
                  multiple
                  disabled={5}
                ></input>
                {/* <swiper>
                  <img src={preview1 ? preview1 : dogIcon} alt=""></img>
                  <img src={preview1 ? preview1 : dogIcon} alt=""></img>
                  <img src={preview1 ? preview1 : dogIcon} alt=""></img>
                  <img src={preview1 ? preview1 : dogIcon} alt=""></img>
                  <img src={preview1 ? preview1 : dogIcon} alt=""></img>
                  <img src={preview1 ? preview1 : dogIcon} alt=""></img>
                  <img src={preview1 ? preview1 : dogIcon} alt=""></img>
                  <img src={preview1 ? preview1 : dogIcon} alt=""></img>
                  </swiper> */}
              </label>
            </li>
            <li className="trip_location mt-3" id="locate2">
              <p className="trip_location_title">
                <TiLocation className="mb-1 ms-1" />
                3小時｜太魯閣國家公園{' '}
                <RiEditFill className="ms-1 mb-1 "></RiEditFill>
                <MdOutlineClose className="close_icon"></MdOutlineClose>
              </p>
              <textarea
                type="textarea"
                className="form-control"
                rows="4"
                maxlength="100"
                placeholder="為旅途留下回憶"
              ></textarea>
              <label>
                上傳照片
                <input type="file" accept="images/*" hidden></input>
              </label>
            </li>

            <li className="trip_location mt-3" id="locate3">
              <p className="trip_location_title">
                <TiLocation className="mb-1 ms-1" />
                2小時｜ 煙波大飯店花蓮館
                <RiEditFill className="ms-1 mb-1 "></RiEditFill>
                <MdOutlineClose className="close_icon"></MdOutlineClose>
              </p>
              <textarea
                type="textarea"
                className="form-control"
                rows="4"
                maxlength="100"
                placeholder="為旅途留下回憶"
              ></textarea>
              <label>
                上傳照片
                <input type="file" accept="images/*" hidden></input>
              </label>
            </li>
            <div className="date_count mt-1">
              <p>Day 2</p>
            </div>
            <li className="trip_location mt-3" id="locate4">
              <p className="trip_location_title">
                <TiLocation className="mb-1 ms-1" />
                1.5小時｜花蓮七星潭
                <RiEditFill className="ms-1 mb-1 "></RiEditFill>
                <MdOutlineClose className="close_icon"></MdOutlineClose>
              </p>
              <textarea
                type="textarea"
                className="form-control"
                rows="4"
                maxlength="100"
                placeholder="為旅途留下回憶"
              ></textarea>
              <label>
                上傳照片
                <input type="file" accept="images/*" hidden></input>
              </label>
            </li>

            <li className="trip_location mt-3" id="locate5">
              <p className="trip_location_title">
                <TiLocation className="mb-1 ms-1" />
                1.5小時｜依山午
                <RiEditFill className="ms-1 mb-1 "></RiEditFill>
                <MdOutlineClose className="close_icon"></MdOutlineClose>
              </p>
              <textarea
                type="textarea"
                className="form-control"
                rows="4"
                maxlength="100"
                placeholder="為旅途留下回憶"
              ></textarea>
              <label>
                上傳照片
                <input type="file" accept="images/*" hidden></input>
              </label>
            </li>
            <div className="date_count mt-1">
              <p>Day 3</p>{' '}
            </div>

            <li className="trip_location mt-3" id="locate6">
              <p className="trip_location_title">
                <TiLocation className="mb-1 ms-1" />
                2小時｜鹽寮龍蝦海鮮餐廳
                <RiEditFill className="ms-1 mb-1 "></RiEditFill>
                <MdOutlineClose className="close_icon"></MdOutlineClose>
              </p>
              <textarea
                type="textarea"
                className="form-control"
                rows="4"
                maxlength="100"
                placeholder="為旅途留下回憶"
              ></textarea>
              <label>
                上傳照片
                <input type="file" accept="images/*" hidden></input>
              </label>
            </li>
            <li className="trip_location mt-3" id="locate7">
              <p className="trip_location_title">
                <TiLocation className="mb-1 ms-1" />
                2小時｜花蓮南濱公園
                <RiEditFill className="ms-1 mb-1 "></RiEditFill>
                <MdOutlineClose className="close_icon"></MdOutlineClose>
              </p>
              <textarea
                type="textarea"
                className="form-control"
                rows="4"
                maxlength="100"
                placeholder="為旅途留下回憶"
              ></textarea>
              <label>
                上傳照片
                <input type="file" accept="images/*" hidden></input>
              </label>
            </li>
          </ul>
          <div className="trip_outline">
            <div>
              <p className="post_date_count">Day 1</p>
              <a href="#locate1">
                <p>｜台北捷運台北火車站</p>
              </a>
              <a href="#locate2">
                <p>｜太魯閣國家公園</p>
              </a>
              <a href="#locate3">
                <p>｜煙波大飯店花蓮館</p>
              </a>
            </div>
            <div>
              <p className="post_date_count">Day 2</p>
              <a href="#locate4">
                <p>｜花蓮七星潭</p>
              </a>
              <a href="#locate5">
                <p>｜依山午</p>
              </a>
            </div>
            <div>
              <p className="post_date_count">Day 3</p>
              <a href="#locate6">
                <p>｜鹽寮龍蝦海鮮餐廳</p>
              </a>
              <a href="#locate7">
                <p>｜花蓮南濱公園</p>
              </a>
            </div>
          </div>
        </form>
        <div className="post_map">
          <p>行程地圖</p>
          <div className="map_photo">
            <img alt="" src={mapPhoto} />
          </div>
        </div>
        <div className="d-flex justify-content-end my-3  post_edit_button ">
          <button className="btn">清除</button>
          <button className="btn">送出</button>
        </div>
      </div>
    </>
  );
}

export default PostTripEdit;
