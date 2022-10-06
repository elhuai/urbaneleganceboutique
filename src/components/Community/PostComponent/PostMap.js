import React from 'react';
import './PostMap.scss';

//////////////////學儒專用地圖
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
const centers = [
  {
    id: 1,
    name: '虎頭山環保公園',
    position: { lat: 25.0120385, lng: 121.3283886 },
    photo: 'https://picsum.photos/200/300?random2',
  },
  {
    id: 2,
    name: '白圍牆地中海景觀咖啡餐廳',
    position: { lat: 24.867738, lng: 121.184262 },
    photo: 'https://picsum.photos/200/300?random1',
  },
  {
    id: 3,
    name: '埔心牧場',
    position: { lat: 24.9259421, lng: 121.1763718 },
    photo: 'https://picsum.photos/200/300?random21',
  },
  {
    id: 4,
    name: '無閒甜點',
    position: { lat: 25.0014151, lng: 121.2969897 },
    photo: 'https://picsum.photos/200/300?random5',
  },
  {
    id: 5,
    name: '千郁農場',
    position: { lat: 25.0697403, lng: 121.3392925 },
    photo: 'https://picsum.photos/200/300?random5',
  },
  {
    id: 6,
    name: '桃園觀光夜市',
    position: { lat: 25.0026972, lng: 121.3060018 },
    photo: 'https://picsum.photos/200/300?random5',
  },
];
function PostMap({ post }) {
  // const [mapLocate, setMapLocate] = useState({});
  // console.log('地圖值', post);
  // const lat = post.latitude
  // useEffect(() => {
  //   const fetchLocate = async () => {
  //     try {
  //       const result = await axios.get(`${API_URL}/community/mapLocate`);
  //       // 取得後端來的資料
  //       console.log('result,data', result.data);
  //       setMapLocate(result.data);
  //     } catch (err) {
  //       console.log('fetchLikeState', err);
  //     }
  //   };
  //   fetchLocate();
  // }, []);

  const mapRef = useRef(null);
  return (
    <div className="post_map">
      <p className="post_map_list_title">行程地圖</p>

      <div className="communitymap_body">
        <GoogleMap
          ref={mapRef}
          center={{ lat: 25.0120385, lng: 121.3283886 }}
          zoom={14}
          mapContainerClassName="communitymap_container"
        >
          {centers.map(({ id, position, name, days, photo, user }) => {
            return (
              <Marker
                draggable={true}
                animation={'Animation :BOUNCE'}
                label={days}
                labelStyle={{ background: '#fff' }}
                key={id}
                position={position}
              >
                <InfoWindow className="" key={id} position={position}>
                  <div className="travelmap_InfoWindow_Countain">
                    <div className="travelmap_InfoWindow_wrap">
                      <img
                        src={photo}
                        alt="#123"
                        className="travelmap_InfoWindow_photo"
                      />
                    </div>
                    <div className="travelmap_InfoWindow_aside">
                      <p className="travelmap_InfoWindow_tittle">{name}</p>
                      {/* <p className="travelmap_InfoWindow_user">{user}</p> */}
                    </div>
                  </div>
                </InfoWindow>
              </Marker>
            );
          })}
        </GoogleMap>
      </div>
    </div>
  );
}

export default PostMap;
