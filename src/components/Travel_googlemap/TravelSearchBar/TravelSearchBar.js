import React from 'react';
import mapicon from '../../../images/Travel_input_location.svg';
import { HiChevronLeft } from 'react-icons/hi';
import { HiOutlinePhone } from 'react-icons/hi';
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
import { useEffect } from 'react';

const PlacesAutocomplete = ({ setSelected }) => {
  const pictureOnclick = (e) => {
    setStoredetail(1);
    console.log('storedetail Onclick', storedetail);
  };

  const iconBackClick = (e) => {
    setbackicon(1);
    console.log('backicon', backicon);
  };

  const [mapPhoto, setmapPhoto] = useState([]);
  const [mapName, setmapName] = useState([]);
  const [mapPhone, setMapPhone] = useState([]);
  const [mapopenTime, setMapopenTime] = useState([]);
  const [placeId, setPlaceId] = useState('');
  const [showBox, setShowBox] = useState(0);
  const [storedetail, setStoredetail] = useState(0);
  const [backicon, setbackicon] = useState(0);
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
    setShowBox(placeId);
    const parameter = {
      placeId: pId,
      fields: [
        'name',
        'rating',
        'photo',
        'formatted_phone_number',
        'adr_address',
        'business_status',
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
      <div
        className={
          showBox === placeId
            ? 'travelSearchBar_Wrap  card border-primary '
            : 'd-none'
        }
      >
        <div className="d-flex d-flex justify-content-between">
          <div className="travelSearchBar_Card">
            {/* Getapi storeName */}
            {mapName.length === 0 ? (
              <div>
                <h5 className="travelSearchBar_CardTittle">
                  還沒有行程趕緊搜尋吧!
                </h5>
              </div>
            ) : (
              mapName.map((element, index) => {
                return (
                  <div key={index}>
                    <h5 className="travelSearchBar_CardTittle">{element}</h5>
                  </div>
                );
              })
            )}
          </div>
          <div className="TravelSearchBar_Card ">
            {/* Getapi Image */}
            {mapPhoto.length === 0 ? (
              <div>
                <div
                  onClick={() => pictureOnclick(1)}
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
                    onClick={() => pictureOnclick(1)}
                    className="travelSearchBar_photo"
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
      {/* 店家資訊開始 */}
      <div className={backicon === 1 ? 'searchBAR_IconBack' : ''}>
        <div
          className={storedetail === 1 ? 'travelSearch_storedetail' : 'd-none'}
        >
          <div className="travelSearch_storedetail_card card border-primary  d-flex">
            <div className="d-flex">
              <div className="travelSearchBar_backIcon ">
                <HiChevronLeft onClick={() => iconBackClick(1)} />
              </div>
              {mapName.length === 0 ? (
                <div>
                  <h5 className="travelSearch_storedetail_tittle">
                    台中肯德基一中店
                  </h5>
                </div>
              ) : (
                mapName.map((element, index) => {
                  return (
                    <div key={index}>
                      <h5 className="travelSearch_storedetail_tittle">
                        {element}
                      </h5>
                    </div>
                  );
                })
              )}
            </div>
            {/* Getapi phone */}
            {mapPhone.length === 0 ? (
              <div className="mt-3">
                <p className="travelSearch_storedetail_phone">
                  <HiOutlinePhone className="me-3" />
                  06 298 4722
                </p>
              </div>
            ) : (
              mapPhone.map((element, index) => {
                return (
                  <div className="mt-3" key={index}>
                    <p className="travelSearch_storedetail_phone ">
                      <HiOutlinePhone className="me-3" />
                      {element}
                    </p>
                  </div>
                );
              })
            )}
            <div>
              {mapopenTime.length === 0 ? (
                <div className="travelSearch_storedetail_contain">
                  <p className="travelSearch_storedetail_starTime">
                    星期一: 09:00 – 18:00星期二: 09:00 – 18:00星期三: 09:00 –
                    18:00星期四: 09:00 – 18:00星期五: 09:00 – 18:00星期六: 09:00
                    – 18:00星期日: 09:00 – 18:00
                  </p>
                </div>
              ) : (
                mapopenTime.map((element, index) => {
                  return (
                    <div
                      key={index}
                      className="travelSearch_storedetail_contain"
                    >
                      <p className="travelSearch_storedetail_starTime">
                        {element}
                      </p>
                    </div>
                  );
                })
              )}
            </div>
            <div></div>
          </div>
        </div>
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
