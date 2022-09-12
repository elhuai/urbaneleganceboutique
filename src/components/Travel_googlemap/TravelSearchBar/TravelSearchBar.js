import React from 'react';
import mapicon from '../../../images/Travel_input_location.svg';
import './travelsearchBar.scss';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
const TravelSearchBar = ({ setSelected }) => {
  return (
    <>
      <PlacesAutocomplete setSelected={setSelected} />
    </>
  );
};

export default TravelSearchBar;

const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();
  console.log('this is data', data);
  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
    console.log('getLatLng1', getLatLng(results[0]));
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
    </Combobox>
  );
};
