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
      fields: ['name', 'rating', 'photo', 'formatted_phone_number'],
    };
    getDetails(parameter)
      .then((details) => {
        console.log('53 Details: ', details);
        // console.log('formatted_phone_number: ', details.formatted_phone_number); //電話
        // console.log('name: ', details.name); //使用者可理解的地點地址

        setmapName([details.name]);
        console.log('setmapName', setmapName);
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
      {/* TODO: useStae 狀態要存到localstorage */}
      <div className="TravelSearchBar_Wrap ">
        <div>
          {mapPhoto.length === 0 ? (
            <div>
              <h5 className=" "> 圖片</h5>
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
          {mapName.length === 0 ? (
            <div>
              <h5 className=""> 店家名稱</h5>
            </div>
          ) : (
            mapName.map((element, index) => {
              return (
                <div key={index}>
                  <h2>{element}</h2>
                </div>
              );
            })
          )}
        </div>
        <div>
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
