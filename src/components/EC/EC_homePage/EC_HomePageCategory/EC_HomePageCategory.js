import './_EC_HomePageCategory.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export default function EcHomePageCategory(props) {
  const { ecTypeCategory } = props;
  return (
    <div className="ec_category">
      <h4 className="ec_category_main_title my-2 flex-fixed">熱門類別</h4>
      <div className="ec_category_card d-flex flex-row justify-content-between">
        {ecTypeCategory.map((data, index) => {
          return (
            <Link
              key={'ecHomePageCategory' + index}
              to="/"
              className="ec_category_card_items"
            >
              <div className="d-flex flex-column align-items-center">
                <img src={data.img} alt="" className="ec_category_img" />
                <p className="ec_category_name my-1">{data.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
