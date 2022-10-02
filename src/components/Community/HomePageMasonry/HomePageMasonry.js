import './_HomePageMasonry.scss';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPaw } from 'react-icons/fa';
import { TiLocation } from 'react-icons/ti';
import { BiLike } from 'react-icons/bi';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
// import { TiLocation } from 'react-icons/ti';
import dog1 from '../../../images/Community_HomePage/petKOL/dog1.jpeg';

export default function HomePageMasonry(props) {
  const [allPost, setAllPost] = useState([]);
  const BASE_URL = process.env.REACT_APP_BASE_API_URL;

  useEffect(() => {
    // 抓社群所有資料
    const fetchAllPostData = async () => {
      const result = await axios.get(`${API_URL}/communityHomePage/allPost`);
      // setAllPost(result.data)
      console.log(result.data);
      setAllPost(result.data);
    };
    fetchAllPostData();
  }, []);

  console.log(allPost);

  return (
    <>
      <div className="WebMasonry">
        <div className="masonry">
          {allPost.map((v, i) => {
            return (
              <div key={v.id} className="item">
                <div>
                  <img src={`${BASE_URL}/post/${v.main_photo}`} alt="" />
                </div>
                <section className="">
                  <div className="allPostTitle">
                    <div className="allPostMainTitle">{v.post_title}</div>
                  </div>
                  <p className="d-flex align-items-center allPostLocation">
                    <TiLocation />
                    {v.coordinate}
                  </p>
                  <div className="bottomSection">
                    <div className="userInfo">
                      <div className="userPhoto">
                        <img src={`${BASE_URL}${v.photo}`} alt="" />
                      </div>
                      <p className="userName">{v.social_name}</p>
                    </div>
                    <div>
                      <BiLike />
                      {v.likes}
                    </div>
                  </div>
                </section>
              </div>
            );
          })}

          {/* <div className="item">
          <img src="https://picsum.photos/360/420?random=1" alt="" />
        </div>
        <div className="item">
          <img src="https://picsum.photos/360/460?random=1" alt="" />
        </div>
        <div className="item">
          <img src="https://picsum.photos/360/450?random=1" alt="" />
        </div>
        <div className="item">
          <img src="https://picsum.photos/360/520?random=1" alt="" />
        </div>
        <div className="item">
          <img src="https://picsum.photos/360/460?random=1" alt="" />
        </div>
        <div className="item">
          <img src="https://picsum.photos/360/440?random=1" alt="" />
        </div>
        <div className="item">
          <img src="https://picsum.photos/360/480?random=1" alt="" />
        </div>
        <div className="item">
          <img src="https://picsum.photos/360/460?random=1" alt="" />
        </div>
        <div className="item">
          <img src="https://picsum.photos/360/540?random=1" alt="" />
        </div>
        <div className="item">
          <img src="https://picsum.photos/360/500?random=1" alt="" />
        </div>
        <div className="item">
          <img src="https://picsum.photos/360/460?random=1" alt="" />
        </div>
        <div className="item">
          <img src="https://picsum.photos/360/460?random=1" alt="" />
        </div>
        <div className="item">
          <img src="https://picsum.photos/360/460?random=1" alt="" />
        </div>
        <div className="item">
          <img src="https://picsum.photos/360/490?random=1" alt="" />
        </div>
        <div className="item">
          <img src="https://picsum.photos/360/460?random=1" alt="" />
        </div>
        <div className="item">
          <img src="https://picsum.photos/360/450?random=1" alt="" />
        </div>
        <div className="item">
          <img src="https://picsum.photos/360/460?random=1" alt="" />
        </div>
        <div className="item">
          <img src="https://picsum.photos/360/460?random=1" alt="" />
        </div> */}
        </div>
      </div>
    </>
  );
}
