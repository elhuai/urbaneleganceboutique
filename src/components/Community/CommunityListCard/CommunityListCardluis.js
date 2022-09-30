import React from 'react';
import { IoHeartOutline } from 'react-icons/io5';
import { TiLocation } from 'react-icons/ti';
import { BiLike } from 'react-icons/bi';

import './_communityListCard.scss';

export default function CommunityListCard({ post }) {
  return (
    <>
      {post.map((data) => {
        console.log('test', data.tags);
        const tags = data.tags.split(/[#,＃]/).filter((item) => item);
        console.log(tags);

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
                  <div className="d-flex">
                    {tags.map((data, index) => {
                      return (
                        <div key={tags.index} className="">
                          <p className="comList_main_card_placeName_text card-text mx-1">
                            {data}
                          </p>
                        </div>
                      );
                    })}
                  </div>

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
