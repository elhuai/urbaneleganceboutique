import React from 'react';
import './_socialBubble.scss';

export default function SocialBubble() {
  return (
    <div className="community_bubble w-100">
      {Array(5)
        .fill(0)
        .map((v, index) => {
          return (
            <div
              key={'bubble_color' + index}
              className={`community_bubble_color community_bubble_color${
                index + 1
              }`}
            ></div>
          );
        })}
      {Array(5)
        .fill(0)
        .map((v, index) => {
          return (
            <div
              key={'bubble_photo' + index}
              className={`community_bubble_photo community_bubble_photo${
                index + 1
              }`}
            >
              <div></div>
            </div>
          );
        })}
    </div>
  );
}
