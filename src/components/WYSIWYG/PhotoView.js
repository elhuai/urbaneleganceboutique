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
// const imgArr = [
//   'https://picsum.photos/200/300?random1',
//   'https://picsum.photos/200/300?random2',
//   'https://picsum.photos/200/300?random3',
//   'https://picsum.photos/200/300?random4',
//   'https://picsum.photos/200/300?random5',
//   'https://picsum.photos/200/300?random6',
//   'https://picsum.photos/200/300?random7',
//   'https://picsum.photos/200/300?random8',
// ];

export default function PhotoReviewSwiper({ list }) {
  // console.log('list', list);
  let [newList, setNewList] = useState([]);

  useEffect(() => {
    let newPhotoList = list.locate_photo.split(',').filter((item) => item);
    setNewList(newPhotoList);
  }, [list]);
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
              <PhotoProvider>
                {data.map((img, imgIndex) => {
                  return index === imgIndex ? (
                    <PhotoView key={'img' + imgIndex} src={img}>
                      <img src={img} alt="" />
                    </PhotoView>
                  ) : (
                    <PhotoView src={img}></PhotoView>
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
      <label className="photo_upload d-flex align-items-center justify-content-center">
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
              console.log('i', files[i]);
              newPic.push(URL.createObjectURL(files[i]));
            }
            // console.log(result);
            console.log('teeeeeet', newList);
            let newPhotoList = [...newList, ...newPic];
            console.log('avc', newPhotoList);
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
      <ShowSwiper data={newList} />
    </>
  );
}
