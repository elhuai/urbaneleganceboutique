import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL } from '../../utils/config';
// import AdminCenter from "../../components/AdminCenter/AdminCenter";
import './PersonalHomePage.scss';

//TODO: 最新貼文的文章帶入，最好能夠瀑布流
//TODO: 最新貼文的CARD 間距還要調整
//TODO: RWD 直接列出所有文章


function PersonalHomePage() {
  const fakeData = [
    {
      id: 1,
      title: '大寶遊花蓮 二日遊',
      img: 'https://picsum.photos/id/15/450/270',
      tag: '忘憂亭',
      content:
        '透過OH DOG CAT 購買吉貝島澎湖自由行，超級優惠價格一次搞定。水上活動玩到飽!另可加值星空BBQ了!',
      location: '花蓮',
      like: '1234',
    },
    {
      id: 2,
      title: '嗄嘟遊台中 三日遊',
      img: 'https://picsum.photos/id/20/450/270',
      tag: '忘憂森林',
      content:
        '透過OH DOG CAT 購買吉貝島澎湖自由行，超級優惠價格一次搞定。水上活動玩到飽!另可加值星空BBQ了!',
      location: '花蓮',
      like: '2234',
    },
    {
      id: 3,
      title: '橘子中秋節烤肉趣 一日遊',
      img: 'https://picsum.photos/id/25/450/270',
      tag: '忘憂谷',
      content:
        '透過OH DOG CAT 購買吉貝島澎湖自由行，超級優惠價格一次搞定。水上活動玩到飽!另可加值星空BBQ了!',
      location: '花蓮',
      like: '3234',
    },
    {
      id: 4,
      title: '前端工程師從入門到放棄 一百二十日遊',
      img: 'https://picsum.photos/id/30/450/270',
      tag: '忘憂湖',
      content:
        '透過OH DOG CAT 購買吉貝島澎湖自由行，超級優惠價格一次搞定。水上活動玩到飽!另可加值星空BBQ了!',
      location: '花蓮',
      like: '4234',
    },
  ];



  return (
    <>
      {/* <AdminCenter /> */}
      <div className="personal_home_page d-flex flex-column justify-content-center">
        <div className="personal_bar d-flex justify-content-evenly align-items-center">
          <div className="user_photobox">
            <img
              className="admin_user_photo w-100 h-100"
              src=""
              alt=""
            ></img>
          </div>
          <div className="personal_description d-flex flex-column">
            <div className="admin_user_name_bar">
              <p>User Name</p>
            </div>
            <div className="description_text">
              <p>fdijfidjfidjfi
              </p>
            </div>
          </div>
          <div className="pet_card_description d-flex justify-content-center">
            <div className="pet_card_list d-flex flex-column align-items-center">
              <div className="pet_photobox">
                <img
                  classNaeme="w-100 h-100"
                  alt=""
                  src="https://picsum.photos/200/300?random6"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="my_trip_list">q</div>
        <div className="my_post_list">q</div>
      </div>

      <Link to="/AdminCenterPage">
        {' '}
        testing button navigate to admin center -- community manangment
      </Link>
    </>
  );
}

export default PersonalHomePage;
