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
  const [postTripEdit, setPostTripEdit] = useState([]);

  // 單獨取行程明細
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
  // 設定編輯按鈕
  const [locationNameEdit, setLocationNameEdit] = useState(0);
  const changeEditHandle = () => {
    if (!locationNameEdit) {
      setLocationNameEdit(1);
    } else {
      setLocationNameEdit(0);
    }
  };
  // 新增欄位
  const [addLocate, setAddLocate] = useState();
  // 刪除欄位
  const [deleteLocate, setDeleteLocate] = useState();

  // const [locationNameEdit, setLocationNameEdit] = useState(false);
  // const function= locationNameEditHandle (e)=>{
  // console.log()
  // if (locationNameEdit === false) {
  //   setLocationNameEdit(true);
  //   console.log('setLocate',locationNameEdit)
  // } else {
  //   setLocationNameEdit(false);
  //   console.log('setLocate',locationNameEdit)
  // }

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
              maxLength="50"
              value={postTripEdit[0].title}
              onChange=""
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
                  placeholder="輸入標籤分類貼文類型"
                ></input>
              </div>
            </div>
            <hr></hr>
            {postTripEdit.map((data, index) => {
              let name = data.locate_name.split(/[,]/);
              let duration = data.locate_duration.split(/[,]/);
              let coordinate = data.locate_coordinate
                .split(/[#]/)
                .filter((item) => item);
              let context = data.locate_context
                .split(/[###,＃＃＃]/)
                .filter((item) => item);
              let tripOutline = { name, duration, coordinate, context };

              return (
                <>
                  <div className="d-flex align-items-start justify-content-around">
                    <div className="article_edit">
                      <div className="date_count mt-1">
                        <p>Day {data.days}</p>
                      </div>
                      {tripOutline.name.map((locate, index) => {
                        return (
                          <>
                            <li
                              key={tripOutline[index]}
                              className="trip_location mt-3"
                              id="locate1"
                            >
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="trip_location_title d-flex align-items-center">
                                  {locationNameEdit === 0 ? (
                                    <div className="d-flex align-items-center">
                                      <p>
                                        <TiLocation className="mb-1 me-1 h5"></TiLocation>
                                        <strong className="ms-1 h5">
                                          {locate}
                                        </strong>{' '}
                                      </p>
                                      <p className="ms-1 post_location_duration small ms-2 mx-1">
                                        {tripOutline.duration[index]}
                                      </p>
                                    </div>
                                  ) : (
                                    // TODO: input 樣式太醜要改css
                                    // TODO: 編輯按鈕按一個全部都會啟動
                                    <div className="d-flex">
                                      <TiLocation className="mb-1 me-1 h5"></TiLocation>
                                      <input
                                        className="col-3"
                                        defaultValue={locate}
                                      />
                                      <input
                                        className="col-2"
                                        defaultValue={
                                          tripOutline.duration[index]
                                        }
                                      />
                                    </div>
                                  )}

                                  <RiEditFill
                                    className="ms-1 mb-3"
                                    onClick={changeEditHandle}
                                  ></RiEditFill>
                                </div>

                                <div className="d-flex trip_locate_edit">
                                  <button className="mx-2">
                                    插入空白景點
                                    <IoMdAdd
                                      className="close_icon mb-1"
                                      onClick={addLocate}
                                    ></IoMdAdd>
                                  </button>
                                  <button className="mx-2">
                                    刪除
                                    <MdOutlineClose
                                      className="close_icon mb-1"
                                      onClick={deleteLocate}
                                    ></MdOutlineClose>
                                  </button>
                                </div>
                              </div>
                              <textarea
                                type="textarea"
                                className="form-control"
                                rows="4"
                                maxLength="100"
                                placeholder="為旅途留下回憶"
                              ></textarea>

                              <label className="photo_upload d-flex align-items-center justify-content-center">
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
                          </>
                        );
                      })}
                    </div>
                    {/* <TripOutlineEdit className="" post={postTripEdit}></TripOutlineEdit> */}
                  </div>
                </>
              );
            })}
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
