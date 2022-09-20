import React from 'react';
import './TripOutline.scss';

export default function TripOutline({ post }) {
  return (
    <>
      <div className="trip_outline">
        <div>
          {post.map((data, index) => {
            return (
              <>
                <p className="post_date_count">Day {data.days}</p>

                <a key={data.index} href={`#day${data.days}locate${index}`}>
                  <p>{data.locate_name}</p>
                </a>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
