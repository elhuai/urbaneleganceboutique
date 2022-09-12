import { useState, useMemo, useRef, useEffect } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import TravelDate from '../TravelDate';
import TravelmapNavbar from '../Travel_mapNavbar';
// import TravelSearchBar from '../TravelSearchBar';
import './Travel_MapBody.scss';

function Map() {
  const center = useMemo(() => ({ lat: 23.97565, lng: 120.9738819 }), []);
  const [selected, setSelected] = useState(null);
  console.log('selected', selected);
  const mapRef = useRef(null);

  //  TODO: 別刪除
  // useEffect(() => {
  //   if (selected && mapRef.current) {
  //     // console.log(mapRef.current.getInstance());
  //     const googlemaplatlng = mapRef.current.getInstance(); // 取得經緯度
  //     googlemaplatlng.setZoom(18);
  //     googlemaplatlng.setCenter(selected);
  //   }
  // }, [selected]);
  const centers = [
    {
      id: 1,
      days: '1',
      name: '台北好好玩',
      position: { lat: 25.0341222, lng: 121.5616328 },
      photo: 'https://picsum.photos/200/300?random21',
    },
    {
      id: 2,
      days: '2',
      name: '高雄超讚',
      position: { lat: 25.1341222, lng: 121.7616328 },
      photo: 'https://picsum.photos/200/300?random21',
    },
    {
      id: 3,
      days: '3',
      name: '桃園好漂亮',
      position: { lat: 25.1341222, lng: 121.5616328 },
      photo: 'https://picsum.photos/200/300?random21',
    },
    {
      id: 4,
      days: '4',
      name: '南投宣布獨立一國',
      position: { lat: 24.1241222, lng: 121.0616328 },
      photo: 'https://picsum.photos/200/300?random21',
    },
    {
      id: 5,
      days: '5',
      name: '台東好漂亮',
      position: { lat: 25.1541222, lng: 121.8616328 },
      photo: 'https://picsum.photos/200/300?random21',
    },
  ];

  return (
    <>
      <div className="travelmap_body d-flex">
        <div>
          <TravelDate />
        </div>
        <div className="travelmap_mainMap">
          <div>
            <TravelmapNavbar setSelected={setSelected} />
          </div>
          {/* <div className=" ">
            <TravelSearchBar setSelected={setSelected} />
          </div> */}

          <GoogleMap
            options={{
              disableDefaultUI: true,
            }} //預設UI隱藏
            ref={mapRef}
            zoom={8}
            center={center}
            mapContainerClassName="travelmap_container"
          >
            {/* {selected && <Marker position={selected} />} */}
            {centers.map(({ id, position, name, days }) => {
              return (
                <Marker
                  draggable={true}
                  animation={'Animation :BOUNCE'}
                  label={days}
                  labelStyle={{ background: '#fff' }}
                  key={id}
                  position={position}
                  // icon={iconPin}
                  // icon={{
                  //   url: require('../../images/home_tour_train.png'),
                  //   fillColor: '#EB00FF',
                  //   scale: 0.05,
                  // }}
                >
                  <InfoWindow className="" key={id} position={position}>
                    <p className="travelmap_InfoWindow_tittle">{name}</p>
                  </InfoWindow>
                </Marker>
              );
            })}
            {selected && (
              <Marker draggable={true} position={selected} label={'1'}>
                <InfoWindow position={selected}>
                  <p>搜尋成功!</p>
                  {/* TODO: 考慮拿掉InfoWindow 怕太醜 */}
                </InfoWindow>
              </Marker>
            )}
          </GoogleMap>
        </div>
      </div>
    </>
  );
}
export default Map;

// const PlacesAutocomplete = ({ setSelected }) => {
//   const {
//     ready,
//     value,
//     setValue,
//     suggestions: { status, data },
//     clearSuggestions,
//   } = usePlacesAutocomplete();
//   console.log('this is data', data);
//   const handleSelect = async (address) => {
//     setValue(address, false);
//     clearSuggestions();

//     const results = await getGeocode({ address });
//     const { lat, lng } = await getLatLng(results[0]);
//     setSelected({ lat, lng });
//     console.log('getLatLng1', getLatLng(results[0]));
//   };

//   return (
//     <Combobox onSelect={handleSelect} className="travelmap_coboboxBody">
//       <div className="travel_input_searchBar_sum  d-flex  ">
//         <div className="travelmap_input_icondiv ">
//           <img src={mapicon} alt="#/" className="travel_input_mapicon " />
//         </div>
//         <ComboboxInput
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//           disabled={!ready}
//           className="travelmap_combobox-input"
//           placeholder="請輸入城市、地區"
//         />
//       </div>

//       <ComboboxPopover>
//         <ComboboxList>
//           {status === 'OK' &&
//             data.map(({ place_id, description }) => (
//               <ComboboxOption key={place_id} value={description} />
//             ))}
//         </ComboboxList>
//       </ComboboxPopover>
//     </Combobox>
//   );
// };
