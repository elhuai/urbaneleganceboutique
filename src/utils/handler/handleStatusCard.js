import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Navigate } from 'react-router-dom';

export const handleSuccess = (title, redirect, html) => {
  const loginCard = withReactContent(Swal);
  loginCard
    .fire({
      position: 'center-center',
      icon: 'success',
      title: title,
      html: html ? html : false,
      showConfirmButton: redirect ? true : false,
      timer: redirect ? false : 1200,
    })
    .then((data) => {
      if (redirect) {
        return (window.location = '/');
      }
    });
};

export const handleFailed = (title, redirect, html) => {
  const loginCard = withReactContent(Swal);
  loginCard
    .fire({
      position: 'center-center',
      icon: 'error',
      title: title,
      html: html ? html : false,
      showConfirmButton: redirect ? true : false,
      timer: redirect ? false : 1200,
    })
    .then((data) => {
      if (redirect) {
        return (window.location = '/');
      }
    });
};

export const handleWarning = (title, redirect, html) => {
  const loginCard = withReactContent(Swal);
  loginCard
    .fire({
      position: 'center-center',
      icon: 'warning',
      title: title,
      html: html ? html : false,
      showConfirmButton: redirect ? true : false,
      timer: redirect ? false : 1200,
    })
    .then((data) => {
      if (redirect) {
        return (window.location = '/');
      }
    });
};

export const handleInfo = (title, redirect, html) => {
  const loginCard = withReactContent(Swal);
  loginCard
    .fire({
      position: 'center-center',
      icon: 'info',
      title: title,
      html: html ? html : false,
      showConfirmButton: redirect ? true : false,
      timer: redirect ? false : 1200,
    })
    .then((data) => {
      if (redirect) {
        return (window.location = '/');
      }
    });
};
