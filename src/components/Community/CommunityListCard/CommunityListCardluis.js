import React from 'react';
import { IoHeartOutline } from 'react-icons/io5';
import { TiLocation } from 'react-icons/ti';
import { BiLike } from 'react-icons/bi';

import './_communityListCard.scss';

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

export default function CommunityListCard({ post }) {
  return (
    <>
      {post.map((data) => {
        const tags = data.tags.split('#').filter((item) => item);
        // 移除陣列空值 .filter(item=>item)
        return (
          <div
            key={data.id}
            className="comList_main_card row card border-primary mb-4 border border-2 "
          >
            <div className="row g-0 ">
              <div className="col-md-4">
                <img
                  src={data.main_photo}
                  className="comList_main_card_img"
                  alt="..."
                />
              </div>
              <div className="col-md-8 d-flex flex-column justify-content-between">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="comList_main_card_title d-flex justify-content-between">
                    <h5 className="card-title mb-1">{data.title}</h5>
                    <IoHeartOutline />
                  </div>
                  {tags.map((data,index) => {
                    return (
                      <div>
                        <p className="comList_main_card_placeName_text card-text mb-2">
                          {data}
                        </p>
                      </div>
                    );
                  })}
                  {/* <Tags data={data}></Tags> */}
                  <p className="card-text">{data.content}</p>
                  <div className="comList_main_card_bottom_text card-text d-flex justify-content-between">
                    <p className="comList_main_card_locate_text card-text d-flex align-items-center">
                      <TiLocation />
                      {data.coordinate}
                    </p>
                    <p className="comList_main_card_like_text card-text d-flex align-items-center">
                      {data.likes} <BiLike />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
