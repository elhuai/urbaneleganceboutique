import React from 'react';
import './PostMap.scss';
/////////孝強專用地圖
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { useState, useEffect, useRef } from 'react';
const centers = [
  {
    id: 1,
    days: '1',
    name: '福林公園寵物溜放區',
    position: { lat: 24.980986, lng: 121.3067044 },
    photo: 'https://picsum.photos/200/300?random2',
    user: 'HowFun',
  },
  // {
  //   id: 2,
  //   days: '2',
  //   name: '羅東超讚',
  //   position: { lat: 24.8211324, lng: 121.7642168 },
  //   photo: 'https://picsum.photos/200/300?random1',
  //   user: 'Joman',
  // },
  // {
  //   id: 3,
  //   days: '3',
  //   name: '花東真漂亮',
  //   position: { lat: 24.8111324, lng: 121.7742168 },
  //   photo: 'https://picsum.photos/200/300?random21',
  //   user: '堂老大',
  // },
  // {
  //   id: 4,
  //   days: '4',
  //   name: '花東五日遊',
  //   position: { lat: 24.8011324, lng: 121.6742168 },
  //   photo: 'https://picsum.photos/200/300?random5',
  //   user: '韓市長',
  // },
  // {
  //   id: 5,
  //   days: '5',
  //   name: '礁溪泡溫泉去',
  //   position: { lat: 24.8211324, lng: 121.7942168 },
  //   photo: 'https://picsum.photos/200/300?random22',
  //   user: '席主席',
  // },
];
function GoogleMapsCyrilke() {
  const mapRef = useRef(null);
  return (
    <div className="post_map">
      <p>行程地圖</p>

      <div className="communitymap_body">
        <GoogleMap
          ref={mapRef}
          center={{ lat: 24.980986, lng: 121.3067044 }}
          zoom={14}
          mapContainerClassName="communitymap_container"
        >
          {centers.map(({ id, position, name, days, photo, user }) => {
            return (
              <Marker
                draggable={true}
                animation={'Animation :BOUNCE'}
                // label={days}
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
                      <p className="travelmap_InfoWindow_user">{user}</p>
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

export default GoogleMapsCyrilke;
