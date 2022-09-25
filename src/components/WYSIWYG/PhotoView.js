import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
//
import './swiper.scss';

// import required modules
import { Navigation } from 'swiper';
import { useEffect } from 'react';

export default function PhotoReviewSwiper({ list }) {
  // console.log('list', list);
  let [newList, setNewList] = useState([]);

  useEffect(() => {
    let newPhotoList = list.locate_photo.split(',').filter((item) => item);
    setNewList(newPhotoList);
  }, [list]);

  // const hoverHandle = (e) => {
  //   console.log('hoveR!!');
  //   console.log('hoverwhate', e.target.value);
  // let creatData = await axios.post(`${API_URL}/community/tripPostNew`, {
  //   tripID,
  //   createTime,
  // });
  // console.log(creatData, '行程貼文新增成功');
  // handleSuccess('貼文匯入成功', '/admin');
  // };
  //
  // console.log('photolist', photoList);
  const ShowSwiper = ({ data }) => {
    return (
      <Swiper
        slidesPerView={5}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="post_mySwiper"
      >
        {data.map((v, index) => {
          return (
            <SwiperSlide key={'swiper' + index}>
              <PhotoProvider maskOpacity={0.8}>
                {data.map((img, imgIndex, i) => {
                  return index === imgIndex ? (
                    <PhotoView key={'img' + imgIndex} src={img}>
                      <img
                        src={img}
                        value={data[imgIndex]}
                        alt=""
                        style={{ objectFit: 'fill' }}
                      />
                    </PhotoView>
                  ) : (
                    <PhotoView
                      src={img}
                      style={{ objectFit: 'fill' }}
                    ></PhotoView>
                  );
                })}
              </PhotoProvider>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  };
  return (
    <>
      <label className="photo_upload d-flex align-items-center justify-content-center mb-2">
        上傳照片
        <input
          type="file"
          accept="images/*"
          hidden
          multiple
          className="form-control"
          onChange={(e) => {
            console.log('file', e.target.files);
            let files = e.target.files;
            let newPic = [];
            for (let i = 0; i < files.length; i++) {
              // console.log('i', files[i]);
              newPic.push(URL.createObjectURL(files[i]));
            }
            // console.log(result);
            let newPhotoList = [...newList, ...newPic];
            console.log('final', newPhotoList);
            setNewList(newPhotoList);
          }}
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

          // // }
          // // console.log('resutl', result);
          // setPhotoList([
          //   ...photoList,
          //   URL.createObjectURL(e.target.files[0]),
          // ]);
        ></input>
      </label>
      {newList.length === 0 ? '' : <ShowSwiper data={newList} />}
    </>
  );
}
