import React from 'react';
import { Link } from 'react-router-dom';
// import AdminCenter from "../../components/AdminCenter/AdminCenter";
import './PersonalHomePage.scss';
function PersonalHomePage() {
  return (
    <>
      {/* <AdminCenter /> */}
      <div className="personal_home_page d-flex flex-column justify-content-center">
        <div className="personal_bar d-flex justify-content-evenly align-items-center">
          <div className="user_photobox">
            <img
              className="admin_user_photo w-100 h-100"
              src="https://picsum.photos/200/300?random8"
              alt=""
            ></img>
          </div>
          <div className="personal_description d-flex flex-column">
            <div className="admin_user_name_bar">
              <p>User Name</p>
            </div>
            <div className="description_text">
              <p>
                lorem lorem lorem lorem lorem
                loremefefdfdfdfdfdfdfdfdfdfdfdfdfdfdfdefef
              </p>
            </div>
          </div>
          <div className="pet_card_description d-flex justify-content-center">
            <div className="pet_card_list d-flex flex-column align-items-center">
              <div className="pet_photobox">
                <img
                  classNaeme="w-100 h-100"
                  alt=""
                  src="https://picsum.photos/200/300?random6"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="my_trip_list">q</div>
        <div className="my_post_list">q</div>
      </div>

      <Link to="/AdminCenterPage">
        {' '}
        testing button navigate to admin center -- community manangment
      </Link>
    </>
  );
}

export default PersonalHomePage;
