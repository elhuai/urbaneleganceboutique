import React, { useEffect, useRef, useState } from 'react';
import QRcode from 'qrcode';

import './_qrcodeCard.scss';

const QRcodeCard = ({ url }) => {
  const canvasRef = useRef(null);
  const QrcodeComfig = { errorCorrectionLevel: 'Q' };
  useEffect(() => {
    QRcode.toCanvas(canvasRef.current, url, QrcodeComfig, (error) => {
      if (error) console.error(error);
      console.log('success!');
    });
  }, []);
  return (
    <>
      <div className="qrcode_card--global d-flex justify-content-center">
        <div className={`qrcode_card qrcode_card_content`}>
          <h2>核銷條碼</h2>
          <div>
            <canvas className="" ref={canvasRef}></canvas>
          </div>
          <div>
            <a className="qrcode_card_button d-inline-block" href={url}>
              直接前往核銷頁面
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default QRcodeCard;
