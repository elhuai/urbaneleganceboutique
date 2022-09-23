import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import VoucherQRcodeCard from '../../../components/cards/QRcodeCard';

export const handleQRcodeCard = (url) => {
  const QRcodeCard = withReactContent(Swal);
  QRcodeCard.fire({
    html: <VoucherQRcodeCard url={url} />,
    showConfirmButton: false,
  }).then((result) => {});
};
