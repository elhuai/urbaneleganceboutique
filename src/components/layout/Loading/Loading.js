import React from 'react';
import './_loading.scss';

const Loading = () => {
  return (
    <>
      <div className="loading_page"></div>
      <div className="loading_drop">
        <div className="loading_loader"></div>
      </div>
    </>
  );
};

export default Loading;
