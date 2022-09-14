import { useState, useMemo, useRef, useEffect } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import TravelDate from '../TravelDate';
import TravelmapNavbar from '../Travel_mapNavbar';
// import TravelSearchBar from '../TravelSearchBar';
import './Travel_MapBody.scss';

const centers = [
  {
    id: 1,
    days: '1',
    name: '台北好好玩',
    position: { lat: 25.0341222, lng: 121.5616328 },
    photo: 'https://picsum.photos/200/300?random2',
    user: 'HowFun',
  },
  {
    id: 2,
    days: '2',
    name: '高雄超讚',
    position: { lat: 25.1341222, lng: 121.7616328 },
    photo: 'https://picsum.photos/200/300?random1',
    user: 'Joman',
  },
  {
    id: 3,
    days: '3',
    name: '桃園好漂亮',
    position: { lat: 25.1341222, lng: 121.5616328 },
    photo: 'https://picsum.photos/200/300?random21',
    user: '堂老大',
  },
  {
    id: 4,
    days: '4',
    name: '南投宣布獨立一國',
    position: { lat: 24.1241222, lng: 121.0616328 },
    photo: 'https://picsum.photos/200/300?random5',
    user: '韓市長',
  },
  {
    id: 5,
    days: '5',
    name: '維尼熊超讚的啦',
    position: { lat: 23.4241222, lng: 121.0116328 },
    photo: 'https://picsum.photos/200/300?random22',
    user: '席主席',
  },
];
function Map() {
  // const center = useMemo(() => ({ lat: 23.97565, lng: 120.9738819 }), []);
  const [center, setcenter] = useState({ lat: 23.17565, lng: 120.9738819 });
  const [zoom, setzoom] = useState(8);
  const [selected, setSelected] = useState(null);
  // console.log('selected', selected);
  const mapRef = useRef(null);

  //  TODO: 別刪除
  useEffect(() => {
    if (selected && mapRef.current) {
      // console.log('selected', selected);
      setcenter(selected);
      setzoom(18);
    }
  }, [selected]);
  // useEffect(() => {
  //   if (selected && mapRef.current) {
  //     console.log('selected', selected);
  //     // console.log(mapRef.current.getInstance());
  //     // const googlemaplatlng = mapRef.current.getInstance(); // 取得經緯度
  //     // googlemaplatlng.setZoom(18);
  //     // googlemaplatlng.setCenter(selected);
  //     setcenter(selected);
  //     setzoom(18);
  //   }
  // }, [selected]);

  return (
    <>
      <div className="travelmap_body d-flex">
        <TravelDate />
        <div className="travelmap_mainMap">
          <div>
            <TravelmapNavbar setSelected={setSelected} />
          </div>
          <GoogleMap
            // options={{
            //   disableDefaultUI: true,
            // }} //預設UI隱藏
            ref={mapRef}
            zoom={zoom}
            center={center}
            mapContainerClassName="travelmap_container"
          >
            {selected && <Marker position={selected} />}

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
                        <p className="travelmap_InfoWindow_user">{user}</p>
                      </div>
                    </div>
                  </InfoWindow>
                </Marker>
              );
            })}
            {selected && (
              <Marker draggable={true} position={selected}>
                {/* <Marker draggable={true} position={selected} label={'1'}> */}

                {/* <InfoWindow position={selected}>
                  <p>搜尋成功!</p>
                </InfoWindow> */}
              </Marker>
            )}
          </GoogleMap>
        </div>
      </div>
    </>
  );
}
export default Map;
