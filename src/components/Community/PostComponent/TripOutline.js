import React from 'react';
import './TripOutline.scss';

export default function TripOutline({ post }) {
  return (
    <>
      {post.length === 0 ? (
        console.log('沒有資料')
       //* 是否做loading 頁面
      ) : (
        <div className="trip_outline">
          <div>
            {post.map((data, index) => {
              {
                /* console.log(data); */
              }
              let name = data.locate_name.split(/[,]/);
              let duration = data.locate_duration.split(/[,]/);
              let coordinate = data.locate_coordinate
                .split(/[#]/)
                .filter((item) => item);
              let context = data.locate_context
                .split(/[###,＃＃＃]/)
                .filter((item) => item);
              let tripOutline = { name, duration, coordinate, context };
              {
                /* console.log('tripOutline', tripOutline); */
              }

              return (
                <>
                  <p className="post_date_count">Day {data.days}</p>
                  {tripOutline.name.map((locate, index) => {
                    return (
                      <>
                        <a href={`#locate${index}`}>
                          <p>{locate}</p>
                        </a>
                      </>
                    );
                  })}
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
