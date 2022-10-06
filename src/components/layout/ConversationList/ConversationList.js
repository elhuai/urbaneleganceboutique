import React, { useState } from 'react';
import fakeimg from '../../../images/admin_user_default2.png';

import './_conversationList.scss';

const BASE_URL = process.env.REACT_APP_BASE_API_URL;

const ConversationList = ({ list, handleOpenRooms, handleCloseList }) => {
  return list.map((item, index) => {
    return (
      <div
        key={item.store_id}
        className="conversation_list"
        onClick={() => {
          handleOpenRooms(index);
          handleCloseList();
        }}
      >
        <div className="conversation_list_img obj-fit">
          {console.log()}
          <img
            src={item.store_photo ? BASE_URL + item.store_photo : fakeimg}
            alt=""
          />
        </div>
        <div className="conversation_list_name obj-fit">
          <p className="m-0">{item.store_name}</p>
        </div>
      </div>
    );
  });
};

export default ConversationList;
