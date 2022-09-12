import React from 'react';
import './PostWYSIWYGEdit.scss';
// import coverPhoto from '../../images/test2.jpg';
import mapPhoto from '../../images/screenshop map_photo.png';
// import { Link } from 'react-router-dom';
// import { BiLike } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import dogIcon from '../../images/travel_dog_paws.svg';
import PostEditor from '../../components/WYSIWYG/PostEditor';
import { AiFillTag } from 'react-icons/ai';
import { MdTitle } from 'react-icons/md';
import { MdPhotoSizeSelectActual } from 'react-icons/md';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import '../node_modules/reatct-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const click = function () {
  console.log('click');
};

function PostWYSIWYGEdit() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <form className="post_edit_bar d-flex flex-column">
          <div className="d-flex justify-content-between">
            <div className="mt-2 edit_title d-flex align-items-center">
              <img alt="" src={dogIcon} className="dog_paw_icon me-2"></img>
              <p className="mt-3">貼文編輯:一般貼文</p>
            </div>
            <div className="d-flex justify-content-end mt-4 post_edit_button ">
              <button className="btn">清空</button>
              <button className="btn">儲存草稿</button>
              <button className="btn">發布</button>
            </div>
          </div>
          <div className="post_cover_photo d-flex flex-column justify-content-center align-items-center">
            <div
              className="cover_photo_upload d-flex flex-column justify-content-center align-items-center"
              onClick={click}
            >
              <MdPhotoSizeSelectActual className="cover_photo_upload_icon"></MdPhotoSizeSelectActual>
              <div>封面照片上傳預覽</div>
              <input type="file" className="form-control mt-2" hidden></input>
              {/* <img className="post_cover_photo" alt=""></img> */}
            </div>
          </div>
          <label className="mt-2">
            <MdTitle className="mb-1 me-1"></MdTitle>貼文標題
          </label>
          <input type="text" className="form-control mt-2" maxlength="50" />
          <div className="d-flex row">
            <div className="col-6">
              <label className="mt-3">
                <MdLocationOn className="mb-1 me-1"></MdLocationOn>地點
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

          <hr></hr>
          <div className="my-2">
            <p>貼文編輯器</p>
            <PostEditor></PostEditor>
          </div>
          <div className="post_map">
            <p>行程地圖</p>
            <div className="map_photo">
              <img alt="" src={mapPhoto} />
            </div>
          </div>
          <div className="d-flex justify-content-end my-3  post_edit_button ">
            <button className="btn">清空</button>
            <button className="btn">儲存草稿</button>
            <button className="btn">發布</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PostWYSIWYGEdit;
