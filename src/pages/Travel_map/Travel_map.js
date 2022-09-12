import Map from '../../components/Travel_googlemap/Travel_MapBody';
import { useLoadScript } from '@react-google-maps/api';
import { Googlemap_key } from '../../utils/config';
const TravelPlaces = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: Googlemap_key,
    libraries: ['places'],
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};
export default TravelPlaces;
