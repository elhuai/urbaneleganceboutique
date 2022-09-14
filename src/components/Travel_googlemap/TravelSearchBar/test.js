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
  const [mapDat, setMapDat] = useState([]);

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
    // console.log('results', results[0].place_id);
    // console.log('getLatLng1', getLatLng(results[0]));
  };

  const submit = (pId) => {
    const parameter = {
      placeId: pId,
      fields: ['name', 'rating', 'photo', 'formatted_phone_number'],
    };
    getDetails(parameter)
      .then((details) => {
        console.log('Details: ', details);
        console.log('formatted_phone_number: ', details.formatted_phone_number); //電話
        console.log('name: ', details.name); //使用者可理解的地點地址

        let photosUrl = [];
        for (const item of details.photos) {
          photosUrl.push(String(item.getUrl()));
        }
        console.log('howard detail', photosUrl);
        setMapDat(photosUrl);
        console.log('mapDat', mapDat);
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
        className="travelmap_SearchBtn"
        onClick={() => {
          submit(placeId);
        }}
      >
        搜尋
      </button>
      <div>
        <p>
          {mapDat.map((vaule) => {
            return <img src={vaule} alt="#/" key={vaule.id} className="aaaa" />;
          })}
        </p>
      </div>
    </Combobox>
  );
};
const TravelSearchBar = ({ setSelected }) => {
  return (
    <>
      <PlacesAutocomplete setSelected={setSelected} />
      <p>lorem</p>
    </>
  );
};

export default TravelSearchBar;
console.log('Details photos: ', details.photos[1].getUrl());
