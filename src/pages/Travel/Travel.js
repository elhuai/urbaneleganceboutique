import React from 'react';
import TravelTab from '../../components/Travel/Travel-Tab';
import TravelgoPlaySwiper from '../../components/Travel/Travel-goPlay-Swiper';
import TravelEveryOneSwiper from '../../components/Travel/Travel-EveryOne-Swiper';
import TravelForm from '../../components/Travel/Travel-Form';
import './_Travelhome.scss';
import { Container } from 'react-bootstrap';

const Travel = () => {
  return (
    <>
      <Container className=" travel_container mt-md-3">
        <TravelTab />
        <TravelForm />
        <h2 className="travel_goPlay_tittle mb-md-5 user-select-none ">
          看看大家都去哪玩 :
        </h2>
        <TravelgoPlaySwiper />
        <h2 className="travel_Swiper_EveryOnetrip_lookH2  user-select-none">
          路克路克大家的行程 :
        </h2>
        <TravelEveryOneSwiper />
      </Container>
    </>
  );
};

export default Travel;
