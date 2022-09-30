import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import dogIcon from '../../images/travel_dog_paws.svg';
import { getUsercollection } from '../../api/userApi';
// import collections from '../../components/adminPage/collections';
import './_adminCollectionPage.scss';
import axios from 'axios';
import { API_URL } from '../../utils/config';
// = 'http://localhost:3007/api/1.0'

const AdminCollectionPage = () => {
  return (
    <div className="d-flex flex-fill">
      <div className="flex-fill">
        <div className="admin_main_content">
          <h2>我的收藏</h2>
          <hr />
          <div className="collection_content invalid">
            <div className="collection_list d-flex">
              <div className="collection_img obj-fit flex-shrink-0 position-relative">
                <img src={``} alt="alt" />
              </div>
              <div className="collection_info flex-fill d-flex flex-column p-3">
                <div className="collection_info_title fw-bold d-flex">
                  <h5 className="flex-fill">{123123123123}</h5>
                  <div className="collection_btn d-flex justify-content-center align-items-center">
                    <FaHeart />
                  </div>
                </div>
                <div className="collection_info_intro flex-fill">{}</div>
                <div className="collection_info_detail d-flex justify-content-between">
                  <div className="d-flex flex-column justify-content-end">
                    <div className="store d-flex">
                      <span className="flex-shrink-0">店家：</span>
                      <span className="date_range flex-shrink-1">{}</span>
                    </div>
                  </div>
                  <div className="d-flex gap-3 flex-shrink-0">
                    <div className="d-flex align-items-end">
                      <span className="price--og">TWD 1,099</span>
                    </div>
                    <div className="d-flex align-items-end">
                      <span className="price">TWD 999</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCollectionPage;
