import Map from '../../components/Travel_googlemap/Travel_MapBody';
import { useLoadScript } from '@react-google-maps/api';
import { Googlemap_key } from '../../utils/config';
import { API_URL } from '../../utils/config';
import axios from 'axios';
import { useEffect, useState } from 'react';

const TravelPlaces = () => {
  const [travelTicket, setTravelTicket] = useState([]); //拿票卷
  const [planning, setPlanning] = useState([]); //拿詳細地點資訊名稱
  const [traveltitle, setTraveltitle] = useState([]); // 拿日期 標題
  useEffect(() => {
    const callTravelTicketApi = async () => {
      try {
        const arrStr = [{ id: '4', text: '飲水機', setState: setTravelTicket }];
        for (let index = 0; index < arrStr.length; index++) {
          const result = await axios.get(
            `${API_URL}/travel/travelTicket/title`
          );
          const data = result.data;
          // console.log(data);
          arrStr[index].setState(data);
        }
      } catch (err) {
        console.error('callTravelTicketApi Error', err);
      }
    };
    callTravelTicketApi();
  }, []);

  useEffect(() => {
    const callPlanningAPI = async () => {
      try {
        const arrStr = [{ id: '4', text: '飲水機', setState: setPlanning }];
        for (let index = 0; index < arrStr.length; index++) {
          const result = await axios.get(`${API_URL}/travelplanning`);
          const data = result.data;
          console.log('callPlanningAPI', data);
          arrStr[index].setState(data);
        }
      } catch (err) {
        console.error('callPlanningAPI Error', err);
      }
    };
    callPlanningAPI();
  }, []);

  useEffect(() => {
    const calltitledateApi = async () => {
      try {
        const arrStr = [{ id: '4', text: '飲水機', setState: setTraveltitle }];
        for (let index = 0; index < arrStr.length; index++) {
          const result = await axios.get(`${API_URL}/travelTitle`);
          const data = result.data;
          // console.log('calltitledateApi', data);
          arrStr[index].setState(data);
        }
      } catch (err) {
        console.error('calltitledateApi Error', err);
      }
    };
    calltitledateApi();
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: Googlemap_key,
    libraries: ['places'],
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <Map
      travelTicket={travelTicket}
      planning={planning}
      traveltitle={traveltitle}
    />
  );
};
export default TravelPlaces;
