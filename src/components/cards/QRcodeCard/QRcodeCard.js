import React, { useEffect, useRef, useState } from 'react';
import QRcode from 'qrcode';

import './_qrcodeCard.scss';

const QRcodeCard = () => {
  const canvasRef = useRef(null);
  const url =
    'https://4c85-2402-7500-5df-344e-d0ed-8c7d-5271-1f61.jp.ngrok.io/';
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
            <a className="qrcode_card_button d-inline-block" href="連結">
              直接前往核銷頁面
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default QRcodeCard;
