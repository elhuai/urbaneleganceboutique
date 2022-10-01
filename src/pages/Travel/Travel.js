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
  const [travelUser, setTravelUser] = useState([]); // 拿使用者有幾筆行程

  useEffect(() => {
    const calltitledateApi = async () => {
      try {
        const result = await axios.get(`${API_URL}/travelCommunity`, {
          withCredentials: true,
        });
        const data = result.data;
        setTravelCommunity(data);
      } catch (err) {
        console.error('calltitledateApi Error', err);
      }
    };
    calltitledateApi();
  }, []);

  useEffect(() => {
    const fetchUsertrip = async () => {
      try {
        const result = await axios.get(`${API_URL}/travelUserplanning/get`, {
          withCredentials: true,
        });
        const data = result.data;
        setTravelUser(data);
      } catch (err) {
        console.error('callPlanningAPI Error', err);
      }
    };
    fetchUsertrip();
  }, []);
  return (
    <>
      <Container className=" travel_container mt-md-3">
        <TravelTab travelUser={travelUser} />
        <TravelForm />
        <h2 className="travel_goPlay_tittle  mt-5 user-select-none ">
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
