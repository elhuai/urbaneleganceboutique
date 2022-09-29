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
                <p className="post_date_count">Day {data[0].days}</p>
                {data.map((data, i) => {
                  return (
                    <>
                      <div className="outline_pack">
                        <a
                          className="outline_title"
                          key={data.id}
                          href={`#day${data.days}locate${i}`}
                        >
                          <p>{data.locate_name}</p>
                        </a>
                        <div className="outline_intro">
                          <p>{data.locate_intro}</p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
