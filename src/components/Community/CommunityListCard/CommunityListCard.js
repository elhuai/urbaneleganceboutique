import React from 'react';
import { IoHeartOutline } from 'react-icons/io5';
import { TiLocation } from 'react-icons/ti';
import { BiLike } from 'react-icons/bi';
import noPhoto from '../../../images/noPhoto.png';

import './_communityListCard.scss';

export default function CommunityListCard({ post }) {
  return (
    <>
      {post.map((data) => {
        return (
          <div
            key={data.id}
            className="comList_main_card row card border-primary mb-4 border border-2"
          >
            <div className="row g-0 ">
              <div className="col-md-4 comList_main_card_img--box">
                {data.main_photo.length === 0 ? (
                  <img
                    src={noPhoto}
                    alt="..."
                    className="comList_main_card_img"
                  />
                ) : (
                  <img
                    src={process.env.REACT_APP_BASE_URL + '/' + data.main_photo}
                    alt="..."
                    className="comList_main_card_img"
                  />
                )}

                {/* <img
                  src={data.img}
                  className="comList_main_card_img"
                  alt="..."
                /> */}
              </div>
              <div className="col-md-8 d-flex flex-column justify-content-between">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="comList_main_card_title d-flex justify-content-between">
                    <h5 className="card-title comList_card_title mb-1">
                      {data.title}
                    </h5>
                    <IoHeartOutline />
                  </div>
                  <div>
                    <p className="comList_main_card_placeName_text card-text mb-2">
                      {data.tags}
                    </p>
                  </div>
                  <p className="card-text comList_main_card_content">
                    {data.content}
                  </p>
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
