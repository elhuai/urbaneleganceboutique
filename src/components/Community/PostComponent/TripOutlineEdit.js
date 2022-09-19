import React from 'react';
import './TripOutline.scss';

export default function TripOutline() {
  return (
    <>
      <div className="trip_outline">
        <div>
          <p className="post_date_count">Day 1</p>

          <a href={`#locate$`}>
            <p>地點</p>
          </a>
        </div>
      </div>
    </>
  );
}
