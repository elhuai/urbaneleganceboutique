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

  //上傳多張照片 並預覽 並可檢視 並swiper
  // const [selectedFile1, setSelectedFile1] = useState(null);
  // const [preview1, setPreview1] = useState([]);
  // useEffect(() => {
  //   if (!selectedFile1) {
  //     setPreview1('');
  //     return;
  //   }

  //   const objectUrl1 = URL.createObjectURL(selectedFile1);
  //   // console.log(objectUrl1);
  //   setPreview1(objectUrl1);

  //   return () => URL.revokeObjectURL(objectUrl1);
  // }, [selectedFile1]);

  // const changeHandler1 = (e) => {
  //   const file = e.target.files[0];

  //   if (file) {
  //     setSelectedFile1([...file, URL.createObjectURL(e.target.files[0])]);
  //   } else {
  //     setSelectedFile1(null);
  //   }
  // };

  // let data = [{ id: 1, description: '<p>1234</p>' }];
  // data = JSON.parse(JSON.stringify(data));
  // console.log(data);

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
        <div className="d-flex justify-content-between row mx-1">
          <form className="article_edit col-9">
            <div className="date_count mt-1">
              <p>Day 1</p>
              <div className="trip_location mt-3">
                <p className="trip_location_title">
                  <TiLocation className="mb-1 ms-1" />{' '}
                  1.5小時｜台北捷運台北火車站
                  <Link to="/">
                    <RiEditFill className="ms-1 mb-1 "></RiEditFill>
                  </Link>
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
              </div>
              <div className="trip_location mt-3">
                <p className="trip_location_title">
                  <TiLocation className="mb-1 ms-1" />
                  ｜太魯閣國家公園{' '}
                  <Link to="/">
                    <RiEditFill className="ms-1 mb-1"></RiEditFill>
                  </Link>
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
              </div>
            </div>
            <div className="date_count mt-1">
              <p>Day 2</p>
              <div className="trip_location mt-3">
                <p className="trip_location_title">
                  <TiLocation className="mb-1 ms-1" />
                  ｜太魯閣風味餐{' '}
                  <Link to="/">
                    <RiEditFill className="ms-1 mb-1"></RiEditFill>
                  </Link>
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
              </div>
              <div className="trip_location mt-3">
                <p className="trip_location_title">
                  <TiLocation className="mb-1 ms-1" />
                  ｜依山午{' '}
                  <Link to="/">
                    <RiEditFill className="ms-1 mb-1"></RiEditFill>
                  </Link>
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
              </div>
            </div>
            <div className="date_count mt-1">
              <p>Day 3</p>
              <div className="trip_location mt-3">
                <p className="trip_location_title">
                  <TiLocation className="mb-1 ms-1" />
                  ｜鹽寮龍蝦海鮮餐廳{' '}
                  <Link to="/">
                    <RiEditFill className="ms-1 mb-1"></RiEditFill>
                  </Link>
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
              </div>
            </div>
          </form>
          <div className="trip_outline col-3">
            <div>
              <p className="post_date_count">Day 1</p>
              <Link to="/">
                <p>｜台北捷運台北火車站</p>
              </Link>
              <Link to="/">
                <p>｜太魯閣國家公園</p>
              </Link>
            </div>
            <div>
              <p className="post_date_count">Day 2</p>
              <Link to="/">
                <p>｜太魯閣</p>
                <p>｜依山午</p>
              </Link>
            </div>
            <div>
              <p className="post_date_count">Day 3</p>
              <Link to="/">
                <p>｜鹽寮龍蝦海鮮餐廳</p>
              </Link>
            </div>
          </div>
        </div>
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
