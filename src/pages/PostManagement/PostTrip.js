import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { API_URL } from '../../utils/config';
import { API_URL } from '../../utils/config';

import './PostTrip.scss';

import PostLocateArticle from '../../components/Community/PostComponent/PostLocateArticle';
import PostStateBarTripPost from '../../components/Community/PostComponent/PostStateBarTripPost';
import PostMap from '../../components/Community/PostComponent/PostMap';
import PostStateBar from '../../components/Community/PostComponent/PostStateBar';
import CommunityGooglemap from '../../components/Community/PostComponent/CommunityGooglemap';
import CommentBar from '../../components/Community/PostComponent/CommentBar';
import RecommandProduct from '../../components/Community/PostComponent/RecommandProduct';
import TripOutline from '../../components/Community/PostComponent/TripOutline';
import { useParams, useLocation } from 'react-router-dom';
function PostTrip() {
  const [postTrip, setPostTrip] = useState([]);

  // 貼文ＩＤ從網址字串抓
  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const postID = urlSearchParams.get('postID');
  console.log('postID', postID);

  // 留言內容
  const [comment, setComment] = useState([
    {
      id: 1,
      user_id: 1,
      comment: '來過好幾次了！還是很喜歡動物園',
      time: '2022/03/28 12:22',
    },
    {
      id: 2,
      user_id: 2,
      comment: '老少咸宜的場所，從幼稚園、青少年、成人到老人都有！童年的回憶',
      time: '2022/04/09 20:56',
    },
    {
      id: 3,
      user_id: 3,
      comment:
        '大人、小孩都愛去的地方，如果天氣涼爽，動物更是不吝嗇的讓你看得夠XD；交通也方便，開車前往、搭乘大眾運輸都很可以。',
      time: '2022/07/13 23:15',
    },
    {
      id: 4,
      user_id: 4,
      comment:
        '園區廣大，生物種類繁多，規劃友善且票價親民，兼具休閒娛樂與教育意義，不論大人小孩皆是值得一推的好去處。',
      time: '2022/08/29 17:15',
    },
  ]);
  // 檢查是否該id有按此貼文讚

  // 整理該貼文共有多少使用者點讚

  // useEffect(() => {
  //   // 按讚統計
  //   const fetchLikes = async () => {
  //     try {
  //       const result = await axios.get(`${API_URL}/community/likesStatic`);
  //       // 取得後端來的資料
  //       console.log('sotierd', result.data);
  //       console.log('有沒有跑這隻api', result);
  //       // setLikes(result.data);
  //       // 存回 useState 狀態
  //     } catch (err) {
  //       console.log('like ', err);
  //     }
  //   };
  //   fetchLikes();
  // }, [postID]);
  useEffect(() => {
    // 單獨取行程明細
    const fetchPostTripEdit = async () => {
      try {
        const result = await axios.get(
          `${API_URL}/community/tripPostDetail?postID=${postID}`
        );
        // 取得後端來的資料
        console.log('是否資料有進來？', postID);
        console.log('是否資料有進來 打ＡＰＩ 貼文內容？', result);
        if (result) {
          let daysFilter = [];
          // 分組按照日期分組

          for (const [index, item] of result.data.entries()) {
            if (daysFilter.length === 0) {
              daysFilter.push([item]);
            } else if (
              daysFilter[daysFilter.length - 1][0].days !== item.days
            ) {
              daysFilter.push([item]);
            } else {
              daysFilter[daysFilter.length - 1].push(item);
            }
          }
          setPostTrip(daysFilter);
        }
      } catch (err) {
        console.log('setPostTripEdit ', err);
      }
      // 存回 useState 狀態
    };
    fetchPostTripEdit();
  }, []);

  console.log('整理好的資料', postTrip);
  return (
    <>
      {postTrip.length === 0 ? (
        '沒有資料' //* 是否做loading 頁面
      ) : (
        <div key={postTrip.id} className="d-flex justify-content-center">
          <div className="post_bar d-flex flex-column">
            <PostStateBarTripPost
              post={postTrip}
              postID={postID}
            ></PostStateBarTripPost>

            <hr></hr>
            <div className="d-flex align-items-start">
              <PostLocateArticle post={postTrip}></PostLocateArticle>
              <TripOutline post={postTrip}></TripOutline>
            </div>
            <CommunityGooglemap />
            <RecommandProduct></RecommandProduct>
            <hr></hr>
            <CommentBar comment={comment}></CommentBar>
          </div>
        </div>
      )}
    </>
  );
}

export default PostTrip;
