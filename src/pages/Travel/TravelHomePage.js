import React from 'react';
import { API_URL } from '../../utils/config';
import axios from 'axios';
import { useState, useEffect } from 'react';
import MyTravel from '../../components/Travel/MyTravel/MyTravel';
import TravelGoPlaySwiper from '../../components/Travel/TravelGoPlaySwiper/TravelGoPlaySwiper';
import TravelEveryOneSwiper from '../../components/Travel/TravelEveryOneSwiper/TravelEveryOneSwiper';
import CreateTravel from '../../components/Travel/CreateTravel/CreateTravel';

import './_TravelHomePage.scss';
import { Container } from 'react-bootstrap';
import { useUserInfo } from '../../hooks/useUserInfo';
import Loading from '../../components/layout/Loading';
import { handleWarning } from '../../utils/handler/card/handleStatusCard';

const TravelHomePage = () => {
  const { user } = useUserInfo();
  const [travelCommunity, setTravelCommunity] = useState([]); // 拿日期 標題

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

  if (!user.auth) {
    handleWarning('您沒有登入權限', '/', '平台將為您跳轉回首頁');
  }

  return !user.auth ? (
    <Loading />
  ) : (
    <>
      <div className="BG">
        <div className="TravelHomePage">
          <CreateTravel />
          <div className="mainSection">
            <MyTravel />
            <p className="travelGoPlayTitle">｜看看大家都去哪裡玩 </p>
            <TravelGoPlaySwiper />
            <p className="TravelEveryOneSwiperTitle">｜路克路克大家的行程</p>
            <TravelEveryOneSwiper travelCommunity={travelCommunity} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelHomePage;
