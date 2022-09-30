import GoogleMapsCyrilke from './googleMapscyrilke';
import { useLoadScript } from '@react-google-maps/api';
// import { Googlemap_key } from '../../utils/config';
import { Googlemap_key } from '../../../utils/config';

import { useLocation } from 'react-router-dom';

const CyrilkeGooglemap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: Googlemap_key,
    libraries: ['places'],
  });
  if (!isLoaded) return <div>Loading...!</div>;
  return <GoogleMapsCyrilke />;
};
export default CyrilkeGooglemap;
