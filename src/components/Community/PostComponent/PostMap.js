import React from 'react';
import mapPhoto from '../../../images/screenshop map_photo.png';
import './PostMap.scss';

function PostMap() {
  return (
    <div className="post_map">
      <p>行程地圖</p>
      <div className="map_photo">
        <img alt="" src={mapPhoto} />
      </div>
    </div>
  );
}

export default PostMap;
