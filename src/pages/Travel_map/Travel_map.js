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
          const result = await axios.get(`${API_URL}/travelTicket/title`);
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
          // if (result) {
          //   let daysFilter = [];
          //   for (const [index, item] of result.data.entries()) {
          //     if (daysFilter.length === 0) {
          //       daysFilter.push([item]);
          //     } else if (
          //       daysFilter[daysFilter.length - 1][0].days !== item.days
          //     ) {
          //       daysFilter.push([item]);
          //     } else {
          //       daysFilter[daysFilter.length - 1].push(item);
          //     }
          //   }
          //   arrStr[index].setState(daysFilter);
          //   console.log('callPlanningAPI', daysFilter);

          //   console.log('daysFilter', daysFilter);
          // }

          const filtered = data.filter((value) => {
            return value.days === 1;
          });
          const filteredA = data.filter((value) => {
            return value.days === 2;
          });
          const filteredB = data.filter((value) => {
            return value.days === 3;
          });
          const filteredC = data.filter((value) => {
            return value.days === 4;
          });
          const filteredD = data.filter((value) => {
            return value.days === 5;
          });
          const filteredE = data.filter((value) => {
            return value.days === 6;
          });
          const filteredF = data.filter((value) => {
            return value.days === 7;
          });
          const Allfiltered = [];
          Allfiltered.push(
            filtered,
            filteredA,
            filteredB,
            filteredC,
            filteredD,
            filteredE,
            filteredF
          );
          console.log('Allfiltered', Allfiltered);
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
