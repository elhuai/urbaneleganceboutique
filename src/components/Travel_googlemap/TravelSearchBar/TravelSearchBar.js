import React from 'react';
import mapicon from '../../../images/Travel_input_location.svg';
import './travelsearchBar.scss';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
  getDetails,
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import { useState } from 'react';

const PlacesAutocomplete = ({ setSelected }) => {
  const [mapPhoto, setmapPhoto] = useState([]);
  const [mapName, setmapName] = useState([]);
  const [mapPhone, setMapPhone] = useState([]);
  const [mapopenTime, setMapopenTime] = useState([]);
  const [placeId, setPlaceId] = useState('');
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();
  // console.log('this is data', data);
  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const [resultsAll] = await getGeocode({ address });
    setPlaceId(resultsAll.place_id);

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
    // console.log('results[0]', results[0]);
  };

  const submit = (pId) => {
    const parameter = {
      placeId: pId,
      fields: [
        'name',
        'rating',
        'photo',
        'formatted_phone_number',
        'adr_address',
        'business_status',
        // 'utc_offset_minutes',
        'opening_hours',
      ],
    };
    getDetails(parameter)
      .then((details) => {
        console.log('53 Details: ', details);
        console.log('adr_address', details.adr_address);
        console.log('business_status', details.business_status);
        // console.log('utc_offset_minutes', details.utc_offset_minutes);
        console.log(
          'opening_hours/open_now',
          details.opening_hours.weekday_text
        );
        // console.log('formatted_phone_number: ', details.formatted_phone_number); //電話
        // console.log('name: ', details.name); //使用者可理解的地點地址
        setMapopenTime([details.opening_hours.weekday_text]);
        setmapName([details.name]);
        // console.log('setmapName', setmapName);
        console.log('mapName', mapName);

        setmapPhoto([details.photos[0].getUrl()]);
        console.log('IMAGEurl ', mapPhoto);
        setMapPhone([details.formatted_phone_number]);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  };

  return (
    <Combobox onSelect={handleSelect} className="travelmap_coboboxBody">
      <div className="travel_input_searchBar_sum  d-flex  ">
        <div className="travel_input_searchBar_sum">
          <div className="travelmap_input_icondiv ">
            <img src={mapicon} alt="#/" className="travel_input_mapicon " />
          </div>
          <ComboboxInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={!ready}
            className="travelmap_combobox-input "
            placeholder="請輸入城市、地區"
          />
        </div>
        <ComboboxPopover>
          <ComboboxList>
            {status === 'OK' &&
              data.map(({ place_id, description }) => (
                <ComboboxOption key={place_id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
        <button
          className="travelmap_SearchBtn "
          onClick={() => {
            submit(placeId);
          }}
        >
          搜尋
        </button>
      </div>
      {/* TODO: useStae 狀態要存到localstorage */}
      <div className="TravelSearchBar_Wrap  d-flex flex-wrap  justify-content-center">
        <div className="TravelSearchBar_Card">
          {mapName.length === 0 ? (
            <div>
              <h5 className="TravelSearchBar_CardTittle">
                景點名稱稱稱稱稱稱稱稱稱稱稱
              </h5>
            </div>
          ) : (
            mapName.map((element, index) => {
              return (
                <div key={index}>
                  <h5 className="TravelSearchBar_CardTittle">{element}</h5>
                </div>
              );
            })
          )}
        </div>
        <div className="TravelSearchBar_Card">
          {mapPhoto.length === 0 ? (
            <div>
              <img
                src="https://picsum.photos/200/300?random40"
                alt="#/"
                className="travelSearchBar_photo"
              />
            </div>
          ) : (
            mapPhoto.map((vaule) => {
              return (
                <img
                  src={vaule}
                  alt="#/"
                  key={vaule.id}
                  className="travelSearchBar_photo"
                />
              );
            })
          )}
        </div>
        <div>
          <h5>
            {mapopenTime.map((element, index) => {
              return (
                <div key={index}>
                  <h5 className="">{element}</h5>
                </div>
              );
            })}
            星期一: 08:00 – 23:00 1 : 星期二: 08:00 – 23:00 2 : 星期三: 08:00 –
            23:00 3 : 星期四: 08:00 – 23:00 4 : 星期五: 08:00 – 23:00 5 :
            星期六: 08:00 – 23:00 6 : 星期日: 08:00 – 23:00
          </h5>
        </div>
        {/* <div>
          {mapPhone.length === 0 ? (
            <div>
              <h5 className=""> 電話號碼</h5>
            </div>
          ) : (
            mapPhone.map((element, index) => {
              return (
                <div key={index}>
                  <p>{element}</p>
                </div>
              );
            })
          )}
        </div> */}
      </div>
    </Combobox>
  );
};
const TravelSearchBar = ({ setSelected }) => {
  return (
    <>
      <PlacesAutocomplete setSelected={setSelected} />
    </>
  );
};

export default TravelSearchBar;
