import './_CommunityHome.scss';
import React from 'react';
import SearchBar from '../../components/SearchBar/SearchList_search';
import { IoHeartOutline } from 'react-icons/io5';

const CommunityHome = () => {
  return (
    <>
      <SearchBar />
      <div className="comHome_container">
        <div className="comHome_main_card card">
          <img
            src="https://picsum.photos/390/270"
            className="comHome-card-img"
            alt="..."
          />
          <div className="row g-3">
            <div className="col-3">
              <div className="card-body">
                <h5 className="card-title">風箏在陰天擱淺</h5>
                <div className="comHome-card-content d-flex justify-content-between align-items-center">
                  <div className="comHome-card-content-first d-flex justify-content-between align-items-center">
                    <p>2022年13月32日</p>
                    <p> 7799 人氣</p>
                  </div>
                  <IoHeartOutline />
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="card-body">
                <h5 className="card-title">風箏在陰天擱淺</h5>
                <div className="comHome-card-content d-flex justify-content-between align-items-center">
                  <div className="comHome-card-content-first d-flex justify-content-between align-items-center">
                    <p>2022年13月32日</p>
                    <p> 7799 人氣</p>
                  </div>
                  <IoHeartOutline />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityHome;
