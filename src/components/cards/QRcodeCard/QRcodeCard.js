import React, { useEffect, useRef, useState } from 'react';
import QRcode from 'qrcode';
import { handleSuccess } from '../../../utils/handler/card/handleStatusCard';

import './_qrcodeCard.scss';

const QRcodeCard = ({ url, socket }) => {
  const canvasRef = useRef(null);
  const QrcodeComfig = { errorCorrectionLevel: 'Q' };
  useEffect(() => {
    QRcode.toCanvas(canvasRef.current, url, QrcodeComfig, (error) => {
      if (error) console.error(error);
      console.log('success!');
    });
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('exchangeSuccess', (result) =>
        handleSuccess('成功核銷！', '/admin/voucher')
      );
    }
  }, [socket]);

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
