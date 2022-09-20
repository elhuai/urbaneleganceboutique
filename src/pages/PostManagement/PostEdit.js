import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import './PostEdit.scss';
import CoverBackground from '../../images/post_edit_background_banner.png';
import mapPhoto from '../../images/screenshop map_photo.png';
// import { Link } from 'react-router-dom';
// import { BiLike } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import dogIcon from '../../images/travel_dog_paws.svg';
import PostEditor from '../../components/WYSIWYG/PostEditor';
import { AiFillTag } from 'react-icons/ai';
import { MdTitle } from 'react-icons/md';
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import PhotoReviewSwiperDefault from '../../components/WYSIWYG/PhotoViewDefault';
import { ClassicEditor } from 'ckeditor5-custom-build';
// import FileUpload from '../../components/WYSIWYG/FileUpload';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import '../node_modules/reatct-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function PostWYSIWYGEdit() {
  const [selectedFile, setSelectedFile] = useState('');
  const [preview, setPreview] = useState('');
  // === 取得所見即所得欄位資料  ===
  const [getData, setGetData] = useState('');

  // === 清空用 ===
  const [clear, setClear] = useState('');

  // === 其他欄位取得資料用 ===
  const [postData, setPostData] = useState({
    title: '【台北】動物園看貓熊、搭貓纜去貓空泡茶聊天、樟樹步道賞魯冰花海',
    loaction: '台北市',
    tags: '#台北#木柵#動物園#貓空纜車',
    photo: '',
  });

  function handleChange(e) {
    console.log('handleChange', e.target.name, e.target.value);
    let newPostData = { ...postData };
    newPostData[e.target.name] = e.target.value;
    setPostData(newPostData);
  }

  const handleClick = (e) => {
    e.preventDefault();
    setPostData({ title: '', loaction: '', tags: '', photo: '' });
    setGetData('');
  };

  function handleUpload(e) {
    setPostData({ ...postData, photo: e.target.files[0] });
  }

  useEffect(() => {
    if (!selectedFile) {
      setPreview('');
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    console.log(objectUrl);
    setPreview(objectUrl);

    // 當元件unmounted時清除記憶體
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const changeHandler = (e) => {
    const file = e.target.files[0];

    if (file) {
      // setIsFilePicked(true);
      setSelectedFile(file);
      // setImgServerUrl('');
    } else {
      // setIsFilePicked(false);
      setSelectedFile(null);
      // setImgServerUrl('');
    }
  };

  async function handleSubmit(e) {
    // 把預設行為關掉
    e.preventDefault();
    try {
      // 方法2: 要上傳圖片 FormData
      let formData = new FormData();
      formData.append('title', postData.title);
      formData.append('loaction', postData.loaction);
      formData.append('tags', postData.tags);
      formData.append('photo', postData.photo);
      let response = await axios.post(`${API_URL}/auth/register`, formData);
      console.log(response.data);
    } catch (e) {
      console.error('register', e);
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <form className="post_edit_bar d-flex flex-column">
          <div className="d-flex justify-content-between">
            <div className="mt-2 edit_title d-flex align-items-center">
              <img alt="" src={dogIcon} className="dog_paw_icon me-2"></img>
              <p className="mt-3">貼文編輯：一般貼文</p>
            </div>
            <div className="d-flex justify-content-end mt-4 post_edit_button ">
              <button className="btn" onClick={handleClick}>
                清空
              </button>
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
                className="form-control mt-2"
                accept="image/*"
                hidden
                type="file"
                id="photo"
                name="photo"
                onChange={handleUpload}
              />
            </label>
          </div>
          <label className="mt-2">
            <MdTitle className="mb-1 me-1"></MdTitle>貼文標題
          </label>
          <input
            className="form-control mt-2"
            maxlength="50"
            type="text"
            id="title"
            name="title"
            value={postData.title}
            onChange={handleChange}
          />
          <div className="d-flex row">
            <div className="col-6">
              <label className="mt-3">
                <MdLocationOn className="mb-1 me-1"></MdLocationOn>地點
              </label>
              <input
                className="form-control mt-2"
                placeholder="請輸入城市地區"
                type="text"
                id="loaction"
                name="loaction"
                value={postData.loaction}
                onChange={handleChange}
              />
            </div>
            <div className="col-6">
              <label className="mt-3">
                <AiFillTag className="mb-1 me-1"></AiFillTag>標籤
                (請輸入＃區分標籤)
              </label>
              <input
                className="form-control mt-2"
                placeHolder="#台北市"
                type="text"
                id="tags"
                name="tags"
                value={postData.tags}
                onChange={handleChange}
              />
            </div>
          </div>

          <hr></hr>
          <form className="my-2">
            <p>貼文編輯器</p>
            <PostEditor setGetData={setGetData} />
            <h3>{getData}</h3>
            {/* <PostEditor /> */}
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

            <label className="post_photo_upload">
              <input type="file" accept="image/*" multiple hidden />
            </label>
            <PhotoReviewSwiperDefault></PhotoReviewSwiperDefault>
          </form>
          <div className="post_map">
            <p>行程地圖</p>
            <div className="map_photo">
              <img alt="" src={mapPhoto} />
            </div>
          </div>
          <div className="d-flex justify-content-end my-3  post_edit_button ">
            <button className="btn" onClick={handleClick}>
              清空
            </button>
            <button className="btn" onClick={handleSubmit}>
              儲存草稿
            </button>
            <button className="btn" onClick={handleSubmit}>
              發布
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PostWYSIWYGEdit;
