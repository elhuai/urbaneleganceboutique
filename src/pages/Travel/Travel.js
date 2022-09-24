import React from 'react';
import { API_URL } from '../../utils/config';
import axios from 'axios';
import { useState, useEffect } from 'react';
import TravelTab from '../../components/Travel/Travel-Tab';
import TravelgoPlaySwiper from '../../components/Travel/Travel-goPlay-Swiper';
import TravelEveryOneSwiper from '../../components/Travel/Travel-EveryOne-Swiper';
import TravelForm from '../../components/Travel/Travel-Form';
import './_Travelhome.scss';
import { Container } from 'react-bootstrap';

const Travel = () => {
  const [travelCommunity, setTravelCommunity] = useState([]); // 拿日期 標題
  useEffect(() => {
    const calltitledateApi = async () => {
      try {
        const arrStr = [
          { id: '4', text: '飲水機', setState: setTravelCommunity },
        ];
        for (let index = 0; index < arrStr.length; index++) {
          const result = await axios.get(`${API_URL}/travelCommunity`);
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
  return (
    <>
      <Container className=" travel_container mt-md-3">
        <TravelTab />
        <TravelForm />
        <h2 className="travel_goPlay_tittle mb-md-5 mt-5 user-select-none ">
          看看大家都去哪玩 :
        </h2>
        <TravelgoPlaySwiper />
        <h2 className="travel_Swiper_EveryOnetrip_lookH2  user-select-none">
          路克路克大家的行程 :
        </h2>
        <TravelEveryOneSwiper travelCommunity={travelCommunity} />
      </Container>
    </>
  );
};

export default Travel;
